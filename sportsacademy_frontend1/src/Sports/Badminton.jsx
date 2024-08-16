import React from 'react';
import YouTube from 'react-youtube';
import banner from '../component/images/baseball.webp'
import tt1 from '../component/images/tabletennis.webp';
import './Badminton.css'; 

function Badminton() {
  const videoId = 'UyLIi-TbcFc';

  return (
    <div className="badminton-info-page">
      <h1 className="text-warning">Badminton Information Page</h1>
      <div className="content">
        <img src={banner} alt="Badminton" className="badminton-image" />
        <div className="aboutUs-container">
          <h2 className="heading-container-about about-us">Welcome to the Badminton Information Page!</h2>
          <div className="heading-container-about text-center">
            <p className="para-content">
              Badminton is a sport which enthralls all and played by masses with only few who reach the desired level. Manav Rachna Sports Academy finds hidden and raw talent and grooms them to be the shining stars of Badminton by providing every possible measure and exposure to bring out the best in them. We are running three kinds of programs catering the need and level of players in which we follow specific game plans so as to stretch their comfort zones every now and then and to make each session harder than the previous one so as to make the body realize enough is not enough in our training modules.
            </p>
          </div>
        </div>
      </div>
      <div id='yt'>
        <h2 className="text-warning">YouTube Video</h2>
        <YouTube videoId={videoId} />
      </div>
      <div className="badminton-facilities-container"> {/* Add a container for Badminton Facilities section */}
        <h1 className="text-warning">Badminton Facilities</h1>
        <div className="heading-container-about text-center">
          <p className="para-content">
           Lakshya Sports Academy is the first of its kind who possess fully air-conditioned six synthetic indoor Badminton courts facility in Haryana, equipped with the latest amenities matching international standards.
            A tie-up with YONEX ensures that apparels, accessories and entire kits for the sponsored students and coaches are never in short supply.
            Separate Boys and Girls Locker rooms to take rest during the long hours of grueling sessions.
          </p>
        </div>
        <img src={tt1} alt="timetable" className="tt1" />
      </div>
    </div>
  );
}

export default Badminton;
