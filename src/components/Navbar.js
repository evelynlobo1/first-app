import React, { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import { FaSearch } from "react-icons/fa"; // Import search icon from react-icons
import { Link } from "react-router-dom";
import "./Navbar.css";


const MainNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/assets/logo.png" alt="Brand logo" width="100" height="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            {/* <li><a href="#">SHOP</a></li> */}
            <li><Link to="/about">About Us</Link></li>
            {/* <li><Link to="/contact">Contact</Link></li> */}
            <li className="search-icon">
              <Link to="/">
                <FaSearch size={20} />
              </Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
  );
};

export default MainNavbar;