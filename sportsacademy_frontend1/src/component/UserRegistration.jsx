import React, { useState } from "react";
import axios from "axios";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import "./css/Registration.css";
import { Link } from "react-router-dom";

export function UserRegistration() {
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
    age: "",
  });

  const [validationMsg, setValidationMsg] = useState("");

  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSubmit = async () => {
    for (const key in formData) {
      if (
        formData.hasOwnProperty(key) &&
        key !== "age"
      ) {
        if (!formData[key]) {
          setValidationMsg(`Please fill in the ${key} field.`);
          return;
        }
      }
    }

    setValidationMsg("");

    try {
      const response = await axios.post("http://localhost:8080/user/register", formData);

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

  return (
    <div id="regi">
      <Container id="reg">
        <div className="regi-container">
          <Form>
            {/* Form fields */}
            <Row>
              <Col lg="4">
                <Form.Group className="mt-4">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    value={formData.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    onBlur={() => handleSubmit("firstName")}
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
            <Row>
              <Col lg="12" className="mt-4">
                <Button type="button" id="rsubmit" onClick={handleSubmit}>
                  Register
                </Button>
                <br /><br />
              </Col>

              <Col lg="12" className="mt-4">
          <Link to="/coachRegistration">
            <Button type="button" id="rsubmit">
              Coach Register
            </Button>
          </Link>
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

export default UserRegistration;
