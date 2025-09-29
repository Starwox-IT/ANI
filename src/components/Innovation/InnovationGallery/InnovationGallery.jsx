import React, { useState, useRef } from "react";
import Slider from "react-slick";
import renewableImg from "../../../assets/renewable.png";
import agrotechImg from "../../../assets/agrotech.png";
import healthcareImg from "../../../assets/healthcare.png";
import wasteImg from "../../../assets/waste.png";
import edtechImg from "../../../assets/edtech.png";
import othersImg from "../../../assets/others.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = [
  "All",
  "Renewable Energy",
  "Agro-Tech",
  "Healthcare",
  "Waste-to-Wealth",
  "Education & EdTech",
  "Others",
];

const innovations = [
  {
    category: "Renewable Energy",
    title: "Solar-Powered Streetlights",
    description:
      "Affordable solar streetlights designed to illuminate rural communities and reduce grid dependency.",
    image: renewableImg,
  },
  {
    category: "Agro-Tech",
    title: "Smart Irrigation Grid",
    description:
      "A sensor-based irrigation system that optimizes water usage for smallholder farms.",
    image: agrotechImg,
  },
  {
    category: "Healthcare",
    title: "Mobile Health Clinics",
    description:
      "Solar-powered mobile units delivering basic healthcare to underserved regions.",
    image: healthcareImg,
  },
  {
    category: "Waste-to-Wealth",
    title: "Plastic-to-Bricks Converter",
    description:
      "Transforms plastic waste into durable building bricks for low-cost housing.",
    image: wasteImg,
  },
  {
    category: "Education & EdTech",
    title: "LearnBox",
    description:
      "A portable offline learning device preloaded with national curriculum content for remote schools.",
    image: edtechImg,
  },
  {
    category: "Others",
    title: "Smart Water Monitor",
    description:
      "A low-cost IoT device that tracks water quality in rural boreholes in real time.",
    image: othersImg,
  },
];

const InnovationGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const sliderRef = useRef(null);

  const filteredInnovations =
    selectedCategory === "All"
      ? innovations
      : innovations.filter((item) => item.category === selectedCategory);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="mt-20">
      {/* Banner */}
      <div className="h1-idea py-5 bg-primary">
        <h1 className="text-center text-2xl md:text-4xl font-bold text-white">
          Where Ideas Become Impact
        </h1>
      </div>

      <section className="max-w-[95%] mx-auto py-16 font-montserrat">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1D] mb-4">
            Innovation Gallery
          </h2>
          <p className="text-sm md:text-base text-[#3A3A3A] max-w-[600px] mx-auto">
            Mission: ANI aims to promote and support creative ingenuity,
            innovation, and inventions among Nigerians both domestically and
            internationally.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-[.5em] text-sm font-semibold transition-colors border ${
                selectedCategory === cat
                  ? "bg-[#007E3F] text-white border-[#007E3F]"
                  : "bg-white text-[#007E3F] border-[#007E3F] hover:bg-[#007E3F] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInnovations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div
                className="h-[200px] bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#007E3F] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#3A3A3A]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <Slider ref={sliderRef} {...sliderSettings}>
            {filteredInnovations.map((item, index) => (
              <div key={index} className="px-2">
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div
                    className="h-[200px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#007E3F] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#3A3A3A]">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Arrows */}
          <div className="flex justify-center gap-3 mt-4">
            <button
              className="text-[#007E3F] px-4 py-2 rounded-full font-bold text-2xl"
              onClick={() => sliderRef.current?.slickPrev()}
            >
              ←
            </button>
            <button
              className="text-[#007E3F] px-4 py-2 rounded-full font-bold text-2xl"
              onClick={() => sliderRef.current?.slickNext()}
            >
              →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnovationGallery;