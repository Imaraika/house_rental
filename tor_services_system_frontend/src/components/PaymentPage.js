import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PaymentPage.css'; // Import your CSS for styling

const PaymentPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetch(`http://localhost/house_rental/tor_service_system_api/getHouseDetails.php?id=${id}`)
      .then(response => response.json())
      .then(data => setPrice(data.price))
      .catch(error => console.error('Error fetching house details:', error));
  }, [id]);

  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handleProceed = () => {
    if (selectedPaymentMethod) {
      navigate(`/final/${id}`, { state: { amount: price } });
    } else {
      alert('Please select a payment method.');
    }
  };

  return (
    <div className="payment-page">
      <h1>Payment Methods</h1>
      <p>You are about to pay for the house with ID: {id}</p>
      <div className="payment-methods">
        <h2>Select Payment Method</h2>
        <label>
          <input
            type="radio"
            value="MTN"
            checked={selectedPaymentMethod === 'MTN'}
            onChange={handlePaymentMethodChange}
          />
          MTN
        </label>
        <label>
          <input
            type="radio"
            value="AIRTEL"
            checked={selectedPaymentMethod === 'AIRTEL'}
            onChange={handlePaymentMethodChange}
          />
          AIRTEL
        </label>
        <button onClick={handleProceed}>Proceed to Payment</button>
      </div>
    </div>
  );
};

export default PaymentPage;
