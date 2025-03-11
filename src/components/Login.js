import React, { useState } from "react";
import { Button, Form, Alert, Container, Row, Col } from "react-bootstrap";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("student@gmail.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState(""); // State to handle login errors

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors

    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      // Call the onLogin function passed as a prop
      await onLogin(email, password);
    } catch (err) {
      // Handle login errors
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <Container fluid className="login-wrapper d-flex align-items-center justify-content-center">

      <Row className="w-75">
        {/* Logo Section */}
        <Col md={6} className="d-flex flex-column  justify-content-center text-white logo-container">
        <h1 className="slogan_h1">Login</h1>
        
        

        <p className="slogan">"Welcome Back! 👋
          Sign in to continue your journey with us. Unlock seamless access to your personalized dashboard and resources. Let's make today productive!"</p>
        </Col>

        {/* Login Form Section */}
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <div className="login-container p-4 rounded shadow">
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleLoginSubmit}>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="input">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label className="input">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100 mb-3">
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
