import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-badge">IMPOSTOR</span>
              <span className="footer-logo-text">GAME</span>
            </div>
            <p className="footer-tagline">
              The ultimate social deduction party game
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Legal</h4>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <Link to="/support">Contact Us</Link>
              <a href="mailto:theimpostergameonline@gmail.com">Email</a>
            </div>
            <div className="footer-column">
              <h4>Download</h4>
              <a href="#" className="store-link">App Store</a>
              <a href="#" className="store-link">Google Play</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="film-strip">
            <span className="frame-code">▶ 35MM</span>
            <span className="kodak-text">KODAK VISION3 500T 5219</span>
            <span className="frame-code">FRAME 01</span>
          </div>
          <p className="copyright">
            © {currentYear} Imposter Game. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
