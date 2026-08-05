export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <img src="/nekosinga-icon.png" alt="Neko Singa" className="logo-icon" />
              <span className="logo-text">Neko Singa</span>
            </a>
            <p className="footer-tagline">
              Crypto market intelligence for the signal-driven.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Product</h4>
              <a href="https://app-nekosinga.vercel.app/" target="_blank" rel="noopener noreferrer">Dashboard</a>
              <a href="https://app-nekosinga.vercel.app/" target="_blank" rel="noopener noreferrer">Trending</a>
              <a href="https://app-nekosinga.vercel.app/" target="_blank" rel="noopener noreferrer">Sentiment</a>
              <a href="https://app-nekosinga.vercel.app/" target="_blank" rel="noopener noreferrer">News</a>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Resources</h4>
              <a href="#how-it-works">How It Works</a>
              <a href="https://docs-nekosinga.vercel.app/" target="_blank" rel="noopener noreferrer">Documentation</a>
            </div>

            <div className="footer-column">
              <h4 className="footer-heading">Social</h4>
              <a href="https://x.com/nekosinga" target="_blank" rel="noopener noreferrer">X</a>
              <a href="https://github.com/nekosinga" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Neko Singa</p>
        </div>
      </div>
    </footer>
  )
}
