import React from 'react';
import Card from './Card';
import './Dashboard.scss';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="account-summary">
                <Card title="Savings" content="No. of Accounts: 1" />
                <Card title="Liabilities" content="No liabilities" />
            </div>

            <div className="payment-transfer">
                <button className="btn-transfer">Make Payment/Transfer</button>
            </div>
        </div>
    );
};

export default Dashboard;
