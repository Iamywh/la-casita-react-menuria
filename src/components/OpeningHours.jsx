import { useEffect, useState } from 'react'
import { translations } from '../data/translations'
import { supabase } from '../lib/supabaseClient'

function OpeningHours({ lang }) {
  const [regularHours, setRegularHours] = useState([])
  const [specialDays, setSpecialDays] = useState([])
  const [loading, setLoading] = useState(true)

  const t = (key) => {
    return translations[lang]?.[key] || translations.es?.[key] || key
  }

  const timeToMinutes = (time) => {
    if (!time) return null

    if (time === '24:00') return 24 * 60

    const [hours, minutes] = time.split(':').map(Number)
    return hours * 60 + minutes
  }

  const getTodayString = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  useEffect(() => {
    const fetchOpeningData = async () => {
      setLoading(true)

      const { data: hoursData, error: hoursError } = await supabase
        .from('opening_hours')
        .select('*')
        .order('day_of_week', { ascending: true })

      const { data: specialData, error: specialError } = await supabase
        .from('special_opening_days')
        .select('*')

      if (hoursError) {
        console.error('Opening hours error:', hoursError)
      }

      if (specialError) {
        console.error('Special days error:', specialError)
      }

      setRegularHours(hoursData || [])
      setSpecialDays(specialData || [])
      setLoading(false)
    }

    fetchOpeningData()
  }, [])

  const now = new Date()
  const dayOfWeek = now.getDay()
  const todayString = getTodayString()
  const currentMinutes = now.getHours() * 60 + now.getMinutes()

  const todaySpecialDay = specialDays.find(
    (day) => day.special_date === todayString
  )

  const todayRegularHours = regularHours.find(
    (day) => day.day_of_week === dayOfWeek
  )

  const todayHours = todaySpecialDay || todayRegularHours

  let isOpen = false
  let todayLabel = ''

  if (todayHours) {
    if (todayHours.is_closed) {
      isOpen = false
      todayLabel = t('cerrado')
    } else {
      const openMinutes = timeToMinutes(todayHours.open_time)
      const closeMinutes = timeToMinutes(todayHours.close_time)

      isOpen =
        openMinutes !== null &&
        closeMinutes !== null &&
        currentMinutes >= openMinutes &&
        currentMinutes < closeMinutes

      todayLabel = `${todayHours.open_time}–${todayHours.close_time}`
    }
  }

  const dayLabels = {
    1: t('hours_monday') || 'Lunes',
    2: t('hours_tuesday') || 'Martes',
    3: t('hours_wednesday') || 'Miércoles',
    4: t('hours_thursday') || 'Jueves',
    5: t('hours_friday') || 'Viernes',
    6: t('hours_saturday') || 'Sábado',
    0: t('hours_sunday') || 'Domingo'
  }

  if (loading) {
    return (
      <section className="hours-card">
        <div className="hours-header">
          <span className="hours-icon">🕒</span>
          <strong>{t('hours_title')}</strong>
        </div>

        <p>{t('loading') || 'Cargando...'}</p>
      </section>
    )
  }

  return (
    <section className="hours-card">
      <div className="hours-header">
        <span className="hours-icon">🕒</span>
        <strong>{t('hours_title')}</strong>
      </div>

      <div className="hours-content">
        {regularHours.map((day) => (
          <p key={day.day_of_week}>
            <strong>{dayLabels[day.day_of_week]}:</strong>{' '}
            {day.is_closed
              ? t('cerrado')
              : `${day.open_time}–${day.close_time}`}
          </p>
        ))}
      </div>

      <div className={`hours-status ${isOpen ? 'open' : 'closed'}`}>
        {isOpen ? `${t('abierto')}` : `${t('cerrado')}`}
      </div>

      <p className="hours-note">
        <strong>{t('today')}:</strong>{' '}
        {todayHours?.is_closed ? t('cerrado') : todayLabel}
      </p>

      {todaySpecialDay?.note && (
        <p className="hours-special-note">
          {todaySpecialDay.note}
        </p>
      )}
    </section>
  )
}

export default OpeningHours