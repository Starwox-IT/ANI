import React from "react";
import healthcareImg from "../../../assets/InnovationHero3.jpg";
import wasteImg from "../../../assets/InnovationHero3.jpg";
import edtechImg from "../../../assets/InnovationHero3.jpg";

const InnovationHeroBottom = () => {
  const cards = [
    {
      img: healthcareImg,
      title: "Healthcare",
      description:
        "Life-changing inventions that improve access, efficiency, and quality of medical care",
    },
    {
      img: wasteImg,
      title: "Waste-to-Wealth",
      description:
        "Turning waste into valuable resources through creative and eco-friendly innovations",
    },
    {
      img: edtechImg,
      title: "Education & EdTech",
      description:
        "Advancing learning with smart, accessible technologies that empower students and educators",
    },
  ];

  return (
    <section className="md:block hidden w-full  py-12 font-montserrat">
      <div className="flex gap-6 max-w-[95%] mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-2xl w-full h-[300px] flex items-end"
            style={{
              backgroundImage: `url(${card.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="relative p-4 text-white z-10 text-center">
              <h3 className=" font-bold mb-2 text-2xl">{card.title}</h3>
              <p className="text-sm max-w-[80%] m-auto">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InnovationHeroBottom;