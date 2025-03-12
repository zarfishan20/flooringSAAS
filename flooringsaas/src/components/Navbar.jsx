import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, Container } from 'react-bootstrap';

const MobileNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="d-lg-none">
            <Container>
                <Navbar.Brand href="#">Flooring App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                        <Link to="/inventory" className="nav-link">Inventory</Link>
                        <Link to="/quotes" className="nav-link">Quotes</Link>
                        <Link to="/projects" className="nav-link">Projects</Link>
                        <Link to="/customers" className="nav-link">Customers</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MobileNavbar;
