import { translations } from '../data/translations'

function Hero({ lang }) {
  const t = (key) => {
    return translations[lang]?.[key] || key
  }

  return (
    <section className="hero">
      <h1>{t('bienvenido')}</h1>
      <p>
        {t('bienvenido_sub')}
      </p>
    </section>
  )
}

export default Hero