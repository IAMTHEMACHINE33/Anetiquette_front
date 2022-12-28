import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./profile.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import axios from "axios";
import NavigateBlack from "../common/navblack";
import PurchaseSlide from "./sliders/purchaseslider";
import OrderSlide from "./sliders/orderslider";
import Footer from "../common/Footer";
import Typical from "react-typical";

export default function Profile() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

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
        setEmail(response.data.data.email);
        setImage(response.data.data.image);
      })
      .catch((e) => {
        console.log(e);
      });
  });
  const Edit_Profile = () => {
    navigate("/Edit_profile");
  };
  return (
    <>
      <NavigateBlack />
      <div className="gradient-custom-2" style={{ backgroundColor: "#9de2ff" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="50" xl="10">
              <MDBCard>
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: "#000", height: "250px" }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: "200px" }}
                  >
                    <MDBCardImage
                      src={"http://localhost:4000/" + image}
                      alt="Generic placeholder image"
                      className="mt-4 mb-2 img-thumbnail"
                      fluid
                      style={{ width: "150px", zIndex: "1" }}
                    />
                    <MDBBtn
                      color="light"
                      className="mt-2"
                      style={{ height: "50px", overflow: "visible" }}
                      onClick={Edit_Profile}
                    >
                      Edit profile
                    </MDBBtn>
                  </div>
                  <div className="ms-5" style={{ marginTop: "150px" }}>
                    <MDBTypography tag="h5">
                      {name} <i class="fas fa-check"></i>{" "}
                    </MDBTypography>

                    <MDBCardText>{email}</MDBCardText>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex justify-content-end text-center py-1">
                    <div>
                      <MDBCardText className="mb-1 h5">253</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Products
                      </MDBCardText>
                    </div>
                    <div className="px-3">
                      <MDBCardText className="mb-1 h5">1026</MDBCardText>
                      <MDBCardText className="small text-muted mb-0">
                        Orders
                      </MDBCardText>
                    </div>
                  </div>
                </div>
                <MDBCardBody className="text-black p-4">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">About You</p>
                    <div className="p-4" style={{ backgroundColor: "#E9E2D8" }}>
                      <MDBCardText className="font-italic mb-1">
                        Hello {name}
                      </MDBCardText>
                      <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                          "😳",
                          1000,
                          "😱",
                          1000,
                          "😖 ",
                          1000,
                          "Quack Quack😡",
                          1000,
                        ]}
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <MDBCardText className="lead fw-normal mb-0">
                      Products Purchased
                    </MDBCardText>
                    <MDBCardText className="mb-0">
                      <a href="/OrderDetails" className="text-muted">
                        Show all
                      </a>
                    </MDBCardText>
                  </div>
                  <PurchaseSlide />
                  <br />
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <MDBCardText className="lead fw-normal mb-0">
                      Products Selling
                    </MDBCardText>
                    <MDBCardText className="mb-0">
                      <a href="/OrderDetails" className="text-muted">
                        Show all
                      </a>
                    </MDBCardText>
                  </div>
                  <OrderSlide />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <Footer />
    </>
  );
}
