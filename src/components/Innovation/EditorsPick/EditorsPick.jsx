import React from "react";
import fertilizerImg from "../../../assets/fertilizer.png";
import irrigationImg from "../../../assets/irrigation.png";

const EditorsPick = () => {
  const picks = [
    {
      title: "Smart Fertilizer Dispenser",
      description: "Optimized nutrient distribution for crops.",
      image: fertilizerImg,
    },
    {
      title: "Solar-Powered Irrigation Pump",
      description: "Efficient irrigation for farmers using solar energy.",
      image: irrigationImg,
    },
  ];

  return (
    <section className="w-full bg-white py-20 font-montserrat">
      <div className="max-w-[95%] mx-auto">
        {/* Section Title */}
        <h1 className="text-4xl md:text-4xl font-bold text-black mb-14 text-center md:text-left">
          Editor's Pick
        </h1>

        {/* Card Row */}
        <div className="flex gap-6 overflow-x-auto md:overflow-visible pb-2">
          {picks.map((item, index) => (
            <div
              key={index}
              className="w-[80%] sm:w-[60%] md:w-[25vw] min-w-[280px] bg-white rounded-xl shadow-lg p-5 flex-shrink-0 flex flex-col gap-6 h-[500px]"
            >
              {/* Image */}
              <div className="w-full h-[220px] rounded-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="text-[1.1rem] font-medium text-[#3A3A3A] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorsPick;