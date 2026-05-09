import { useEffect, useMemo, useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { menuData } from '../data/menuData'
import { translations } from '../data/translations'
import { cakesData } from '../data/cakesData'

function ManagerDashboard() {
  const [session, setSession] = useState(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [requests, setRequests] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [menuItems, setMenuItems] = useState([])
  const [availability, setAvailability] = useState([])
  const [openSection, setOpenSection] = useState('requests')
  const [selectedRequestId, setSelectedRequestId] = useState(null)
  const [openMenuGroup, setOpenMenuGroup] = useState(null)

  const t = (key) => {
    return translations.es?.[key] || key
  }

  const getLocalizedText = (value) => {
    if (!value) return ''

    if (typeof value === 'string') return value

    if (typeof value === 'object') {
      return value.es || value.en || value.it || ''
    }

    return ''
  }

  const getCakeType = (item) => {
    const rawType = item.type || item.categoryType || item.group || ''
    const text = `${rawType} ${item.id || ''} ${getLocalizedText(item.name)} ${item.nameKey || ''}`.toLowerCase()

    if (text.includes('ny') || text.includes('new york')) return 'ny_cookie'
    if (text.includes('cookie')) return 'cookie'
    return 'cake'
  }

  const getAllMenuItems = () => {
    return menuData.flatMap((menu) =>
      (menu.categories || []).flatMap((category) => {
        const isCakeCategory = category.dynamic === 'cakes'
        const items = isCakeCategory ? cakesData : category.items || []

        return items.map((item) => ({
          id: item.id,
          name: item.nameKey ? t(item.nameKey) : getLocalizedText(item.name) || item.id,
          category: category.nameKey ? t(category.nameKey) : getLocalizedText(category.name) || category.id,
          parent: menu.nameKey ? t(menu.nameKey) : getLocalizedText(menu.name) || menu.id,
          isCake: isCakeCategory,
          cakeType: isCakeCategory ? getCakeType(item) : null
        }))
      })
    )
  }

  const fetchAvailability = async () => {
    const allItems = getAllMenuItems()
    setMenuItems(allItems)

    const { data, error } = await supabase
      .from('menu_availability')
      .select('*')

    if (error) {
      console.error(error)
      return
    }

    setAvailability(data || [])
  }

  const syncMenuAvailability = async () => {
    const allItems = getAllMenuItems()

    const { data: existingRows, error: fetchError } = await supabase
      .from('menu_availability')
      .select('item_id')

    if (fetchError) {
      console.error(fetchError)
      alert('Error leyendo disponibilidad del menú')
      return
    }

    const existingIds = new Set((existingRows || []).map((row) => row.item_id))

    const missingRows = allItems
      .filter((item) => !existingIds.has(item.id))
      .map((item) => ({
        item_id: item.id,
        available: true
      }))

    if (missingRows.length === 0) {
      alert('Menú ya sincronizado')
      fetchAvailability()
      return
    }

    const { error } = await supabase
      .from('menu_availability')
      .insert(missingRows)

    if (error) {
      console.error(error)
      alert('Error sincronizando el menú')
      return
    }

    alert(`Sincronizados ${missingRows.length} platos`)
    fetchAvailability()
  }

  const isItemAvailable = (itemId) => {
    const row = availability.find((entry) => entry.item_id === itemId)
    return row ? row.available : true
  }

  const toggleAvailability = async (itemId) => {
    const current = isItemAvailable(itemId)

    const { error } = await supabase
      .from('menu_availability')
      .upsert(
        {
          item_id: itemId,
          available: !current,
          updated_at: new Date().toISOString()
        },
        { onConflict: 'item_id' }
      )

    if (error) {
      console.error(error)
      alert('Error actualizando disponibilidad')
      return
    }

    fetchAvailability()
  }

  const sortedMenuItems = useMemo(() => {
    return [...menuItems].sort((a, b) => {
      if (a.isCake && !b.isCake) return -1
      if (!a.isCake && b.isCake) return 1
      return a.name.localeCompare(b.name)
    })
  }, [menuItems])

  const groupedMenuItems = useMemo(() => {
    return sortedMenuItems.reduce((groups, item) => {
      const key = item.isCake ? '🍰 Tartas, cookies y NY cookies' : item.parent || 'Sin categoría'

      if (!groups[key]) {
        groups[key] = []
      }

      groups[key].push(item)
      return groups
    }, {})
  }, [sortedMenuItems])

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (session) {
      fetchRequests()
      fetchAvailability()
    }
  }, [session])

  const login = async (e) => {
    e.preventDefault()
    setErrorMsg('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      setErrorMsg('Credenciales incorrectas')
    }
  }

  const logout = async () => {
    await supabase.auth.signOut()
    setRequests([])
    setMenuItems([])
    setAvailability([])
  }

  const fetchRequests = async () => {
    setLoading(true)
    setErrorMsg('')

    const { data, error } = await supabase
      .from('brunch_requests')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error(error)
      setErrorMsg('Error al cargar las solicitudes')
    } else {
      setRequests(data || [])
    }

    setLoading(false)
  }

  const deleteTestRequests = async () => {
    const confirmed = window.confirm(
      '¿Eliminar solicitudes de prueba? Esto borrará reservas cuyo nombre, contacto o notas contengan "test" o "prueba".'
    )

    if (!confirmed) return

    const { error } = await supabase
      .from('brunch_requests')
      .delete()
      .or('name.ilike.%test%,name.ilike.%prueba%,contact.ilike.%test%,notes.ilike.%test%,notes.ilike.%prueba%')

    if (error) {
      console.error(error)
      alert('Error eliminando solicitudes de prueba')
      return
    }

    alert('Solicitudes de prueba eliminadas')
    fetchRequests()
  }

  const getStatusLabel = (status) => {
    const labels = {
      new: 'Nueva',
      confirmed: 'Confirmada',
      rejected: 'Rechazada'
    }

    return labels[status] || status
  }

  const getChoiceLabel = (choice) => {
    const map = {
      op1_a: 'Tosta con queso crema, crema de aguacate y huevo frito',
      op1_b: 'Revuelto de setas',
      op2_a: 'Tosta con rúcula, queso Manchego, huevo frito y aceite de albahaca',
      op2_b: 'Pata asada con pimiento de piquillo y mahonesa de pimentón',
      op3_a: 'Ternera salteada en salsa teriyaki',
      op3_b: 'Pisto de verduras con huevo pochado'
    }

    return map[choice] || choice || 'Sin selección'
  }

  const getOptionLabel = (option) => {
    const map = {
      opcion_1: 'Opción 1',
      opcion_2: 'Opción 2',
      opcion_3: 'Opción 3'
    }

    return map[option] || option || 'Sin opción'
  }

  const updateStatus = async (id, status) => {
    const { error } = await supabase
      .from('brunch_requests')
      .update({ status })
      .eq('id', id)

    if (error) {
      console.error(error)
      alert('Error al actualizar el estado')
      return false
    }

    fetchRequests()
    return true
  }

  const getSelectionsText = (req) => {
    if (!Array.isArray(req.brunch_selections) || req.brunch_selections.length === 0) {
      return 'No se registraron selecciones de brunch.'
    }

    return req.brunch_selections
      .map(
        (selection, index) =>
          `Persona ${index + 1}: ${getOptionLabel(selection.option)} - ${getChoiceLabel(selection.choice)}`
      )
      .join('\n')
  }

  const contactClient = (req) => {
    const selectionsText = getSelectionsText(req)

    const message = `Hola ${req.name},

Confirmamos tu reserva de brunch:

Fecha: ${req.request_date}
Hora: ${req.request_time}
Personas: ${req.people}

Selecciones:
${selectionsText}

Gracias,
La Casita`

    if (req.contact.includes('@')) {
      const params = new URLSearchParams({
        view: 'cm',
        fs: '1',
        to: req.contact,
        su: 'Reserva de brunch confirmada',
        body: message
      })

      window.open(`https://mail.google.com/mail/?${params.toString()}`, '_blank')
      return
    }

    const cleanPhone = req.contact.replace(/\D/g, '')
    const whatsappMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${cleanPhone}?text=${whatsappMessage}`, '_blank')
  }

  const renderRequestDetail = (req) => {
    return (
      <div className="manager-request-detail">
        <p><strong>Contacto:</strong> {req.contact}</p>
        <p><strong>Fecha:</strong> {req.request_date}</p>
        <p><strong>Hora:</strong> {req.request_time}</p>
        <p><strong>Personas:</strong> {req.people}</p>
        <p><strong>Notas:</strong> {req.notes || '—'}</p>

        {req.brunch_selections?.length > 0 && (
          <div className="brunch-selections-box">
            <p><strong>Opciones brunch:</strong></p>

            {req.brunch_selections.map((selection, index) => (
              <p key={`${req.id}-selection-${index}`}>
                Persona {index + 1}: {getOptionLabel(selection.option)} / {getChoiceLabel(selection.choice)}
              </p>
            ))}
          </div>
        )}

        <p>
          <strong>Estado:</strong>{' '}
          <span className={`status-badge status-${req.status}`}>
            {getStatusLabel(req.status)}
          </span>
        </p>

        <div className="manager-actions">
          <button
            className="confirm-btn"
            type="button"
            onClick={async () => {
              const updated = await updateStatus(req.id, 'confirmed')

              if (updated) {
                contactClient(req)
              }
            }}
          >
            Confirmar y contactar
          </button>

          <button
            className="reject-btn"
            type="button"
            onClick={() => updateStatus(req.id, 'rejected')}
          >
            Rechazar
          </button>

          <button
            className="new-btn"
            type="button"
            onClick={() => updateStatus(req.id, 'new')}
          >
            Nueva
          </button>
        </div>
      </div>
    )
  }

  const renderMenuItemCard = (item) => {
    const available = isItemAvailable(item.id)
    const cakeClass = item.isCake ? `manager-cake-card cake-type-${item.cakeType || 'cake'}` : 'manager-card'

    return (
      <div className={cakeClass} key={item.id}>
        <h3>{item.name}</h3>
        <p><strong>Sección:</strong> {item.category}</p>

        {item.isCake && (
          <p className="cake-type-label">
            {item.cakeType === 'cookie' && '🍪 Cookie'}
            {item.cakeType === 'ny_cookie' && '🍪 NY Cookie'}
            {item.cakeType === 'cake' && '🍰 Tarta'}
          </p>
        )}

        <button
          type="button"
          onClick={() => toggleAvailability(item.id)}
          className={available ? 'available-btn' : 'unavailable-btn'}
        >
          {available ? 'Disponible' : 'No disponible'}
        </button>
      </div>
    )
  }

  if (!session) {
    return (
      <section className="manager-page">
        <form className="manager-login" onSubmit={login}>
          <h1>Panel de gestión</h1>

          <input
            type="email"
            placeholder="Correo del encargado"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Entrar</button>

          {errorMsg && <p className="manager-error">{errorMsg}</p>}
        </form>
      </section>
    )
  }

  return (
    <section className="manager-page">
      <div className="manager-header">
        <h1>Panel de gestión</h1>
        <button type="button" onClick={logout}>Cerrar sesión</button>
      </div>

      {errorMsg && <p className="manager-error">{errorMsg}</p>}

      <div className="manager-section">
        <button
          className="manager-menu-group-title"
          type="button"
          onClick={() => setOpenSection(openSection === 'requests' ? null : 'requests')}
        >
          📅 Reservas de brunch {openSection === 'requests' ? '▲' : '▼'}
        </button>

        {openSection === 'requests' && (
          <>
            <div className="manager-header manager-subheader">
              <h2>Solicitudes</h2>
              <div className="manager-actions">
                <button type="button" onClick={fetchRequests}>Actualizar</button>
                <button type="button" className="reject-btn" onClick={deleteTestRequests}>
                  Limpiar pruebas
                </button>
              </div>
            </div>

            {loading && <p>Cargando...</p>}

            <div className="manager-list">
              {requests.length === 0 && !loading && (
                <p>No hay solicitudes de brunch.</p>
              )}

              {requests.map((req) => (
                <div className="manager-card" key={req.id}>
                  <button
                    type="button"
                    className="manager-request-summary"
                    onClick={() =>
                      setSelectedRequestId((prev) => (prev === req.id ? null : req.id))
                    }
                  >
                    <span>
                      <strong>{req.name}</strong> · {req.request_date} · {req.request_time} · {req.people} pax
                    </span>

                    <span className={`status-badge status-${req.status}`}>
                      {getStatusLabel(req.status)}
                    </span>
                  </button>

                  {selectedRequestId === req.id && renderRequestDetail(req)}
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <div className="manager-section">
        <button
          className="manager-menu-group-title"
          type="button"
          onClick={() => setOpenSection(openSection === 'availability' ? null : 'availability')}
        >
          🍽️ Disponibilidad del menú {openSection === 'availability' ? '▲' : '▼'}
        </button>

        {openSection === 'availability' && (
          <>
            <div className="manager-header manager-subheader">
              <h2>Platos y productos</h2>
              <button type="button" onClick={syncMenuAvailability}>Sincronizar menú</button>
            </div>

            {Object.entries(groupedMenuItems).map(([parentName, items]) => (
              <div className="manager-menu-group" key={parentName}>
                <button
                  className="manager-menu-group-title manager-menu-group-subtitle"
                  type="button"
                  onClick={() =>
                    setOpenMenuGroup((prev) => (prev === parentName ? null : parentName))
                  }
                >
                  {parentName} {openMenuGroup === parentName ? '▲' : '▼'}
                </button>

                {openMenuGroup === parentName && (
                  <div className={parentName.includes('Tartas') ? 'manager-cakes-grid' : 'manager-list'}>
                    {items.map(renderMenuItemCard)}
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  )
}

export default ManagerDashboard
