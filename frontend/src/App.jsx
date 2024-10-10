import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <Dashboard />
            </div>
        </div>
    );
};

export default App;
