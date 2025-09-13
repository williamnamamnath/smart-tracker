import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const MainNavbar = () => {

    return (
        <>
        <Navbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {loginConfirmed ? (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/dashboard"
                >
                  Dashboard
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/income"
                >
                  Income
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/expenses"
                >
                  Expenses
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link
                  as={NavLink}
                  to="/faq"
                >
                  FAQs
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/contact"
                >
                  Contact Us
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/tos"
                >
                  Terms of Services
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>

        <Navbar.Brand
          href="/"
          className="mx-auto position-absolute start-50 translate-middle-x"
        >
          SmartTracker
        </Navbar.Brand>

        <Nav>
          <NavDropdown
            align="end"
            title={<FaUserCircle size={24} />}
            id="user-dropdown"
          >
            {!loginConfirmed ? (
              <NavDropdown.Item as={NavLink} to="/login">
                Log In
              </NavDropdown.Item>
            ) : (
              <>
                <NavDropdown.Item as={NavLink} to="/settings">
                  Settings
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/account">
                  Account Information
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as="button" onClick={signedOut}>
                  Logout
                </NavDropdown.Item>
              </>
            )}
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
        </>
    );
};

export default MainNavbar;