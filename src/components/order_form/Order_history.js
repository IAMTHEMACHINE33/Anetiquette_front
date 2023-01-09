import {MDBCard, MDBCardBody,MDBCardFooter,MDBCardHeader,MDBCardImage,MDBCol, MDBContainer, MDBProgress,MDBProgressBar,MDBRow,MDBTypography,} from "mdb-react-ui-kit";
import React from "react";
import { useState, useEffect } from "react";  
import axios from "axios";
import NavigateBlack from "../common/navblack";
import Footer from "../common/Footer";

export default function OrderDetails() {

  const [name, setName] = useState("");
  const [details, setDetails]=useState([]);


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
      })
      .catch((e) => {
        console.log(e);
      });
    axios.get("http://localhost:4000/product/purchase_history",config)
    .then(response=>{
      console.log(response.data.data)
      setDetails(response.data.data)
      console.log(details.length)
      const a = details.length
     
    })
  },[]);
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
                      <span style={{ color: "#a8729a" }}>{name}</span>!
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

                    </div>
  
                    {details.map((option)=>{
                      return(
                        <MDBCard className="shadow-0 border mb-4">
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol md="2">
                            <MDBCardImage
                              src={'http://localhost:4000/' + option.images[0].name}
                              fluid
                              alt="Antique1"
                            />
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0">{option.product_name}</p>
                          </MDBCol>
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">{option.category.name}</p>
                          </MDBCol>
                          {/* <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">Qty: 1</p>
                          </MDBCol> */}
                          <MDBCol
                            md="2"
                            className="text-center d-flex justify-content-center align-items-center"
                          >
                            <p className="text-muted mb-0 small">${option.price}</p>
                          </MDBCol>
                        </MDBRow>
                        <hr
                          className="mb-4"
                          style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                        />
                        {/* <MDBRow className="align-items-center">
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
                        </MDBRow> */}
                      </MDBCardBody>
                    </MDBCard>
                      );
                    })}
                  </MDBCardBody>
                  {/* <MDBCardFooter
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
                      Total paid: <span className="h2 mb-0 ms-2">$${option.price}</span>
                    </MDBTypography>
                  </MDBCardFooter> */}
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <Footer />
        </section>
      </>
      
    );
  }