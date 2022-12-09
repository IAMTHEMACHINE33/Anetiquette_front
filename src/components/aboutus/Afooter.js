import React from "react";

const AboutFooter = () => {
  return (
    <>
<div className="container-fluid mt-5 bg-dark text-light" style={{"opacity":0.8}}>
  {/* <footer className="text-center text-black text-decoration-none" style="background-color: #3f51b5"> */}
    <div className="container ">
      <section className="mt-5">
        <div className="row text-center d-flex justify-content-center pt-5">
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="/" className="text-light text-decoration-none">Home</a>
            </h6>
          </div>

          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-light text-decoration-none">Products</a>
            </h6>
          </div>

          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-light text-decoration-none">Awards</a>
            </h6>
          </div>

          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="/help" className="text-light text-decoration-none">Help</a>
            </h6>
          </div>

          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="/contact" className="text-light text-decoration-none">Contact</a>
            </h6>
          </div>
        </div>
      </section>

      <hr className="my-5"/>

      <section className="container bg-dark text-light my-5" >
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <p>
            This is the Final Project of Agile Development.<br/>
            There are five main players in the DuckDuckGoose team.<br/>
            They are as follows:<br/>Arush Nepali, Binesh Dangol, 
            <br/>Dipendra Chaudhary, Eric Shrestha, and Rijan Maharjan.
            Dipendra is the Scrum Master, Arush and Binesh are Frontend Developers, Rijan  is responsible for the Backend, and Eric  is in charge of Testing and Connection.                       
            </p>
          </div>
        </div>
      </section>

      <section className="text-center mb-5">
        <a href="/" className="text-light text-decoration-none me-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="/" className="text-light text-decoration-none me-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/" className="text-light text-decoration-none me-4">
          <i className="fab fa-google"></i>
        </a>
        <a href="/" className="text-light text-decoration-none me-4">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="/" className="text-light text-decoration-none me-4">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="/" className="text-light text-decoration-none me-4">
          <i className="fab fa-github"></i>
        </a>
      </section>
    </div>

    <div
         className="text-center p-3"
        //  style="background-color: rgba(0, 0, 0, 0.2)"
         >
      © anetiquette
      <a className="text-light text-decoration-none" href="https://mdbootstrap.com/"
         >@mail.com</a
        >
    </div>
 </div>
    </>
  );
};

export default AboutFooter;
