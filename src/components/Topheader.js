import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Topheader() {
  return (
      <div className="header-top">
        <Container>
          <Row>
            <Col>
              <a className="navbar-brand" href="index.html">
                <Image src="https://alhafizfoundation.com/rssdesign/images/logo.png" rounded />
              </a>
            </Col>
            <Col>
              <ul>
                <li className="loginmenu">
                  <a href="#" className="signin">
                    Sign In
                  </a>
                </li>
              </ul>
            </Col>
            
          </Row>
        </Container>
      </div>
  
  );
}

export default Topheader;
