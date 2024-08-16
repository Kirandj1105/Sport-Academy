import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CoachDetails = () => {
  const [coaches, setCoaches] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserandCoachDetails = async () => {
      try {
        const response = await axios.get("http://localhost:8080/coach/all");
        setCoaches(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserandCoachDetails();
  }, []);

  const handleUserDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/coach/delete/${userId}`);
      
      const response = await axios.get("http://localhost:8080/coach/all");
      setCoaches(response.data);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEditClick = (userId) => {
   
    navigate(`/coachedit/${userId}`);
  };

  return (
    <Container className="details-container">
      <Row>
        <Col lg="12">
          <h2>User Details</h2>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <h3>Coaches:</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Coach ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {coaches.map((coach) => (
                <tr key={coach.id}>
                  <td>{coach.id}</td>
                  <td>{coach.firstName}</td>
                  <td>{coach.lastName}</td>
                  <td>
                    <Button variant="danger" onClick={() => handleUserDelete(coach.id)}>
                      Delete
                    </Button>{" "}
                    <Button variant="primary" onClick={() => handleEditClick(coach.id)}>
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default CoachDetails;