function Footer() {
  return (
    <footer className="site-footer">
      <section className="footer-band footer-casita">
        <p className="footer-title">La Casita del Nazareno</p>

        <a
          href="https://www.instagram.com/lacasitasc_/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          📸 Síguenos en Instagram
        </a>
      </section>

      <section className="footer-band footer-menuria">
        <div className="footer-menuria-brand">
          <img
            src="/assets/img/logo.jpg"
            alt="Menuria logo"
            className="footer-logo"
          />

          <div>
            <p className="footer-powered">Powered by</p>
            <p className="footer-title">Menuria</p>
          </div>
        </div>

        <div className="footer-links">
          <a href="https://menuria-solutions.netlify.app/" target="_blank" rel="noopener noreferrer">
            🌐 Website
          </a>

          <a href="https://www.instagram.com/menuriasolutionssl/" target="_blank" rel="noopener noreferrer">
            📸 Instagram
          </a>

          <a href="mailto:menuriasolutions@gmail.com">
            ✉️ menuriasolutions@gmail.com
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer