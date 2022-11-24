import Navbar from "../common/Navbar";
import React, { useEffect, useState } from "react";

// import "../styles.css";
import "./edit-profile.css";
import axios from "axios";

const Edit_profile = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('****');

  

  useEffect(()=>{
    axios.get("http://localhost:4000/api/v1/show")
    .then(response=>{
      setName(response.data.name);
      setEmail(response.data.email);
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
    axios.put("http://localhost:4000/api/v1/update",data)
    .then((result)=>{
      console.log(result)
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
                <input id="fname" type={"text"} value={name} onChange={(e)=>{setName(e.target.value)}}/> <br />
              </div>
              <div className="control">
                <label for="lname">Email:</label>
                <input id="lname" type={"text"} value={email} onChange={(e)=>{setEmail(e.target.value)}}/> <br />
              </div>

              <div className="control">
                <label for="email">Password:</label>
                <input id="email" type={"text"} value={password} onChange={(e)=>{setPassword(e.target.value)}}/> <br />
              </div>
              <input type={"submit"} onClick={userUpdate}/>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit_profile;
