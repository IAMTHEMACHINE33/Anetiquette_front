import React from "react";
const Footer = () => {
  return (
    <>
<div className="container-fluid mt-5 bg-dark text-light">
  {/* <footer className="text-center text-black text-decoration-none" style="background-color: #3f51b5"> */}
    <div className="container ">
      <section className="mt-5">
        <div className="row text-center d-flex justify-content-center pt-5">
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-light text-decoration-none">About us</a>
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
              <a href="#!" className="text-light text-decoration-none">Help</a>
            </h6>
          </div>

          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="#!" className="text-light text-decoration-none">Contact</a>
            </h6>
          </div>
        </div>
      </section>

      <hr className="my-5"/>

      <section className="container bg-dark text-light my-5 ">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti
              dicta, aliquam sequi voluptate quas.
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

export default Footer;
