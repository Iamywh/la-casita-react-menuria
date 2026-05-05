import { allergenData } from '../data/allergenData'
import { translations } from '../data/translations'

function AllergenGrid({ selectedAllergen, onSelectAllergen, lang, changeLang }) {

  const t = (key) => {
    return translations[lang]?.[key] || key
  }
  return (
    <section className="allergen-section">
      <h2>{t('filter_allergens')}</h2>

      <div className="allergen-grid">
        {allergenData.map((allergen) => (
          <button
            key={allergen.id}
            className={`allergen-card ${
              selectedAllergen === allergen.id ? 'active' : ''
            }`}
            onClick={() =>
              onSelectAllergen(
                selectedAllergen === allergen.id ? null : allergen.id
              )
            }
          >
            <span className="allergen-icon">{allergen.icon}</span>
            <span>{t(allergen.labelKey)}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default AllergenGrid