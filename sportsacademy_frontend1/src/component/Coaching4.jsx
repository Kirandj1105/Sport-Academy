import React from 'react';
import './css/Coaching.css';
import gymnasium from './images/gymnasium.png';
import { Link } from 'react-router-dom';

export function Coaching4(){
    return (
        <div className="card">
             <div className="button-container">
                                 
                                 <Link to="/coaching" className="button">Go Back</Link>
                             </div>
        <h2 className='facilities-title'>Gymnasium</h2>
        <div className="card-content">
            <div className="card-column left">
                <h5>Synthetic mat floor with necessary cardio and strengthening equipment</h5>
                <h5><b>Campus : </b>Somaiya Vidyavihar</h5>
                <hr />
                            <p>Gymnasium 7+ years students training</p>
                            <p>Duration : 15 Feb 2024 to 15 Dec 2024</p>
                            <p>Days of week : Monday To Friday</p>
                            <p>Time Slot : 10 am to 5 pm</p>
                            <hr />
                            <h5>Amenities</h5>
                            <p>All Gymnasium related things</p>
            </div>
            <div className="card-column right">
                <div className="fakeimg" style={{ height: '300px', width: '100%', overflow: 'hidden' }}>
                    <img src={gymnasium} className="Img d-block w-100 h-100" alt="First slide" style={{ objectFit: 'cover' }} />
                </div>
                
            </div>
        </div>
    </div>
    )
}