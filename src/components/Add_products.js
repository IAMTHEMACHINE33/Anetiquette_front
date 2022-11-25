import React, { useState } from "react";

const AddProduts = () => {
  return (
    <>
      <div className="container mt-2">
        <h2 className="add products text-center mt-5 text-primary">
          Add New Product
        </h2>
        <div className="container col-5">
          <form>
            <div class="form-group mt-2 text-secondary">
              <label for="FormControlInput1">Product name</label>
              <input type="text" class="form-control"></input>
            </div>

            <div class="form-group mt-2 text-secondary">
              <label for="FormControlInput1">Price</label>
              <input type="number" class="form-control"></input>
            </div>

            <div class="form-group mt-2 text-secondary">
              <label for="FormControlSelect1">Category</label>
              <select class="form-control" id="FormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div class="form-group mt-2 text-secondary">
              <label for="FormControlTextarea1 ">Description</label>
              <textarea
                class="form-control"
                placeholder="Write the product information"
                id="FormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <div class="form-group  mt-3 text-secondary ">
              <label for="FormControlFile1  text-secondary">Select file</label>
              <input
                type="file"
                class="form-control-file mt-2 mb-2 d-flex justify-content-center"
                id="FormControlFile1"
              ></input>
            </div>
          </form>

          <button type="button" class="btn btn-success mt-3">
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddProduts;
