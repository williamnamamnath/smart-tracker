import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuthContext } from "./LoginInfo";

import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Login = () => {
  
  const { loggedIn } = useContext(UserAuthContext);
  const navigate = useNavigate();
  
  useEffect(() => {
        document.title = "Login"
    }, []);


const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [isLoggingIn, setIsLoggingIn] = useState(false);


const loginEmail = (e) => {
    setEmail(e.target.value);
}

const loginPassword = (e) => {
    setPassword(e.target.value);
}

const missingInput = () => {
  return (!email || !password) && !isLoggingIn
}

const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true)

    try {
            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            });

            if (response.ok) {
                const userInfo = await response.json();
                await loggedIn(userInfo); 
                window.localStorage.setItem("loginConfirmed", true);
                navigate("/dashboard");
            } else {
                const errorTriggered = await response.text();
                const errorMsg = JSON.parse(errorTriggered).message;
                setError(errorMsg);
              };

        } catch (error) {
            setError(error.message);
        }
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
                  <Form.Control type="email" placeholder="Enter email" value={email} onChange={loginEmail} required />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" value={password} onChange={loginPassword} required />
                </Form.Group>

                <Button variant="success" type="submit" className="w-100 my-3" disabled={missingInput()}>
                  {isLoggingIn ? "Please wait..." : "Login"}
                </Button>

                <a className="p-1 rounded" href="/signup">Don't have an account? Click here to sign up</a>
                <br/>

                {error && <p style={{color:"red"}}>{error}</p>}

              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;