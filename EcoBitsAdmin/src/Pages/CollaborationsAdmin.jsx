import React, { useState, useEffect } from 'react';
import '../styles/Collaborations.css'; 
import remove_icon from '../assets/removebin.png';

const collaborationsAdmin = () => {
  const [collabRequests, setCollabRequests] = useState([]);

  const fetchCollabRequests = async () => {
    await fetch('http://localhost:4000/getCollaborations')
      .then((res) => res.json())
      .then((data) => setCollabRequests(data));
  }; 

  useEffect(() => {
    fetchCollabRequests();
  }, []);

  const removeCollabRequest = async (id) => {
    await fetch('http://localhost:4000/removeCollaboration', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    fetchCollabRequests();
  };

  return (
    <div className="admin-collaboration">
      <h1>COLLABORATION REQUESTS</h1>
      <div className="collaboration-format-main">
        <p>Name</p>
        <p>Email</p>
        <p>Phone</p>
        <p>Message</p>
        <p>Date</p>
        <p>Remove</p>
      </div>
      <div className="collaboration-requests">
        <hr />
        {collabRequests.map((request, index) => (
          <div key={index} className="collaboration-format-main collaboration-request">
            <p>{request.name}</p>
            <p>{request.email}</p>
            <p>{request.phone}</p>
            <p style={{ maxWidth: '200px', overflowWrap: 'break-word' }}>{request.message}</p>
            <p>{new Date(request.date).toLocaleDateString()}</p>
            <img
              onClick={() => removeCollabRequest(request._id)}
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

export default collaborationsAdmin;
