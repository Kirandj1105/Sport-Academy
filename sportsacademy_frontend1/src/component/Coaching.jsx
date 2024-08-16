import React from 'react';
import './css/Coaching.css';
import atheletics from './images/Athletics.png';
import basketball from './images/basketball.png';
import football from './images/Football.png';
import gymnasium from './images/gymnasium.png';
import { useNavigate } from 'react-router-dom';

export function Coaching() {

    const navigate = useNavigate();

    const handleButtonClick = () => {
        
        navigate('/coaching1');
    };

    const navigate2 = useNavigate();

    const handleButtonClick2 = () => {
        
        navigate2('/coaching2');
    };

    const navigate3 = useNavigate();

    const handleButtonClick3 = () => {
        
        navigate3('/coaching3');
    };

    const navigate4 = useNavigate();

    const handleButtonClick4 = () => {
        
        navigate4('/coaching4');
    };
    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <div className="header">
                <h2>Coaching</h2>
               
            </div>

            <div className="row">
                <div className="leftcolumn">

                    <div className="card">
                        <h2 className='facilities-title'>Athletics Coaching 7 years and above</h2>
                        <div className="card-content">
                            <div className="card-column left">
                                <h5 className='details'><b>Campus : </b>CDAC Mumbai Campus</h5>
                                <div className="button-container">
                               <input type="button" id="button1" value="Click To Know More..." onClick={handleButtonClick}/><br/>
                            </div>
                            </div>

                            <div className="card-column right">
                                <div className="fakeimg" style={{ height: '300px', width: '100%', overflow: 'hidden' }}>
                                    <img src={atheletics} className="Img d-block w-100 h-100" alt="First slide" style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                           
                        </div>
                    </div>

                    <div className="card">
                        <h2 className='facilities-title'>Basketball</h2>
                        <div className="card-content">
                            <div className="card-column left">
                                <h5>Synthetic Acrylic Coated Basketball Court which is used to train the school, college and academy Ba...</h5>
                                <h5><b>Campus : </b>Somaiya Vidyavihar</h5>
                                <div className="button-container">
                                <input type="button" id="button1" value="Click To Know More..." onClick={handleButtonClick2}/><br/>
                                </div>
                            </div>
                            <div className="card-column right">
                                <div className="fakeimg" style={{ height: '300px', width: '100%', overflow: 'hidden' }}>
                                    <img src={basketball} className="Img d-block w-100 h-100" alt="First slide" style={{ objectFit: 'cover' }} />
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h2 className='facilities-title'>Football</h2>
                        <div className="card-content">
                            <div className="card-column left">
                                <h5>65 m X 105 m natural grass field, one of very few well-maintained grass Football fields across Mumba...</h5>
                                <h5><b>Campus : </b>Somaiya Vidyavihar</h5>
                                <div className="button-container">
                                <input type="button" id="button1" value="Click To Know More..." onClick={handleButtonClick3}/><br/>
                                </div>
                            </div>
                            <div className="card-column right">
                                <div className="fakeimg" style={{ height: '300px', width: '100%', overflow: 'hidden' }}>
                                    <img src={football} className="Img d-block w-100 h-100" alt="First slide" style={{ objectFit: 'cover' }} />
                                </div>
                               
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <h2 className='facilities-title'>Gymnasium</h2>
                        <div className="card-content">
                            <div className="card-column left">
                                <h5>Synthetic mat floor with necessary cardio and strengthening equipment</h5>
                                <h5><b>Campus : </b>Somaiya Vidyavihar</h5>
                                <div className="button-container">
                                <input type="button" id="button1" value="Click To Know More..." onClick={handleButtonClick4}/><br/>
                                </div>
                            </div>
                            <div className="card-column right">
                                <div className="fakeimg" style={{ height: '300px', width: '100%', overflow: 'hidden' }}>
                                    <img src={gymnasium} className="Img d-block w-100 h-100" alt="First slide" style={{ objectFit: 'cover' }} />
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer-margin"></div>
        </div>
    );
};