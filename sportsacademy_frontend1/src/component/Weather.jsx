import React, { useState } from 'react';
import './css/Weather.css';

export const Weather = () => {
  const [city, setCity] = useState('');
  const [location, setLocation] = useState('');
  const [temperature, setTemperature] = useState('');
  const [icon, setIcon] = useState('');
  const [condition, setCondition] = useState('');

  const fetchWeather = async () => {
    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=d84d5cb791cf4db694b131732233011&q=${city}&aqi=no`);
      const weather = await response.json();

      setLocation(`${weather.location.name}, ${weather.location.region}, ${weather.location.country}`);
      setTemperature(`${weather.current.temp_c}°C | ${weather.current.temp_f}°F`);
      setIcon(`http:${weather.current.condition.icon}`);
      setCondition(weather.current.condition.text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>


      <div className="container mt-5">
        <div className="alert alert-success" role="alert">
          Welcome to weather app
        </div>

        <div className="container weather-container">
          <div className="row">
            <div className="col-lg-3">
              <div className="mb-3">
                <label htmlFor="city" className="form-label wthcity-title">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Enter name of the city"
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mt-4">

                <button
                  type="button"
                  className="fetchwth-button"
                  onClick={fetchWeather}
                  id="btn"
                >
                  <span class="actual-text">&nbsp;Weather&nbsp;</span>
                  <span aria-hidden="true" class="hover-text">&nbsp;Weather&nbsp;</span>
                </button>


              </div>
            </div>
          </div>
        </div>


        <div className="weather-cardContainer">
          <div className="weather-card">
            <div className="city" id="location">{location}</div>
            <img src={icon} alt="Weather Icon" className="icon" id="icon" />
            <div className="temp" id="temperature">{temperature}</div>
            <div className="weather" id="condition">{condition}</div>
            <div className="minmaxContainer">
              <div className="min">
                <div className="minHeading">Min</div>
                <div className="minTemp"></div>
              </div>
              <div className="max">
                <div className="maxHeading">Max</div>
                <div className="maxTemp"></div>
              </div>
            </div>
          </div>
        </div>    
      </div>
    </div>
  );
};

export default Weather;
