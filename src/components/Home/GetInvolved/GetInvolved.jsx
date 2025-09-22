import React, { useRef } from "react";
import Slider from "react-slick";
import inventorImg from "../../../assets/inventor.png";
import partnerImg from "../../../assets/partner.png";
import sponsorImg from "../../../assets/sponsor.png";

const involvementOptions = [
  {
    id: "01",
    image: inventorImg,
    title: "Join as an Inventor",
    description:
      "Bring your ideas to life with the support of a thriving innovation community.",
  },
  {
    id: "02",
    image: partnerImg,
    title: "Partner with ANI",
    description:
      "Collaborate with us to drive national development through innovation.",
  },
  {
    id: "03",
    image: sponsorImg,
    title: "Sponsor Innovation",
    description: "Empower inventors and fuel solutions that transform lives.",
  },
];

const GetInvolved = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
  };

  return (
    <section className="bg-white py-24 font-montserrat">
      <div className="max-w-[95%] mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-[2.7rem] font-bold text-[#252525] mb-16 text-center leading-tight">
          Get Involved
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {involvementOptions.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              {/* Image Card */}
              <div
                className="relative rounded-xl overflow-hidden h-[400px] flex items-end p-6 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="absolute top-4 left-4 text-white text-2xl font-bold bg-[#007E3F] px-3 py-1 rounded-md shadow-md">
                  {item.id}
                </div>
                <div className="z-10 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <Slider ref={sliderRef} {...settings}>
            {involvementOptions.map((item, index) => (
              <div key={index} className="px-2">
                <div className="flex flex-col gap-4 items-center">
                  {/* Image Card */}
                  <div
                    className="relative rounded-xl overflow-hidden h-[400px] w-full flex items-end p-6 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    <div className="absolute top-4 left-4 text-white text-2xl font-bold bg-[#007E3F] px-3 py-1 rounded-md shadow-md">
                      {item.id}
                    </div>
                    <div className="z-10 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm">{item.description}</p>
                    </div>
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>

                  {/* Navigation Buttons */}
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex justify-center gap-3 mt-2">
            <button
              className="text-primary px-4 py-2 rounded-full font-bold text-2xl"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              ← 
            </button>
            <button
              className="text-primary px-4 py-2 rounded-full font-bold text-2xl"
              onClick={() => sliderRef.current?.slickNext()}
            >
               →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
