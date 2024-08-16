// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import DisplaySelectedSports from './DisplaySelectedSport';
// import './css/ShowSport.css';

// const ShowSport = ({ isAuthenticated }) => {
//   const [sports, setSports] = useState([]);
//   const [selectedSports, setSelectedSports] = useState([]);
//   const [redirectToDisplay, setRedirectToDisplay] = useState(false);
//   const history = useNavigate();

//   useEffect(() => {
//     const fetchSports = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/allSports");
//         setSports(response.data);
//       } catch (error) {
//         console.error('Error fetching sports:', error);
//       }
//     };

//     fetchSports();
//   }, []); 

//   const handleSelectSport = (sport) => {
//     if (isAuthenticated) {
//       setSelectedSports((prevSelectedSports) => [...prevSelectedSports, sport]);
//       setRedirectToDisplay(true);
//     } else {      
//       history('/displayselectedsport', { state: { sport } });
//     }
//   };

//   if (redirectToDisplay) {
//     return <DisplaySelectedSports selectedSports={selectedSports} />;
//   }

//   return (
//     <div className="sport-container">
//       <h1 className="sportlist-heading">Sports List</h1>
//       {sports.map((sport) => (
//         <div className={`sport ${selectedSports.includes(sport) ? 'selected' : ''}`} key={sport.id}>
//           <div className="sport-right">
//             <h3 className="sport-title">{sport.title}</h3>
//             <p>
//               <strong>Description:</strong> {sport.description}<br />
//               <strong>Fees:</strong> {sport.fee}
//             </p>
//             <button onClick={() => handleSelectSport(sport)} className="showsport-select-button">Select</button>
//             <hr />
//           </div>
//         </div>
//       ))}
//       {isAuthenticated ? (
//         <div>
//           {/* Submit button is not needed here since it's handled after selecting a sport */}
//         </div>
//       ) : (
//         <div className="showsport-lin-reg-text">
//           <p>
//             Here You Can <Link to="/login">log in</Link> or{' '}
//             <Link to="/registration">register</Link> to our website.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShowSport;









import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './css/ShowSport.css';

const ShowSport = ({ isAuthenticated }) => {
  const [sports, setSports] = useState([]);
  const [selectedSports, setSelectedSports] = useState([]);
  const navigate = useNavigate();

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

  const handleSelectSport = (sport) => {
    if (isAuthenticated) {
      setSelectedSports((prevSelectedSports) => [...prevSelectedSports, sport]);
      navigate('/payment', { state: { selectedSport: sport } });
    } else {      
      navigate('/selectedsport', { state: { sport } });
    }
  };

  return (
    <div className="sport-container">
      <h1>Sports List</h1>
      {sports.map((sport) => (
        <div className={`sport ${selectedSports.includes(sport) ? 'selected' : ''}`} key={sport.id}>
          <div className="sport-right">
            <h3 className="sport-title">{sport.title}</h3>
            <p>
              <strong>Description:</strong> {sport.description}<br />
              <strong>Fees:</strong> {sport.fee}
            </p>
            <button onClick={() => handleSelectSport(sport)}>Select</button>
            <hr />
          </div>
        </div>
      ))}
      {!isAuthenticated && (
        <div>
          <p>
            You need to <Link to="/login">log in</Link> or{' '}
            <Link to="/registration">register</Link> to select a sport.
          </p>
        </div>
      )}
    </div>
  );
};

export default ShowSport;