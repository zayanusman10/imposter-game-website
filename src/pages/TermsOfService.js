import React from 'react';
import './LegalPage.css';

function TermsOfService() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <div className="legal-badge">TERMS OF SERVICE</div>
          <p className="last-updated">Last Updated: January 2026</p>
        </div>

        <div className="legal-intro">
          <p>
            By using Imposter Game, you agree to these Terms of Service. 
            Please read them carefully.
          </p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using Imposter Game, you agree to be bound 
              by these Terms of Service. If you do not agree, do not use the app.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Description of Service</h2>
            <p>
              Imposter Game is a social deduction party game where players try to identify 
              the "imposter" among them. The game can be played locally (pass-and-play) or 
              via WiFi multiplayer.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. User Accounts</h2>
            <ul>
              <li>You must be at least 13 years old to create an account</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must provide accurate information when creating an account</li>
              <li>One account per person is allowed</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. User Conduct</h2>
            <p>You agree NOT to:</p>
            <ul>
              <li>Use offensive, inappropriate, or misleading usernames</li>
              <li>Harass, bully, or abuse other players</li>
              <li>Attempt to hack, exploit, or disrupt the game or servers</li>
              <li>Use the app for any illegal purpose</li>
              <li>Impersonate other users or entities</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>5. Intellectual Property</h2>
            <p>
              All content in Imposter Game, including graphics, designs, text, and code, 
              is owned by us and protected by copyright laws. You may not copy, modify, 
              or distribute any part of the app without permission.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Game Rules & Fair Play</h2>
            <p>
              Imposter Game is meant to be fun! We encourage fair play and good sportsmanship. 
              Cheating or exploiting bugs ruins the experience for everyone.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Account Termination</h2>
            <p>
              We reserve the right to suspend or terminate accounts that violate these terms. 
              You may delete your account at any time from the Profile screen.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Disclaimer of Warranties</h2>
            <p>
              Imposter Game is provided "as is" without warranties of any kind. We do not 
              guarantee the app will be error-free or uninterrupted.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, we shall not be liable for any indirect, 
              incidental, or consequential damages arising from your use of the app.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the app after 
              changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="legal-section">
            <h2>11. Contact</h2>
            <p>For questions about these Terms, contact us at:</p>
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

export default TermsOfService;
