import { useState } from "react";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

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
                src="https://cdn.thecoolist.com/wp-content/uploads/2022/02/Antique-Shops-Are-a-Great-Place-to-Shop.png"
                alt="First slide"
                />
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-10 caroimg"
                src="https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/antique-store.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 caroimg"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Paris_-_Vintage_travel_gear_seller_at_the_marche_Dauphine_-_5212.jpg/1200px-Paris_-_Vintage_travel_gear_seller_at_the_marche_Dauphine_-_5212.jpg"
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
       
    );
}

export default CarouselImg