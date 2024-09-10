import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [location, setLocation] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/search?location=${location}`);
    };

    return (
        <div className="header">
            <div className="header-left">
                <Link to="/">
                    <img src="/images/logo.jpg" alt="TORSystem Logo" className="logo" />
                </Link>
            </div>
            <div className="header-center">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search by location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div className="header-right">
                <span className="auth-link" onClick={() => navigate('/login')}>
                    <span className="auth-icon">&#128100;</span> {/* User icon */}
                    Login
                </span>
                <span> | </span>
                <span className="auth-link" onClick={() => navigate('/signup')}>Register</span>
            </div>
        </div>
    );
}

export default Header;
