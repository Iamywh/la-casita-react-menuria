import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { translations } from '../data/translations'

function Header({ lang, changeLang }) {
  const [visits, setVisits] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const t = (key) => {
    return translations[lang]?.[key] || key
  }

  const flags = {
    es: '🇪🇸',
    en: '🇬🇧',
    it: '🇮🇹',
    fr: '🇫🇷',
    de: '🇩🇪',
    pt: '🇵🇹',
    ru: '🇷🇺',

  }

  useEffect(() => {
    const currentVisits = Number(localStorage.getItem('menuria_visits') || 0) + 1
    localStorage.setItem('menuria_visits', currentVisits)
    setVisits(currentVisits)

    const onScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-left">
        <div className="menu-wrapper">
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰ {t('menu')}
          </button>

          {menuOpen && (
            <div className="menu-dropdown">
              <Link to="/" onClick={() => setMenuOpen(false)}>🏠 {t('home')}</Link>
              <Link to="/locale" onClick={() => setMenuOpen(false)}>🍴 {t('el_local')}</Link>
            </div>
          )}
        </div>
      </div>
            
      <div className="header-center">
        <div className="logo-circle">CASITA</div>
        <strong>La Casita de Nazareno</strong>

        <div className="header-lang">
          <button
            className="header-lang-btn"
            onClick={() => setLangOpen(!langOpen)}
          >
            <img
              src={`/images/flags/${lang}.png`}
              alt={lang}
              className="flag-icon"
            />
            ▼
          </button>

          {langOpen && (
            <div className="header-lang-dropdown">
              <button onClick={() => { changeLang('es'); setLangOpen(false) }}>
                <img src="/images/flags/es.png" className="flag-icon" /> Español
              </button>
              <button onClick={() => { changeLang('en'); setLangOpen(false) }}>
                <img src="/images/flags/en.png" className="flag-icon" /> English
              </button>
              <button onClick={() => { changeLang('it'); setLangOpen(false) }}>
                <img src="/images/flags/it.png" className="flag-icon" /> Italiano
              </button>
              <button onClick={() => { changeLang('fr'); setLangOpen(false) }}>
                <img src="/images/flags/fr.png" className="flag-icon" /> Français
              </button>
              <button onClick={() => { changeLang('de'); setLangOpen(false) }}>
                <img src="/images/flags/de.png" className="flag-icon" /> Deutsch
              </button>
              <button onClick={() => { changeLang('pt'); setLangOpen(false) }}>
                <img src="/images/flags/pt.png" className="flag-icon" /> Português
              </button>
              <button onClick={() => { changeLang('ru'); setLangOpen(false) }}>
                <img src="/images/flags/ru.png" className="flag-icon" /> Русский
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="header-right">
        <span className="visitor-badge">
        <span className="visitor-label">👥 {t('visitors')} </span>
        <span className="visitor-mobile">👥 </span>
        <span>{visits}</span>
      </span>
      </div>
    </header>
  )
}

export default Header