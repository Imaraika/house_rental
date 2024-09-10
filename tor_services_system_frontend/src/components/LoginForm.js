import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Simulate a login API call
        try {
            const response = await fetch('http://localhost/house_rental/tor_service_system_api/login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                alert('Login successful!');
                // Save tenant data and tenant_id separately
                localStorage.setItem('tenant', JSON.stringify(data));
                localStorage.setItem('tenant_id', data.tenant_id); // Save tenant_id for authentication check
                navigate('/tenant-dashboard');
            } else {
                alert('Login failed. Please check your email and password.');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred during login. Please try again.');
        }
    };

    return (
        <div className="login-form-container">
            <h2>Tenant Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email
                    <input 
                        type="email" 
                        name="email" 
                        id="email"  // Add 'id' attribute
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label htmlFor="password">
                    Password
                    <input 
                        type="password" 
                        name="password" 
                        id="password"  // Add 'id' attribute
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <button type="submit">Login</button>
            </form>
            <p>New user? <button onClick={() => navigate('/signup')}>Create an Account</button></p>
        </div>
    );
};

export default LoginForm;
