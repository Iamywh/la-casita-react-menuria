import { offersData } from '../data/offersData'
import { translations } from '../data/translations'
  const t = (key) => {
    return translations.es?.[key] || key
  }

function LocalSection({ lang, changeLang }) {
  const t = (key) => {
    return translations[lang]?.[key] || key
  }

  return (
    <main className="locale-page">
      <h1>{t('our_restaurant')}</h1>

      <section className="locale-content">
        <h3>
          {t('restaurant_description_1')}
        </h3>

        <p className="locale-paragraph">
          {t('restaurant_description_2')}
        </p>

        <p className="locale-paragraph">
          {t('restaurant_description_3')}
        </p>

        <p className="locale-paragraph">
          {t('restaurant_description_4')}
        </p>

        <h3 className="welcome-line">{t('restaurant_description_5')}</h3>

        <div className="locale-hours-card">
          <h3>{t('hours_title')}</h3>

          <p><strong>{t('hours_mon_thu')}:</strong> 10:00–23:00</p>
          <p><strong>{t('hours_fri_sat')}:</strong> 10:00–00:00</p>
          <p><strong>{t('hours_sun')}:</strong> 10:00–17:00</p>

          <div className="holiday-note">
            <strong>{t('special_holidays_title')}:</strong>
            <p>{t('closed_days')}</p>
            <p>{t('half_day_days')}</p>
          </div>
        </div>

        <div className="locale-actions">
          <div className="map-box">
            <iframe
              title="Mapa La Casita del Nazareno"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.962845002315!2d-16.2540635!3d28.4681558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cc8226cf2427%3A0xcaabe0c991a864b7!2sLa%20Casita!5e0!3m2!1sit!2ses!4v1692568987654!5m2!1sit!2ses"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            className="google-review-btn"
            href="https://g.page/r/CbdkqJHJ4KvKEBE/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('resena_google')}
          </a>
        </div>
      </section>
      <section className="offers-section">
        <h2>{t('ofertas')}</h2>

 <div className="offers-grid">
  {offersData
    .filter((offer) => offer.active)
    .map((offer) => (
      <div className="offer-card" key={offer.id}>
        <h3>{t(offer.titleKey)}</h3>
        <p>{t(offer.descriptionKey)}</p>
        <strong>{offer.price}</strong>
      </div>
    ))}
</div>
</section>
    </main>
  )
}

export default LocalSection