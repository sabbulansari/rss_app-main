import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Contact from '../components/Contact';
import TrendingProducts from '../components/TrendingProducts';


function HomePage() {
  return (
    <div>
        <div className="maindiv">
             <Header />
      </div>
      <Banner />
      <TrendingProducts/>
      <Contact />
      <Footer />
    </div>
  
  );
}

export default HomePage;
