import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css'; // Import Owl Carousel CSS

const options = {
  items: 3,
  loop: true,
  margin: 10,
  nav: true,
};

const items = [
  <div key="1"><h4>Item 1</h4></div>,
  <div key="2"><h4>Item 2</h4></div>,
  <div key="3"><h4>Item 3</h4></div>,
  // Add more items as needed
];

const ProductCarousel = () => {
  return (
    <OwlCarousel options={options}>
      {items}
    </OwlCarousel>
  );
};

export default ProductCarousel;
