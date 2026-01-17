import React from 'react';
import './LegalPage.css';

function DeleteAccount() {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <div className="legal-header">
          <div className="legal-badge">DELETE ACCOUNT</div>
          <h1>Delete Account - Impostor Game: Film Edition</h1>
          <p className="last-updated">Account & Data Deletion</p>
        </div>

        <div className="legal-intro">
          <p>
            You can permanently delete your Impostor Game account and all associated data 
            at any time using the methods below.
          </p>
        </div>

        <div className="legal-content">
          <section className="legal-section">
            <h2>How to Delete Your Account</h2>
            <p>Choose one of the following methods to delete your account:</p>
            
            <div className="highlight">
              <strong>Method 1: In-App Deletion</strong>
              <p>Open Impostor Game → Go to Profile → Tap "Delete Account" button</p>
            </div>

            <div className="highlight">
              <strong>Method 2: Email Request</strong>
              <p>Send an email to: 
                <a href="mailto:theimpostergameonline@gmail.com?subject=Delete Account Request" 
                   className="contact-email" style={{display: 'inline', margin: '0 8px', padding: '4px 8px', fontSize: '15px'}}>
                  theimpostergameonline@gmail.com
                </a>
              </p>
              <p><strong>Subject:</strong> "Delete Account Request"</p>
              <p><strong>Include:</strong> The email address associated with your account</p>
            </div>
          </section>

          <section className="legal-section">
            <h2>What Gets Deleted</h2>
            <p>When you delete your account, we permanently remove:</p>
            <ul>
              <li><strong>Account information</strong> — your email address and login credentials</li>
              <li><strong>Username</strong> — your chosen display name</li>
              <li><strong>Avatar selection</strong> — your chosen character appearance</li>
              <li><strong>Game data</strong> — any saved preferences or settings</li>
              <li><strong>All associated data</strong> — everything linked to your account</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>Important Warning</h2>
            <div className="highlight">
              <p><strong>⚠️ This action is permanent and cannot be undone.</strong></p>
              <p>
                Once your account is deleted, you will not be able to recover your username, 
                game progress, or any other account data. You will need to create a new account 
                if you wish to play again.
              </p>
            </div>
          </section>

          <section className="legal-section">
            <h2>Processing Timeline</h2>
            <ul>
              <li><strong>In-app deletion:</strong> Immediate (processed instantly)</li>
              <li><strong>Email requests:</strong> Processed within 48 hours during business days</li>
            </ul>
            <p>
              You will receive a confirmation email once your account has been successfully deleted.
            </p>
          </section>

          <section className="legal-section">
            <h2>Data Retention After Deletion</h2>
            <p>
              After account deletion, no personal data is retained on our servers. 
              Some anonymized, aggregated usage statistics may be kept for app improvement purposes, 
              but these cannot be linked back to you or your deleted account.
            </p>
          </section>

          <section className="legal-section">
            <h2>Need Help?</h2>
            <p>
              If you have questions about account deletion or need assistance, 
              contact our support team:
            </p>
            <a href="mailto:theimpostergameonline@gmail.com" className="contact-email">
              theimpostergameonline@gmail.com
            </a>
          </section>
        </div>

        <div className="legal-footer">
          <span>★ IMPOSTOR GAME: FILM EDITION ★</span>
        </div>
      </div>
    </div>
  );
}

export default DeleteAccount;