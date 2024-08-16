import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './css/footer.css';
import './css/style.css';


export  function Footer() {
  return (
    <MDBFooter bgColor='secondary' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span class="ftext">Get connected with us on social networks:</span>
        </div>

        <div>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" class="social-icon" id="ic">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" class="social-icon" id="ic">
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" class="social-icon" id="ic">
          <FaLinkedinIn />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" class="social-icon" id="ic">
          <FaInstagram />
        </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h5 className='text-uppercase fw-bold mb-4' class="ftext1">
                <MDBIcon icon="gem" className="me-3" />
                LAKSHYA
              </h5>
              <p class="ftext1">
              Our Vision
Olympic Dream India Sports Academy is committed to creating future champions on and off the field by inspiring and educating student-athletes to become purpose-driven leaders. We do this through highly specialized performance and personal development training and by equipping instructors to train and motivate students beyond their physical skill level.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' class="ftext">OUR SPORTS</h6>
              <p>
                <a href='#!' className='text-reset' class="ftext">
                  Athletics
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' class="ftext">
                  Football
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' class="ftext">
                  Tennis
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' class="ftext">
                  Basketball
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' class="ftext">Contact</h6>
              <p class="ftext">
                <MDBIcon icon="home" className="me-2" class="ftext"/>
                Mumbai, India
              </p>
              <p class="ftext">
                <MDBIcon icon="envelope" className="me-3" class="ftext"/>
                lakshya@gmail.com
              </p>
              <p class="ftext">
                <MDBIcon icon="phone" className="me-3" class="ftext"/> + 01 234 567 88
              </p>
              <p class="ftext">
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }} class="ftext">
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/' class="ftext">
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}