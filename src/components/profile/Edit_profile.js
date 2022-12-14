import React, { useEffect, useState } from "react"; 
import { Link, useNavigate, useLocation } from "react-router-dom";
// import "../styles.css";
import "./edit-profile.css";
import axios from "axios";
import Footer from "../common/Footer";
import NavigateBlack from "../common/navblack";
import toast , {Toaster} from "react-hot-toast";

const Edit_profile = () => {  
  const location = useLocation();
  const navigate = useNavigate();

  const redirect = 
    location.search ? location.search.split("=")[1] : "/profile"
  


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
        toast.success("Profile Updated");
      //  navigate(redirect);
        setTimeout(function(){navigate(redirect);},1000);
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
          <div className="row justify-content-evenly mt-5">
              <div className="col-md-3 border-right mt-4">
                  <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" src="https://i.imgur.com/O1RmJXT.jpg" width="90"/><span className="font-weight-bold">{name}</span><span className="text-black-50">{email}</span></div>
              </div>
              <div className="col-md-5 border-right">
                  <div className="p-3 py-5">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                          <h5 className="text-right">Edit your profile</h5>
                      </div>
                      <div className="row mt-3">
                          <div className="col-md-12"><label className="labels">Name</label><input type="text" id="name" name="name" className="form-control" placeholder={name} value={name} onChange={(e)=>setName(e.target.value)}/></div>
                          <div className="col-md-12"><label className="labels">Email</label><input type="email" id="email" name="email" className="form-control" placeholder={email} value={email} onChange={(e)=>setEmail(e.target.value)}/></div>
                          <div className="col-md-12"><label className="labels">Password</label><input type="password" id="password" name="password" className="form-control" placeholder={password} onChange={(e)=>setPassword  (e.target.value)}/></div>
                      </div>
                      <div className="mt-4 text-center"><button className="btn btn-primary profile-button" type="submit" onClick={userUpdate}>Save Profile</button></div>
                  </div>
              </div>
          
          </div>
      </div>
    </div>
    <Toaster/>
    <Footer />
    </div>
    
    </>
  );
};

export default Edit_profile;