import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

export const EditUser = () => {
  const { userId } = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    id: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    contact: '',
    gender: '',
    country: '',
    age: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/user/${userId}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8080/user/update/${userId}`, userData);
      console.log('User updated successfully!');
      window.alert('User updated successfully!');
      navigate('/userdetails');
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <Container>
      <h2>Edit User</h2>
      <Form>
        <Form.Group controlId="formId">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="id"
            value={userData.id}
            onChange={handleInputChange}
            readOnly // make it readonly since it's an ID
          />
        </Form.Group>

        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            value={userData.firstName}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formMiddleName">
          <Form.Label>Middle Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your middle name"
            name="middleName"
            value={userData.middleName}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            value={userData.lastName}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Country"
            name="country"
            value={userData.country}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your contact number"
            name="contact"
            value={userData.contact}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Gender"
            name="gender"
            value={userData.gender}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your Age"
            name="age"
            value={userData.age}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleSave}>
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default EditUser;