//import logo from './logo.svg';
//import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



import MainNavbar from './components/Navbar';
import HeroCarousel from './components/Herosection';
import Categories from "./components/Categories";
import WhatsNewSection from "./components/Whatsnew";
import ZoomImageComponent from "./components/Box";
import Bestseller from './components/Bestseller';
import ServiceFeatures from './components/Servicefeatures';
import Footer from './components/Footer';


function App() {
  
  return (
    <div>
      <MainNavbar />
      <HeroCarousel />
      <Categories />
      <WhatsNewSection />
      <ZoomImageComponent/>
      <Bestseller />
      <ServiceFeatures/>
      <Footer />
    </div>
  );
}

export default App;
