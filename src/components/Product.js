import Navbar from "./Navbar";
import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../photo/lens.jpg";
import img2 from "../photo/neon.jpg";
import Footer from "./Footer";

export default class Product extends Component {
  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img
              className="productsmall"
              src="https://i.pinimg.com/originals/27/3a/27/273a27d5f3c3828ce66aef34fa403b08.jpg"
            />

            {/* <img className="productsmall" src="https://w0.peakpx.com/wallpaper/908/997/HD-wallpaper-one-piece-luffy-thumbnail.jpg" />
                
            <img className="productsmall" src={img2} />
               
            <img className="productsmall" src={img1} /> */}
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots custom-indicator",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <div className="row my-3 p-3">
            <div className="col-7 container">
              <Slider {...settings} className="productmultimg">
                <div>
                  <img
                    className="productmultimg"
                    src="https://i.pinimg.com/originals/27/3a/27/273a27d5f3c3828ce66aef34fa403b08.jpg"
                  />
                </div>
                <div>
                  <img
                    className="productmultimg"
                    src="https://w0.peakpx.com/wallpaper/908/997/HD-wallpaper-one-piece-luffy-thumbnail.jpg"
                  />
                </div>
                <div>
                  <img className="productmultimg" src={img2} />
                </div>
                <div>
                  <img className="productmultimg" src={img1} />
                </div>
              </Slider>
            </div>
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
        <div className="container-fluid">
          <div className="row">
            <div className="container text-center">
              {/* <div className="container text-center productcont"> */}
              {/* <img
                className="productimg"
                src="https://i.pinimg.com/originals/27/3a/27/273a27d5f3c3828ce66aef34fa403b08.jpg"
              />
            </div>
            <div className="column ">
              <div className="col productcol">
                <img
                  className="productmultimg"
                  src="https://i.pinimg.com/originals/27/3a/27/273a27d5f3c3828ce66aef34fa403b08.jpg"
                />
              </div>
              <div className="col productcol">
                <img
                  className="productmultimg"
                  src="https://i.pinimg.com/originals/27/3a/27/273a27d5f3c3828ce66aef34fa403b08.jpg"
                />
              </div>
              <div className="col productcol">
                <img
                  className="productmultimg"
                  src="https://i.pinimg.com/originals/27/3a/27/273a27d5f3c3828ce66aef34fa403b08.jpg"
                />
              </div>
              <div className="col productcol">
                <img
                  className="productmultimg"
                  src="https://i.pinimg.com/originals/27/3a/27/273a27d5f3c3828ce66aef34fa403b08.jpg"
                />
              </div> */}
            </div>

            {/* <div className="col container">
              <div className="img">
                <figure>
                  <img
                    className="img-thumbnail"
                    src="https://i.pinimg.com/originals/27/3a/27/273a27d5f3c3828ce66aef34fa403b08.jpg"
                  />
                  <img
                    className="img-thumbnail"
                    src="https://i.pinimg.com/originals/27/3a/27/273a27d5f3c3828ce66aef34fa403b08.jpg"
                  />
                  <img
                    className="img-thumbnail"
                    src="https://i.pinimg.com/originals/27/3a/27/273a27d5f3c3828ce66aef34fa403b08.jpg"
                  />
                  <img
                    className="img-thumbnail"
                    src="https://i.pinimg.com/originals/27/3a/27/273a27d5f3c3828ce66aef34fa403b08.jpg"
                  />
                </figure>
              </div>
            </div>{" "} */}
          </div>

          <div className="row">
            <div className="container col-7 p-3 m-3">
              <h2>Doflamingo</h2>
              <h4>$2000</h4>
              <br></br>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
