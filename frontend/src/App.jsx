import React from 'react';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/authentication/Login';
import Signup from './pages/authentication/Signup';
import About from './pages/brand/About';
import FAQ from './pages/brand/FAQ';
import TOS from './pages/brand/TOS';
import Contact from './pages/brand/Contact';
import Home from './pages/dashboard/Home';
import Income from './pages/dashboard/Income';
import Expenses from './pages/dashboard/Expenses';
import LandingPage from './pages/dashboard/LandingPage';
import Footer from './components/Footer';
import Navbartitle from './components/NavbarTitle';

function App() {
  return (
    <div>
      <Router>
        <Navbartitle />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/faq" exact element={<FAQ />} />
          <Route path="/tos" exact element={<TOS />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/income" exact element={<Income />} />
          <Route path="/expenses" exact element={<Expenses />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;