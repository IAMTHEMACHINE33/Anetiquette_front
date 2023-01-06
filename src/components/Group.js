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

          <div className="card border-0  categorycard">
            <div className="categoryimage">
              <img
                className="card-img-top img-responsive "
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdGw9OILMz2XUV6hq7CCsRKPekxyXH-zc5nw&usqp=CAU"
                alt="Card image cap"
              />
            </div>

            <p className="card-text text-center">Accessories</p>
          </div>

          <div className="card border-0  categorycard">
            <div className="categoryimage">
              <img
                className="card-img-top img-responsive circle "
                src="https://cdn.dribbble.com/users/677572/screenshots/17473135/media/1c23b12f1e9f5cfafebff4c0b5e338f4.png?compress=1&resize=400x300"
                alt="Card image cap"
              />
            </div>

            <p className="card-text text-center">Instruments</p>
          </div>

          <div className="card border-0  categorycard">
            <div className="categoryimage">
              <img
                className="card-img-top img-responsive circle "
                src="https://cdn.dribbble.com/userupload/3261442/file/original-79302dac2eb04d0f9aecac39e67b596b.png?resize=400x0"
                alt="Card image cap"
              />
            </div>

            <p className="card-text text-center">Automobils</p>
          </div>

          <div className="card border-0  categorycard">
            <div className="categoryimage">
              <img
                className="card-img-top img-responsive "
                src="https://thumbs.dreamstime.com/b/hanging-photo-frame-line-icon-linear-style-sign-mobile-concept-web-design-square-picture-outline-vector-symbol-logo-220173129.jpg"
                alt="Card image cap"
              />
            </div>

            <p className="card-text text-center">Paintings</p>
          </div>

          <div className="card border-0  categorycard">
            <div className="categoryimage">
              <img
                className="card-img-top img-responsive "
                src="https://i.pinimg.com/originals/11/1b/d2/111bd2166c60a61f53bb0ce07e1a5bae.jpg"
                alt="Card image cap"
              />
            </div>

            <p className="card-text text-center">Collectors</p>
          </div>

          <div className="card border-0  categorycard">
            <div className="categoryimage">
              <img
                className="card-img-top img-responsive "
                src="https://img.freepik.com/premium-vector/home-icon-house-symbol-simple-vector-design-logo_231786-5048.jpg?w=2000"
                alt="Card image cap"
              />
            </div>

            <p className="card-text text-center">Real Estate</p>
          </div>

          <div className="card border-0  categorycard">
            <div className="categoryimage">
              <img
                className="card-img-top img-responsive "
                src="https://cdn.vox-cdn.com/thumbor/2WTDJY_7GkEMyO-AHG0oejL_ERE=/0x0:1440x900/1400x1400/filters:focal(722x512:723x513)/cdn.vox-cdn.com/uploads/chorus_asset/file/22310830/NmJgg.jpg"
                alt="Card image cap"
              />
            </div>

            <p className="card-text text-center">NFT</p>
          </div>
          <div className="card border-0  categorycard">
            <div className="categoryimage">
              <img
                className="card-img-top img-responsive "
                src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/11/furniture-logo.jpg"
                alt="Card image cap"
              />
            </div>

            <p className="card-text text-center">Furnitures</p>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Category;
