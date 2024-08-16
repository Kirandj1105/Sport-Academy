import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './css/AddEvent.css';

export const AddEvent = () => {
  const { eventId } = useParams();
  const history = useNavigate();
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    address: '',
    time: '',
    date: '',
  });

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        if (eventId) {
          const response = await axios.get(`http://localhost:8080/${eventId}`);
          setEventData(response.data);
        }
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEventData();
  }, [eventId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!eventData.title || !eventData.description || !eventData.address || !eventData.time || !eventData.date) {
      window.alert('Please fill in all fields.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      if (eventId) {
        await axios.put(`http://localhost:8080/update/${eventId}`, eventData);
        window.alert('Event updated successfully!');
      } else {
        await axios.post("http://localhost:8080/create", eventData);
        window.alert('Event added successfully!');
      }
      console.log('Event saved successfully!');
      history('/showEvent');
    } catch (error) {
      console.error('Error saving event:', error);
      window.alert('Error saving event. Please try again.');
    }
  };

  return (
    <div>
      <div className="editEvent-heading"><h1>{eventId ? 'Edit Event' : 'Add Event'}</h1></div>
      <form onSubmit={handleSubmit} className="addevent-form">
        <label className="addevent-field-title">
          Title:
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label className="addevent-field-title">
          Description:
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label className="addevent-field-title">
          Address:
          <input
            type="text"
            name="address"
            value={eventData.address}
            onChange={handleInputChange}
            required
          />
        </label >
        <br />
        <label className="addevent-field-title">
          Time:
          <input
            type="time"
            name="time"
            value={eventData.time}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label className="addevent-field-title">
          Date:
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit" className="Add-Event-button">
          {eventId ? 'Save Changes' : 'Add Event'}
        </button>
        <Link to="/showevent" className="goBack-button">
          <p id="goBack-button">Go back to Events List</p>
        </Link>
      </form>
    </div>
  );
};

export default AddEvent;
