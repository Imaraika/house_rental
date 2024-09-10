// // src/components/LandlordSignup.js
// import React, { useState } from 'react';
// import './LandlordSignup.css';
// import axios from 'axios'; // Import axios for making HTTP requests

// const LandlordSignup = () => {
//   const [form, setForm] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//     idDocument: '',
//     idNo: '',
//     country: '',
//     firstName: '',
//     lastName: '',
//     gender: '',
//     phone: '',
//     district: '',
//     sector: '',
//     cell: '',
//     village: '',
//     agree: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setForm({
//       ...form,
//       [name]: type === 'checkbox' ? checked : value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Send form data to the backend
//     axios.post('http://localhost:5000/signup', form)
//       .then((response) => {
//         alert('Signup successful');
//       })
//       .catch((error) => {
//         console.error('There was an error!', error);
//         alert('Signup failed');
//       });
//   };

//   return (
//     <div className="signup-container">
//       <form onSubmit={handleSubmit}>
//         <div className="form-section">
//           <h2 className="section-title">Login Details</h2>
//           <input type="email" name="email" placeholder="Email ID" value={form.email} onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
//           <input type="password" name="confirmPassword" placeholder="Confirm Password" value={form.confirmPassword} onChange={handleChange} required />
//         </div>
//         <div className="form-section">
//           <h2 className="section-title">Personal Identification Document</h2>
//           <select name="idDocument" value={form.idDocument} onChange={handleChange} required>
//             <option value="">Select ID Document</option>
//             <option value="nid">NID</option>
//             <option value="passport">Passport</option>
//           </select>
//           <input type="text" name="idNo" placeholder="ID No" value={form.idNo} onChange={handleChange} required />
//           <input type="text" name="country" placeholder="Country" value={form.country} onChange={handleChange} required />
//         </div>
//         <div className="form-section">
//           <h2 className="section-title">Personal Details</h2>
//           <input type="text" name="firstName" placeholder="First Name" value={form.firstName} onChange={handleChange} required />
//           <input type="text" name="lastName" placeholder="Last Name" value={form.lastName} onChange={handleChange} required />
//           <select name="gender" value={form.gender} onChange={handleChange} required>
//             <option value="">Select Gender</option>
//             <option value="M">Male</option>
//             <option value="F">Female</option>
//           </select>
//           <input type="text" name="phone" placeholder="Phone No" value={form.phone} onChange={handleChange} required />
//           <input type="text" name="district" placeholder="District" value={form.district} onChange={handleChange} required />
//           <input type="text" name="sector" placeholder="Sector" value={form.sector} onChange={handleChange} required />
//           <input type="text" name="cell" placeholder="Cell" value={form.cell} onChange={handleChange} required />
//           <input type="text" name="village" placeholder="Village" value={form.village} onChange={handleChange} required />
//         </div>
//         <div className="form-section">
//           <label>
//             <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} required />
//             I confirm that the information provided is true
//           </label>
//         </div>
//         <button type="submit" className="submit-button">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default LandlordSignup;
