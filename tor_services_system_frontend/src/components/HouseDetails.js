import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './HouseDetails.css';

const HouseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [house, setHouse] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    movein_date: '',
    message: 'I am interested in this property. Please contact me with more details.'
  });
  const [formResponse, setFormResponse] = useState(null);

  useEffect(() => {
    fetch(`http://localhost/house_rental/tor_service_system_api/getHouseDetails.php?id=${id}`)
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
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData);

    fetch('http://localhost/house_rental/tor_service_system_api/submitForm.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Response data:', data);
        setFormResponse(data);

        if (data.success) {
          navigate('/login');
        }
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  };

  const handleTakeHouse = () => {
    const isAuthenticated = !!localStorage.getItem('tenant_id');  // Check if tenant is logged in
  if (isAuthenticated) {
    navigate(`/tenant-dashboard?id=${id}`);
  } else {
    navigate('/login');  //
  }
};

  if (!house) {
    return <div>Loading...</div>;
  }

  return (
    <div className="house-details-container">
      <div className="house-main-content">
        <div className="house-image-carousel">
          {/* Left stacked images */}
          {house.image_urls.slice(0, 2).map((url, index) => (
            <img key={index} src={url} alt={`House-ig ${index + 1}`} className="house-image small" />
          ))}

          {/* Right large image */}
          <img src={house.image_urls[2]} alt="Main house-ig" className="house-image large" />

          <button onClick={handleTakeHouse}>Take this House</button>
        </div>

        <div className="house-contact-form">
          <h2>More about this property</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Full name*
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Email*
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
              Phone
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
            </label>
            <label>
              Desired move-in date*
              <input type="date" name="movein_date" value={formData.movein_date} onChange={handleChange} required />
            </label>
            <label>
              Message
              <textarea name="message" value={formData.message} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
          </form>
          {formResponse && (
            <div className={`form-response ${formResponse.success ? 'success' : 'error'}`}>
              {formResponse.message}
            </div>
          )}
        </div>
      </div>
      <div className="house-info">
        <h1>{house.name}</h1>
        <p>{house.description}</p>
        <p>Price: ${house.price}</p>
        <p>Status: {house.status}</p>
        <p>Location: {house.location}</p>
        <button onClick={handleTakeHouse}>Take this House</button>
      </div>
    </div>
  );
};

export default HouseDetails;
