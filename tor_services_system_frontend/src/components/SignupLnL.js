import React, { useState } from 'react';
import './SignupLnL.css';

const SignupLnL = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        gender: '',
        idPassportNo: '',
        phoneNo: '',
        country: '',
        province: '',
        district: '',
        sector: '',
        cell: '',
        village: '',
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="signup-container">
            <h2>Landlord Sign-Up</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required />

                <label>Last Name</label>
                <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />

                <label>Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>

                <label>ID/Passport No</label>
                <input type="text" name="idPassportNo" value={formData.idPassportNo} onChange={handleChange} required />

                <label>Phone No</label>
                <input type="text" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required />

                <label>Country</label>
                <input type="text" name="country" value={formData.country} onChange={handleChange} required />

                <label>Province</label>
                <input type="text" name="province" value={formData.province} onChange={handleChange} required />

                <label>District</label>
                <input type="text" name="district" value={formData.district} onChange={handleChange} required />

                <label>Sector</label>
                <input type="text" name="sector" value={formData.sector} onChange={handleChange} required />

                <label>Cell</label>
                <input type="text" name="cell" value={formData.cell} onChange={handleChange} required />

                <label>Village</label>
                <input type="text" name="village" value={formData.village} onChange={handleChange} required />

                <label>Username</label>
                <input type="text" name="username" value={formData.username} onChange={handleChange} required />

                <label>Password</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />

                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
    );
};

export default SignupLnL;
