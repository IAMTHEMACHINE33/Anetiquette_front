import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import logo from "../../photo/logo.png";
import "./navblack.css";
import Logout from "../Logout";
import "../common/search.css"

const NavigateBlack = () => {
  const { activeLink, setActiveLink } = useState("home");
  const [scrolled, setScrolled] = useState(false);

  var navbar;
  if (localStorage.getItem("token")) {
    navbar = (
      <>
        <div className="dropdown-profile">
          <img
            src="https://st4.depositphotos.com/15934180/22428/v/450/depositphotos_224288844-stock-illustration-man-with-cowboy-hat-silhouette.jpg"
            alt="profile.jpg"
          ></img>
        </div>
        <h3>Username</h3>
        <ul>
          <li>
            <a href="/profile">
              <i class="far fa-user-circle"></i>
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a href="/Add_products">
              <span>Add product</span>
            </a>
          </li>
          <li>
            <a href="/Order_form">
              <span>Checkout</span>
            </a>
          </li>
          <li>
            <a onClick={Logout}>
              <i class="fas fa-power-off"></i>
              <span>Logout</span>
            </a>
          </li>
        </ul>
      </>
    );
  }
  else{
    navbar=(
      <>
      <div className="dropdown-profile">
          <img
            src="https://i.pinimg.com/550x/18/b9/ff/18b9ffb2a8a791d50213a9d595c4dd52.jpg"
            alt="default-profile.jpg"
          ></img>
        </div>
        <h3>Sign Up</h3>
        <ul>
          <li>
            <a href="/login">
              <i class="far fa-user-circle"></i>
              <span>Login</span>
            </a>
          </li>
          
        </ul>
      
      
      </>
    )
  }

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar expand="lg" id="blacknav" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <a href="/">
              <img src={logo} alt="Logo"></img>
            </a>
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
                href="/cat"
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
              <div className="navbar-icon ">
                
                
                <a className="text-light" href="/search">
                  <i className="fas fa-search"></i>
                </a>
                <a className="text-light" href="/cart">
                  <i className="fas fa-shopping-cart"></i>
                </a>
                <a>
                  <div
                    className="dropdown "
                    onClick={() => {
                      setOpen(!open);
                    }}
                  >
                    <i id="nav-profile" className="fas fa-user-alt"></i>

                    <div
                      className={`dropdown-content ${
                        open ? "active" : "inactive"
                      }`}
                    >
                      <div>{navbar}</div>
                    </div>
                  </div>
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigateBlack;
