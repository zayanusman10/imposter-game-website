import React from 'react';
import './LegalPage.css';

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <div className="legal-badge">PRIVACY POLICY</div>
          <p className="last-updated">Last Updated: January 2026</p>
        </div>

        <div className="legal-intro">
          <p>
            This Privacy Policy explains how Imposter Game ("we", "our", or "the app") 
            collects, uses, and protects your information.
          </p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Information We Collect</h2>
            <p>When you create an account, we collect:</p>
            <ul>
              <li><strong>Email address</strong> — for account authentication and password recovery</li>
              <li><strong>Username</strong> — chosen by you, displayed to other players</li>
              <li><strong>Avatar selection</strong> — your chosen character, visible in games</li>
            </ul>
            <p>During gameplay, we temporarily process:</p>
            <ul>
              <li><strong>Game session data</strong> — room codes, player lists, votes</li>
              <li><strong>Chat messages</strong> — text and voice messages sent during games</li>
              <li><strong>Device network information</strong> — for WiFi multiplayer connectivity</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To create and manage your account</li>
              <li>To display your username and avatar to other players during games</li>
              <li>To enable multiplayer game sessions</li>
              <li>To send password reset emails when requested</li>
            </ul>
            <p className="highlight">
              We do NOT use your data for advertising, profiling, or marketing purposes.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Data Sharing</h2>
            <p>
              Your username and avatar are visible to other players in the same game session. 
              This is necessary for gameplay.
            </p>
            <p className="highlight">
              We do NOT sell, rent, or share your email address or personal data with third 
              parties for marketing or any other purpose.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Data Storage & Security</h2>
            <ul>
              <li>All data is transmitted using HTTPS/TLS encryption</li>
              <li>Authentication is handled by Firebase Authentication (Google)</li>
              <li>Game data is stored in Firebase Realtime Database with security rules</li>
              <li>Passwords are never stored in plain text</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Data Retention</h2>
            <p>
              Account data (email, username, avatar) is retained until you delete your account.
            </p>
            <p>
              Game session data is temporary and automatically deleted when the game ends 
              or the room expires.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Your Rights & Data Deletion</h2>
            <p>You have the right to delete your account and all associated data at any time:</p>
            <ul>
              <li><strong>In the app:</strong> Go to Profile → Delete Account</li>
              <li><strong>Via email:</strong> Contact theimpostergameonline@gmail.com</li>
            </ul>
            <p>
              When you delete your account, we permanently remove your email, username, 
              avatar selection, and any associated data from our servers.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Children's Privacy</h2>
            <p>
              Imposter Game is intended for users aged 13 and older. We do not knowingly 
              collect personal information from children under 13. If you believe a child 
              under 13 has provided us with personal data, please contact us to have it removed.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Device Permissions</h2>
            <p>The app may request the following permissions:</p>
            <ul>
              <li><strong>Camera</strong> — to scan QR codes for joining game rooms quickly</li>
              <li><strong>Microphone</strong> — to record voice messages in the game chat</li>
            </ul>
            <p>
              These permissions are only used for the stated purposes. Camera images and 
              voice recordings are not stored permanently — they are only used in real-time 
              for their intended function.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            <ul>
              <li><strong>Firebase Authentication</strong> — for secure login</li>
              <li><strong>Firebase Realtime Database</strong> — for multiplayer game data</li>
            </ul>
            <p>
              These services are provided by Google and are subject to 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> Google's Privacy Policy</a>.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of 
              significant changes by updating the "Last Updated" date at the top of this policy.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Contact Us</h2>
            <p>If you have questions about this Privacy Policy or your data, contact us at:</p>
            <a href="mailto:theimpostergameonline@gmail.com" className="contact-email">
              theimpostergameonline@gmail.com
            </a>
          </section>
        </div>

        <div className="legal-footer">
          <span>★ IMPOSTER GAME ★</span>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
