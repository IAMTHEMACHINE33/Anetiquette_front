import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { ImageBackground } from "react-native-web";
import Footer from "../common/Footer";
import $ from "jquery";
import "../add_product/add_product.css";
import { useDropzone } from "react-dropzone";
import "../search/testing.css";
import Typical from "react-typical";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate, useLocation } from "react-router-dom";

import NavigateBlack from "../common/navblack";

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>;

const AddProduts = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState([]);
  const [time, setTime] = useState("");
  const [details, setDetails] = useState([]);

  // const resolveAfter3Sec = new Promise(resolve => setTimeout(resolve, 3000));

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setImage(
        acceptedFiles.map((img) =>
          Object.assign(img, {
            preview: URL.createObjectURL(img),
          })
        )
      );
      console.log(acceptedFiles);
    },
  });

  const images = image.map((img) => (
    <img
      className="dragimg"
      key={img.name}
      src={img.preview}
      alt="image"
      style={{
        border: "0.5px solid black",
        borderRadius: "25px",
        width: "7rem",
        height: "7rem",
        objectFit: "cover",
        margin: "20px",
      }}
    />
  ));

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  // $("input").on("input", function () {
  //   var names = $(this).prop('files');
  //   for (var i = 0; i < names.length; i++) {
  //     console.log(names[i].name)
  //     console.log(i)
  //   }

  // });

  const productAdd = (e) => {
    e.preventDefault();

    // const data ={
    //   name: name,
    //   price: price,
    //   description: description,
    //   category: category,
    // };
    console.log(image);
    const data = new FormData();
    data.append("product_name", name);
    data.append("price", price);
    data.append("description", description);
    data.append("category", category);
    data.append("type", type);
    data.append("last_time", time);
    for (let i = 0; i < image.length; i++) {
      data.append("product_img", image[i]);
    }

    console.log("after");
    axios
      .post("http://localhost:4000/product/add", data, config)
      .then((response) => {
        console.log(response);
        console.log(config);
        toast.success("product added");
        setTimeout(function () {
          navigate(redirect);
        }, 3000);
      })
      .catch((e) => {
        toast.error("Failed to add product");
        console.log(e);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:4000/category/show").then((response) => {
      console.log(response.data.data);
      setDetails(response.data.data);
    });
  }, []);

  return (
    <>
      <NavigateBlack />
      <div className="container-fluid mt-5 py-3">
        <div className="container-fluid mt-5 p-3">
          <form name="myform">
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-2">
              <div className="col p-3">
                <h1>
                  {" "}
                  <Typical
                    steps={[
                      "Sell your items",
                      10000,
                      "Sell at antiquette!!",
                      10000,
                    ]}
                    loop={Infinity}
                    wrapper="p"
                  />
                </h1>

                <div className="row">
                  <div class="col form-group mt-2  p-2">
                    <label for="FormControlInput1">Product name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Apple"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    ></input>
                  </div>
                  <div class="col form-group mt-2  p-2">
                    <label for="FormControlInput1">Price</label>
                    <input
                      type="number"
                      class="form-control"
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div class="form-group mt-2">
                  <label for="FormControlTextarea1 ">Description</label>
                  <textarea
                    class="form-control"
                    placeholder="Write the product information"
                    id="FormControlTextarea1"
                    rows="5"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="row">
                  <div class="col-6 form-group mt-2  p-2">
                    <label for="FormControlSelect1">Category</label>
                    <select
                      class="form-control"
                      id="FormControlSelect1"
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    >
                      <option>Select Category</option>
                      {details.map((option) => {
                        return (
                          <option value={option._id}>{option.name}</option>
                        );
                      })}
                    </select>
                  </div>

                  <div class="col-6 form-group mt-2  p-2">
                    <label for="FormControlSelect1">Type</label>
                    <select
                      class="form-control"
                      id="FormControlSelect1"
                      onChange={(e) => {
                        setType(e.target.value);
                        if (e.target.value == "Auction") {
                          document.myform["Auction"].style.visibility =
                            "visible";
                        } else {
                          document.myform["Auction"].style.visibility =
                            "hidden";
                        }
                      }}
                    >
                      <option>Select Type</option>
                      <option value="Auction">
                        Auction - Select Time Limit
                      </option>
                      <option value="Purchase">Purchase</option>
                    </select>
                    <input
                      type="datetime-local"
                      name="Auction"
                      style={{ visibility: "hidden" }}
                      class="form-control"
                      onChange={(e) => {
                        setTime(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                {/* <div class="form-group ">
                  <label for="FormControlFile1  text-secondary">
                    Select file
                  </label>
                  <input
                    multiple="multiple"
                    type="file"
                    class="form-control-file mt-2 mb-2 d-flex justify-content-center"
                    id="FormControlFile1"
                    onChange={(e) => {
                      setImage(e.target.files);
                    }}
                  ></input>
                </div> */}
              </div>
              <div className="col p-3">
                <div
                  className="dropArea container-fluid"
                  {...getRootProps()}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <input {...getInputProps()}></input>
                  {isDragActive ? (
                    <>
                      <h5 className="text-center p-3" style={{ color: "grey" }}>
                        Drop it like it's hot
                      </h5>
                    </>
                  ) : (
                    <div>{images}</div>
                  )}
                </div>
                <p
                  className="text-center draginfo m-3"
                  style={{ color: "grey" }}
                >
                  Drag and drop images or click to browse
                </p>
              </div>
            </div>
          </form>
          <div className="addproductbtn">
            <button className="btn btn-warning add-button" onClick={productAdd}>
              Add Product
            </button>
          </div>
        </div>
      </div>
      <br />
      <Toaster />
      <Footer />
    </>
  );
};

export default AddProduts;
