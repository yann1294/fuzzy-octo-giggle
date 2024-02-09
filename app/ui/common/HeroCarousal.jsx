'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class HeroCarousal extends Component {
  render() {
    const settings = {
      
      infinite: true,
      slidesToShow: 5,
      centerMode: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows:false,
      centerPadding: "100px",
      swipe:true,
      
    };
    return (
      <div className="bg-[#F5F5F7] py-10 container mx-auto">
        <div className="flex-1 items-center justify-center">
        <Slider {...settings}>
          <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="./Tole.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer">Brands</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="./Tole.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer">Brands</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="./Tole.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer">Brands</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="./Tole.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer">Brands</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="./Tole.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer">Brands</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="./Tole.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer">Brands</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="./Tole.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer"> Brands</p>
          </div> <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="./Tole.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer">Brands</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="./Tole.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer">Brands</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
          <img className="w-full" src="./Tole.png" alt="carousal" />
          <p className="text-center pt-3 hover:underline cursor-pointer"> Brands</p>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}