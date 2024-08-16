import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/Admin.css';

const CoachPage = () => {
  return (
    <Container className="admin-container">
      <Row>
        <Col lg="12" className="admin-heading">
          <h2>Welcome, Coach!</h2>
        </Col>
      </Row>
      <Row>
        <Col lg="12" className="admin-buttons">
          <Button as={Link} to="/addevent" variant="primary">
            Add Event
          </Button>{' '}
          <Button as={Link} to="/showEventAdmin" variant="success">
            Show Events
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default CoachPage;