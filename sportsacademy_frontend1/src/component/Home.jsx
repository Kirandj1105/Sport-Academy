import React from 'react';
import { Container } from 'react-bootstrap';
import { Carousel } from "react-bootstrap";

import './css/footer.css';
import './css/style.css';
import cricket1 from './images/cricket1.jpg';
import football2 from './images/football2.jpg'
import basketball3 from './images/basketball3.jpg';


export function Home() {

  const divStyle = {
    backgroundImage: 'url("data:image/jpeg;base64,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")',
    backgroundSize:'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="home-page">
    <Container expand="lg" className="home-container"> 
       <header id="homehead">
         
       </header>
       <>
        <div class="image-container">
         <Carousel data-bs-theme="dark">
         <Carousel.Item>
          <img src={cricket1} className="Img d-block w-100" alt="First slide" />
          <Carousel.Caption>
            <h3 className="shadows">Winning isn't everything, but wanting to win is.</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          
          <img src={football2} className="Img d-block w-100" alt="Second slide" />

          <Carousel.Caption>
            <h3 className="shadows"> To be the man, you have to beat the man.</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={basketball3} className="Img d-block w-100" alt="Third slide" />
          <Carousel.Caption>
            <h3 className="shadows">A champion is someone who gets up when he can't.</h3>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      </div>
      </>
    </Container>
      <div style={divStyle}>
      <h1 className="our-vision">Our Vision</h1>
      <h3 className="our-vision-paragraph">Our Vision is to help children lead a healthy and active lifestyle,
         not only during their childhood but throughout their lives.
        The Sports Gurukul strives to create a launch pad for sporting excellence,
         particularly for those with exceptional talents, with the aim of producing
          international sports champion who will bring glory to India.</h3>
      </div>
    </div>
   
  );
}