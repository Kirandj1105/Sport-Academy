import React from 'react';
import './css/Coaching.css';
import basketball from './images/basketball.png';
import { Link } from 'react-router-dom';

export function Coaching2(){
    return (
        <div className="card">
             <div className="button-container">
                                 
                                 <Link to="/coaching" className="button">Go Back</Link>
                             </div>
                        <h2 className='facilities-title'>Basketball</h2>
                        <div className="card-content">
                            <div className="card-column left">
                                <h5>Synthetic Acrylic Coated Basketball Court which is used to train the school, college and academy Ba...</h5>
                                <h5><b>Campus : </b>CDAC Mumbai  Campus</h5>
                                <hr />
                            <p>Basketball 7+ years students training</p>
                            <p>Duration : 1 Feb 2024 to 1 Nov 2024</p>
                            <p>Days of week : Monday To Saturday</p>
                            <p>Time Slot : 8 am to 6 pm</p>
                            <hr />
                            <h5>Amenities</h5>
                            <p>Basketball Court and practice court</p>
                            </div>
                           
                            
                            <div className="card-column right">
                                <div className="fakeimg" style={{ height: '300px', width: '100%', overflow: 'hidden' }}>
                                    <img src={basketball} className="Img d-block w-100 h-100" alt="First slide" style={{ objectFit: 'cover' }} />
                                </div>
                                
                            </div>
                        </div>
                    </div>
    )
}