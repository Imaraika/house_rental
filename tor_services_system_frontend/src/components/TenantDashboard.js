import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './TenantDashboard.css';

const TenantDashboard = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const houseId = query.get('id');
  const { id } = useParams();
  const navigate = useNavigate();
  const [house, setHouse] = useState(null);

  useEffect(() => {
    const tenant = localStorage.getItem('tenant');
    console.log('Stored tenant data:', tenant);  // Debug line
    const isAuthenticated = tenant ? JSON.parse(tenant).tenant_id : null;

    if (!isAuthenticated) {
        navigate('/');  // Redirect to login if not authenticated
    } else {
        // Fetch house details only if authenticated
        if (houseId) {
            fetch(`http://localhost/house_rental/tor_service_system_api/getHouseDetails.php?id=${houseId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Fetched house data:', data);
                    setHouse(data);
                })
                .catch(error => console.error('Error fetching house details:', error));
        }
    }
}, [houseId, navigate]);
  const handleLogout = () => {
    localStorage.removeItem('tenant');  // Clear tenant data from localStorage
    navigate('/login');  // Redirect to login page
  };

  const handleConfirm = () => {
    navigate(`/payment/${id}`);
  };

  return (
    <div className="tenant-dashboard-container">
      <header className="dashboard-header">
        <h1>Tenant Dashboard</h1>
        <img src="http://localhost/house_rental/tor_service_system_frontend/assets/logo.png" alt="Logo" className="logo" />
      </header>
      <main className="dashboard-content">
        <h2>Welcome to your Dashboard!</h2>
        <p>Thank you for showing interest in our property.</p>
        {house ? (
          <div className="house-details">
            <h3>House Details</h3>
            <p><strong>Name:</strong> {house.name}</p>
            <p><strong>Description:</strong> {house.description}</p>
            <p><strong>Price:</strong> ${house.price}</p>
            <p><strong>Status:</strong> {house.status}</p>
            <div className="house-images">
              {house.image_urls && house.image_urls.map((url, index) => (
                <img key={index} src={url} alt={`House ${index + 1}`} className="house-image" />
              ))}
            </div>
            <button onClick={handleConfirm}>Confirm</button> 
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <p>Loading house details...</p>
        )}
      </main>
      <footer className="dashboard-footer">
        <p>&copy; 2024 House Rental System</p>
      </footer>
    </div>
  );
};

export default TenantDashboard;
