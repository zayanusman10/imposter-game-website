import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Film perforations */}
      <div className="film-perforations left">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="perforation" />
        ))}
      </div>
      <div className="film-perforations right">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="perforation" />
        ))}
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="film-frame-header">
            <span className="frame-code">▶ 35MM</span>
            <div className="kodak-badge">IMPOSTOR</div>
            <span className="frame-code">FRAME 01</span>
          </div>

          <h1 className="hero-title">
            <span className="title-main">IMPOSTOR</span>
            <span className="title-sub">GAME</span>
          </h1>

          <p className="hero-description">
            The ultimate social deduction party game. Find the impostor among your friends 
            in this thrilling game of deception and deduction.
          </p>

          <div className="hero-buttons">
            <a href="#" className="btn btn-primary">
              <span className="btn-icon">🍎</span>
              App Store
            </a>
            <a href="#" className="btn btn-secondary">
              <span className="btn-icon">▶</span>
              Google Play
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">3-10</span>
              <span className="stat-label">Players</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">5-15</span>
              <span className="stat-label">Minutes</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-number">13+</span>
              <span className="stat-label">Age</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-header">
          <div className="section-badge">FEATURES</div>
          <h2 className="section-title">How It Works</h2>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎭</div>
            <h3>Secret Roles</h3>
            <p>
              Each player secretly receives a role. Citizens know the secret word, 
              while the Impostor only knows the category.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Discussion</h3>
            <p>
              Players discuss and ask questions about the word. The Impostor must 
              blend in without revealing they don't know it.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🗳️</div>
            <h3>Vote</h3>
            <p>
              After discussion, vote to eliminate the suspected Impostor. 
              Choose wisely - the wrong vote means the Impostor wins!
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏆</div>
            <h3>Win</h3>
            <p>
              Citizens win by catching the Impostor. The Impostor wins by 
              avoiding detection or guessing the secret word.
            </p>
          </div>
        </div>
      </section>

      {/* Game Modes Section */}
      <section className="game-modes">
        <div className="section-header">
          <div className="section-badge">PLAY MODES</div>
          <h2 className="section-title">Multiple Ways to Play</h2>
        </div>

        <div className="modes-grid">
          <div className="mode-card">
            <div className="mode-header">
              <span className="mode-icon">📱</span>
              <h3>Pass & Play</h3>
            </div>
            <p>
              Perfect for in-person gatherings. Pass the device around for each 
              player to secretly view their role. No internet required!
            </p>
            <ul className="mode-features">
              <li>✓ Offline play</li>
              <li>✓ 3-10 players</li>
              <li>✓ Quick setup</li>
            </ul>
          </div>

          <div className="mode-card featured">
            <div className="mode-badge">POPULAR</div>
            <div className="mode-header">
              <span className="mode-icon">📡</span>
              <h3>Wi-Fi Mode</h3>
            </div>
            <p>
              Play with friends on the same network. Each player uses their own 
              device for a seamless multiplayer experience.
            </p>
            <ul className="mode-features">
              <li>✓ Real-time multiplayer</li>
              <li>✓ In-game chat</li>
              <li>✓ Voice messages</li>
              <li>✓ QR code joining</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <div className="section-header">
          <div className="section-badge">CATEGORIES</div>
          <h2 className="section-title">Endless Variety</h2>
        </div>

        <p className="categories-description">
          Choose from dozens of word categories to keep every game fresh and exciting.
        </p>

        <div className="category-tags">
          <span className="category-tag">🍕 Food</span>
          <span className="category-tag">🎬 Movies</span>
          <span className="category-tag">🎵 Music</span>
          <span className="category-tag">🏀 Sports</span>
          <span className="category-tag">🌍 Countries</span>
          <span className="category-tag">🐾 Animals</span>
          <span className="category-tag">💼 Jobs</span>
          <span className="category-tag">🎮 Games</span>
          <span className="category-tag">📚 Books</span>
          <span className="category-tag">🎨 Art</span>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Find the Impostor?</h2>
          <p>Download now and start playing with your friends!</p>
          <div className="cta-buttons">
            <a href="#" className="btn btn-primary btn-large">
              Download Free
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
