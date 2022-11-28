import Navbar from "./common/Navbar";
import React, { Component, useState } from "react";
import React from "react";
import Slider from "react-slick";
import img1 from "../photo/lens.jpg";
import img2 from "../photo/neon.jpg";
import Footer from "./common/Footer";
import { useParams } from "react-router-dom";
import NavigateBlack from "./common/navblack";
import "./product.css";

const Product = () => {
  const data = [
    "https://i0.wp.com/rachelfroud.com/wp-content/uploads/2020/06/Flamingo-Print-Mockup.jpg?fit=2305%2C2000&ssl=1",
    "https://w0.peakpx.com/wallpaper/908/997/HD-wallpaper-one-piece-luffy-thumbnail.jpg",
    img2,
    img1,
    "https://cdn.vox-cdn.com/thumbor/8wbWvZmEgMB1Ukx_A51_nfl-uCU=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23929708/tekken_8.jpg",

    "https://c4.wallpaperflare.com/wallpaper/966/456/890/tekken-tag-tournament-2-jin-kazama-2560x1600-video-games-tekken-hd-art-wallpaper-preview.jpg",
    "https://i.pinimg.com/736x/56/13/e7/5613e70ac2f1b34ccfbe8145dd7ad43a--virtual-games-tekken-.jpg",
    "https://w0.peakpx.com/wallpaper/638/623/HD-wallpaper-akuma-capcom-street-fighter-videogames-thumbnail.jpg",
    "https://p4.wallpaperbetter.com/wallpaper/621/399/620/chun-li-street-fighter-wallpaper-preview.jpg",
    "https://i.pinimg.com/564x/c7/67/c9/c767c9ece36943979490b1a0d0db1126--ryu-street-fighter-nerd-art.jpg",
    "https://i.pinimg.com/originals/f3/f6/e3/f3f6e357b08a50671dcee9adfbd7f04e.png",
    "https://upload.wikimedia.org/wikipedia/en/2/2d/SSU_Kirby_artwork.png",

   
  ];
  const settings = {
    customPaging: (i) => {
      return (
        <div>
          <img src={data[i]} alt="product.jpg" className="productsmall" />
        </div>
      );
    },

    autoplaySpeed: 2000,
    dots: true,
    dotsClass: "slick-dots smallimg",
    initialSlide: 2,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <NavigateBlack />
      <div className="container-fluid product_container">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2  my-2 p-3">
          <div className="col container-fluid slider_container">
            <Slider {...settings}>
              {data.map((item) => (
                <div>
                  <img
                    className="productmultimg"
                    src={item}
                    alt="product.jpg"
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="col container desc_container">
            <h3 className="desc_head p-2">Flamingo Painting Collection</h3>
            <h4 className="desc_price p-2">$2000</h4>
            <br></br>
            <textarea readOnly className="container-fluid border-0">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham. Contrary to popular belief, Lorem Ipsum
              is not simply random text. It has roots in a piece of classical
              Latin literature from 45 BC, making it over 2000 years old.
              Richard McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage, and going through the
              cites of the word in classical literature, discovered the
              undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
              1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
              and Evil) by Cicero, written in 45 BC. This book is a treatise on
              the theory of ethics, very popular during the Renaissance. The
              first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
              from a line in section 1.10.32. The standard chunk of Lorem Ipsum
              used since the 1500s is reproduced below for those interested.
              Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
              by Cicero are also reproduced in their exact original form,
              accompanied by English versions from the 1914 translation by H.
              Rackham.
            </textarea>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-5 text-center">
            <h1>1:00:00</h1>
            <h4>2000$</h4>
            <br />
            <h1>Highest Bidder</h1>
            <div className="row mt-3">
              <div className="col-6">
                fsjljaf
                <br />
                fsjljaf
                <br />
                fsjljaf
                <br />
                fsjljaf
                <br />
                fsjljaf
                <br />
              </div>
              <div className="col-6">
                12321312
                <br />
                12321312
                <br />
                12321312
                <br />
                12321312
                <br />
                12321312
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
