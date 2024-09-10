import React, { useState } from 'react';
import './LoginLnL.css';

const LoginLnL = () => {
    const [loginData, setLoginData] = useState({
        idOrPhone: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log('Login data submitted:', loginData);
    };

    return (
        <div className="login-container">
            <h2>Landlord Login</h2>
            <form onSubmit={handleSubmit}>
                <label>ID or Phone Number</label>
                <input type="text" name="idOrPhone" value={loginData.idOrPhone} onChange={handleChange} required />

                <label>Password</label>
                <input type="password" name="password" value={loginData.password} onChange={handleChange} required />

                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

export default LoginLnL;
