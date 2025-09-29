import { useState, useEffect } from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/authentication/Login';
import Signup from './pages/authentication/Signup';
import About from './pages/brand/About';
import FAQ from './pages/brand/FAQ';
import TOS from './pages/brand/TOS';
import Contact from './pages/brand/Contact';
import Dashboard from './pages/dashboard/Dashboard';
import LandingPage from './pages/dashboard/LandingPage';
import AuthenticatedPathway from "./components/AuthenticatedPathway";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import api, { setAuthToken } from './api/api';

function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
      api.get('/auth/me').then(res => setUser(res.data)).catch(() => {
        localStorage.removeItem('token');
        setUser(null);
        setAuthToken(null);
      });
    }
  }, []);

  return (
    <div className='pt-5'>
      <Router>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/dashboard" element={<AuthenticatedPathway user={user}><Dashboard user={user} /></AuthenticatedPathway>} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tos" element={<TOS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;