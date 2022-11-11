import React from "react";
import Navbar from "./Navbar";
import CarouselImg from "./Carousel";
import img1 from "../photo/neon.jpg";
import img2 from '../photo/redlips.jpg';
import Category from './Category';
import Footer from "./Footer";
const Dash = () => {
  return (
    <>
      <Navbar />
      <CarouselImg />
      <Category />
      <div className="container my-4">
        <h3 className="m-5 text-center">Featured items</h3>
            
        
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-30">
              <img src={img1} className="card-img-top dashimg" alt="..." />
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center">0:00:00</li>
                  <li className="list-group-item">Rainbow Girl</li>
                  <li className="list-group-item">$1.000</li>
                </ul>
                
                
              </div>
              
            </div>
          </div>
          <div className="col">
            <div className="card h-30">
              <img src={img1} className="card-img-top dashimg" alt="..." style={{width:"100%"}} />
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center">0:00:00</li>
                  <li className="list-group-item">Rainbow Girl</li>
                  <li className="list-group-item">$1.000</li>
                </ul>
                
                
              </div>
              
            </div>
          </div>
          <div className="col">
            <div className="card h-30">
              <img src={img2} className="card-img-top dashimg" alt="..." />
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center">0:00:00</li>
                  <li className="list-group-item">Rainbow Girl</li>
                  <li className="list-group-item">$1.000</li>
                </ul>
                
                
              </div>
              
            </div>
          </div>
          <div className="col">
            <div className="card h-30">
              <img src={img2} className="card-img-top dashimg" alt="..." />
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center">0:00:00</li>
                  <li className="list-group-item">Rainbow Girl</li>
                  <li className="list-group-item">$1.000</li>
                </ul>
                
                
              </div>
              
            </div>
          </div>
          
          
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Dash;
