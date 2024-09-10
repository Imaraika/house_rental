import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SearchBox = () => {
  const [houses, setHouses] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const searchLocation = query.get('location');

  useEffect(() => {
    if (searchLocation) {
      fetch(`http://localhost/house_rental/tor_service_system_api/searchHouses.php?location=${searchLocation}`)
        .then(response => response.json())
        .then(data => {
          console.log('Fetched houses:', data); // Check if data is fetched
          setHouses(data);
        })
        .catch(error => console.error('Error fetching houses:', error));
    }
  }, [searchLocation]);

  return (
    <div className="search-results">
      {houses.length > 0 ? (
        houses.map(house => (
          <div key={house.id} className="house-card">
            <h2>{house.name}</h2>
            <p>{house.description}</p>
            <p>Price: ${house.price}</p>
            <p>Status: {house.status}</p>
            {house.image_url && <img src={house.image_url} alt={house.name} />}
          </div>
        ))
      ) : (
        <p>No houses found for location: {searchLocation}</p>
      )}
    </div>
  );
};

export default SearchBox;
