import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
    const currentYear = new Date().getFullYear(); 


    return (
        <footer className="footer py-3">

            <Container>
                <div className="d-flex justify-content-between align-items-center small">
                   
                        <p className="mb-0 small">&copy; 2012 - { currentYear } Flooring. All Rights Reserved.</p>
             
                        <p className="mb-0 small">Designed & Developed by Zari Ali</p>

                  

                </div>

            </Container>

        </footer>
    
  );
}

export default Footer;