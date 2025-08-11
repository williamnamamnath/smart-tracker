import React, { useState } from 'react';

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import ProfilePicture from '../../components/inputs/ProfilePicture';

const Signup = () => {

const [fName, setFName] = useState("");
const [lName, setLName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPwd, setConfirmPwd] = useState("");
const [error, setError] = useState("");
const [profilePicture, setProfilePicture] = useState(null);
const navigate = useNavigate();

const handleSignup = (e) => {
    e.preventDefault();
    
    if (password !== confirmPwd) {
        setError("The passwords do not match, please try again.");
        return;
    }

    navigate('/home');
};

const missingInfo = !fName || !lName || !email || !password || !confirmPwd;

  return (
    <Container fluid className="my-3 min-vh-100 d-flex justify-content-center align-items-center">
      <Row>
        <Col>
          <Card className="p-4 shadow-lg">
            <Card.Body>
              <Card.Title className="my-3 fs-1 text-center">Sign Up</Card.Title>

              <p className='my-5 fs-5 fw-bold text-center'>Create an account to start saving effectively.</p>

              {/* <ProfilePicture image={profilePicture} setImage={setProfilePicture} /> */}

              {error && <p className="my-5 fw-bold alert alert-danger text-center">{error}</p>}

              <Form onSubmit={handleSignup}>
                <Form.Group className="mb-4" controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First name" value={fName} onChange={(e) => setFName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Last name" value={lName} onChange={(e) => setLName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm password" value={confirmPwd} onChange={(e) => setConfirmPwd(e.target.value)} />
                </Form.Group>

                <Button variant="success" type="submit" className="w-100 my-3" disabled={missingInfo}>
                  Create Account
                </Button>

                <a className="p-1 rounded" href="/login">Already have an account? Click here to log in</a>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;