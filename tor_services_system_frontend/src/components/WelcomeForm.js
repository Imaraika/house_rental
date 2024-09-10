import React from 'react';
import { Link } from 'react-router-dom';
import './WelcomeForm.css'; // Ensure this line imports your CSS file

function WelcomeForm() {
  return (
    <div className="welcome-form">
      <h2>Welcome to TORSystem</h2>
      <p>Sign in to access your dashboard or create a new account.</p>
      <div className="button-group">
        <Link to="/login">
          <button className="form-button">Login</button>
        </Link>
        <Link to="/signup">
          <button className="form-button register">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default WelcomeForm;
