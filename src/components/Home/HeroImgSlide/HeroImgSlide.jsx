import React from "react";
import Marquee from "react-fast-marquee";
import Hero1 from "../../../assets/Hero1.png"
import Hero2 from "../../../assets/Hero2.png"
import Hero3 from "../../../assets/Hero3.png"
import Hero4 from "../../../assets/Hero4.png"
import Hero5 from "../../../assets/Hero3.png"

const HeroImgSlide = () => {
  return (
    <div className="bg-[#EFEFEF] pb-[3em]">
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        className="gap-6"
      >
        <img
          src={Hero1}
          alt="Exhibition photo 1"
          className="w-[300px]  rounded-lg shadow-md mx-3"
        />
        <img
          src={Hero2}
          alt="Exhibition photo 2"
          className="w-[300px]  rounded-lg shadow-md mx-3"
        />
        <img
          src={Hero3}
          alt="Exhibition photo 3"
          className="w-[300px] rounded-lg shadow-md mx-3"
        />
        <img
          src={Hero4}
          alt="Exhibition photo 4"
          className="w-[300px]  rounded-lg shadow-md mx-3"
        />
        <img
          src={Hero5}
          alt="Exhibition photo 5"
          className="w-[300px] rounded-lg shadow-md mx-3"
        />
        
      </Marquee>
    </div>
  );
};

export default HeroImgSlide;