import React from "react";
import Slider from "react-slick";
import HomeMissionArrow from "../../../assets/HomeMissionArrow.png";
import HomeGroup from "../../../assets/HomeGroup.png";
import HomeVector from "../../../assets/HomeVector.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroMission = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
    <div className="mt-6 flex justify-center">
      <ul className="custom-dots">{dots}</ul>
    </div>
  ),

  };

  const missionItems = [
    {
      title: "Promote",
      description:
        "We connect Nigeria’s brightest minds, foster ingenuity, and bring inventions to life that address real challenges.",
    },
    {
      title: "Support",
      description:
        "We exist to spotlight and support the visionaries turning ideas into inventions and inventions into lasting change.",
    },
    {
      title: "Showcase",
      description:
        "We exist to spotlight and support the visionaries turning ideas into inventions and inventions into lasting change.",
    },
  ];

  return (
    <section className="bg-white py-24 font-montserrat relative mt-[4em] overflow-hidden">
      {/* Top decorative arrow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-20">
        <img src={HomeMissionArrow} alt="Down arrow" className=" lg:w-[70px] w-[40px]"/>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-[2.7rem] font-bold text-[#252525] mb-20 text-center leading-tight">
          Mission in Motion
        </h2>

        {/* Unified Card */}
        <div className="unified-card-uper relative">
          {/* Abstracts behind card */}
          <div className="absolute -top-7 -left-1 z-[-1]">
            <img src={HomeGroup} alt="Abstract top left" />
          </div>
          <div className="absolute -bottom-7 -right-5 z-[-1]">
            <img src={HomeGroup} alt="Abstract bottom right" />
          </div>

          <div className="bg-[#252525] text-white rounded-2xl px-6 py-16 md:px-20 md:py-24 z-10">
            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-3 gap-16">
              {missionItems.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start text-left"
                >
                  <img src={HomeVector} alt="Cloud icon" className="mb-6" />
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-[1.2rem] text-[#E5E5E5] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile Slider */}
            <div className="md:hidden">
              <Slider {...settings}>
                {missionItems.map((item, index) => (
                  <div key={index} className="px-2">
                    <div className="flex flex-col items-start text-left">
                      <img src={HomeVector} alt="Cloud icon" className="mb-6" />
                      <h3 className="text-2xl font-semibold mb-4">
                        {item.title}
                      </h3>
                      <p className="text-[1.2rem] text-[#E5E5E5] leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
            {/* Slider Dots */}
            <div className="md:hidden mt-6 flex justify-center">
              {/* Slick dots will auto-render here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMission;
