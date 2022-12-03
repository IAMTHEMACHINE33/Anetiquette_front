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
    <div className="edit-profile-container-fluid">
      <NavigateBlack />

      <div className="">
        <h1 className="edit__title p-2">Edit Profile</h1>
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
              <div className="edit-control">
                <label for="fname">Name</label>
                <input
                  id="fname"
                  type="text"
                  placeholder="John wick"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />{" "}
                <br />
              </div>
              <div className="edit-control">
                <label for="lname">Email</label>
                <input
                  id="lname"
                  type="email"
                  placeholder="test@gmail.com"
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />{" "}
                <br />
              </div>

              <div className="edit-control">
                <label for="email">Password</label>
                <input
                  id="email"
                  type="password"
                  placeholder="*****"
                  required
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />{" "}
                <br />
              </div>
              <input type="submit" onClick={userUpdate} />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Edit_profile;
