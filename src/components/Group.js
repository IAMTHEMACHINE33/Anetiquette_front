import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import "./group.css";

const Category = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/category/show")
      .then((result) => {
        console.log(result.data.data);
        setDetails(result.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    swipeToSlide: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: false,
    prevArrow: false,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-fluid group_container p-2 text-center w-75">
        <div className="h2">
          <h2 className="text-center mt-3 text-white p-3 text-uppercase">
            {" "}
            Category
          </h2>
        </div>

        <Slider {...settings} className="w-100">
          {details.map((option) => {
            return (
              <a href="/category" style={{color:"black !important",pointer:"cursor"}}>
              <div className="card border-0  categorycard">
                <div className="categoryimage">
                  <img
                    className="card-img-top img-responsive "
                    src={"http://localhost:4000/" + option.image}
                    alt="Card image cap"
                  />
                </div>

                <p className="card-text text-center" style={{color:"black"}}>{option.name}</p>
              </div>
              </a>
            );
          })}

        
        </Slider>
      </div>
    </>
  );
};

export default Category;
