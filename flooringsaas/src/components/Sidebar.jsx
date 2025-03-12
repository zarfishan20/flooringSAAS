import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
    return (
        <div className="sidebar d-none d-lg-block">
            <Nav defaultActiveKey="/home" className="flex-column">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <Link to="/inventory" className="nav-link">Inventory</Link>
                <Link to="/quotes" className="nav-link">Quotes</Link>
                <Link to="/projects" className="nav-link">Projects</Link>
                <Link to="/customers" className="nav-link">Customers</Link>
            </Nav>
        </div>
    );
};

export default Sidebar;
