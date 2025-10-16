import { useState } from "react";
import { Link } from "react-router-dom";

import { IoPersonSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";

/*
    Simple responsive Navbar component using Bootstrap classes.
    - Place this file at: /src/components/Navbar.js
    - Make sure Bootstrap CSS is loaded in your app (e.g. import 'bootstrap/dist/css/bootstrap.min.css' in index.js)
    - Replace hrefs with react-router Links if you use react-router.
*/

const Navbar = () => {
  // Use state function for Cart visibility
  const [isCartVisible, setIsCartVisibile] = useState(false);
  //Set name of the user that logged in
  const { loggedInUser, logOut, isAuthenticated } =
    useContext(LoggedInUserContext);
  const name = loggedInUser && loggedInUser.user ? loggedInUser.user.fname : "";

  // Function to toggle the visibility of the cart
  const toggleCart = () => setIsCartVisibile(!isCartVisible);

  return (
    <>
      <nav>
        <Link to="/">
          <Logo src={logo} alt="Logo" mobileSrc={logoMobile} />
        </Link>
        <div className="navText">
          <Link to="/products" className="navLink">
            shop all
          </Link>
          <Link to="/brands" className="navLink">
            brands
          </Link>
          <Link to="/contact" className="navLink">
            contact
          </Link>
          <Link to="/about" className="navLink">
            about
          </Link>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Navbar icons that toggle cart on press */}
          <FaCartArrowDown className="navbar-buttons" onClick={toggleCart} />
          {/* Navbar icons for login if user is not logged in yet */}
          {!isAuthenticated && (
            <>
              <NavLink to="/login">
                <IoPersonSharp
                  style={{ background: "transparent" }}
                  className="navbar-buttons"
                  title="Click to login or sign up!"
                />
              </NavLink>
            </>
          )}
          {/* Navbar icons for logout if user is logged in */}
          {isAuthenticated && (
            <>
              <p style={{ margin: "0 15px 0 0" }}>{name}</p>
              <button
                onClick={() => logOut()}
                style={{ background: "transparent" }}
                className="navbar-buttons"
              >
                <IoMdLogOut
                  className="navbar-buttons"
                  title="Click to logout!"
                />
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;