import React, { useState } from 'react';
import { FaHome, FaMoneyCheckAlt, FaCashRegister, FaCog, FaBars, FaTimes } from 'react-icons/fa';
import './Sidebar.scss';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to track if sidebar is open

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="toggle-button" onClick={toggleSidebar}>
                {isOpen ? <FaTimes /> : <FaBars />} {/* Toggle icon */}
            </button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <div className="profile-section">
                    <img src="profile-pic.jpg" alt="Profile" className="profile-pic" />
                    <h4>User Name</h4>
                    <p>Last login: Tue, 8 Oct 2024</p>
                </div>

                <nav className="menu">
                    <ul>
                        <li><FaHome /> Home</li>
                        <li><FaMoneyCheckAlt /> Transfer</li>
                        <li><FaCashRegister /> Payments</li>
                        <li>Mobile Cash</li>
                        <li>Apply Now</li>
                        <li>Accounts Opening</li>
                        <li>Messages</li>
                        <li>Financial Calendar</li>
                        <li><FaCog /> Services</li>
                        <li>Settings</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;
