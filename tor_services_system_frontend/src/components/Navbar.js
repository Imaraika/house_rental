import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Home
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/company-details" className="nav-links">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links">contact us</Link>
          </li>
          <li className="nav-item dropdown">
            <button className="dropdown-btn" onClick={handleDropdownToggle}>
              e-service
            </button>
            {dropdownOpen && (
              <ul className="dropdown-content">
                <li className="dropdown-item">
                  <Link to="/landlord" className="nav-links" onClick={() => setDropdownOpen(false)}>Landlord/Asset’s Owner</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/tenant" className="nav-links" onClick={() => setDropdownOpen(false)}>Tenant</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="/commissionaires" className="nav-links" onClick={() => setDropdownOpen(false)}>Commissionaires</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="nav-item">
            <Link to="/updates" className="nav-links">Updates</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
