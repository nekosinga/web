import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <a href="/" className="navbar-logo">
          <img src="/nekosinga-icon.png" alt="Neko Singa" className="logo-icon" />
          <span className="logo-text">Neko Singa</span>
        </a>

        <div className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#product">Product</a>
          <a href="#features">Features</a>
          <a href="#intelligence">Intelligence</a>
          <a href="#how-it-works">How It Works</a>
        </div>

        <div className="navbar-actions">
          <a href="https://app-nekosinga.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary">
            Launch App →
          </a>
        </div>

        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  )
}
