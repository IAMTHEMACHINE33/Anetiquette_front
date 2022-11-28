import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import logo from "../../photo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigate = () => {
  const { activeLink, setActiveLink } = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/home">
            <img src={logo} alt="Logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="/"
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#category"
                className={
                  activeLink === "category"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("category")}
              >
                Category
              </Nav.Link>
              <Nav.Link
                href="/about"
                className={
                  activeLink === "about" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("about")}
              >
                About Us
              </Nav.Link>
              <Nav.Link
                href="/help"
                className={
                  activeLink === "help" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("help")}
              >
                Help
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="navbar-icon">
                <a className="text-light" href="">
                  <i class="fas fa-search"></i>
                </a>
                <a className="text-light" href="">
                  <i class="fas fa-shopping-cart"></i>
                </a>
                <a className="text-light" href="/profile">
                  <i class="fas fa-user-alt"></i>
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigate;
