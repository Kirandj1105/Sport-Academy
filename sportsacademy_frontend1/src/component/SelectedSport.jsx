import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SelectedSport = () => {
  const [sports, setSports] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserandCoachDetails = async () => {
      try {
        const response = await axios.get("http://localhost:8080/allSports");
        setSports(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserandCoachDetails();
  }, []);

  // const handleUserDelete = async (sportId) => {
  //   try {
  //     await axios.delete(`http://localhost:8080/deleteSport/${sportId}`);
  //     const response = await axios.get("http://localhost:8080/sport/all");
  //     setSports(response.data);
  //   } catch (error) {
  //     console.error("Error deleting user:", error);
  //   }
  // };


  const handlePaymentClick = () => {
    navigate('/payment');
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
          <h3>Users:</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Sport ID</th>
                <th>Sport_Name</th>
                <th>Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sports.map((sport) => (
                <tr key={sport.id}>
                  <td>{sport.id}</td>
                  <td>{sport.title}</td>
                  <td>{sport.fee}</td>
                  <td>
                    {/* <Button variant="danger" onClick={() => handleUserDelete(sport.id)}>
                      Delete
                    </Button>{" "} */}
                    <Button variant="success" onClick={handlePaymentClick}>
                      Pay
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

export default SelectedSport;