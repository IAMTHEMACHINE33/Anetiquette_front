import Navbar from "./common/Navbar";
import React from "react";
import photo from "../photo/redlips.jpg";
import monika from "../photo/monika.png";
import box  from "../photo/box.jpg";
import lens from "../photo/lens.jpg";
import diluc from "../photo/diluc.png";
import '../styles.css'

const Profile = () => {
  return (
    <>
      <Navbar />    
      <div className="container-fluid">
        <div className="card mb-3 p-5 border-0">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={monika}
                style={{
                  borderRadius: "50%",
                  width: "20vw",
                  height: "20vw",
                  objectFit: "cover", 
                }}
                alt="PP"
              />
            </div>
            <div className="col-md-8 m-0 pt-3">
              <div className="card-body-1">
                <h3 className="card-title">
                  <b>Monika</b>
                  &nbsp;&nbsp;
                  <span>
                    <svg
                      style={{ color: "#199de5" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      class="bi bi-patch-check-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                    </svg>
                  </span>
                </h3>
                <p class="card-text"></p>
                <a href="/">
                  <button type="button" class="btn btn-outline-warning px-5">
                    Edit
                  </button>
                </a>
                &nbsp;&nbsp;&nbsp;
                <a href="/">
                  <button type="button" class="btn btn-outline-primary px-5">
                    Upload
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid mb-3 ">
        <h5 class="px-5 mx-2 text-center text-decoration-bold">History</h5>
        <div class="row justify-content-between">
          <div class="card col-md-3 p-3 border-0 user_wallpaper">
            <a href="/">
              <img src={lens} class="card-img-top" alt="Order1"/>
            </a>
            <div class="card-body-2">
              <h5 class="card-title text-left">
                <span >Price:  </span>
              </h5>
              &nbsp;&nbsp;&nbsp;
              <h5 class="card-text">Category:</h5>
            </div>     
          </div>
          <div class="card col-md-3 p-3 border-0 user_wallpaper">
            <a href="/">
              <img src={box} class="card-img-top" alt="Order2" />
            </a>
            <div class="card-body-2">
              <h5 class="card-title text-left">
                <span>Price:  </span>
              </h5>
              &nbsp;&nbsp;&nbsp;
              <h5 class="card-text">Category:</h5>
            </div>     
          </div>
          <div class="card col-md-3 p-3 border-0 user_wallpaper">
            <a href="/">
              <img src={photo} class="card-img-top" alt="Order3" />
            </a>
            <div class="card-body-2">
              <h5 class="card-title text-left">
                <span>Price:  </span>
              </h5>
              &nbsp;&nbsp;&nbsp;
              <h5 class="card-text">Category:</h5>
            </div>     
          </div>
          <div class="card col-md-3 p-3 border-0 user_wallpaper" >
            <a href="/">
              <img src={diluc} class="card-img-top" alt="Order4" />
            </a>
            <div class="card-body-2">
              <h5 class="card-title text-left">
                <span>Price:  </span>
              </h5>
              &nbsp;&nbsp;&nbsp;
              <h5 class="card-text">Category:</h5>
            </div>     
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
