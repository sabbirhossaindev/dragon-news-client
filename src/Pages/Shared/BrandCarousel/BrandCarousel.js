import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sabbir1 from '../../../assets/brands/sabbir1.png';
import sabbir2 from '../../../assets/brands/sabbir2.png';

const BrandCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={sabbir1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={sabbir2}
                    alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BrandCarousel;