import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

const handleLogin = (e) => {
    e.preventDefault();
    navigate('/home');
  };

  return (
<Container fluid className="min-vh-100 d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <Card className="p-4 shadow-lg">
            <Card.Body>
              <Card.Title className="my-3 fs-1 text-center">Login</Card.Title>

              <p className='my-5 fs-5 fw-bold text-center'>Log back in to continue where you left off.</p>

              <Form onSubmit={handleLogin}>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </Form.Group>

                <Button variant="success" type="submit" className="w-100 my-3" disabled={!email || !password}>
                  Sign In
                </Button>
                <a className="p-1 rounded" href="/signup">Don't have an account? Click here to sign up</a>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;