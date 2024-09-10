import React, { useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import './FinalConfirmation.css'; // Import your CSS for styling

const FinalConfirmation = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { amount } = location.state || { amount: 0 };
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePayment = () => {
    // Implement payment logic here
    alert('Payment successful!');
    navigate('/');
  };

  return (
    <div className="final-confirmation">
      <h1>Confirm Your Payment</h1>
      <div className="payment-details">
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
        </label>
        <label>
          Amount:
          <input
            type="text"
            value={`$${amount}`}
            readOnly
          />
        </label>
        <button onClick={handlePayment}>Pay Now</button>
      </div>
    </div>
  );
};

export default FinalConfirmation;
