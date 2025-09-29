import { Link, useNavigate } from 'react-router-dom';
import { setAuthToken } from '../api/api';

const Navbar = ({ user, setUser }) => {

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
    setUser(null);
    navigate('/');
    alert.window('You have logged out successfully.');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand mx-auto" to="/">ExpenseTracker</Link>
        {user && (
          <div>
            <span className="me-3 text-white">Hi, {user.name}</span>
            <button className="btn btn-outline-light btn-sm" onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
