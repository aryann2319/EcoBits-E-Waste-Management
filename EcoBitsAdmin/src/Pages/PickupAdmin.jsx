import React, { useState, useEffect } from 'react';
import '../styles/AdminPickup.css'; 
import remove_icon from '../assets/removebin.png';  

const PickupAdmin = () => {
  const [pickupRequests, setPickupRequests] = useState([]);

  const fetchPickupRequests = async () => {
    await fetch('http://localhost:4000/getPickups')
      .then((res) => res.json())
      .then((data) => {
        setPickupRequests(data);
      });
  };

  useEffect(() => {
    fetchPickupRequests();
  }, []);

  const removePickupRequest = async (id) => {
    await fetch('http://localhost:4000/removePickup', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    fetchPickupRequests();
  };

  return (
    <div className="admin-pickup">
      <h1>ALL PICKUP REQUESTS</h1>
      <div className="pickup-format-main">
        <p>Name</p>
        <p>Email</p>
        <p>Mobile</p>
        <p>Address</p>
        <p>Pincode</p>
        <p>Pickup Date</p>
        <p>Remove</p>
      </div>
      <div className="pickup-requests">
        <hr />
        {pickupRequests.map((request, index) => (
          <div key={index} className="pickup-format-main pickup-request">
            <p>{request.name}</p>
            <p>{request.email}</p>
            <p>{request.mobile}</p>
            <p>{request.address}</p>
            <p>{request.pincode}</p>
            <p>{new Date(request.pickupDate).toLocaleDateString()}</p>
            <img
              onClick={() => removePickupRequest(request._id)}
              className="remove-icon"
              src={remove_icon}
              alt="Remove"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PickupAdmin; 
