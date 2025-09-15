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
          </Nav>
        </Navbar.Collapse>

        <Navbar.Brand
          href="/dashboard"
          className="mx-auto position-absolute start-50 translate-middle-x"
        >
          SmartTracker
        </Navbar.Brand>


      </Container>
    </Navbar>
        </>
    );
};

export default MainNavbar;