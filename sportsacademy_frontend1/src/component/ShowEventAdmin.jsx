import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/ShowEvent.css';

const ShowEventAdmin = () => {
  const [events, setEvents] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/all");
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleEdit = (eventId) => {
    history(`/editevent/${eventId}`);
  };

  const handleDelete = async (eventId) => {
    try {
      const userConfirmed = window.confirm('Are you sure you want to delete this event?');
  
      if (!userConfirmed) {
        return;
      }
  
      await axios.delete(`http://localhost:8080/delete/${eventId}`);
      const updatedEvents = events.filter((event) => event.id !== eventId);
      setEvents(updatedEvents);
      console.log(`Event with ID ${eventId} deleted successfully`);
      window.alert('Event deleted successfully!');
    } catch (error) {
      console.error(`Error deleting event with ID ${eventId}:`, error);
      window.alert('Error deleting event. Please try again.');
    }
  };

  return (
    <div className="event-container">
      <h1>Events List</h1>
      {events.map((event) => (
        <div className="event" key={event.id}>
          <div className="event-left">
            <div className="date">{new Date(event.date).getDate()}</div>
            <div className="month">{new Date(event.date).toLocaleString('default', { month: 'short' })}</div>
          </div>
          <div className="event-right">
            <h3 className="event-title">{event.title}</h3>
            <div className="event-timing">
              <span>{event.time}</span>
            </div>
            <p>
              <strong>Description:</strong> {event.description}
            </p>
            <p>
              <strong>Address:</strong> {event.address}
            </p>
            <div className="event-actions">
              <button className="edit-button" onClick={() => handleEdit(event.id)}>
                Edit
              </button>
              <button className="delete-button" onClick={() => handleDelete(event.id)}>
                Delete
              </button>
            </div>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowEventAdmin;
