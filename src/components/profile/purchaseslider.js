import "../profile/slider.css";
import { useState } from "react";
import Slider from "react-slick";
import box from "/colz/Agile Development/Anetiquette_front/src/photo/box.jpg";
import lens from "/colz/Agile Development/Anetiquette_front/src/photo/lens.jpg";
import logo from "/colz/Agile Development/Anetiquette_front/src/photo/logo.png";
import monika from "/colz/Agile Development/Anetiquette_front/src/photo/monika.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [box, lens, logo, monika];

function Slide() {
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
    <div className="Slider">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slide;