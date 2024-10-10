import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';        // Adjust the path as needed
import LoginSignup from './components/LoginSignup'; // Adjust the path as needed
import CustomerDashboard from './pages/CustomerDashboard'; // Import the CustomerDashboard page
import EmployeeDashboard from './pages/EmployeeDashboard'; // Import the EmployeeDashboard page

const AppRoutes = () => {
  const location = useLocation();

  return (
    <>
      {/* Render Header only if not on the login page */}
      {location.pathname !== '/' && <Header />}
      <Routes>
        <Route path='/' element={<LoginSignup />} /> {/* Login Page */}
        <Route path='/customer-dashboard' element={<CustomerDashboard />} /> {/* Customer Dashboard */}
        <Route path='/employee-dashboard' element={<EmployeeDashboard />} /> {/* Employee Dashboard */}
        <Route path='*' element={<Navigate to="/" />} /> {/* Redirect unknown routes to home/login */}
      </Routes>
    </>
  );
};

export default AppRoutes;
