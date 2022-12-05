import React, { useEffect, useState } from "react"; 
import { Link, useNavigate, useLocation } from "react-router-dom";
// import "../styles.css";
import "./edit-profile.css";
import axios from "axios";
import Footer from "../common/Footer";
import NavigateBlack from "../common/navblack";

const Edit_profile = () => {  
  const location = useLocation();
  const navigate = useNavigate();

  const redirect = location.search ? location.search.split("=")[1] : "/profile";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const userUpdate = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
    };
    axios
      .put("http://localhost:4000/api/v1/update", data, config)
      .then((result) => {
        console.log(result);
        navigate(redirect);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const [file, setFile] = useState(
    "/static/media/monika.d77b200f5c69a1986742.png"
  );

  const changePic = (e) => {
    console.log("clicked!");
    // e.preventDefault();
    setFile(e.target.files[0].name);
    console.log(file);
  };
  return (
    <>
    <NavigateBlack/>
    <div className="main">
    <div className="container-fluid p-3">
      <div className="container w-50 outbox rounded bg-white edit-profile">
          <div className="row justify-content-center mt-5">
              <div className="col-md-3 border-right">
                  <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src="https://i.imgur.com/O1RmJXT.jpg" width="90"/><span className="font-weight-bold">{name}</span><span className="text-black-50">{email}</span></div>
              </div>
              <div className="col-md-5 border-right">
                  <div className="p-3 py-5">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                          <h6 className="text-right">Edit your profile</h6>
                      </div>
                      <div className="row mt-3">
                          <div className="col-md-12"><label className="labels">Name</label><input type="text" className="form-control" placeholder={name} onChange={(e)=>setName(e.target.value)}/></div>
                          <div className="col-md-12"><label className="labels">Email</label><input type="email" className="form-control" placeholder={email} onChange={(e)=>setEmail(e.target.value)}/></div>
                          <div className="col-md-12"><label className="labels">Password</label><input type="password" className="form-control" placeholder={password} onChange={(e)=>setPassword  (e.target.value)}/></div>
                      </div>
                      <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit" onClick={userUpdate}>Save Profile</button></div>
                  </div>
              </div>
          
          </div>
      </div>
    </div>
    <Footer />
    </div>
    
    </>
  );
};

export default Edit_profile;