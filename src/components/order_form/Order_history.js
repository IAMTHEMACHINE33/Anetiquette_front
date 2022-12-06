import {MDBCard, MDBCardBody,MDBCardFooter,MDBCardHeader,MDBCardImage,MDBCol, MDBContainer, MDBProgress,MDBProgressBar,MDBRow,MDBTypography,} from "mdb-react-ui-kit";
import React from "react";
import NavigateBlack from "../common/navblack";
import Footer from "../common/Footer";

export default function OrderDetails() {
    return (
      <>
      <NavigateBlack />
      <br/>
      <br/>
        <section
          className="h-100 gradient-custom"
          style={{ backgroundColor: "#eee" }}
        >
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol lg="10" xl="8">
                <MDBCard style={{ borderRadius: "10px" }}>
                  <MDBCardHeader className="px-4 py-5">
                    <MDBTypography tag="h5" className="text-muted mb-0">
                      Detailed Order Status of{" "}
                      <span style={{ color: "#a8729a" }}>"UserName Here"</span>!
                    </MDBTypography>
                  </MDBCardHeader>
                  <MDBCardBody className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <p
                        className="lead fw-normal mb-0"
                        style={{ color: "#a8729a" }}
                      >
                        Orders
                      </p>
                      <p className="small text-muted mb-0">
                        Product Code: "Random Generated Numbers #9i891283921"
                      </p>
                    </div>
  
                    <MDBCard className="shadow-0 border mb-4">
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol md="2">
                            <MDBCardImage
                              src="https://media.gq-magazine.co.uk/photos/5d1399752881cc7da90a84c6/master/w_1600%2Cc_limit/nokia3310.jpg"
                              fluid
                              alt="Antique1"
                            />
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0">Nuclear Bomb</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">Dark</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">
                              Area: "Need Practical Area"
                            </p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">Qty: 1</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">$0</p>
                          </MDBCol>
                        </MDBRow>
                        <hr
                          className="mb-4"
                          style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                        />
                        <MDBRow className="align-items-center">
                          <MDBCol md="2">
                            <p className="text-muted mb-0 small">Status</p>
                          </MDBCol>
                          <MDBCol md="10">
                            <MDBProgress
                              style={{ height: "6px", borderRadius: "16px" }}
                            >
                              <MDBProgressBar
                                style={{
                                  borderRadius: "16px",
                                  backgroundColor: "#a8729a",
                                }}
                                width={65}
                                valuemin={0}
                                valuemax={100}
                              />
                            </MDBProgress>
                            <div className="d-flex justify-content-around mb-1">
                              <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                Shipping
                              </p>
                              <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                Delivered
                              </p>
                            </div>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCard>
  
                    <MDBCard className="shadow-0 border mb-4">
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol md="2">
                            <MDBCardImage
                              src="https://static-01.daraz.com.np/p/e614ad4629d7a33ddf72611ff56fd002.jpg"
                              fluid
                              alt="Phone"
                            />
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0">Karuwa</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">Gold</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">
                              Capacity: Unknown
                            </p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">Qty: 1</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">$500</p>
                          </MDBCol>
                        </MDBRow>
                        <hr
                          className="mb-4"
                          style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                        />
                        <MDBRow className="align-items-center">
                          <MDBCol md="2">
                            <p className="text-muted mb-0 small">Status</p>
                          </MDBCol>
                          <MDBCol md="10">
                            <MDBProgress
                              style={{ height: "6px", borderRadius: "16px" }}
                            >
                              <MDBProgressBar
                                style={{
                                  borderRadius: "16px",
                                  backgroundColor: "#a8729a",
                                }}
                                width={20}
                                valuemin={0}
                                valuemax={100}
                              />
                            </MDBProgress>
                            <div className="d-flex justify-content-around mb-1">
                              <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                Shipping
                              </p>
                              <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                Delivered
                              </p>
                            </div>
                          </MDBCol>
                        </MDBRow>
                      </MDBCardBody>
                    </MDBCard>
  
                    <div className="d-flex justify-content-between pt-2">
                      <p className="fw-bold mb-0">Order Details</p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Total</span> $0
                      </p>
                    </div>
  
                    <div className="d-flex justify-content-between pt-2">
                      <p className="text-muted mb-0">Bill Number : 42069</p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Discount</span> $00
                      </p>
                    </div>
  
                    <div className="d-flex justify-content-between">
                      <p className="text-muted mb-0">
                        Invoice Date : 04 Feb,2069
                      </p>

                    </div>
  
                    <div className="d-flex justify-content-between mb-5">
                      <p className="text-muted mb-0">
                         Voucher : "Not Used"
                      </p>
                      <p className="text-muted mb-0">
                        <span className="fw-bold me-4">Delivery Charges</span>{" "}
                        Free
                      </p>
                    </div>
                  </MDBCardBody>
                  <MDBCardFooter
                    className="border-0 px-4 py-5"
                    style={{
                      backgroundColor: "#a8729a",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                    }}
                  >
                    <MDBTypography
                      tag="h5"
                      className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                    >
                      Total paid: <span className="h2 mb-0 ms-2">$000</span>
                    </MDBTypography>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <Footer />
        </section>
      </>
      
    );
  }