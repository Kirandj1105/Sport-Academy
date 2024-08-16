import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/ShowEvent.css';

const ShowEvent = () => {
  const [events, setEvents] = useState([]);

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
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowEvent;
