import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";

import NavigateBlack from "./common/navblack";

const AddProduts = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [details, setDetails] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const productAdd = (e) => {
    e.preventDefault();

    // const data ={
    //   name: name,
    //   price: price,
    //   description: description,
    //   category: category,
    // };

    const data = new FormData();
    data.append("product_name", name);
    data.append("price", price);
    data.append("description", description);
    data.append("category", category);
    data.append("product_img", image);
    axios
      .post("http://localhost:4000/product/add", data, config)
      .then((response) => {
        console.log(response);
        console.log(config);
      })
      .catch((e) => {
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
      <br></br>
      <br></br>
      <br></br> 
      <div className="container mt-5">
        <h2 className="add products text-center mt-5 text-primary">
          Add New Product
        </h2>
        <div className="container col-5">
          <form>
            <div class="form-group mt-2 text-secondary">
              <label for="FormControlInput1">Product name</label>
              <input
                type="text"
                class="form-control"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </div>

            <div class="form-group mt-2 text-secondary">
              <label for="FormControlInput1">Price</label>
              <input
                type="number"
                class="form-control"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              ></input>
            </div>

            <div class="form-group mt-2 text-secondary">
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

            <div class="form-group mt-2 text-secondary">
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

            <div class="form-group  mt-3 text-secondary ">
              <label for="FormControlFile1  text-secondary">Select file</label>
              <input
                type="file"
                class="form-control-file mt-2 mb-2 d-flex justify-content-center"
                id="FormControlFile1"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
              ></input>
            </div>
          </form>

          <button
            type="button"
            class="btn btn-success mt-3"
            onClick={productAdd}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddProduts;
