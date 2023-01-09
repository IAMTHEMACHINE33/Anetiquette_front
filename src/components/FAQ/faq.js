import React from "react";
import Footer from "../common/Footer";
import NavigateBlack from "../common/navblack";
import "./faq.css";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Faq = () => {
  const [feed, setFeed] = useState("");

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const addFeed = (e) => {
    e.preventDefault();
    const data = {
      feed: feed,
    };
    axios
      .post("http://localhost:4000/feedback/add", data, config)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/feedback/show", config)
      .then((response) => {
        console.log(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
                  <button class="btn-close" data-bs-dismiss="modal">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label className="form-label required">
                        Type your message here
                      </label>
                      <textarea
                        className="form-control"
                        name="message"
                        required
                        onChange={(e) => {
                          setFeed(e.target.value);
                        }}
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={addFeed}
                  >
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
            <button type="button" className="btn1 btn-primary">
              Login for feedback
            </button>
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
                        Can I pay for items on AntiQuette with Khalti?
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
                          Antiques can be bought on AntiQuette with Khalti
                          provided the antique dealer has a registered Khalti
                          account.
                        </p>
                        <p>
                          When buying item you will be taken to a payment method
                          screen provided the dealer does use Khalti.
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
                        What does AntiQuette sell?
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
                          AntiQuette is a marketplace which displays antiques on
                          behalf of antique dealers. When a customer buys an
                          antique through AntiQuette, the transaction takes
                          place between the customer and the dealer.
                        </p>
                        <p>
                          All dealers are verified before they can upload their
                          stock to AntiQuette.
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
                        I Have A Question About An Item On The Website
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
                          If you have a question or require further information
                          about one of the items listed on the website please
                          either telephone the dealer directly or press the Any Problems? button on the Help page. 
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
