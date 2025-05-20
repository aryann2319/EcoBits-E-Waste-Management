import React, { useState } from 'react'
import "../styles/Pickup.css"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const PickupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    pincode: '',
    email: '',
    pickupDate: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:4000/schedulePickup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.success) {
      toast('Pickup request scheduled successfully!');
      setFormData({
        name: '',
        email: '',
        mobile: '',
        address: '',
        pincode: '',
        pickupDate: ''
      });
    } else {
      toast('Failed to schedule pickup.');
    }
  };

  return (
    <div id="pickup-section">
      <div id="pickup-desc">
        <h2>Sell your eWaste to EcoBits. Schedule a pickup now!</h2>
        <br />
        <p>Available in Delhi & NCR only. <br />Minimum Pickup value is Rs. 250</p>
      </div>
      <form id="pickup-contact" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="mobile"
            placeholder="Mobile No"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="address"
            placeholder="Enter Your Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="pincode"
            placeholder="Enter Pin Code"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="pickupDate"
            value={formData.pickupDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="button">
          Proceed
        </button>
      </form>
    </div>
  );
};

export default PickupForm;
