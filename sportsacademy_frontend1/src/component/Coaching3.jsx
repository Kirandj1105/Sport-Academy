import React from 'react';
import './css/Coaching.css';
import football from './images/Football.png';
import { Link } from 'react-router-dom';

export function Coaching3(){
    return (
        <div className="card">
             <div className="button-container">
                                 
                                 <Link to="/coaching" className="button">Go Back</Link>
                             </div>
        <h2 className='facilities-title'>Football</h2>
        <div className="card-content">
            <div className="card-column left">
                <h5>65 m X 105 m natural grass field, one of very few well-maintained grass Football fields across Mumba...</h5>
                <h5><b>Campus : </b>Somaiya Vidyavihar</h5>
                <hr />
                            <p>Football 7+ years students training</p>
                            <p>Duration : 1 March 2024 to 15 Oct 2024</p>
                            <p>Days of week : Monday To Friday</p>
                            <p>Time Slot : 10 am to 5 pm</p>
                            <hr />
                            <h5>Amenities</h5>
                            <p>Football Field and practice ground</p>
            </div>
            <div className="card-column right">
                <div className="fakeimg" style={{ height: '300px', width: '100%', overflow: 'hidden' }}>
                    <img src={football} className="Img d-block w-100 h-100" alt="First slide" style={{ objectFit: 'cover' }} />
                </div>
               
            </div>
        </div>
    </div>
    )
}