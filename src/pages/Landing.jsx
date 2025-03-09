// src/pages/Landing.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <h1>Market Pulse: AI Driven Stock Market Prediction</h1>
      <p>Welcome to Market Pulse. Stay tuned for insights powered by AI.</p>
      <div className="button-group">
        <button onClick={() => navigate('/pageone')}>Go to Page One</button>
        <button onClick={() => navigate('/pagetwo')}>Go to Page Two</button>
        <button onClick={() => navigate('/pagethree')}>Go to Page Three</button>
      </div>
    </div>
  );
}

export default Landing;
