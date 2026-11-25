import React from 'react';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div 
      className="landing-page"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/landing-bg.jpg') center/cover`
      }}
    >
      <div className="landing-overlay">
        <h1>💍 Wedding Expense Planner</h1>
        <h2 className="subheading">DreamWedding Solutions</h2>
        <p>
          Welcome to DreamWedding Solutions — your trusted partner in planning your perfect wedding day. 
          We understand that organizing a wedding should be exciting, not stressful — and that's why we're 
          here to help you budget with ease and confidence.
        </p>
        <p>
          Whether you're planning an intimate gathering or a grand celebration, our tools make it simple 
          to estimate costs, explore options, and stay within budget — all while creating unforgettable 
          memories.
        </p>
        <button className="get-started-btn" onClick={onStart}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingPage;
