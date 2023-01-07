import React, { useEffect, useState } from "react";
import "./feature.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";
import { Link } from "react-router-dom";

const Feature = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/product/show")
      .then((result) => {
        console.log(result.data.data);
        setDetails(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div className="container feature_container text-center">
        <div className="header">Featured items</div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry>
            {details.slice(0, 8).map((option) => {
              return (
                <a href="/product" className="text-black">
                  <Link to={"/product/" + option._id}>
                    <div className="card m-2">
                      <img
                        src={"http://localhost:4000/" + option.images[0].name}
                        className="card-img-top"
                        alt="hot-sale.jpg"
                      />
                      <div className="card-body">
                        <h5 className="card-title" style={{ color: "black" }}>{option.product_name}</h5>
                        <p className="card-text d-flex flex-start" style={{ color: "black" }}>${option.price}</p>
                      </div>
                    </div>
                  </Link>
                </a>
              );
            })}



          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>
  );
};

export default Feature;
