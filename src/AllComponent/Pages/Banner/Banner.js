import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from "../../Images/banner img/130781703-international-doctors-day-background-medical-health-care-banner-design-with-doctor-stethoscope-and-b.jpg";
import banner2 from "../../Images/banner img/blue-medical-banner-clipboard-stethoscope-copy-space-141012384.jpg";
import banner3 from "../../Images/banner img/medical_banner_with_abstract_virus_cells_on_globe_design_2206.jpg";
import "./banner.css"

const Banner = () => {
    return (
        <div>
            <div className="bannerImageStyle">
            <Carousel>
  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <div className="caroCapStyle">
    <Carousel.Caption>
      <h1>Get proper treatment</h1>
      <p>We take care for patient. medical treatment is the attempted remediation of a health problem, usually following a medical diagnosis </p>
    </Carousel.Caption>
    </div>
  </Carousel.Item>


  <Carousel.Item interval={1500}>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />
   <div className="caroCapStyle">
   <Carousel.Caption>
      <h1>Specialist Doctor </h1>
      <p>Medical specialists are experts in certain fields of medicine. Get at low cost</p>
    </Carousel.Caption>
   </div>
  </Carousel.Item>


  <Carousel.Item  interval={1000}>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />
    <div  className="caroCapStyle">
    <Carousel.Caption>
      <h1>Stay Home Stay Safe</h1>
      <p>Corona virus outbreak all over the world so use sanitizer and mask as well.</p>
    </Carousel.Caption>
    </div>
  </Carousel.Item> 
</Carousel>
            </div>
        </div>
    );
};

export default Banner;