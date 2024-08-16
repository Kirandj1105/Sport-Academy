import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/Admin.css';
import adminbadminton from './images/adminbadminton2.png';

const Admin = () => {
  return (
    <Container className="admin-container">
      <Row>
        <Col lg="12" className="admin-heading">
          <h2 id="admin-heading"><b>Welcome, Admin!</b></h2>
        </Col>
      </Row>
      <Row>
        <Col lg="12" className="admin-heading">
          <img src={adminbadminton} className=" adminbadminton" alt="admin badminton" />
        </Col>
      </Row>
      <Row>
        <Col lg="12" className="admin-buttons">

          
            <Button as={Link} to="/addevent" variant="primary">
              Add Event
            </Button>&nbsp;&nbsp;
          

          <Button as={Link} to="/showEventAdmin" variant="success">
            Show Events
          </Button>&nbsp;&nbsp;

          <Button as={Link} to="/addsport" variant="primary">
            Add Sport
          </Button>&nbsp;&nbsp;
          <Button as={Link} to="/showSportAdmin" variant="success">
            Show Sports
          </Button>&nbsp;&nbsp;

          <Button as={Link} to="/details" variant="info">
            Details
          </Button>

        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
