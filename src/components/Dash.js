import React, { useEffect, useState } from "react";
import Navbar from "./common/Navbar";
import CarouselImg from "./Carousel";
import Category from './Category';
import Footer from "./common/Footer";
import axios from "axios";
const Dash = () => {

  const [details, setDetails] = useState([]);
  

  useEffect(()=>{
    axios.get("http://localhost:4000/product/show")
    .then(result=>{
      console.log(result.data.data)
      setDetails(result.data.data)
    }).catch(e=>{console.log(e)})
  },[])



  return (
    <>
      <Navbar />
      <CarouselImg />
      <Category />
      <div className="container my-4">
        <h3 className="m-5 text-center">Featured items</h3>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {details.map(option=>{
            return(<div className="col">
              <a href="/product" className="text-decoration-none">
            <div className="card h-30">
              <img src={"http://localhost:4000/"+option.image} className="card-img-top dashimg" alt="..." />
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item text-center">0:00:00</li>
                  <li className="list-group-item">{option.product_name}</li>
                  <li className="list-group-item">${option.price}</li>
                </ul>
              </div>
            </div>
            </a>
          </div>)
          })}
          
          
          
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Dash;
