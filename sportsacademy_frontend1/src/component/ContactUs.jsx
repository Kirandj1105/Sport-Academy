import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './css/ContactUs.css';

const sendEmail = (e, formData) => {
  e.preventDefault();
  
  emailjs
    .sendForm('service_a2vj38i', 'template_gcpvo2n', e.target, {
      publicKey: 'PsRVdc_vgPcNc1Lxd',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
};

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('success');
        console.log('Form submitted successfully');
        sendEmail(e, formData); 
      } else {
        setSubmissionStatus('failure');
        console.error('Form submission failed');
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="contactus-main-container">
      <h2 className="contactus-heading">Contact Us</h2>
      {submissionStatus === 'success' && (
        <div style={{ color: 'green' }}>Form submitted successfully!</div>
      )}
      {submissionStatus === 'failure' && (
        <div style={{ color: 'red' }}>Form submission failed. Please try again.</div>
      )}
      {submissionStatus === 'error' && (
        <div style={{ color: 'red' }}>Error submitting form. Please try again later.</div>
      )}
      <form onSubmit={handleSubmit} className="contactus-form">
        <label>
          Name:
          <input
          className="contactus-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;