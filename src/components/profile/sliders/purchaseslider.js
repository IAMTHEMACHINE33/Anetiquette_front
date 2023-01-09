import "../sliders/slider.css"
import React, {useEffect, useState } from "react";
import Slider from "react-slick";
import box from "../../../photo/box.jpg";
import lens from "../../../photo/box.jpg";
import logo from "../../../photo/box.jpg";
import monika from '../../../photo/box.jpg';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import axios from "axios";


const images = [box, lens, logo, monika];

function PurchaseSlide() {

  const [details, setDetails]=useState([]);

  const config={
    headers:{
      Authorization:"Bearer "+localStorage.getItem("token")
    }
  }

  useEffect(()=>{
    axios.get("http://localhost:4000/product/purchase_history",config)
    .then(response=>{
      console.log(response.data.data)
      setDetails(response.data.data)
      console.log(details.length)
      const a = details.length
     
    })
  },[])

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll:1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Slider"style={{ backgroundColor: '#E4DEDD' }} >
      <Slider {...settings}>
        {details.map((option, idx) => (
          <div className={idx === imageIndex ? "slides activeSlide" : "slides"}>
            <img src={'http://localhost:4000/' + option.images[0].name} alt={'http://localhost:4000/' + option.image} />
          </div>
        ))}
        {/* {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slides activeSlide" : "slides"}>
            <img src={img} alt={img} />
          </div>
        ))} */}
      </Slider>
    </div>
  );
}

export default PurchaseSlide;