import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <span className="logo-badge">IMPOSTOR</span>
          <span className="logo-text">GAME</span>
        </Link>

        <button 
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/privacy" 
            className={`nav-link ${isActive('/privacy') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Privacy
          </Link>
          <Link 
            to="/terms" 
            className={`nav-link ${isActive('/terms') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Terms
          </Link>
          <Link 
            to="/support" 
            className={`nav-link ${isActive('/support') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Support
          </Link>
          <Link 
            to="/delete-account" 
            className={`nav-link ${isActive('/delete-account') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Delete Account
          </Link>
          <Link 
            to="/data-deletion" 
            className={`nav-link ${isActive('/data-deletion') ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            Data Deletion
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
