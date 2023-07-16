import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
       <img style={{widows:50}} src="https://marketingaccesspass.com/wp-content/uploads/2015/10/Podcast-Website-Design-Background-Image.jpg" alt="" />
      </div>
      <div>
      <img style={{widows:50}} src="https://marketingaccesspass.com/wp-content/uploads/2015/10/Podcast-Website-Design-Background-Image.jpg" alt="" />

      </div>
      <div>
      <img style={{widows:50}} src="https://marketingaccesspass.com/wp-content/uploads/2015/10/Podcast-Website-Design-Background-Image.jpg" alt="" />

      </div>
   
    </Slider>
  );
}