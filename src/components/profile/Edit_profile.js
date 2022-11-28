import Navbar from "../common/Navbar";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
// import "../styles.css";
import "./edit-profile.css";
import axios from "axios";

const Edit_profile = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const redirect=location.search ? location.search.split("=")[1] : "/profile"

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const config ={
    headers:{
        Authorization:"Bearer "+localStorage.getItem("token")
    }
  }

  useEffect(()=>{
    axios.get("http://localhost:4000/api/v1/show",config)
    .then(response=>{
      setName(response.data.data.name);
      setEmail(response.data.data.email);
    })
    .catch(e=>{
      console.log(e);
    })
  },[])

  const userUpdate = (e)=>{
    e.preventDefault();
    const data={
      name: name,
      email: email,
      password: password,
    };
    axios.put("http://localhost:4000/api/v1/update",data, config)
    .then((result)=>{
      console.log(result)
      navigate(redirect)
    })
    .catch(e=>{
      console.log(e)
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
      <Navbar />
      <div className="edit-profile-container">
        <h1 className="edit__title">Edit Profile</h1>
        <hr />
        <div className="edit-profile__content">
          <div className="edit_left">
            <div className="left__content">
              <div className="edit_avatar">
                <img src={file} />
              </div>
              <p className="upload">Monika</p>
              <input type="file" className="file" onChange={changePic} />
            </div>
          </div>
          <div className="edit_right">
            <h3 className="personal-info"> Personal Info</h3>
            <form>
              <div className="control">
                <label for="fname">Name:</label>
                <input id="fname" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/> <br />
              </div>
              <div className="control">
                <label for="lname">Email:</label>
                <input id="lname" type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br />
              </div>

              <div className="control">
                <label for="email">Password:</label>
                <input id="email" type="text" placeholder="*****" onChange={(e)=>{setPassword(e.target.value)}}/> <br />
              </div>
              <input type="submit" onClick={userUpdate}/>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
//asd
export default Edit_profile;
