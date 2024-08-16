// UserDetails.jsx
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserandCoachDetails = async () => {
      try {
        const response = await axios.get("http://localhost:8080/user/all");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserandCoachDetails();
  }, []);

  const handleUserDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/user/delete/${userId}`);
      // Refresh the user list after deletion
      const response = await axios.get("http://localhost:8080/user/all");
      setUsers(response.data);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleEditClick = (userId) => {
    // Navigate to the EditEvent page with the user ID as a parameter
    navigate(`/edituser/${userId}`);
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
                <th>User ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>
                    <Button variant="danger" onClick={() => handleUserDelete(user.id)}>
                      Delete
                    </Button>{" "}
                    <Button variant="primary" onClick={() => handleEditClick(user.id)}>
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

export default UserDetails;