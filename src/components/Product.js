import Navbar from "./common/Navbar";
import React, { Component } from "react";
import Slider from "react-slick";
import img1 from "../photo/lens.jpg";
import img2 from "../photo/neon.jpg";
import Footer from "./common/Footer";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }
  render() {
    var settings = {
      responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          },
        },
      ],
    };
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <div className="row my-2 p-3">
            <div className="col-7 container">
              <Slider
                asNavFor={this.state.nav2}
                ref={(slider) => (this.slider1 = slider)}
                
              >
                <div>
                  <img
                    className="productmultimg"
                    src="https://i0.wp.com/rachelfroud.com/wp-content/uploads/2020/06/Flamingo-Print-Mockup.jpg?fit=2305%2C2000&ssl=1"
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
                <div>
                  <img
                    className="productmultimg"
                    src="https://d1lss44hh2trtw.cloudfront.net/assets/article/2021/07/09/watch-dogs-legion-preview_feature.jpg"
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

              <Slider
                {...settings}
                asNavFor={this.state.nav1}
                ref={(slider) => (this.slider2 = slider)}
                slidesToShow={4}
                swipeToSlide={true}
                focusOnSelect={true}
                className='mt-4'
              >
                <center>
                  <img
                    className="productsmall"
                    src="https://i0.wp.com/rachelfroud.com/wp-content/uploads/2020/06/Flamingo-Print-Mockup.jpg?fit=2305%2C2000&ssl=1"
                  />
                </center>
                <center>
                  <img
                    className="productsmall"
                    src="https://w0.peakpx.com/wallpaper/908/997/HD-wallpaper-one-piece-luffy-thumbnail.jpg"
                  />
                </center>
                <center>
                  <img className="productsmall" src={img2} />
                </center>
                <center>
                  <img className="productsmall" src={img1} />
                </center>
                <center>
                  <img
                    className="productsmall"
                    src="https://d1lss44hh2trtw.cloudfront.net/assets/article/2021/07/09/watch-dogs-legion-preview_feature.jpg"
                  />
                </center>
                <center>
                  <img
                    className="productsmall"
                    src="https://w0.peakpx.com/wallpaper/908/997/HD-wallpaper-one-piece-luffy-thumbnail.jpg"
                  />
                </center>
                <center>
                  <img className="productsmall" src={img2} />
                </center>
                <center>
                  <img className="productsmall" src={img1} />
                </center>
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
            <div className="col-7 p-4 mb-2">
              <h3>Flamingo Painting Collection</h3>
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
