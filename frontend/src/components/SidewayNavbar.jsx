import { Link } from "react-router-dom";

const SidewayNavbar = () => {
    return (
        <nav className="d-flex flex-column bg-light vh-100 p-3" style={{ width: "200px" }}>
            <ul className="nav nav-tabs flex-column nav-underline">
                <h5 className="nav-item text-center my-3">Welcome back, William</h5>
                <hr/>
                <li className="nav-item mb-2 text-center">
                    <Link to="/dashboard" className="nav-link">
                        Dashboard
                    </Link>
                </li>
                <li className="nav-item mb-2 text-center">
                    <Link to="/income" className="nav-link">
                        My Revenue
                    </Link>
                </li>
                <li className="nav-item mb-2 text-center">
                    <Link to="/expenses" className="nav-link">
                        My Expenses
                    </Link>
                </li>
                <li className="nav-item mb-2 text-center">
                    <Link to="/profile" className="nav-link">
                        My Profile
                    </Link>
                </li>
                <li className="nav-item mb-4 text-center">
                    <button type="button" class="btn btn-outline-danger">
                        <a href="/" className="text-decoration-none text-reset">Logout</a>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default SidewayNavbar;