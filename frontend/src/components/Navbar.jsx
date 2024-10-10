import React from 'react';
import { FaBell, FaCog, FaEnvelope } from 'react-icons/fa';
import './Navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.png" alt="Bank Logo" />
                <h1>Sampath Bank</h1>
            </div>

            <div className="actions">
                <input type="text" placeholder="What would you like to do today?" className="search-bar" />
                <FaEnvelope className="icon" />
                <FaBell className="icon" />
                <FaCog className="icon" />
            </div>
        </div>
    );
};

export default Navbar;
