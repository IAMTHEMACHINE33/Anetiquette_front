import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Nav from "react-bootstrap/Nav";
import logo from "../../photo/logo.png";
import Logout from "../Logout";
import './testbar.css';
import "../common/search.css"

const TestBar = () => {
    const { activeLink, setActiveLink } = useState("home");
    
    const [show,setShow] = useState(false);
    const navigate = useNavigate();
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
  
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
  
    useEffect(() => {
      axios
        .get("http://localhost:4000/api/v1/show", config)
        .then((response) => {
          setName(response.data.data.name);
          setImage(response.data.data.image);
        })
        .catch((e) => {
          console.log(e);
        });
    });

    const controlNavbar = () =>{
      if(window.scrollY > 20){
        setShow(true);
      }
      else{
        setShow(false);
      }
    }
    useEffect(()=>{
      window.addEventListener('scroll',controlNavbar)
      return() =>{
        window.removeEventListener('scroll',
        controlNavbar)
      }
    }, []
    );

  var aboutbar;
  if (localStorage.getItem("token")) {
    aboutbar = (
      <>
        <div className="dropdown-profile">
          <img
            src={"http://localhost:4000/" + image}
            alt="...............................................................................
            _ ( ͡° ͜ʖ ͡°)"
          ></img>
        </div>
        <h3>{name}</h3>
        <ul>
          <li>
            <a href="/profile">
              <i class="far fa-user-circle"></i>
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a href="/add">
            <i class="fas fa-plus"></i>
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
    aboutbar=(
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
    <div className="testbar">
      <Navbar className={`nav  ${show && 'nav_blue' }`} >
        <Container>
          <Navbar.Brand href="/">
            <a href="/">
              <img src={logo} alt="Logo"></img>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="testbar-toggler-icon"></span>
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
                href="/category"
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
                      <div>{aboutbar}</div>
                    </div>
                  </div>
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    </>
  );
};

export default TestBar;
