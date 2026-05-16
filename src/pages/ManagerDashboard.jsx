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
  const [activePanel, setActivePanel] = useState(null)
  const [selectedRequestId, setSelectedRequestId] = useState(null)
  const [openMenuGroup, setOpenMenuGroup] = useState(null)
  const [terraceOpen, setTerraceOpen] = useState(false)
  const [reservations, setReservations] = useState([])

  const t = (key) => translations.es?.[key] || key

  const getLocalizedText = (value) => {
    if (!value) return ''
    if (typeof value === 'string') return value
    if (typeof value === 'object') return value.es || value.en || value.it || ''
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

  const fetchRestaurantStatus = async () => {
  const { data, error } = await supabase
    .from('restaurant_status')
    .select('*')
    .limit(1)
    .maybeSingle()

  if (error) {
    console.error('Restaurant status error:', error)
    return
  }

  setTerraceOpen(data?.terrace_open ?? false)
}

  const toggleTerrace = async () => {
  const nextValue = !terraceOpen

  const { data: currentStatus, error: fetchError } = await supabase
    .from('restaurant_status')
    .select('id')
    .limit(1)
    .maybeSingle()

  if (fetchError || !currentStatus) {
    console.error(fetchError)
    alert('No existe una fila de estado para la azotea')
    return
  }

  const { error } = await supabase
    .from('restaurant_status')
    .update({
      terrace_open: nextValue,
      updated_at: new Date().toISOString()
    })
    .eq('id', currentStatus.id)

  if (error) {
    console.error(error)
    alert('Error actualizando la azotea')
    return
  }

  setTerraceOpen(nextValue)
}

const fetchReservations = async () => {
  const { data, error } = await supabase
    .from('restaurant_reservations')
    .select('*')
    .neq('status', 'archived')
    .order('created_at', { ascending: false })

  if (error) {
    console.error(error)
    alert('Error cargando reservas')
    return
  }

  setReservations(data || [])
}
const updateReservationStatus = async (id, status) => {
  const { error } = await supabase
    .from('restaurant_reservations')
    .update({ status })
    .eq('id', id)

  if (error) {
    console.error(error)
    alert('Error actualizando la reserva')
    return
  }

  fetchReservations()
}
const archiveReservation = async (id) => {
  const confirmed = window.confirm(
    '¿Archivar esta reserva? Hazlo solo si ya está apuntada en el diario.'
  )

  if (!confirmed) return

  const { error } = await supabase
    .from('restaurant_reservations')
    .update({ status: 'archived' })
    .eq('id', id)

  if (error) {
    console.error(error)
    alert('Error archivando la reserva')
    return
  }

  fetchReservations()
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

    alert(`Sincronizados ${missingRows.length} productos`)
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
      const key = item.isCake
        ? '🍰 Tartas, cookies y NY cookies'
        : item.parent || 'Sin categoría'

      if (!groups[key]) groups[key] = []
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
      fetchRestaurantStatus()
      fetchReservations()
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

  const deleteAllBrunchRequests = async () => {
    const confirmed = window.confirm(
      '¿Eliminar TODAS las solicitudes de brunch? Esta acción no se puede deshacer.'
    )

    if (!confirmed) return

    const { error } = await supabase
      .from('brunch_requests')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000')

    if (error) {
      console.error(error)
      alert('Error eliminando solicitudes')
      return
    }

    alert('Solicitudes eliminadas')
    fetchRequests()
  }
    const getStatusLabel = (status) => {
    const labels = {
      new: 'Nueva',
      confirmed: 'Confirmada',
      rejected: 'Rechazada',
      archived: 'Archivada',
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
        <p>
          <strong>Contacto:</strong> {req.contact}
        </p>

        <p>
          <strong>Fecha:</strong> {req.request_date}
        </p>

        <p>
          <strong>Hora:</strong> {req.request_time}
        </p>

        <p>
          <strong>Personas:</strong> {req.people}
        </p>

        <p>
          <strong>Notas:</strong> {req.notes || '—'}
        </p>

        {req.brunch_selections?.length > 0 && (
          <div className="brunch-selections-box">
            <p>
              <strong>Opciones brunch:</strong>
            </p>

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
              onClick={() => archiveReservation(reservation.id)}
            >
              Archivar
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

    const cakeClass = item.isCake
      ? `manager-cake-card cake-type-${item.cakeType || 'cake'}`
      : 'manager-card'

    return (
      <div className={cakeClass} key={item.id}>
        <h3>{item.name}</h3>

        <p>
          <strong>Sección:</strong> {item.category}
        </p>

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

  const renderPanelContent = () => {
    if (activePanel === 'azotea') {
      return (
        <div className="manager-popup-content">
          <h2>🌇 Estado de la azotea</h2>

          <p>
            Activa o cierra la azotea visible para los clientes.
          </p>

          <div className={`manager-status-big ${terraceOpen ? 'open' : 'closed'}`}>
            {terraceOpen ? '🟢 Azotea abierta' : '🔴 Azotea cerrada'}
          </div>

          <button
            type="button"
            className={terraceOpen ? 'reject-btn' : 'confirm-btn'}
            onClick={toggleTerrace}
          >
            {terraceOpen ? 'Cerrar azotea' : 'Abrir azotea'}
          </button>
        </div>
      )
    }

    if (activePanel === 'tartas') {
      const cakeGroups = Object.entries(groupedMenuItems).filter(([name]) =>
        name.includes('Tartas')
      )

      return (
        <div className="manager-popup-content">
          <div className="manager-header manager-subheader">
            <h2>🍰 Tartas y cookies</h2>

            <button type="button" onClick={syncMenuAvailability}>
              Sincronizar
            </button>
          </div>

          {cakeGroups.length === 0 && (
            <p>No hay tartas o cookies cargadas.</p>
          )}

          {cakeGroups.map(([parentName, items]) => (
            <div className="manager-menu-group" key={parentName}>
              <div className="manager-cakes-grid">
                {items.map(renderMenuItemCard)}
              </div>
            </div>
          ))}
        </div>
      )
    }

    if (activePanel === 'menu') {
      const normalGroups = Object.entries(groupedMenuItems).filter(([name]) =>
        !name.includes('Tartas')
      )

      return (
        <div className="manager-popup-content">
          <div className="manager-header manager-subheader">
            <h2>🍽️ Menú general</h2>

            <button type="button" onClick={syncMenuAvailability}>
              Sincronizar
            </button>
          </div>

          {normalGroups.map(([parentName, items]) => (
            <div className="manager-menu-group" key={parentName}>
              <button
                className="manager-menu-group-title manager-menu-group-subtitle"
                type="button"
                onClick={() =>
                  setOpenMenuGroup((prev) =>
                    prev === parentName ? null : parentName
                  )
                }
              >
                {parentName} {openMenuGroup === parentName ? '▲' : '▼'}
              </button>

              {openMenuGroup === parentName && (
                <div className="manager-list">
                  {items.map(renderMenuItemCard)}
                </div>
              )}
            </div>
          ))}
        </div>
      )
    }

    if (activePanel === 'brunch') {
      return (
        <div className="manager-popup-content">
          <div className="manager-header manager-subheader">
            <h2>📅 Brunch requests</h2>

            <div className="manager-actions">
              <button type="button" onClick={fetchRequests}>
                Actualizar
              </button>

              <button
                type="button"
                className="reject-btn"
                onClick={deleteAllBrunchRequests}
              >
                Eliminar solicitudes
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
                    setSelectedRequestId((prev) =>
                      prev === req.id ? null : req.id
                    )
                  }
                >
                  <span>
                    <strong>{req.name}</strong> · {req.request_date} ·{' '}
                    {req.request_time} · {req.people} pax
                  </span>

                  <span className={`status-badge status-${req.status}`}>
                    {getStatusLabel(req.status)}
                  </span>
                </button>

                {selectedRequestId === req.id && renderRequestDetail(req)}
              </div>
            ))}
          </div>
        </div>
      )
    }

    if (activePanel === 'reservations') {
  return (
    <div className="manager-popup-content">
      <div className="manager-header manager-subheader">
        <h2>📖 Reservations</h2>

        <button type="button" onClick={fetchReservations}>
          Actualizar
        </button>
      </div>

      <div className="manager-list">
        {reservations.length === 0 && (
          <p>No hay reservas generales.</p>
        )}

        {reservations.map((reservation) => (
          <div className="manager-card" key={reservation.id}>
            <h3>{reservation.name}</h3>

            <p><strong>Contacto:</strong> {reservation.contact}</p>
            <p><strong>Fecha:</strong> {reservation.reservation_date}</p>
            <p><strong>Hora:</strong> {reservation.reservation_time}</p>
            <p><strong>Personas:</strong> {reservation.people}</p>
            <p><strong>Notas:</strong> {reservation.notes || '—'}</p>

            <p>
              <strong>Estado:</strong>{' '}
              <span className={`status-badge status-${reservation.status}`}>
                {getStatusLabel(reservation.status)}
              </span>
            </p>
            <div className="manager-actions">
  <button
    className="confirm-btn"
    type="button"
    onClick={() => updateReservationStatus(reservation.id, 'confirmed')}
  >
    Confirmar
  </button>

  <button
    className="reject-btn"
    type="button"
    onClick={() => updateReservationStatus(reservation.id, 'rejected')}
  >
    Rechazar
  </button>

  <button
    className="reject-btn"
    type="button"
    onClick={() => deleteReservation(reservation.id)}
  >
    Eliminar
  </button>
</div>
          </div>
        ))}
      </div>
    </div>
  )
}

    return null
  }
const deleteReservation = async (id) => {
  const { error } = await supabase
    .from('restaurant_reservations')
    .delete()
    .eq('id', id)

  if (error) {
    console.error(error)
    return
  }

  fetchReservations()
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

          <button type="submit">
            Entrar
          </button>

          {errorMsg && (
            <p className="manager-error">
              {errorMsg}
            </p>
          )}
        </form>
      </section>
    )
  }

  return (
    <section className="manager-page">
      <div className="manager-header">
        <div>
          <h1>Panel de gestión</h1>
          <p>Control rápido de operaciones del restaurante.</p>
        </div>

        <button type="button" onClick={logout}>
          Cerrar sesión
        </button>
      </div>

      {errorMsg && (
        <p className="manager-error">
          {errorMsg}
        </p>
      )}

      <div className="manager-panel-grid">
        <button
          type="button"
          className="manager-panel-card"
          onClick={() => setActivePanel('azotea')}
        >
          <span>🌇</span>
          <strong>Azotea</strong>
          <small>{terraceOpen ? 'Abierta' : 'Cerrada'}</small>
        </button>

        <button
          type="button"
          className="manager-panel-card"
          onClick={() => setActivePanel('tartas')}
        >
          <span>🍰</span>
          <strong>Tartas</strong>
          <small>Cakes & cookies</small>
        </button>

        <button
          type="button"
          className="manager-panel-card"
          onClick={() => setActivePanel('menu')}
        >
          <span>🍽️</span>
          <strong>Menú</strong>
          <small>Platos y productos</small>
        </button>

        <button
          type="button"
          className="manager-panel-card"
          onClick={() => setActivePanel('brunch')}
        >
          <span>🥐</span>
          <strong>Brunch Res</strong>
          <small>{requests.length} solicitudes</small>
        </button>

        <button
          type="button"
          className="manager-panel-card"
          onClick={() => setActivePanel('reservations')}
        >
          <span>📖</span>
          <strong>Reservations</strong>
          <small>{reservations.length} reservas</small>
        </button>
      </div>

      {activePanel && (
        <div className="manager-popup-overlay">
          <div className="manager-popup">
            <button
              type="button"
              className="manager-popup-close"
              onClick={() => setActivePanel(null)}
            >
              ×
            </button>

            {renderPanelContent()}
          </div>
        </div>
      )}
    </section>
  )
}

export default ManagerDashboard