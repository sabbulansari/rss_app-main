import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

const TrendingProducts = () => {
  // Define your product data here
  const products = [
    {
      id: 1,
      image: 'images/products/1-8-clear-acrylic-4x8.webp',
      title: '1 8 clear acrylic 4x8',
      brand: 'Hexis',
    },
    {
      id: 2,
      image: 'images/products/4mm-corrugated-lt-blue-4x8.webp',
      title: '4mm corrugated lt blue 4x8',
      brand: 'Hexis',
    },
    // Add more product items as needed
  ];

  return (
    <div className="section-pad-comman trending-products animated fadeInUp">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="headingTitle">
              <h2>
                <span>Trending</span> Products
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
         
            <Carousel>
              {products.map((product) => (
                
                <Carousel.Item key={product.id}>
                      <Row>
                 <Col lg={3}>
                  <div className="product-box">
                    <a href="#">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{ height: '275px' }}
                      />
                      <div className="pro-info">
                        <h3>{product.brand}</h3>
                        <h4>{product.title}</h4>
                      </div>
                    </a>
                  </div>
                  </Col>
                  <Col lg={3}>
                  <div className="product-box">
                    <a href="#">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{ height: '275px' }}
                      />
                      <div className="pro-info">
                        <h3>{product.brand}</h3>
                        <h4>{product.title}</h4>
                      </div>
                    </a>
                  </div>
                  </Col>
                  <Col lg={3}>
                  <div className="product-box">
                    <a href="#">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{ height: '275px' }}
                      />
                      <div className="pro-info">
                        <h3>{product.brand}</h3>
                        <h4>{product.title}</h4>
                      </div>
                    </a>
                  </div>
                  </Col>
                  <Col lg={3}>
                  <div className="product-box">
                    <a href="#">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid"
                        style={{ height: '275px' }}
                      />
                      <div className="pro-info">
                        <h3>{product.brand}</h3>
                        <h4>{product.title}</h4>
                      </div>
                    </a>
                  </div>
                  </Col>
                  </Row>
                </Carousel.Item>
               

              ))}
            </Carousel>
         
        </Row>
      </Container>
    </div>
  );
};

export default TrendingProducts;
