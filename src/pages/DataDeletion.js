import React from 'react';
import './LegalPage.css';

function DataDeletion() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <div className="legal-badge">DATA DELETION</div>
          <h1>Data Deletion Policy - Impostor Game: Film Edition</h1>
          <p className="last-updated">Personal Data Management & GDPR Compliance</p>
        </div>

        <div className="legal-intro">
          <p>
            This page explains what personal data we collect, how to request its deletion, 
            and our compliance with data protection regulations including GDPR.
          </p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>Personal Data We Collect</h2>
            <p>Impostor Game: Film Edition collects minimal personal data necessary for gameplay:</p>
            <ul>
              <li><strong>Email address</strong> — for account authentication and password recovery</li>
              <li><strong>Username</strong> — chosen by you, displayed to other players during games</li>
              <li><strong>Avatar selection</strong> — your chosen character appearance</li>
              <li><strong>Game preferences</strong> — settings and configurations you choose</li>
            </ul>
            <p>
              We do NOT collect sensitive personal information such as real names, addresses, 
              phone numbers, or payment information.
            </p>
          </section>

          <section className="legal-section">
            <h2>How to Request Data Deletion</h2>
            <p>You can request deletion of your personal data using either method:</p>
            
            <div className="highlight">
              <strong>Method 1: In-App Deletion</strong>
              <p>Open Impostor Game → Profile → "Delete Account" button</p>
              <p>This immediately deletes your account and all associated personal data.</p>
            </div>

            <div className="highlight">
              <strong>Method 2: Email Request</strong>
              <p>Send an email to: 
                <a href="mailto:theimpostergameonline@gmail.com?subject=Data Deletion Request" 
                   className="contact-email" style={{display: 'inline', margin: '0 8px', padding: '4px 8px', fontSize: '15px'}}>
                  theimpostergameonline@gmail.com
                </a>
              </p>
              <p><strong>Subject:</strong> "Data Deletion Request" or "Delete Account Request"</p>
              <p><strong>Include:</strong> The email address associated with your account</p>
            </div>
          </section>

          <section className="legal-section">
            <h2>GDPR Compliance Statement</h2>
            <p>
              Impostor Game: Film Edition is committed to compliance with the General Data Protection 
              Regulation (GDPR) and other applicable data protection laws.
            </p>
            <ul>
              <li><strong>Right to Access:</strong> You can request information about what personal data we hold</li>
              <li><strong>Right to Rectification:</strong> You can update your username and email in-app</li>
              <li><strong>Right to Erasure:</strong> You can delete your account and all data at any time</li>
              <li><strong>Right to Portability:</strong> Contact us to receive a copy of your data</li>
              <li><strong>Right to Object:</strong> You can opt out of data processing by deleting your account</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Data Retention Policy</h2>
            <ul>
              <li><strong>Account Data:</strong> Retained until you delete your account</li>
              <li><strong>Game Session Data:</strong> Temporary data deleted when games end</li>
              <li><strong>Chat Messages:</strong> Not stored permanently, only exist during active games</li>
              <li><strong>Voice Messages:</strong> Processed in real-time, not stored on servers</li>
            </ul>
            <p>
              After account deletion, all personal data is permanently removed from our servers 
              within 48 hours. Some anonymized usage statistics may be retained for app improvement.
            </p>
          </section>

          <section className="legal-section">
            <h2>Third-Party Data Processing</h2>
            <p>We use the following third-party services that may process your data:</p>
            <ul>
              <li><strong>Firebase Authentication (Google):</strong> Secure login and account management</li>
              <li><strong>Firebase Realtime Database (Google):</strong> Multiplayer game sessions</li>
            </ul>
            <p>
              These services are GDPR compliant and subject to 
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"> Google's Privacy Policy</a>.
            </p>
          </section>

          <section className="legal-section">
            <h2>Data Processing Timeline</h2>
            <ul>
              <li><strong>In-app deletion:</strong> Immediate processing</li>
              <li><strong>Email requests:</strong> Processed within 48 hours</li>
              <li><strong>Data removal:</strong> Complete within 48 hours of processing</li>
              <li><strong>Third-party removal:</strong> Up to 30 days for complete removal from backup systems</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Children's Data Protection</h2>
            <p>
              Impostor Game is rated 13+ and intended for users aged 13 and older. 
              We do not knowingly collect personal data from children under 13. 
              If you believe a child under 13 has provided personal data, 
              please contact us immediately for removal.
            </p>
          </section>

          <section className="legal-section">
            <h2>Contact for Data Requests</h2>
            <p>
              For any data-related requests, questions about this policy, 
              or to exercise your GDPR rights, contact us at:
            </p>
            <a href="mailto:theimpostergameonline@gmail.com" className="contact-email">
              theimpostergameonline@gmail.com
            </a>
            <p>
              We will respond to all data requests within 30 days as required by GDPR.
            </p>
          </section>
        </div>

        <div className="legal-footer">
          <span>★ IMPOSTOR GAME: FILM EDITION ★</span>
        </div>
      </div>
    </div>
  );
}

export default DataDeletion;