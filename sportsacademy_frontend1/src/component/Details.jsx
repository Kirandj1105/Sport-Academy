import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button, Form } from 'react-bootstrap';
import './css/Details.css';

const Details = () => {
  const [users, setUsers] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [editingCoach, setEditingCoach] = useState(null);

  useEffect(() => {
    const fetchUserandCoachDetails = async () => {
      try {
        const response = await axios.get("http://localhost:8080/user/all");
        const response1 = await axios.get("http://localhost:8080/coach/all");

        setUsers(response.data);
        setCoaches(response1.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserandCoachDetails();
  }, []);

  const handleUserDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/user/delete/${userId}`);
      const response = await axios.get("http://localhost:8080/user/all");
      setUsers(response.data);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleCoachDelete = async (coachId) => {
    try {
      await axios.delete(`http://localhost:8080/coach/delete/${coachId}`);
      const response1 = await axios.get("http://localhost:8080/coach/all");
      setCoaches(response1.data);
    } catch (error) {
      console.error("Error deleting coach:", error);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleEditCoach = (coach) => {
    setEditingCoach(coach);
  };


  const handleEditField = (fieldName, value) => {
    if (editingUser) {
      setEditingUser((prevUser) => ({
        ...prevUser,
        [fieldName]: value,
      }));
    } else if (editingCoach) {
      setEditingCoach((prevCoach) => ({
        ...prevCoach,
        [fieldName]: value,
      }));
    }
  };
  

  const handleSaveUser = async () => {
    try {
      await axios.put(`http://localhost:8080/user/update/${editingUser.id}`, editingUser);
      setEditingUser(null);
      const response = await axios.get("http://localhost:8080/user/all");
      setUsers(response.data);
    } catch (error) {
      console.error("Error saving user:", error);
    }
  };

  const handleSaveCoach = async () => {
    try {
      await axios.put(`http://localhost:8080/coach/update/${editingCoach.id}`, editingCoach);
      setEditingCoach(null);
      const response1 = await axios.get("http://localhost:8080/coach/all");
      setCoaches(response1.data);
    } catch (error) {
      console.error("Error saving coach:", error);
    }
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
    setEditingCoach(null);
  };

  const handleAdminApprovalforUser = async (userId) => {
    try {
      const response = await axios.put(`http://localhost:8080/approve/user/${userId}`);

      const updatedUsers = users.map((user) =>
        user.id === userId ? { ...user, approvalStatus: 'approved' } : user
      );
      setUsers(updatedUsers);

      console.log(response.data);
    } catch (error) {
      console.error("Error during admin approval:", error);
    }
  };

  const handleAdminApprovalforCoach = async (coachId) => {
    try {
      const response = await axios.put(`http://localhost:8080/approve/coach/${coachId}`);
  
      const updatedCoaches = coaches.map((coach) =>
        coach.id === coachId ? { ...coach, approvalStatus: 'approved' } : coach
      );
      setCoaches(updatedCoaches);
  
      
      console.log(response.data);
    } catch (error) {
      console.error("Error during admin approval:", error);

    }
  };

  return (
    <Container className="details-container">
      <Row>
        <Col lg="12">
          <h2 className="userdetails-heading">User Details</h2>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <h3 className="users-heading">Users:</h3>
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
                  <td>
                    {editingUser && editingUser.id === user.id ? (
                      <Form.Control
                        type="text"
                        value={editingUser.firstName}
                        onChange={(e) => handleEditField('firstName', e.target.value)}
                      />
                    ) : (
                      user.firstName
                    )}
                  </td>
                  <td>{user.lastName}</td>
                  <td>
                    {editingUser && editingUser.id === user.id ? (
                      <>
                        <Button variant="success" onClick={handleSaveUser}>
                          Save
                        </Button>
                        <Button variant="secondary" onClick={handleCancelEdit}>
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <Button variant="warning" onClick={() => handleEditUser(user)}>
                        Edit
                      </Button>
                    )}
                    &nbsp;&nbsp;<Button variant="danger" onClick={() => handleUserDelete(user.id)}>
                      Delete
                    </Button>&nbsp;&nbsp;

                    {user.approvalStatus !== 'approved' ? (
                  <Button
                    variant="primary"
                    onClick={() => handleAdminApprovalforUser(user.id)}
                    disabled={user.approvalStatus === 'approved'}
                  >
                    {user.approvalStatus === 'approved' ? 'Approved' : 'Approve'}
                  </Button>
                ) : (
                  'Approved'
                )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <h3 className="users-heading">Coaches:</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {coaches.map((coach) => (
                <tr key={coach.id}>
                  <td>{coach.id}</td>
                  <td>
                    {editingCoach && editingCoach.id === coach.id ? (
                      <Form.Control
                        type="text"
                        value={editingCoach.firstName}
                        onChange={(e) => handleEditField('firstName', e.target.value)}
                      />
                    ) : (
                      coach.firstName
                    )}
                  </td>
                  <td>{coach.lastName}</td>
                  <td>
                    {editingCoach && editingCoach.id === coach.id ? (
                      <>
                        <Button variant="success" onClick={handleSaveCoach}>
                          Save
                        </Button>
                        <Button variant="secondary" onClick={handleCancelEdit}>
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <Button variant="warning" onClick={() => handleEditCoach(coach)}>
                        Edit
                      </Button>
                    )}
                    &nbsp;&nbsp;<Button variant="danger" onClick={() => handleCoachDelete(coach.id)}>
                      Delete
                    </Button>&nbsp;&nbsp;

                    {coach.approvalStatus !== 'approved' ? (
                  <Button
                    variant="primary"
                    onClick={() => handleAdminApprovalforCoach(coach.id)}
                    disabled={coach.approvalStatus === 'approved'}
                  >
                    {coach.approvalStatus === 'approved' ? 'Approved' : 'Approve'}
                  </Button>
                ) : (
                  'Approved'
                )}
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

export default Details;
