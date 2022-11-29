import React, { useEffect, useState } from "react";
import "./feature.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import axios from "axios";
import {Link} from "react-router-dom";

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
        <div class="header">Featured items</div>

        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry>
            {details.map((option) => {
              return (
                <a href="/product" className="text-black">
                  <Link to={"/product/"+option._id}>
                  <div class="card m-2">
                    <img
                      src={"http://localhost:4000/" + option.image}
                      class="card-img-top"
                      alt="hot-sale.jpg"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{option.product_name}</h5>
                      <p class="card-text">${option.price}</p>
                    </div>
                  </div>
                  </Link>
                </a>
              );
            })}

{details.map((option) => {
              return (
                <a href="/product" className="text-black">
                  <div class="card m-2">
                    <img
                      src={"http://localhost:4000/" + option.image}
                      class="card-img-top"
                      alt="hot-sale.jpg"
                    />
                    <div class="card-body">
                      <h5 class="card-title">{option.product_name}</h5>
                      <p class="card-text">${option.price}</p>
                    </div>
                  </div>
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
