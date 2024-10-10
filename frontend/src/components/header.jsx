// src/components/Header.jsx
import React from 'react';
import './header.css'; // Import the CSS

const Header = () => {
  return (
    <header className="banking-header">
      <div className="logo-section">
        <img src="/path-to-your-logo.png" alt="Bank Logo" className="logo" />
        <div className="bank-name">
          <h1>My Bank</h1>
        </div>
      </div>

      <nav className="nav-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/transfer">Transfer</a></li>
          <li><a href="/payments">Payments</a></li>
          <li><a href="/mobile-cash">Mobile Cash</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/slipless">SlipLess</a></li>
        </ul>
      </nav>

      <div className="user-actions">
  <a href="/profile"><i className="fas fa-user"></i></a>
  <a href="/calendar"><i className="fas fa-calendar-alt"></i></a>
  <a href="/notifications"><i className="fas fa-bell"></i></a>
  <a href="/messages"><i className="fas fa-envelope"></i></a>
  <a href="/settings"><i className="fas fa-cog"></i></a>
  <a href="/logout"><i className="fas fa-power-off"></i></a>
</div>

    </header>
  );
};

export default Header;
