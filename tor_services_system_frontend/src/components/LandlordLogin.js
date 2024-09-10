// import React, { useState } from 'react';
// import axios from 'axios';
// import './LandlordSignup.css'; // Reuse the same CSS for consistency

// const LandlordLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:5000/api/landlord/login', { email, password });
//       console.log(response.data);
//       // Handle success
//     } catch (error) {
//       console.error(error);
//       // Handle error
//     }
//   };

//   return (
//     <div className="signup-container">
//       <form onSubmit={handleLogin}>
//         <div className="form-section">
//           <h2>Login</h2>
//           <div className="form-group">
//             <label>Email ID</label>
//             <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//           </div>
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LandlordLogin;
