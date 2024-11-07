import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Platform</h1>
      <p>Sign up to unlock premium features or log in to access your dashboard.</p>
      <div className="home-buttons">
        <Link to="/signup" className="home-button">Sign Up</Link>
        <Link to="/login" className="home-button login-button">Log In</Link>
      </div>
    </div>
  );
};

export default Home;
