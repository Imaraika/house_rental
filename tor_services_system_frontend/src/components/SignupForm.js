import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupForm.css';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: '',  // Added name field
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add form validation logic here
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        try {
            const response = await fetch('http://localhost/house_rental/tor_service_system_api/signup.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                alert('Signup successful! Redirecting to login.');
                navigate('/login');
            } else {
                alert('Signup failed. Please try again.');
            }
        } catch (error) {
            console.error('Signup error:', error);
            alert('An error occurred during signup. Please try again.');
        }
    };

    return (
        <div className="signup-form-container">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"  // Added id attribute
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <label>
                    Email
                    <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Password
                    <input 
                        type="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <label>
                    Confirm Password
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        value={formData.confirmPassword} 
                        onChange={handleChange} 
                        required 
                    />
                </label>
                <button type="submit">Sign Up</button>
            </form>
            <p>Already Have an Account? <button onClick={() => navigate('/login')}>Sign In to Your Account</button></p>
        </div>
    );
};

export default SignupForm;
