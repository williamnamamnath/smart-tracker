import { useState } from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginSignUp from "./pages/authentication";
import About from './pages/brand/About';
import FAQ from './pages/brand/FAQ';
import TOS from './pages/brand/TOS';
import Contact from './pages/brand/Contact';
import Dashboard from './pages/dashboard/Dashboard';
import LandingPage from './pages/dashboard/LandingPage';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {

  const [user, setUser] = useState(null);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/authenticate" element={<LoginSignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tos" element={<TOS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />  
      </Router>
    </>
  );
};

export default App;