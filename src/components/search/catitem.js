
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// React Component to display individual item
const Item = () => {
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
  return(
  <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
  <Masonry>
    {details.map((option) => {
        return (
          <a href="/product" className="text-black">
            <Link to={"/product/" + option._id}>
              <div className="card m-2">
                <img
                  src={"http://localhost:4000/" + option.image}
                  className="card-img-top"
                  alt="hot-sale.jpg"
                />
                <div className="card-body">
                  <h6 className="card-title">{option.product_name}</h6>
                  <p className="card-text">${option.price}</p>
                </div>
              </div>
            </Link>
          </a>
        );
      })}
  </Masonry>
</ResponsiveMasonry>
  );
    };

export default Item;