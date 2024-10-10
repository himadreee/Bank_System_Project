import React from 'react';
import './CustomerDashboard.css';
// import Header from '../components/header';  // Import Header
import Sidebar from '../components/Sidebar';  // Import Sidebar
import Dashboard from '../components/Dashboard';  // Import Dashboard

const CustomerDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* <Header /> Add Header at the top */}
      <div className="main-content">
        <Sidebar /> {/* Sidebar on the left */}
        <Dashboard /> {/* Main Dashboard content */}
      </div>
    </div>
  );
};

export default CustomerDashboard;
