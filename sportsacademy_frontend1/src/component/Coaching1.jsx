import React from 'react';
import './css/Coaching.css';
import atheletics from './images/Athletics.png';
import { Link } from 'react-router-dom';

export function Coaching1() {
    return (
    
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <div className="header">
              <h2>Athletics</h2>
               
            </div>
        

            <div className="row">
                <div className="leftcolumn">
                

                    <div className="card">
                    <div className="button-container">
                                 
                                 <Link to="/coaching" className="button">Go Back</Link>
                             </div>
                        <h2 className='facilities-title'>Athletics Coaching 7 years and above</h2>
                        <div className="card-content">
                            <div className="card-column left">
                                <h5 className='details'><b>Campus : </b>CDAC Mumbai Campus</h5>
                            <hr />
                            <p>Athletics 7+ years students training</p>
                            <p>Duration : 15 Feb 2024 to 15 Dec 2024</p>
                            <p>Days of week : Monday To Friday</p>
                            <p>Time Slot : 10 am to 5 pm</p>
                            <hr />
                            <h5>Amenities</h5>
                            <p>Synthetic tracks and gym facilities</p>
                            </div>

                            <div className="card-column right">
                                <div className="fakeimg" style={{ height: '300px', width: '100%', overflow: 'hidden' }}>
                                    <img src={atheletics} className="Img d-block w-100 h-100" alt="First slide" style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                   
    );
};