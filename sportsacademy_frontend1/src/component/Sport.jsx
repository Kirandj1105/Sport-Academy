import React from 'react';
// import './css/Sport.css';
import calender from './images/calender.png';

export function Sport() {
  return (
    <div className="sport-container">
      <h3 className="year">2023</h3>

      <div className="sport">
        <div className="sport-left">
          <div className="sport-date">
            <div className="date">29</div>
            <div className="month">Dec</div>
          </div>
        </div>

        <div className="sport-right">
          <h3 className="sport-title">37th National Junior Athletics Championship</h3>

          <div className="sport-description">
            Once again the 37th National Junior Athletics Championship is going to be held in Assam, sources stated on Sunday....
          </div>

          <div className="sport-timing">
            <img src={calender} className="Img d-block w-100" alt="First slide" /> 10:00 am 
          </div>
        </div>
      </div>

      <div className="sport">
        <div className="sport-left">
          <div className="sport-date">
            <div className="date">31</div>
            <div className="month">Dec</div>
          </div>
        </div>

        <div className="sport-right">
          <h3 className="sport-title">72nd Senior National Basketball Championship</h3>

          <div className="sport-description">
            Meghalaya Basketball Association’s Men and Women Senior Team will represent the State at the 1st phase of the 72nd Senior National Basketball....
          </div>

          <div className="sport-timing">
            <img src={calender} className="Img d-block w-100" alt="First slide" /> 10:45 am
          </div>
        </div>
      </div>

      <h3 className="year">2024</h3>

      <div className="sport">
        <div className="sport-left">
          <div className="sport-date">
            <div className="date">8</div>
            <div className="month">Jan</div>
          </div>
        </div>

        <div className="sport-right">
          <h3 className="sport-title">After FIFA World Cup, Qatar set to host AFC Asian Cup in 2023</h3>

          <div className="sport-description">
            The AFC Asian Championship 2023 is finally set to find a home. The tournament had been delayed multiple times over the....
          </div>

          <div className="sport-timing">
            <img src={calender} className="Img d-block w-100" alt="First slide" /> 10:00 am
          </div>
        </div>
      </div>

      <h3 className="year">2024</h3>

      <div className="sport">
        <div className="sport-left">
          <div className="sport-date">
            <div className="date">20</div>
            <div className="month">Jan</div>
          </div>
        </div>

        <div className="sport-right">
          <h3 className="sport-title">China to host Asian Games in 2023 after Covid postponement</h3>

          <div className="sport-description">
            China will host the 2022 Asian Games in 2023, organisers said on Tuesday, after postponing the event in Hangzhou because of Covid.....
          </div>

          <div className="sport-timing">
            <img src={calender} className="Img d-block w-100" alt="First slide" /> 10:00 am
          </div>
        </div>
      </div>

      {/* Add more sport events as needed */}

      <h3 className="year">2024</h3>

      <div className="sport">
        <div className="sport-left">
          <div className="sport-date">
            <div className="date">10</div>
            <div className="month">Feb</div>
          </div>
        </div>

        <div className="sport-right">
          <h3 className="sport-title">India Tour of New Zealand 2024</h3>

          <div className="sport-description">
            After the T20 World Cup 2022 in Australia, team India will leave for New Zealand, where a T20 International match will be....
          </div>

          <div className="sport-timing">
            <img src={calender} className="Img d-block w-100" alt="First slide" /> 10:00 am
          </div>
        </div>
      </div>

    </div>
  );
};
