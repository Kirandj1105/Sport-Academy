import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const EditSport = () => {
  const { sportId } = useParams();
  const history = useNavigate();
  const [sportData, setSportData] = useState({
    name: '',
    description: '',
  });

  useEffect(() => {
    const fetchSportData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/sport/${sportId}`);
        setSportData(response.data);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:4568/updateSport/${sportId}`, sportData);
      console.log('Sport updated successfully!');
      window.alert('Sport updated successfully!');
      history.push('/showSport');
    } catch (error) {
      console.error('Error updating sport:', error);
    }
  };

  return (
    <div>
      <h1 className="editSport-heading">Edit Sport</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={sportData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={sportData.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit" className="Edit-Sport-button">Save Changes</button>
        <Link to="/showSport" className="goBack-button">Cancel</Link>
      </form>
    </div>
  );
};

export default EditSport;