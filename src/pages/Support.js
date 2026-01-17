import React from 'react';
import './Support.css';

function Support() {
  return (
    <div className="support-page">
      <div className="support-container">
        <div className="support-header">
          <div className="support-badge">SUPPORT</div>
          <h1>How Can We Help?</h1>
          <p>We're here to help you get the most out of Imposter Game</p>
        </div>

        <div className="support-content">
          {/* Contact Section */}
          <section className="support-section contact-section">
            <div className="section-icon">📧</div>
            <h2>Contact Us</h2>
            <p>
              Have a question, found a bug, or want to share feedback? 
              We'd love to hear from you!
            </p>
            <a href="mailto:theimpostergameonline@gmail.com" className="contact-button">
              theimpostergameonline@gmail.com
            </a>
            <p className="response-time">
              We typically respond within 24-48 hours
            </p>
          </section>

          {/* FAQ Section */}
          <section className="support-section faq-section">
            <h2>Frequently Asked Questions</h2>
            
            <div className="faq-list">
              <div className="faq-item">
                <h3>How many players can play?</h3>
                <p>
                  Imposter Game supports 3-10 players. For the best experience, 
                  we recommend 5-8 players.
                </p>
              </div>

              <div className="faq-item">
                <h3>Do I need an internet connection?</h3>
                <p>
                  Pass & Play mode works completely offline! WiFi Mode requires 
                  all players to be on the same local network.
                </p>
              </div>

              <div className="faq-item">
                <h3>How do I join a WiFi game?</h3>
                <p>
                  The host creates a room and shares the room code or QR code. 
                  Other players can join by entering the code or scanning the QR.
                </p>
              </div>

              <div className="faq-item">
                <h3>Can I delete my account?</h3>
                <p>
                  Yes! Go to Profile → Delete Account. This will permanently remove 
                  all your data from our servers.
                </p>
              </div>

              <div className="faq-item">
                <h3>Why does the app need camera permission?</h3>
                <p>
                  The camera is only used to scan QR codes for quickly joining 
                  multiplayer game rooms. We don't store any images.
                </p>
              </div>

              <div className="faq-item">
                <h3>Why does the app need microphone permission?</h3>
                <p>
                  The microphone is used for voice messages in the game chat during 
                  WiFi multiplayer games. Voice recordings are not stored permanently.
                </p>
              </div>

              <div className="faq-item">
                <h3>Is the game free?</h3>
                <p>
                  Yes! Imposter Game is completely free to download and play.
                </p>
              </div>

              <div className="faq-item">
                <h3>What age is the game for?</h3>
                <p>
                  Imposter Game is rated 13+ and is suitable for teens and adults.
                </p>
              </div>
            </div>
          </section>

          {/* Quick Links */}
          <section className="support-section links-section">
            <h2>Quick Links</h2>
            <div className="quick-links">
              <a href="/privacy" className="quick-link">
                <span className="link-icon">🔒</span>
                <span>Privacy Policy</span>
              </a>
              <a href="/terms" className="quick-link">
                <span className="link-icon">📜</span>
                <span>Terms of Service</span>
              </a>
              <a href="/delete-account" className="quick-link">
                <span className="link-icon">🗑️</span>
                <span>Delete Account</span>
              </a>
              <a href="/data-deletion" className="quick-link">
                <span className="link-icon">📋</span>
                <span>Data Deletion</span>
              </a>
            </div>
          </section>

          {/* App Info */}
          <section className="support-section app-info">
            <h2>App Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">Version</span>
                <span className="info-value">1.0.0</span>
              </div>
              <div className="info-item">
                <span className="info-label">Developer</span>
                <span className="info-value">Imposter Game Team</span>
              </div>
              <div className="info-item">
                <span className="info-label">Platform</span>
                <span className="info-value">iOS & Android</span>
              </div>
              <div className="info-item">
                <span className="info-label">Category</span>
                <span className="info-value">Party Games</span>
              </div>
            </div>
          </section>
        </div>

        <div className="support-footer">
          <span>★ IMPOSTER GAME ★</span>
        </div>
      </div>
    </div>
  );
}

export default Support;
