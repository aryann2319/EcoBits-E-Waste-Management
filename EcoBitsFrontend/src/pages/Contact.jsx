import React, { useState } from 'react';
import '../styles/Contact.css';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:4000/collaborate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.success) {
      toast('Request submitted! Our Executives will contact you within 1-2 business days');
      setFormData({ name: '', phone: '', email: '', message: '' }); 
    } else {
      toast('Failed to send collaboration request.');
    }
  };

  return (
    <div className="contact-container">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="contact-info">
        <h2>Get in touch to collaborate<br />with us!</h2>
        <p>Looking to collaborate through a seminar, workshop, or a collection stall?<br />We’d love to hear from you! Our team is here to support and assist with any questions or partnership opportunities.</p>

        <div className="info-box">
          <img src="https://img.icons8.com/ios/50/000000/new-post.png" alt="Email Icon" />
          <div>
            <h3>Email</h3>
            <p>info@ecobits.com</p>
          </div>
        </div>

        <div className="info-box">
          <img src="https://img.icons8.com/ios/50/000000/phone.png" alt="Phone Icon" />
          <div>
            <h3>Phone</h3>
            <p>991937481</p>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name <span>*</span></label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Name" required />

          <label htmlFor="phone">Phone <span>*</span></label>
          <input type="text" id="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Your Phone" required />

          <label htmlFor="email">Email <span>*</span></label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>

          <button type="submit" id="contact-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
