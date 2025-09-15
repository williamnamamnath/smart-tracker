import React from 'react';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/authentication/Login';
import Signup from './pages/authentication/Signup';
import About from './pages/brand/About';
import FAQ from './pages/brand/FAQ';
import TOS from './pages/brand/TOS';
import Contact from './pages/brand/Contact';
import Dashboard from './pages/dashboard/Dashboard';
import IncomeForm from './pages/forms/IncomeForm';
import Income from './pages/dashboard/Income';
import ExpenseForm from './pages/forms/ExpenseForm';
import Expenses from './pages/dashboard/Expenses';
import LandingPage from './pages/dashboard/LandingPage';
import Footer from './components/Footer';
import MainNavbar from './components/MainNavbar';
import { useGlobalContext } from './pages/authentication/globalContext';

function App() {

const context = useGlobalContext


  return (
    <div className='pt-5'>
      <Router>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/faq" exact element={<FAQ />} />
          <Route path="/tos" exact element={<TOS />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/new/income" exact element={<IncomeForm />} />
          <Route path="/income" exact element={<Income />} />
          <Route path="/new/expenses" exact element={<ExpenseForm />} />
          <Route path="/expenses" exact element={<Expenses />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;