import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, Container } from 'react-bootstrap';

const MobileNavbar = () => {
    return (
        <Navbar  expand="lg" className=" navbar">
            <Container>
                <Navbar.Brand href="/" className="brand">Flooring App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/dashboard" className="navbar-link">Dashboard</Link>
                        <Link to="/inventory" className="navbar-link">Inventory</Link>
                        <Link to="/quotes" className="navbar-link">Quotes</Link>
                        <Link to="/projects" className="navbar-link">Projects</Link>
                        <Link to="/customers" className="navbar-link">Customers</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MobileNavbar;
