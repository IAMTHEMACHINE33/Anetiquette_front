import React from "react";
import Footer from "../common/Footer";
import NavigateBlack from "../common/navblack";
import "./faq.css";
import { Link } from "react-router-dom";

const Faq = () => {
  var complain;
  if (localStorage.getItem("token")) {
    complain = (
      <>
        <div className="container mt-5">
          <button
            type="button"
            className="btn1 btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            Any Problems?
          </button>

          <div
            className="modal"
            id="myModal"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Contact Us
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label required">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="fullName"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label required">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label required">
                        Type your message here
                      </label>
                      <textarea
                        className="form-control"
                        name="message"
                        required
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <button
                    type="submit"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    complain = (
      <>
        <div className="container mt-5">
          <Link to="/login">
            <button type="button" className="btn1 btn-primary">Login for feedback</button>
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <NavigateBlack />
      <div className="faq-main">
        <div className="faq_area section_padding_130" id="faq">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-sm-8 col-lg-6">
                <div
                  className="section_heading text-center wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  <h3>
                    <span>Frequently </span> Asked Questions
                  </h3>
                  <br />
                  <p>
                    Antiquette is completely creative, lightweight, clean &amp;
                    super responsive web landing page.
                  </p>
                  <div class="line"></div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-12 col-sm-10 col-lg-8">
                <div className="accordion faq-accordian" id="faqAccordion">
                  <div
                    className="card border-0 wow fadeInUp"
                    data-wow-delay="0.2s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div class="card-header" id="headingOne">
                      <h6
                        class="mb-0 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Question1?
                        <span class="lni-chevron-up"></span>
                      </h6>
                    </div>
                    <div
                      class="collapse"
                      id="collapseOne"
                      aria-labelledby="headingOne"
                      data-parent="#faqAccordion"
                    >
                      <div class="card-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Architecto quidem facere deserunt sint animi
                          sapiente vitae suscipit.
                        </p>
                        <p>
                          Appland is completely creative, lightweight, clean
                          &amp; super responsive app landing page.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="card border-0 wow fadeInUp"
                    data-wow-delay="0.3s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div class="card-header" id="headingTwo">
                      <h6
                        class="mb-0 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="true"
                        aria-controls="collapseTwo"
                      >
                        Question2?
                        <span class="lni-chevron-up"></span>
                      </h6>
                    </div>
                    <div
                      class="collapse"
                      id="collapseTwo"
                      aria-labelledby="headingTwo"
                      data-parent="#faqAccordion"
                    >
                      <div class="card-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Architecto quidem facere deserunt sint animi
                          sapiente vitae suscipit.
                        </p>
                        <p>
                          Appland is completely creative, lightweight, clean
                          &amp; super responsive app landing page.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="card border-0 wow fadeInUp"
                    data-wow-delay="0.4s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.2s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <div class="card-header" id="headingThree">
                      <h6
                        class="mb-0 collapsed"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="true"
                        aria-controls="collapseThree"
                      >
                        How do i Bid?
                        <span class="lni-chevron-up"></span>
                      </h6>
                    </div>
                    <div
                      class="collapse"
                      id="collapseThree"
                      aria-labelledby="headingThree"
                      data-parent="#faqAccordion"
                    >
                      <div class="card-body">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Architecto quidem facere deserunt sint animi
                          sapiente vitae suscipit.
                        </p>
                        <p>
                          Appland is completely creative, lightweight, clean
                          &amp; super responsive app landing page.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp"
                  data-wow-delay="0.5s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                ></div>
                <div>{complain}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
