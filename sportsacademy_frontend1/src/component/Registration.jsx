import React, { useState } from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import "./css/Registration.css";

export function Registration() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    contact: "",
    country: "",
    gender: "",
    password: "",
    confirmPassword: "",
    role: "",
    experience: "",
    age: "",
    previousOrganization: "",
    startTime: "",
    endTime: "",
    expectedSalary: "",
  });

  const [validationMsg, setValidationMsg] = useState("");

  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSubmit = async () => {
    const optionalFields = ["experience", "age", "expectedSalary", "previousOrganization", "startTime", "endTime"];

    for (const key in formData) {
      if (
        formData.hasOwnProperty(key) &&
        !optionalFields.includes(key) &&
        !formData[key]
      ) {
        setValidationMsg(`Please fill in the ${key} field.`);
        return;
      }
    }

    // First name, middle name, and last name should contain only letters
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(formData.firstName)) {
      setValidationMsg("First name should contain only letters");
      return;
    }

    if (!nameRegex.test(formData.middleName)) {
      setValidationMsg("Middle name should contain only letters");
      return;
    }

    if (!nameRegex.test(formData.lastName)) {
      setValidationMsg("Last name should contain only letters");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setValidationMsg("Please enter a valid email address");
      return;
    }

    // Password length validation
    if (formData.password.length < 8) {
      setValidationMsg("Password must be at least 8 characters long");
      return;
    }

    // Password complexity validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setValidationMsg("Password must contain at least one lowercase letter, one uppercase letter, and one digit");
      return;
    }

    // Additional numeric fields validation (age, experience, etc.)
    if (isNaN(formData.age)) {
      setValidationMsg("Please enter a valid age.");
      return;
    }
    // Add similar checks for other numeric fields

    // // Required fields for coaches validation
    // if (formData.role === "coach" && (!formData.age || !formData.experience || !formData.previousOrganization || !formData.startTime || !formData.endTime || !formData.expectedSalary)) {
    //   setValidationMsg("Please fill in all the required fields for coaches.");
    //   return;
    // }


    console.log(formData);
// Required fields for coaches validation
if (formData.role === "coach" && ( !formData.experience || !formData.previousOrganization || !formData.startTime || !formData.endTime || !formData.expectedSalary)) {
  setValidationMsg("Please fill in all the required fields for coaches.");
  return;
}




    setValidationMsg("");

    try {
      let response;
      if (formData.role === 'user') {
        response = await axios.post("http://localhost:8080/user/register", formData);
      } else if (formData.role === 'coach') {
        response = await axios.post("http://localhost:8080/coach/register", formData);
      }

      if (response.data.status) {
        alert("Registration Successful!");
      } else {
        alert("Registration Failed!");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration");
    }
  };

  const handleRoleChange = (value) => {
    setFormData((prevFormData) => {
      const updatedFormData = {
        ...prevFormData,
        role: value,
      };

      if (value === 'user') {
        updatedFormData.experience = "";
        updatedFormData.previousOrganization = "";
        updatedFormData.startTime = "";
        updatedFormData.endTime = "";
        updatedFormData.expectedSalary = "";
      } else if (value === 'coach') {
        updatedFormData.age = "";
      }

      return updatedFormData;
    });
  };

  const renderAdditionalFields = () => {
    if (formData.role === "user") {
      return (
        <Row>
          <Col lg="6">
            <Form.Group className="mt-4">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter age"
                value={formData.age}
                onChange={(e) => handleChange("age", e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      );
    }
    if (formData.role === "coach") {
      return (
        <>
          <Row>
            <Col lg="6">
              <Form.Group className="mt-4">
                <Form.Label>Experience</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter experience"
                  value={formData.experience}
                  onChange={(e) => handleChange("experience", e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Form.Group className="mt-4">
                <Form.Label>Previous Organization</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter previous organization"
                  value={formData.previousOrganization}
                  onChange={(e) => handleChange("previousOrganization", e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col lg="6">
              <Form.Group className="mt-4">
                <Form.Label>Start Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={formData.startTime}
                  onChange={(e) => handleChange("startTime", e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col lg="6">
              <Form.Group className="mt-4">
                <Form.Label>End Time</Form.Label>
                <Form.Control
                  type="datetime-local"
                  value={formData.endTime}
                  onChange={(e) => handleChange("endTime", e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col lg="6">
              <Form.Group className="mt-4">
                <Form.Label>Expected Salary</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter expected salary"
                  value={formData.expectedSalary}
                  onChange={(e) => handleChange("expectedSalary", e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
        </>
      );
    }
  };

  return (
    <div id="regi">
      <Container id="reg">
        <div className="regi-container">
          <Form>
          <Row>
              <Col lg="4">
                <Form.Group className="mt-4">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg="4">
                <Form.Group className="mt-4">
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter middle name"
                    value={formData.middleName}
                    onChange={(e) => handleChange("middleName", e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col lg="4">
                <Form.Group className="mt-4">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    value={formData.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <Form.Group className="mt-4">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col lg="6">
                <Form.Group className="mt-4">
                  <Form.Label>Contact</Form.Label>
                  <PhoneInput
                    placeholder="Enter phone number"
                    value={formData.contact}
                    onChange={(value) => handleChange("contact", value)}
                  />
                </Form.Group>
              </Col>

            </Row>
            <Row>
              <Col lg="6">
                <Form.Group className="mt-4">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter country"
                    value={formData.country}
                    onChange={(e) => handleChange("country", e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col lg="6">
                <Form.Group className="mt-4">
                  <Form.Label>Gender</Form.Label>
                  <Form.Check
                    inline
                    label="Male"
                    name="group1"
                    type="radio"
                    id="r1"
                    checked={formData.gender === "male"}
                    onChange={() => handleChange("gender", "male")}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    name="group1"
                    type="radio"
                    id="r2"
                    checked={formData.gender === "female"}
                    onChange={() => handleChange("gender", "female")}
                  />
                  <Form.Check
                    inline
                    label="Other"
                    name="group1"
                    type="radio"
                    id="r3"
                    checked={formData.gender === "other"}
                    onChange={() => handleChange("gender", "other")}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <Form.Group className="mt-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                  />
                </Form.Group>
              </Col>
              <Col lg="6">
                <Form.Group className="mt-4">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Re-enter password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleChange("confirmPassword", e.target.value)}
                  />
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
              <Col lg="4">
                <Form.Group className="mt-4">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    as="select"
                    value={formData.role}
                    onChange={(e) => handleRoleChange(e.target.value)}
                  >
                    <option value="" disabled>Select Role</option>
                    <option value="user">User</option>
                    <option value="coach">Coach</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>


            {renderAdditionalFields()}


            <Row>
              <Col lg="12" className="mt-4">
                <Button type="button" id="rsubmit" onClick={handleSubmit}>
                  Register
                </Button>
                <br /><br />
              </Col>
            </Row>
          </Form>

          {validationMsg && <p>{validationMsg}</p>}
        </div>
      </Container>
    </div>
  );
}

export default Registration;
