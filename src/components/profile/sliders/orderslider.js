import "../sliders/slider.css"
import { useState } from "react";
import Slider from "react-slick";
import box from "../../../photo/lens.jpg";
import lens from "../../../photo/lens.jpg";
import logo from "../../../photo/lens.jpg";
import monika from '../../../photo/lens.jpg';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [box, lens, logo, monika];

function OrderSlide() {
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
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Slider"style={{ backgroundColor: '#E4DEDD' }}>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slides activeSlide" : "slides"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default OrderSlide;