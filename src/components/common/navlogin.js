import React from "react";
import { Navbar } from "react-bootstrap";
import logo from "../../photo/logo.png";

const Navlog = () => {
  return (
    <nav className="navbar transparent navbar-inverse navbar-static-top hr">
      <div className="container-fluid">
      <Navbar.Brand href="/">
            <a href="/">
              <img src={logo} alt="Logo"></img>
            </a>
          </Navbar.Brand>
      </div>
    </nav>
  );
};

export default Navlog;
