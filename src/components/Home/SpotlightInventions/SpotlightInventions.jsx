import React from "react";
import invention1 from "../../../assets/invention1.png";
import invention2 from "../../../assets/invention2.png";
import invention3 from "../../../assets/invention3.png";

const SpotlightInventions = () => {
  const inventions = [
    {
      image: invention1,
      title: "Invention Title 1",
      description: "Brief description of the invention goes here.",
    },
    {
      image: invention2,
      title: "Invention Title 2",
      description: "Brief description of the invention goes here.",
    },
    {
      image: invention3,
      title: "Invention Title 3",
      description: "Brief description of the invention goes here.",
    },
  ];

  return (
    <section className="bg-white pb-24 font-montserrat relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 w-full h-[3px] bg-[#EFEFEF]"></div>


        {/* Section Title */}
        <h2 className="text-4xl sm:text-[2.7rem] font-bold text-[#252525] mb-16 pt-16 text-center leading-tight">
          Spotlight: Nigerian Inventions
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {inventions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-[8px_8px_0px_rgba(0,0,0,0.05)] p-6  flex flex-col"
              style={{
                boxShadow: "8px 8px 12px rgba(0, 0, 0, 0.08)",
              }}
            >
              <div className="mb-4">
                <img src={item.image} alt={item.title} className="w-full object-cover rounded-lg" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#252525]">{item.title}</h3>
              <p className="text-base text-[#4B4B4B]">{item.description}</p>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-center">
          <button className="bg-primary text-white px-12 py-3 rounded-2xl font-semibold hover:opacity-90 transition">
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default SpotlightInventions;