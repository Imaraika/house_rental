import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ConfirmTakeHouse.css'; // Import your CSS for styling

const ConfirmTakeHouse = ({ houseId, onClose }) => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    navigate(`/payment/${houseId}`);
  };

  return (
    <div className="confirmation-overlay">
      <div className="confirmation-modal">
        <h2>Confirm Your Choice</h2>
        <p>Are you sure you want to take this house? You will be redirected to the payment page to choose your payment method.</p>
        <div className="confirmation-buttons">
          <button onClick={handleConfirm}>Yes, Proceed</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmTakeHouse;
