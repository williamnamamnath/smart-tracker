import { useContext } from "react";
import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { UserContext } from "../pages/authentication/UserContext";
import { NavLink } from "react-router-dom";

// Navigation Bar for the page
const Navbar = () => {

  //Set name of the user that logged in
  const { loggedInUser, logOut, isAuthenticated } =
    useContext(UserContext);
  const name = loggedInUser && loggedInUser.user ? loggedInUser.user.firstName : "";


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid position-relative">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/dashboard" className="nav-link">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/expenses" className="nav-link">
                Expenses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/income" className="nav-link">
                Income
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="position-absolute top-50 start-50 translate-middle">
          <Link className="navbar-brand fw-bold" to="/" style={{ fontSize: "1.5rem" }}>
            SmartTracker
          </Link>
        </div>

        <div className="d-flex align-items-center ms-auto">
          {!isAuthenticated && (
            <NavLink to="/authenticate" className="nav-link">
              <IoPersonSharp 
                className="navbar-buttons"
                title="Click to login or sign up!"
                style={{ fontSize: "1.5rem" }}
              />
            </NavLink>
          )}
          {isAuthenticated && (
            <>
              <span className="me-2 fw-semibold">{name}</span>
              <button
                onClick={logOut}
                className="btn btn-link p-0"
                style={{ color: "#000" }}
                title="Click to logout!"
              >
                <IoMdLogOut
                  className="navbar-buttons"
                  style={{ fontSize: "1.5rem" }}
                />
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

