import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={6} lg={4}>
            <h5>Contact Us</h5>
            <ul className="contact-info">
              <li><strong>Email:</strong> info@yusufoverseas.com</li>
              <li><strong>Phone:</strong> +1 868-225-8229</li>
              <li>
                <strong>Address:</strong><br />
                8 Naparima Mayaro Road,<br />
                Craignish Village, Princes Town,<br />
                Trinidad and Tobago, 850504
              </li>
            </ul>
          </Col>
          <Col md={6} lg={2}>
            <h5>Information</h5>
            <ul className="footer-links">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Blogs</li>
            </ul>
          </Col>
          <Col md={6} lg={2}>
            <h5>Product Categories</h5>
            <ul className="footer-links">
              <li>Herbal Tea</li>
              <li>Organic Powder</li>
            </ul>
          </Col>
          <Col md={6} lg={4}>
            <h5>Follow Us</h5>
            <div className="social-icons">
              <FaFacebook />
              <FaTwitter />
              <FaLinkedin />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>© 2025 Buds & Roots. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
