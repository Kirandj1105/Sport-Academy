import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './css/DisplaySelectedSport.css';

const DisplaySelectedSports = () => {
  const location = useLocation();
  const [selectedSport, setSelectedSport] = useState(null);

  useEffect(() => {
    if (location.state && location.state.sport) {
      setSelectedSport(location.state.sport);
    }
  }, [location.state]);

  return (
    <div className="display-selected-sport">
      <h1 className="dss-heading">Selected Sport</h1>
      {selectedSport && (
        <div key={selectedSport.id}>
          <h3>{selectedSport.title}</h3>
          <p>
            <strong className="dss-description">Description:</strong> {selectedSport.description}<br />
            <strong className="dss-description">Fees:</strong> {selectedSport.fee}
          </p>
          <button className="displayselectedsport-button">Submit</button>
          
        </div>
        
      )}
    </div>
  );
};

export default DisplaySelectedSports;
