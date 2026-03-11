import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <header className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">AI-VR4U</Link>
        </div>

        {/* Menu */}
        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

          <div
            className="close-btn"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </div>

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/software" onClick={() => setMenuOpen(false)}>
            Software
          </Link>          
          <Link to="/cybersecurity" onClick={() => setMenuOpen(false)}>Cybersecurity</Link>
          <Link to="/it-services" onClick={() => setMenuOpen(false)}>IT Services</Link>
          <Link to="/founder" onClick={() => setMenuOpen(false)}>Founder</Link>

        </nav>

        {/* Mobile Menu Icon */}
        <span
          className="material-symbols-outlined menu-icon"
          onClick={() => setMenuOpen(true)}
        >
          tile_small
        </span>

      </div>

      {/* BLUR OVERLAY */}
      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

    </header>
  );
}

export default Navbar;