import React from 'react';
import { Carousel } from 'react-bootstrap';

function SliderSection() {
  return (
    <div className="slider-section">
      <Carousel id="HeroSlider">
        <Carousel.Item>
          <img src="images/slider/a2.jpg" className="d-block w-100" alt="slider-img1" />
        </Carousel.Item>

        <Carousel.Item>
          <img src="images/slider/a1.jpg" className="d-block w-100" alt="slider-img2" />
        </Carousel.Item>

        <Carousel.Item>
          <img src="images/slider/a0.jpg" className="d-block w-100" alt="slider-img3" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderSection;
