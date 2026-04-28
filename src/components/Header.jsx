import { Link } from "react-router-dom"
import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="header">
        <h1>Álefe | Saxofonista</h1>

        {/* MENU DESKTOP */}
        <nav className="nav-desktop">
          <Link to="/">Home</Link>
          <Link to="/about">Sobre</Link>
          <Link to="/events">Eventos</Link>
          <Link to="/repertorio">Repertório</Link>
          <Link to="/contact">Contato</Link>
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          className="menu-btn"
          onClick={() => setMenuOpen(true)}
        >
          ☰
        </button>
      </header>

      {/* OVERLAY */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* MENU MOBILE */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <button
          className="close-btn"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <nav>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>Sobre</Link>
          <Link to="/events" onClick={() => setMenuOpen(false)}>Eventos</Link>
          <Link to="/repertorio" onClick={() => setMenuOpen(false)}>Repertório</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contato</Link>
        </nav>
      </div>
    </>
  )
}