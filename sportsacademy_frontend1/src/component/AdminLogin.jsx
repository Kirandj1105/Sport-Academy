import React, { useState } from 'react';
import axios from 'axios';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './css/AdminLogin.css';

const AdminLogin = () => {
  const [adminFormData, setAdminFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const [error, setError] = useState('');

  const handleAdminChange = (fieldName, value) => {
    setAdminFormData({
      ...adminFormData,
      [fieldName]: value,
    });
  };

  const handleLoginResponse = (response) => {
    console.log('Handle Login Response:', response);
    if (response.data.status) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);
      navigate('/admin');
    } else {
      setError('Invalid email or password');
      alert('Invalid email or password. Please try again.');
    }
  };

  const handleAdminSubmit = async (e) => {
    e.preventDefault();

    if (!adminFormData.email || !adminFormData.password) {
      setError('Please enter both email and password for admin login.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/admin/login', adminFormData);
      handleLoginResponse(response);
    } catch (error) {
      console.error('Admin login error:', error);
      setError('An error occurred during admin login');
    }
  };

  return (
    <div className="adminloginpage">
      <Container>
        <Row>
          <Col lg="12" className="mt-4">
            <h2 className="admin-login-h2">Admin Login</h2>
          </Col>
        </Row>

        <Form onSubmit={handleAdminSubmit}>
          <Row>
            <Col lg="6">
              <Form.Group className="mt-4 admin-login-form-group admin-password-field">
                <Form.Label>Email</Form.Label>
                <Form.Control className="admin-login-form-control"
                  type="email"
                  placeholder="admin@example.com"
                  value={adminFormData.email}
                  onChange={(e) => handleAdminChange('email', e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Form.Group className="mt-4 admin-password-field">
                <Form.Label >Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={adminFormData.password}
                  onChange={(e) => handleAdminChange('password', e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg="12" className="mt-4">
              <Button type="submit" className="admin-login-button">Login</Button>
            </Col>
          </Row>
        </Form>

        {error && <p>{error}</p>}
      </Container>
    </div>
  );
};

export default AdminLogin;