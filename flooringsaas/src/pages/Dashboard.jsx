import React from 'react';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
    return (
        <>
        <Sidebar />


        <div className="dashboard-page">
            <h1>Dashboard</h1>
            <p>Welcome to the Dashboard! Here you'll find an overview of your data.</p>
            {/* You can add stats, charts, or other information here */}
        </div>
        </>
    );
};

export default Dashboard;
