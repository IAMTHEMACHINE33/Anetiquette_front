import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand ml-3" href="/">
          antiquette
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <span className="navbar-nav ">
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <a className="nav-link active" aria-current="page" href="/home">
                  HOME
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/">
                  CATEGORY
                </a>
              </li>

              <li className="nav-item mx-2">
                <a className="nav-link" href="/Add_products">
                  Add Product
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/about">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/help">
                  HELP
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/Order_form">
                  CONTACT
                </a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href="/"></a>
              </li>
            </ul>
          </span>
          <span className="navbar-nav ">
            <a className="nav-link mx-2" href="/">
              <i class="fas fa-search"></i>
            </a>
            <a className="nav-link mx-2" href="/">
              <i class="fas fa-shopping-cart"></i>
            </a>
            <a className="nav-link mx-2" href="/profile">
              <FontAwesomeIcon icon="fa-regular fa-user" />
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
