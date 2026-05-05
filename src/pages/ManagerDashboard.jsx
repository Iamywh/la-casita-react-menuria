import { useEffect, useState } from 'react'
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
  const [openMenuGroup, setOpenMenuGroup] = useState(null)

 const getAllMenuItems = () => {
  return menuData.flatMap((menu) =>
    (menu.categories || []).flatMap((category) => {
      const items =
        category.dynamic === 'cakes'
          ? cakesData
          : category.items || []

const getLocalizedText = (value) => {
  if (!value) return ''

  if (typeof value === 'string') return value

  if (typeof value === 'object') {
    return value.es || value.en || value.it || ''
  }

  return ''
}

      return items.map((item) => ({
        id: item.id,
        name: item.nameKey ? t(item.nameKey) : getLocalizedText(item.name) || item.id,
        category: category.nameKey ? t(category.nameKey) : getLocalizedText(category.name) || category.id,
        parent: menu.nameKey ? t(menu.nameKey) : getLocalizedText(menu.name) || menu.id,
        isCake: category.dynamic === 'cakes'
      }))
    })
  )
}
  const t = (key) => {
  return translations.es?.[key] || key
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
const sortedMenuItems = [...menuItems].sort((a, b) => {
  if (a.isCake && !b.isCake) return -1
  if (!a.isCake && b.isCake) return 1
  return 0
})
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
  }

  const fetchRequests = async () => {
    setLoading(true)

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
const contactClient = (req) => {
  console.log('Reserva seleccionada:', req)

  const selectionsText = Array.isArray(req.brunch_selections) && req.brunch_selections.length > 0
    ? req.brunch_selections
        .map(
          (s, i) =>
            `Persona ${i + 1}: ${getOptionLabel(s.option)} - ${getChoiceLabel(s.choice)}`
        )
        .join('\n')
    : 'No se registraron selecciones de brunch.'

 const message = `Hola ${req.name},

Confirmamos tu reserva de brunch:

Fecha: ${req.request_date}
Hora: ${req.request_time}
Personas: ${req.people}

Selecciones:
${selectionsText}

Gracias,
La Casita`

  const subject = encodeURIComponent('Reserva de brunch confirmada')
  const body = encodeURIComponent(message)

  if (req.contact.includes('@')) {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: req.contact,
    su: 'Reserva de brunch confirmada',
    body: message
  })

  window.open(
    `https://mail.google.com/mail/?${params.toString()}`,
    '_blank'
  )

  return
}

  const cleanPhone = req.contact.replace(/\D/g, '')
  const whatsappMessage = encodeURIComponent(message)
  window.open(`https://wa.me/${cleanPhone}?text=${whatsappMessage}`, '_blank')
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
        <h1>Solicitudes de brunch</h1>
        <button onClick={logout}>Cerrar sesión</button>
      </div>

      {loading && <p>Cargando...</p>}

      <div className="manager-list">
        {requests.map((req) => (
          <div className="manager-card" key={req.id}>
            <h3>{req.name}</h3>

            <p><strong>Contacto:</strong> {req.contact}</p>
            <p><strong>Fecha:</strong> {req.request_date}</p>
            <p><strong>Hora:</strong> {req.request_time}</p>
            <p><strong>Personas:</strong> {req.people}</p>
            <p><strong>Notas:</strong> {req.notes || '—'}</p>
            {req.brunch_selections?.length > 0 && (
  <div className="brunch-selections-box">
    <p><strong>Opciones brunch:</strong></p>

    {req.brunch_selections.map((selection, index) => (
      <p key={index}>
        Persona {index + 1}:{' '}
        {selection.option || '—'} / {selection.choice || '—'}
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
  onClick={async () => {
    const updated = await updateStatus(req.id, 'confirmed')

    if (updated) {
      contactClient(req)
    }
  }}
>
  Confirmar
</button>

                <button
                className="reject-btn"
                onClick={() => updateStatus(req.id, 'rejected')}
                >
                Rechazar
                </button>

                <button
                className="new-btn"
                onClick={() => updateStatus(req.id, 'new')}
                >
                Nueva
                </button>
            </div>
          </div>
        ))}
      </div>

     <div className="manager-section">
  <div className="manager-header">
    <h2>Disponibilidad del menú</h2>
    <button onClick={syncMenuAvailability}>Sincronizar menú</button>
  </div>

  {Object.entries(
    sortedMenuItems.reduce((groups, item) => {
      const key = item.isCake ? '🍰 Tartas del día' : item.parent || 'Sin categoría'

      if (!groups[key]) {
        groups[key] = []
      }

      groups[key].push(item)
      return groups
    }, {})
  ).map(([parentName, items]) => (
    <div className="manager-menu-group" key={parentName}>
      <button
  className="manager-menu-group-title"
  type="button"
  onClick={() =>
    setOpenMenuGroup((prev) => (prev === parentName ? null : parentName))
  }
>
  {parentName} {openMenuGroup === parentName ? '▲' : '▼'}
</button>

      {openMenuGroup === parentName && (
  <div className="manager-list">
    {items.map((item) => (
      <div className="manager-card" key={item.id}>
        <h3>{item.name}</h3>
        <p><strong>Sección:</strong> {item.category}</p>
        

        <button
          onClick={() => toggleAvailability(item.id)}
          className={isItemAvailable(item.id) ? 'available-btn' : 'unavailable-btn'}
        >
          {isItemAvailable(item.id) ? 'Disponible' : 'No disponible'}
        </button>
      </div>
    ))}
  </div>
)}
    </div>
    
  ))}
</div>
    </section>
  )
}

export default ManagerDashboard