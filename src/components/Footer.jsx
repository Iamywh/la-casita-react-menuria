import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      {/* La Casita */}
      <section className="footer-band footer-casita">
        <div className="footer-brand">
          <img
            src="/images/icons/logo.png"
            alt="La Casita logo"
            className="footer-logo"
          />
          <p className="footer-title">La Casita del Nazareno</p>
        </div>

        <div className="footer-social-center">
          <p className="footer-small-title">Síguenos en las redes</p>
          <a
            href="https://www.instagram.com/lacasitasc_/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            📸 Instagram
          </a>
        </div>
      </section>

      {/* Menuria */}
      <section className="footer-band footer-menuria">
        <div className="footer-brand">
          <img
            src="/images/icons/logo.jpg"
            alt="Menuria logo"
            className="footer-logo"
          />
          <div>
            <p className="footer-powered">Powered by</p>
            <p className="footer-title">Menuria Solutions</p>
          </div>
        </div>

        <div className="footer-social-center">
          <a
            href="https://www.instagram.com/menuriasolutionssl/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            📸 Instagram
          </a>

          <a href="mailto:menuriasolutions@gmail.com" className="footer-link">
            ✉️ menuriasolutions@gmail.com
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer