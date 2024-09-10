// src/components/HouseList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HouseList.css';

const HouseList = () => {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch('http://localhost/house_rental/tor_service_system_api/getHouses.php')
      .then(response => response.json())
      .then(data => setHouses(data))
      .catch(error => console.error('Error fetching houses:', error));
  }, []);

  return (
    <div className="house-list">
      <h1>Available Houses</h1>
      <div className="house-cards">
        {houses.map(house => (
          <div key={house.id} className="house-card">
            <Link to={`/house/${house.id}`}>
              <img src={house.image_url} alt={house.name} className="house-image" />
              <div className="house-info">
                <h2>{house.name}</h2>
                <p>{house.description}</p>
                <p>Price: ${house.price}</p>
                <p>Status: {house.status}</p>
                <p>Location: {house.location}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HouseList;