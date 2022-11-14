import React from "react";
import img1 from "../photo/neon.jpg";
import img2 from "../photo/redlips.jpg";
import { Component } from "react";
import Slider from "react-slick";
import img3 from "../photo/TyNsfkl.png";

export default class Category extends Component {
  render() {
    const settings = {
      
      dots: true,
      infinite: true,
      slidesToShow: 4,
      swipeToSlide: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      cssEase: "linear",
      afterChange: function(index) {
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
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots:false,
          }
        }
      ]
      
    };
    return (
      <>
      <div className="container-fluid">
      <h2 className="text-center mt-4"> Category</h2>
      
      <Slider {...settings} >
       
      
            <div className="card border-0  categorycard">
              <div className="categoryimage">
              <img className="card-img-top img-responsive categoryimg" src="https://media.gq.com/photos/5bbe499d7205c71b4dcc0bc7/master/w_2000,h_1333,c_limit/2018-10_GQ_Cartoon-Face-Watches-timex_3x2.jpg" alt="Card image cap" />
              </div> 
              <div className="card-body">
                <p className="card-text text-center">Category name</p>
              </div>
            </div>

            <div className="card border-0  categorycard">
              <div className="categoryimage">
              <img className="card-img-top img-responsive categoryimg" src="data:image/png;base64,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" alt="Card image cap" />
              </div>
              
              <div className="card-body">
                <p className="card-text text-center">Category name</p>
              </div>
            </div>

            <div className="card border-0  categorycard">
              <div className="categoryimage">
              <img className="card-img-top img-responsive categoryimg" src="data:image/jpeg;base64,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" alt="Card image cap" />
              </div> 
              <div className="card-body">
                <p className="card-text text-center">Category name</p>
              </div>
            </div>

            
      
            <div className="card border-0  categorycard">
              <div className="categoryimage">
              <img className="card-img-top img-responsive categoryimg" src="https://img.freepik.com/premium-vector/musical-instruments-cartoon-doodle-music-guitar-drums-piano-synthesizer-harp-jazz-band-musical-instruments-illustration-set-gramophone-xylophone-tuba-trombone-banjo-flute_229548-587.jpg?w=2000" alt="Card image cap" />
              </div> 
              <div className="card-body">
                <p className="card-text text-center">Category name</p>
              </div>
            </div>

            <div className="card border-0  categorycard">
              <div className="categoryimage">
              <img className="card-img-top img-responsive categoryimg" src={img2} alt="Card image cap" />
              </div>
              
              <div className="card-body">
                <p className="card-text text-center">Category name</p>
              </div>
            </div>

            <div className="card border-0  categorycard">
              <div className="categoryimage">
              <img className="card-img-top img-responsive categoryimg" src={img3} alt="Card image cap" />
              </div> 
              <div className="card-body">
                <p className="card-text text-center">Category name</p>
              </div>
            </div>
            
      
            <div className="card border-0  categorycard">
              <div className="categoryimage">
              <img className="card-img-top img-responsive categoryimg" src={img1} alt="Card image cap" />
              </div> 
              <div className="card-body">
                <p className="card-text text-center">Category name</p>
              </div>
            </div>

            <div className="card border-0  categorycard">
              <div className="categoryimage">
              <img className="card-img-top img-responsive categoryimg" src={img2} alt="Card image cap" />
              </div>
              
              <div className="card-body">
                <p className="card-text text-center">Category name</p>
              </div>
            </div>

            <div className="card border-0  categorycard">
              <div className="categoryimage">
              <img className="card-img-top img-responsive categoryimg" src={img3} alt="Card image cap" />
              </div> 
              <div className="card-body">
                <p className="card-text text-center">Category name</p>
              </div>
            </div>

            
           
            </Slider>
      </div>
      
         
        
      </>
        
      
    );
  }
}


