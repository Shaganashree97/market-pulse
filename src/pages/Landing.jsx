// src/pages/Landing.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-wrapper">
      <aside className="sidebar">
        <button onClick={() => navigate('/pageone')}>Page One</button>
        <button onClick={() => navigate('/pagetwo')}>Page Two</button>
        <button onClick={() => navigate('/pagethree')}>Page Three</button>
      </aside>
      <main className="landing-content">
        <h1>Market Pulse: AI Driven Stock Market Prediction</h1>
        <p>Welcome to Market Pulse. Stay tuned for insights powered by AI.</p>
      </main>
    </div>
  );
}

export default Landing;
