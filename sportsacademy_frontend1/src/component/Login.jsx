// import React, { useState } from 'react';
// import axios from 'axios';
// import { Button, Col, Container, Form, Row } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import './css/Login.css';

// export const Login = () => {
//   const [userFormData, setUserFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const navigate1 = useNavigate();

//   const handleadminlogin = () => {

//     navigate1('/adminlogin');
//   };

//   const navigate2 = useNavigate();

//   const handlecoachlogin = () => {

//     navigate2('/coachlogin');
//   };

//   const handleUserChange = (fieldName, value) => {
//     setUserFormData({
//       ...userFormData,
//       [fieldName]: value,
//     });
//   };

//   const handleUserSubmit = async (e) => {
//     e.preventDefault();

//     if (!userFormData.email || !userFormData.password) {
//       setError('Please enter both email and password for user login.');
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8080/login', userFormData);
//       handleLoginResponse(response);
//     } catch (error) {
//       handleLoginError(error);
//     }
//   };

//   const handleLoginResponse = (response) => {
//     console.log('Handle Login Response:', response);
//     if (response.data.status) {
//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('username', response.data.username);
//       navigate('/');
//     } else {
//       setError('Invalid email or password');
//       alert('Invalid email or password. Please try again.');
//     }
//   };

//   const handleLoginError = (error) => {
//     console.error('Login error:', error);
//     setError('An error occurred during login');

//     alert('An error occurred during login. Please try again.');
//   };

//   return (

//     <Container>
//       <div className="loginpage">
//         <Row>
//           <Col lg="12" className="mt-4">
//             <h2 className="login-h2">Login</h2>
//           </Col>
//         </Row>

//         <Form onSubmit={handleUserSubmit} className="login-form-control">
//           <Row>
//             <Col lg="6">
//               <Form.Group className="mt-4">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="name@example.com"
//                   value={userFormData.email}
//                   onChange={(e) => handleUserChange('email', e.target.value)}
//                 />
//               </Form.Group>
//             </Col>
//           </Row>
//           <Row>
//             <Col lg="6">
//               <Form.Group className="mt-4 login-form-group">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Enter password"
//                   value={userFormData.password}
//                   onChange={(e) => handleUserChange('password', e.target.value)}
//                 />
//               </Form.Group>
//             </Col>
//           </Row>
//           <Row>

//             <Col lg="12" className="mt-4">
//               <Button type="submit">User Login</Button>&nbsp;&nbsp;
//               <Button className="login-admin" onClick={handleadminlogin} type="submit">Admin Login</Button>&nbsp;&nbsp;
//               <Button className="login-coach" onClick={handlecoachlogin} type="submit">Coach Login</Button>
//             </Col>

//           </Row>
//         </Form>

//         {error && <p>{error}</p>}
//       </div>
//     </Container>

//   );
// };

// export default Login;














import React, { useState } from 'react';
import axios from 'axios';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './css/Login.css';

export const Login = () => {
  const [userFormData, setUserFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const navigate1 = useNavigate();

  const handleadminlogin = () => {
    // Use useNavigate to navigate to Coaching1
    navigate1('/adminlogin');
};

const navigate2 = useNavigate();

  const handlecoachlogin = () => {
    // Use useNavigate to navigate to Coaching1
    navigate2('/coachlogin');
};

  const handleUserChange = (fieldName, value) => {
    setUserFormData({
      ...userFormData,
      [fieldName]: value,
    });
  };

  const handleUserSubmit = async (e) => {
    e.preventDefault();

    if (!userFormData.email || !userFormData.password) {
      setError('Please enter both email and password for user login.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/user/login', userFormData);
      handleLoginResponse(response);
    } catch (error) {
      handleLoginError(error);
    }
  };

  const handleLoginResponse = (response) => {
    console.log('Handle Login Response:', response);
    if (response.data.status) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', response.data.username);
      navigate('/');
    } else {
      setError('Invalid email or password');
      alert('Invalid email or password. Please try again.');
    }
  };

  const handleLoginError = (error) => {
    console.error('Login error:', error);
    setError('An error occurred during login');
    
    alert('An error occurred during login. Please try again.');
  };

  return (
    <div className="loginpage">
      <Container>
        <Row>
          <Col lg="12" className="mt-4">
            <h2 className="login-h2">Login</h2>
          </Col>
        </Row>
       
        <Form onSubmit={handleUserSubmit}>
          <Row>
            <Col lg="6">
              <Form.Group className="mt-4 login-form-group">
                <Form.Label>Email</Form.Label>
                <Form.Control className="login-form-control"
                  type="email"
                  placeholder="name@example.com"
                  value={userFormData.email}
                  onChange={(e) => handleUserChange('email', e.target.value)}
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
                  value={userFormData.password}
                  onChange={(e) => handleUserChange('password', e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg="12" className="mt-4">
              <Button type="submit" className="login-buttons">User Login</Button>&nbsp;&nbsp;
              <Button className="admin login-admin" onClick={handleadminlogin} type="submit">Admin Login</Button>&nbsp;&nbsp;
              <Button className="coach login-coach" onClick={handlecoachlogin} type="submit">Coach Login</Button>
            </Col>
          </Row>
        </Form>

        {error && <p>{error}</p>}
      </Container>
    </div>
  );
};

export default Login;