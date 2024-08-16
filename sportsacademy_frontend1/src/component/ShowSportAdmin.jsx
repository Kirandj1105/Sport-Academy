import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/ShowEvent.css';

const ShowSportAdmin = () => {
  const [sports, setSports] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    const fetchSports = async () => {
      try {
        const response = await axios.get("http://localhost:8080/allSports");
        setSports(response.data);
      } catch (error) {
        console.error('Error fetching sports:', error);
      }
    };

    fetchSports();
  }, []);

  const handleEdit = (sportId) => {
    history(`/editsport/${sportId}`);
  };

  const handleDelete = async (sportId) => {
    try {
      const userConfirmed = window.confirm('Are you sure you want to delete this sport?');
  
      if (!userConfirmed) {
        return;
      }
  
      await axios.delete(`http://localhost:8080/deleteSport/${sportId}`);
      const updatedSports = sports.filter((sport) => sport.id !== sportId);
      setSports(updatedSports);
      console.log(`Sport with ID ${sportId} deleted successfully`);
      window.alert('Sport deleted successfully!');
    } catch (error) {
      console.error(`Error deleting sport with ID ${sportId}:`, error);
      window.alert('Error deleting sport. Please try again.');
    }
  };

  return (
    <div className="sport-container">
      <h1 className="adminsportlist-heading">Sports List</h1>
      {sports.map((sport) => (
        <div className="sport" key={sport.id}>
          {/* <div className="sport-left">
           
            <div className="date">{new Date(sport.createdAt).getDate()}</div>
            <div className="month">{new Date(sport.createdAt).toLocaleString('default', { month: 'short' })}</div>
          </div> */}
          <div className="sport-right">
            <h3 className="sport-title">{sport.title}</h3>
            <p>
              <strong>Description:</strong> {sport.description}
            </p>
            <div className="sport-actions">
              <button className="edit-button" onClick={() => handleEdit(sport.id)}>
                Edit
              </button>
              <button className="delete-button" onClick={() => handleDelete(sport.id)}>
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

export default ShowSportAdmin;