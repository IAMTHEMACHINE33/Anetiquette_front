import Navbar from "./Navbar";
import React, { useEffect, useState } from "react";
// import "../styles.css";
import "./edit-profile.css";

const Edit_profile = () => {
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
                <label for="fname">First name:</label>
                <input id="fname" type={"text"} /> <br />
              </div>
              <div className="control">
                <label for="lname">Last name:</label>
                <input id="lname" type={"text"} /> <br />
              </div>

              <div className="control">
                <label for="email">Email:</label>
                <input id="email" type={"text"} /> <br />
              </div>
              <input type={"submit"} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit_profile;
