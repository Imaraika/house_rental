import React from 'react';
import { Link } from 'react-router-dom';
import './Landlord.css';

const Landlord = () => {
  return (
    <div className="landlord-container">
      <h2>Welcome, Landlord!</h2>
      <p>
        Manage your assets efficiently and effectively. Register your properties, keep track of tenants,
        and ensure your assets are up to date.
      </p>
      <div className="landlord-buttons">
        <Link to="/signup" className="btn signup-btn">Sign Up</Link>
        <Link to="/login" className="btn login-btn">Login</Link>
      </div>
    </div>
  );
};

export default Landlord;
