import React, { useState } from "react";
import Sidebar from "../Sidebar/sidebar";
import "./addcat.css";
import axios from "axios";

const AddCat = () => {
  const [name,setName]=useState('');
  const [image,setImage]=useState('');

  const config={
    headers:{
      Authorization:"Bearer "+localStorage.getItem("admin_token")
    }
  }


  const addCategory = ()=>{
    const data = new FormData();
    data.append("name",name);
    data.append("category_img",image);

    axios.post("http://localhost:4000/category/add",data,config)
    .then((response)=>{
      console.log(response)
    })
    .catch((e)=>{
      console.log(e)
    })
  }

  return (
    <div>
      <Sidebar />
      <div class="hat">
        <div class=" text-center mt-5 ">
          <h1>Add Category</h1>
        </div>
        <div class="row ">
          <div class="col-lg-7 mx-auto">
            <div class="card mt-2 mx-auto p-4 bg-light">
              <div class="card-body bg-light">
                <div class="container">
                  <form id="contact-form" role="form">
                    <div class="controls">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label for="form_name">Category Name</label>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              class="form-control"
                              placeholder="Please enter Category Name"
                              required="required"
                              data-error="Category Name Field is required."
                              onChange={(e)=>{setName(e.target.value)}}
                            />
                          </div>
                          <label class="form-label" for="customFile">
                            <br />
                            Category Image
                          </label>
                          <input
                            type="file"
                            class="form-control"
                            id="customFile"
                            onChange={(e)=>{setImage(e.target.files[0])}}
                          />
                          <br />
                          <button
                            type="button"
                            class="btn btn-primary"
                            style={{ width: "150px" }}
                            onClick={addCategory}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCat;
