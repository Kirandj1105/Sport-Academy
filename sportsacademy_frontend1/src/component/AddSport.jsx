import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './css/AddSport.css';

export const AddSport = () => {
  const { sportId } = useParams();
  const history = useNavigate();
  const [sportData, setSportData] = useState({
    title: '',
    description: '',
    fee:'',
  });

  useEffect(() => {
    const fetchSportData = async () => {
      try {
        if (sportId) {
          const response = await axios.get(`http://localhost:8080/sport/${sportId}`);
          setSportData(response.data);
        }
      } catch (error) {
        console.error('Error fetching sport data:', error);
      }
    };

    fetchSportData();
  }, [sportId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSportData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!sportData.title || !sportData.description || !sportData.fee) {
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
      if (sportId) {
        await axios.put(`http://localhost:8080/updateSport/${sportId}`, sportData);
        window.alert('Sport updated successfully!');
      } else {
        await axios.post("http://localhost:8080/createSport", sportData);
        window.alert('Sport added successfully!');
      }
      console.log('Sport saved successfully!');
      history('/showSport');
    } catch (error) {
      console.error('Error saving sport:', error);
      window.alert('Error saving sport. Please try again.');
    }
  };

  return (
    <div>
      <h1 className="editsport-heading">{sportId ? 'Edit Sport' : 'Add Sport'}</h1>
      <form onSubmit={handleSubmit} className="addsport-form">
        <label className="addsport-field-title">
          Title:
          <input
            type="text"
            name="title"
            value={sportData.title}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label className="addsport-field-title">
          Description:
          <textarea
            name="description"
            value={sportData.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label className="addsport-field-title">
          Fee:
          <textarea
            name="fee"
            value={sportData.fee}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit" className="Add-Sport-button">
          {sportId ? 'Save Changes' : 'Add Sport'}
        </button>
        <Link to="/showsport" className="goBack-button" id="goBack-button">
          Go back to Sport List
        </Link>
      </form>
    </div>
  );
};

export default AddSport;
