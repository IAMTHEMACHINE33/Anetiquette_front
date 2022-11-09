import { useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../photo/neon.jpg';
import img2 from '../photo/redlips.jpg';
const CarouselImg=()=>{
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return(
    
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                 <img
                className="d-block w-100 h-10 caroimg"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-10 caroimg"
                src={img2}
                alt="Second slide"
                />

                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 caroimg"
                src="https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers_181624-9331.jpg?w=2000"
                alt="Third slide"
                />

                <Carousel.Caption>
                {/* <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p> */}
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    </>
       
    )
}

export default CarouselImg