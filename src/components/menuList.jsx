import { useEffect, useState } from 'react'
import { menuData } from '../data/menuData'
import { cakesData } from '../data/cakesData'
import { translations } from '../data/translations'
import { supabase } from '../lib/supabaseClient'

function MenuList({ selectedAllergen, onSelectAllergen, lang }) {
  const [activeParent, setActiveParent] = useState(null)
  const [activeCategory, setActiveCategory] = useState(null)
  const [expandedItem, setExpandedItem] = useState(null)
  const [selectedSize, setSelectedSize] = useState({})
  const [selectedBrunch, setSelectedBrunch] = useState(null)
  const [showBrunchForm, setShowBrunchForm] = useState(false)
  const [brunchForm, setBrunchForm] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    hour: '',
    minute: '',
    people: '',
    notes: '',
    brunchSelections: []
  })
  const [availability, setAvailability] = useState([])

  const t = (key) => {
    return translations[lang]?.[key] || translations.es?.[key] || key
  }

  const getLocalizedText = (value) => {
    if (!value) return ''

    if (typeof value === 'string') return value

    if (typeof value === 'object') {
      return value[lang] || value.es || value.en || ''
    }

    return ''
  }

  useEffect(() => {
    const fetchAvailability = async () => {
      const { data, error } = await supabase
        .from('menu_availability')
        .select('item_id, available')

      if (error) {
        console.error('Availability error:', error)
        return
      }

      setAvailability(data || [])
    }

    fetchAvailability()
  }, [])

  const toggleParent = (id) => {
    setActiveParent((prev) => (prev === id ? null : id))
    setActiveCategory(null)
  }

  const toggleCategory = (id) => {
    setActiveCategory((prev) => (prev === id ? null : id))
  }

  const toggleItem = (id) => {
    setExpandedItem((prev) => (prev === id ? null : id))
  }

  const handleBrunchChange = (e) => {
    const { name, value } = e.target

    setBrunchForm((prev) => {
      if (name === 'people') {
        const peopleNumber = Number(value)

        return {
          ...prev,
          people: value,
          brunchSelections: Array.from({ length: peopleNumber || 0 }, (_, index) => {
            return prev.brunchSelections[index] || {
              option: '',
              choice: ''
            }
          })
        }
      }

      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleBrunchTimeChange = (e) => {
    const { name, value } = e.target

    setBrunchForm((prev) => {
      const updated = {
        ...prev,
        [name]: value
      }

      if (name === 'hour' && value === '12' && updated.minute === '45') {
        updated.minute = '30'
      }

      updated.time =
        updated.hour && updated.minute
          ? `${updated.hour}:${updated.minute}`
          : ''

      return updated
    })
  }

  const handleBrunchSelectionChange = (index, field, value) => {
    setBrunchForm((prev) => {
      const updatedSelections = [...prev.brunchSelections]

      updatedSelections[index] = {
        ...updatedSelections[index],
        [field]: value
      }

      return {
        ...prev,
        brunchSelections: updatedSelections
      }
    })
  }

  const handleBrunchSubmit = async (e) => {
    e.preventDefault()

    if (!brunchForm.time) {
      alert('Selecciona una hora válida para el brunch.')
      return
    }

    const [year, month, day] = brunchForm.date.split('-').map(Number)
    const [hours, minutes] = brunchForm.time.split(':').map(Number)

    const selectedDateTime = new Date(year, month - 1, day, hours, minutes)
    const now = new Date()
    const diffHours = (selectedDateTime - now) / (1000 * 60 * 60)

    const hasIncompleteSelections = brunchForm.brunchSelections.some(
      (selection) => !selection.option || !selection.choice
    )

    if (!brunchForm.brunchSelections.length || hasIncompleteSelections) {
      alert('Selecciona una opción de brunch para cada persona.')
      return
    }

    if (diffHours < 48) {
      alert(t('brunch_48h_error'))
      return
    }

    const { error } = await supabase
      .from('brunch_requests')
      .insert({
        name: brunchForm.name,
        contact: brunchForm.phone,
        request_date: brunchForm.date,
        request_time: brunchForm.time,
        people: Number(brunchForm.people),
        notes: brunchForm.notes,
        brunch_selections: brunchForm.brunchSelections
      })

    if (error) {
      console.error('Supabase error:', error)
      alert(t('brunch_request_error'))
      return
    }

    alert(t('brunch_request_sent'))

    setShowBrunchForm(false)
    setBrunchForm({
      name: '',
      phone: '',
      date: '',
      time: '',
      hour: '',
      minute: '',
      people: '',
      notes: '',
      brunchSelections: []
    })
  }

  const isMenuAvailable = (menu) => {
    if (!menu.schedule) return true

    const now = new Date()
    const [startH, startM] = menu.schedule.start.split(':').map(Number)

    const start = new Date()
    start.setHours(startH, startM, 0, 0)

    const end = new Date()

    if (menu.schedule.end) {
      const [endH, endM] = menu.schedule.end.split(':').map(Number)
      end.setHours(endH, endM, 0, 0)
    } else {
      end.setHours(23, 0, 0, 0)
      end.setMinutes(end.getMinutes() - (menu.schedule.endOffsetMinutes || 0))
    }

    return now >= start && now <= end
  }

  const getCategoryItems = (category) => {
    if (category.dynamic === 'cakes') {
      return cakesData.filter((cake) => cake.available)
    }

    return category.items || []
  }

  const filterByAllergen = (item) => {
    if (!selectedAllergen) return true

    const itemAllergens = item.allergens || []

    if (itemAllergens.includes(selectedAllergen)) {
      return false
    }

    const descriptionText = getLocalizedText(item.description)

    const text = [
      ...(item.ingredients || []).map((ingredient) => t(ingredient)),
      descriptionText,
      getLocalizedText(item.name),
      item.descriptionKey ? t(item.descriptionKey) : ''
    ]
      .join(' ')
      .toLowerCase()

    const allergenMap = {
      pescado: ['atún', 'atun', 'salmón', 'salmon', 'pez', 'ventresca', 'pez mantequilla'],
      crustaceos: ['langostino', 'langostinos', 'gamba', 'gambas', 'camarón', 'camaron', 'camarones'],
      cacahuete: ['cacahuete', 'maní', 'mani'],
      frutos_secos: ['nuez', 'nueces', 'pistacho', 'almendra', 'avellana', 'nutella', 'ferrero'],
      leche: ['queso', 'mozzarella', 'cheddar', 'manchego', 'crema', 'yogur', 'yogurt', 'nata', 'leche', 'chocolate blanco'],
      huevos: ['huevo', 'huevos', 'clara'],
      cereales: ['pan', 'harina', 'galleta', 'bizcocho', 'avena', 'masa']
    }

    const keywords = allergenMap[selectedAllergen] || []
    const containsKeyword = keywords.some((keyword) => text.includes(keyword))

    return !containsKeyword
  }

  const getItemName = (item) => {
    if (item.nameKey) return t(item.nameKey)
    return getLocalizedText(item.name)
  }

  const getItemDescription = (item) => {
    if (item.descriptionKey) return t(item.descriptionKey)
    return getLocalizedText(item.description)
  }

  const getItemIngredients = (item) => {
    return (item.ingredients || []).map((ingredient) => t(ingredient))
  }

  const isItemAvailable = (itemId) => {
    const row = availability.find((entry) => entry.item_id === itemId)
    return row ? row.available : true
  }

  const getChoiceLabel = (choice) => {
    const map = {
      op1_a: t('menu_op1_a_name'),
      op1_b: t('menu_op1_b_name'),
      op2_a: t('menu_op2_a_name'),
      op2_b: t('menu_op2_b_name'),
      op3_a: t('menu_op3_a_name'),
      op3_b: t('menu_op3_b_name')
    }

    return map[choice] || choice || t('brunch_summary_no_choice')
  }

  const getOptionLabel = (option) => {
    const map = {
      opcion_1: 'Opción 1',
      opcion_2: 'Opción 2',
      opcion_3: 'Opción 3'
    }

    return map[option] || option || t('brunch_summary_no_option')
  }

  return (
    <section className="menu-section">
      <h2>{t('menu_comida')}</h2>

      {selectedAllergen && (
        <div className="filter-notice">
          {t('alergia_mostrar')}{' '}
          <strong>{t(`allergen_${selectedAllergen}`)}</strong>

          <p className="allergen-warning">{t('alergia_disclaimer')}</p>

          <button
            className="clear-filter"
            onClick={() => onSelectAllergen(null)}
            type="button"
          >
            ❌
          </button>
        </div>
      )}

      {menuData.filter(isMenuAvailable).map((menu) => (
        <div key={menu.id} className="menu-block">
          <div
            className="parent-menu-button"
            onClick={() => toggleParent(menu.id)}
            role="button"
            tabIndex={0}
          >
            <img
              src={menu.icon || '/images/categories/default.png'}
              alt={menu.nameKey ? t(menu.nameKey) : menu.name || 'Menu'}
              className="menu-icon"
              onError={(e) => {
                e.currentTarget.src = '/images/categories/default.png'
              }}
            />

            <h2>{menu.nameKey ? t(menu.nameKey) : menu.name}</h2>
          </div>

          {activeParent === menu.id && (
            <>
              {menu.id === 'brunch' && (
                <div className="brunch-box">
                  <div className="brunch-disclaimer">
                    ⚠️ {t('brunch_reservation_disclaimer')}
                  </div>

                  <button
                    className="brunch-request-btn"
                    type="button"
                    onClick={() => setShowBrunchForm((prev) => !prev)}
                  >
                    {showBrunchForm ? t('brunch_close_form') : t('brunch_request_button')}
                  </button>

                  {showBrunchForm && (
                    <form className="brunch-form" onSubmit={handleBrunchSubmit}>
                      <input
                        name="name"
                        value={brunchForm.name}
                        onChange={handleBrunchChange}
                        placeholder={t('brunch_form_name')}
                        required
                      />

                      <input
                        name="phone"
                        value={brunchForm.phone}
                        onChange={handleBrunchChange}
                        placeholder={t('brunch_form_phone')}
                        required
                      />

                      <input
                        name="date"
                        type="date"
                        value={brunchForm.date}
                        onChange={handleBrunchChange}
                        required
                      />

                      <div className="brunch-time-row">
                        <select
                          name="hour"
                          value={brunchForm.hour}
                          onChange={handleBrunchTimeChange}
                          required
                        >
                          <option value="">Hora</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>

                        <select
                          name="minute"
                          value={brunchForm.minute}
                          onChange={handleBrunchTimeChange}
                          required
                        >
                          <option value="">Min</option>
                          <option value="00">00</option>
                          <option value="15">15</option>
                          <option value="30">30</option>

                          {brunchForm.hour !== '12' && (
                            <option value="45">45</option>
                          )}
                        </select>
                      </div>

                      <input
                        name="people"
                        type="number"
                        min="1"
                        value={brunchForm.people}
                        onChange={handleBrunchChange}
                        placeholder={t('brunch_form_people')}
                        required
                      />

                      {brunchForm.brunchSelections.map((selection, index) => (
                        <div className="brunch-person-choice" key={index}>
                          <h4>Persona {index + 1}</h4>

                          <select
                            value={selection.option}
                            onChange={(e) =>
                              handleBrunchSelectionChange(index, 'option', e.target.value)
                            }
                            required
                          >
                            <option value="">Selecciona opción</option>
                            <option value="opcion_1">Opción 1</option>
                            <option value="opcion_2">Opción 2</option>
                            <option value="opcion_3">Opción 3</option>
                          </select>

                          <select
                            value={selection.choice}
                            onChange={(e) =>
                              handleBrunchSelectionChange(index, 'choice', e.target.value)
                            }
                            required
                          >
                            <option value="">Selecciona plato</option>

                            {selection.option === 'opcion_1' && (
                              <>
                                <option value="op1_a">{t('menu_op1_a_name')}</option>
                                <option value="op1_b">{t('menu_op1_b_name')}</option>
                              </>
                            )}

                            {selection.option === 'opcion_2' && (
                              <>
                                <option value="op2_a">{t('menu_op2_a_name')}</option>
                                <option value="op2_b">{t('menu_op2_b_name')}</option>
                              </>
                            )}

                            {selection.option === 'opcion_3' && (
                              <>
                                <option value="op3_a">{t('menu_op3_a_name')}</option>
                                <option value="op3_b">{t('menu_op3_b_name')}</option>
                              </>
                            )}
                          </select>
                        </div>
                      ))}

                      <textarea
                        name="notes"
                        value={brunchForm.notes}
                        onChange={handleBrunchChange}
                        placeholder={t('brunch_form_notes')}
                      />

                      {brunchForm.brunchSelections.length > 0 && (
                        <div className="brunch-summary-box">
                          <h4>Resumen</h4>

                          {brunchForm.brunchSelections.map((selection, index) => (
                            <p key={index}>
                              Persona {index + 1}:{' '}
                              {getOptionLabel(selection.option)} / {getChoiceLabel(selection.choice)}
                            </p>
                          ))}
                        </div>
                      )}

                      <button type="submit" className="brunch-submit-btn">
                        {t('brunch_form_submit')}
                      </button>
                    </form>
                  )}
                </div>
              )}

              {menu.categories.map((category) => (
                <div className="menu-category" key={category.id}>
                  <div
                    className="menu-header"
                    onClick={() => toggleCategory(category.id)}
                    role="button"
                    tabIndex={0}
                  >
                    <h3>{category.nameKey ? t(category.nameKey) : category.name}</h3>
                  </div>

                  {activeCategory === category.id && (
                    <div className="menu-items">
                      {category.type === 'brunch-options' ? (
                        <div className="brunch-options">
                          {category.options.map((option) => (
                            <div className="brunch-option-card" key={option.id}>
                              <h4>
                                {t(option.nameKey)} — {option.price}
                              </h4>

                              {option.choices.map((choice) => (
                                <button
                                  key={choice.id}
                                  className={`brunch-choice ${
                                    selectedBrunch === choice.id ? 'active-choice' : ''
                                  }`}
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    setSelectedBrunch((prev) =>
                                      prev === choice.id ? null : choice.id
                                    )
                                  }}
                                  type="button"
                                >
                                  {t(choice.nameKey)}
                                </button>
                              ))}
                            </div>
                          ))}

                          {selectedBrunch && (
                            <div className="brunch-summary">
                              {t('brunch_selected_summary') !== 'brunch_selected_summary'
                                ? t('brunch_selected_summary')
                                : 'Has seleccionado una opción del brunch'}
                            </div>
                          )}
                        </div>
                      ) : (
                        getCategoryItems(category)
                          .filter((item) => isItemAvailable(item.id))
                          .filter(filterByAllergen)
                          .map((item) => (
                            <div
                              className={`dish-card ${
                                expandedItem === item.id ? 'expanded' : ''
                              }`}
                              key={item.id}
                              onClick={(e) => {
                                e.stopPropagation()
                                toggleItem(item.id)
                              }}
                              role="button"
                              tabIndex={0}
                            >
                              <div className="dish-card-top">
                                <div>
                                  <strong>{getItemName(item)}</strong>

                                  <div className="dish-badges">
                                    {item.badgeKeys?.map((badgeKey) => (
                                      <span key={badgeKey}>{t(badgeKey)}</span>
                                    ))}

                                    {!item.badgeKeys &&
                                      item.badges?.map((badge) => (
                                        <span key={badge}>{t(badge)}</span>
                                      ))}

                                    {item.adaptable && <span>{t('adaptable')}</span>}

                                    {item.id?.startsWith('tarta-') ||
                                    item.id?.startsWith('pie-') ||
                                    item.id?.startsWith('bizcochon-') ||
                                    item.id?.includes('cookie') ? (
                                      <span>🍰 Fresh</span>
                                    ) : null}
                                  </div>
                                </div>

                                {item.sizes ? (
                                  <div className="dish-sizes">
                                    {item.sizes.map((size) => (
                                      <button
                                        key={size.name}
                                        className={`dish-size ${
                                          selectedSize[item.id] === size.name
                                            ? 'active-size'
                                            : ''
                                        }`}
                                        onClick={(e) => {
                                          e.stopPropagation()
                                          setSelectedSize((prev) => ({
                                            ...prev,
                                            [item.id]: size.name
                                          }))
                                        }}
                                        type="button"
                                      >
                                        {size.name} — {size.price}
                                      </button>
                                    ))}
                                  </div>
                                ) : (
                                  <strong className="dish-price">{item.price}</strong>
                                )}
                              </div>

                              {expandedItem === item.id && (
                                <div className="dish-details">
                                  {item.image && (
                                    <img
                                      className="dish-image"
                                      src={item.image}
                                      alt={getItemName(item)}
                                    />
                                  )}

                                  {getItemDescription(item) && (
                                    <p>{getItemDescription(item)}</p>
                                  )}

                                  {getItemIngredients(item).length > 0 && (
                                    <p>
                                      <strong>{t('menu_ingredientes_tittle')}:</strong>{' '}
                                      {getItemIngredients(item).join(', ')}
                                    </p>
                                  )}

                                  <p>
                                    <strong>{t('menu_alergenos_tittle')}:</strong>{' '}
                                    {item.allergens?.length
                                      ? item.allergens
                                          .map((allergen) => t(`allergen_${allergen}`))
                                          .join(', ')
                                      : t('no_allergens_declared')}
                                  </p>

                                  {item.notes && (
                                    <p className="dish-note">{t(item.notes)}</p>
                                  )}
                                </div>
                              )}
                            </div>
                          ))
                      )}
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      ))}
    </section>
  )
}

export default MenuList
