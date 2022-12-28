import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { ImageBackground } from "react-native-web";
import Footer from "../common/Footer";
import $ from 'jquery';

import "../add_product/add_product.css";
import toast, { Toaster } from 'react-hot-toast';

import NavigateBlack from "../common/navblack";

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


const AddProduts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState([]);
  const [time, setTime] = useState("");
  const [details, setDetails] = useState([]);

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
    console.log(image)
    const data = new FormData();
    data.append("product_name", name);
    data.append("price", price);
    data.append("description", description);
    data.append("category", category);
    data.append("type", type);
    data.append("last_time", time);
    for(let i =0;i<image.length;i++){
      data.append("product_img", image[i]);
    }
    

     
  console.log("after")
    axios
      .post("http://localhost:4000/product/add", data, config)
      .then((response) => {
        console.log(response);
        console.log(config);
        toast.success("Product added");
        setTimeout(function () { window.location.href("/"); }, 2000);
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

      <div className="product-container mt-5">
        <div class="pt-5 pb-3">
          <h2 className="add-products text-center mt-5 text-secondary">
            Sell Your Item
          </h2>
        </div>
        <div id="pcard" className="card container col-4 ">
          <form name="myform">
            <div class="form-group mt-2  p-2">
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

            <div class="form-group mt-2  p-2">
              <label for="FormControlInput1">Price</label>
              <input
                type="number"
                class="form-control"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              ></input>
            </div>

            <div class="form-group mt-2  p-2">
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
                  return <option value={option._id}>{option.name}</option>;
                })}
              </select>
            </div>




            <div class="form-group mt-2  p-2">
              <label for="FormControlTextarea1 ">Description</label>
              <textarea
                class="form-control"
                placeholder="Write the product information"
                id="FormControlTextarea1"
                rows="3"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>

            <div class="form-group  mt-1 p-2 ">
              <label for="FormControlFile1  text-secondary">Select file</label>
              <input
                multiple="multiple"
                type="file"
                class="form-control-file mt-2 mb-2 d-flex justify-content-center"
                id="FormControlFile1"
                onChange={(e) => {
                  setImage(e.target.files);
                }}
              ></input>
            </div>

            <div class="form-group mt-2  p-2">
              <label for="FormControlSelect1">Type</label>

              <select
                class="form-control"
                id="FormControlSelect1"
                onChange={(e) => {
                  setType(e.target.value);
                  if (e.target.value == 'Auction') {
                    document.myform['Auction'].style.visibility = 'visible'
                  }
                  else {
                    document.myform['Auction'].style.visibility = 'hidden'
                  }
                }}
              >
                <option>Select Type</option>
                <option value="Auction">Auction - Select Time Limit</option>
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
          </form>


          <button
            className="btn btn-primary profile-button mt-2 mb-3"
            onClick={productAdd}
          >
            Submit
          </button>
        </div>
        <Toaster />
        <Footer />
      </div>
    </>
  );
};



export default AddProduts;
