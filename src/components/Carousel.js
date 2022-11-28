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
      <Carousel indicators={false} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                 <img
                className="d-block w-100 h-10 caroimg"
                src="https://images.pexels.com/photos/265006/pexels-photo-265006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="First slide"
                />
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-10 caroimg"
                src="https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/316241089_1994754090729416_5423699763535147202_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=qWo9IkUbfoIAX9lfW0L&_nc_oc=AQnr08TSdP9ge0bRnaWD21Ogn2lNCPTj33JUVe2s0PSQ1TVoOLFKIYfC2dwJYqhgFMWtj-vaxbZgnKCi-BrLQ5bu&_nc_ht=scontent.fktm8-1.fna&oh=00_AfASGao0JrJuOM9KC1w4UxPDfzlPhUZqMexkPRHO5NS4nw&oe=6385E69A"
                alt="Second slide"
                />

                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 caroimg"
                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4635bcd4-4a1d-4e83-bbe4-9edf40e125d0/dbr74uh-ce8fcd0e-8957-4f3d-bca2-0fe216ec5f72.jpg/v1/fill/w_1192,h_670,q_70,strp/volkswagen_combi_bus_wallpaper_by_rogue_rattlesnake_dbr74uh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ0MCIsInBhdGgiOiJcL2ZcLzQ2MzViY2Q0LTRhMWQtNGU4My1iYmU0LTllZGY0MGUxMjVkMFwvZGJyNzR1aC1jZThmY2QwZS04OTU3LTRmM2QtYmNhMi0wZmUyMTZlYzVmNzIuanBnIiwid2lkdGgiOiI8PTI1NjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.T0nblTimgevgKl8kXIQLf4k414x4ox4Sdhdmrn9g15Y"
                alt="Third slide"
                />

                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    </>
       
    );
}

export default CarouselImg