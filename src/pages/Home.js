import React from "react";
import HeroCarousel from '../components/Herosection';
import Categories from "../components/Categories";
import WhatsNewSection from "../components/Whatsnew";
import ZoomImageComponent from "../components/Box";
import Bestseller from '../components/Bestseller';
import ServiceFeatures from '../components/Servicefeatures';
import Footer from '../components/Footer';


const Home = () => {
    return (
    <div>
    <HeroCarousel />
      <Categories />
      <WhatsNewSection />
      <ZoomImageComponent/>
      <Bestseller />
      <ServiceFeatures/>
      
    </div>
    );

};

export default Home;