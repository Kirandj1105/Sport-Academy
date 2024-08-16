import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';


const EditEvent = () => {
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
        const response = await axios.get(`http://localhost:8080/${eventId}`);
        setEventData(response.data);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.put(`http://localhost:8080/update/${eventId}`, eventData);
      console.log('Event updated successfully!');
      window.alert('Event updated successfully!');
      history.push('/showevent');
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  return (
    <div>
      <h1 className="editEvent-heading">Edit Event</h1>
      <form onSubmit={handleSubmit}>
        <label>
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
        <label>
          Description:
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={eventData.address}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={eventData.time}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit" className="Add-Event-button">Save Changes</button>
        <Link to="/showevent" className="goBack-button">Cancel</Link>
      </form>
    </div>
  );
};

export default EditEvent;