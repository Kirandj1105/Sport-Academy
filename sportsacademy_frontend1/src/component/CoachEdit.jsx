import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

export const CoachEdit = () => {
  const { coachId } = useParams();
  const navigate = useNavigate();

  const [coachData, setCoachData] = useState({
    id: '',
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    contact: '',
    country: '',
    gender: '',
    experience: '',
    previousOrganization: '',
    startTime: '',
    endTime: '',
    expSalary: '',
  });

  useEffect(() => {
    const fetchCoachData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/coach/${coachId}`);
        setCoachData(response.data);
      } catch (error) {
        console.error('Error fetching coach data:', error);
      }
    };

    fetchCoachData();
  }, [coachId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCoachData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:8080/coach/update/${coachId}`, coachData);
      console.log('Coach updated successfully!');
      window.alert('Coach updated successfully!');
      navigate('/coachdetails');
    } catch (error) {
      console.error('Error saving coach data:', error);
    }
  };

  return (
    <Container>
      <h2>Edit Coach</h2>
      <Form>
        <Form.Group controlId="formId">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            name="id"
            value={coachData.id}
            onChange={handleInputChange}
            readOnly
          />
        </Form.Group>

        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            value={coachData.firstName}
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
            value={coachData.middleName}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            value={coachData.lastName}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Email"
            name="email"
            value={coachData.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formCountry">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Country"
            name="country"
            value={coachData.country}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formContact">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your contact number"
            name="contact"
            value={coachData.contact}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Gender"
            name="gender"
            value={coachData.gender}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formExperience">
          <Form.Label>Experience</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Experience"
            name="experience"
            value={coachData.experience}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formPreviousOrg">
          <Form.Label>Previous Organization</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Previous Organization"
            name="previousOrganization"
            value={coachData.previousOrganization}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formStartTime">
          <Form.Label>Start Time</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Start Time"
            name="startTime"
            value={coachData.startTime}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formEndTime">
          <Form.Label>End Time</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your End Time"
            name="endTime"
            value={coachData.endTime}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formExpectedSalary">
          <Form.Label>Expected Salary</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Expected Salary"
            name="expSalary"
            value={coachData.expSalary}
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

export default CoachEdit;