import React from "react";
import Marquee from "react-fast-marquee";
import renewableImg from "../../../assets/InnovationHero1.png";
import agrotechImg from "../../../assets/InnovationHero2.png";
import healthcareImg from "../../../assets/InnovationHero3.jpg";

const InnovationHero = () => {
  return (
    <section className="w-full min-h-screen pt-[60px] md:pt-[120px] flex items-center justify-center font-montserrat ">
      <div className="max-w-[95%] mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left Text Section */}
        <div className="w-full md:w-[45%] text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1D1D1D] leading-tight mb-6">
            Where Ideas Become Impact
          </h1>
          <p className="text-sm font-medium md:font-normal md:text-base text-[#3A3A3A] leading-relaxed">
            We transform bold ideas into groundbreaking innovations—bridging creativity and real-world solutions that drive national progress.
          </p>
        </div>

        {/* Right Cards Section */}
        <div className="w-full md:w-[50%]">
          {/* Desktop: Only 2 cards side-by-side */}
          <div className="hidden md:flex flex-row gap-6 items-start">
            {/* Renewable Energy */}
            <div
              className="relative rounded-xl overflow-hidden shadow-2xl w-[50%] h-[350px] flex items-end -mt-10"
              style={{
                backgroundImage: `url(${renewableImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="relative p-4 text-white z-10 text-center">
                <h3 className="text-lg font-semibold mb-2">Renewable Energy</h3>
                <p className="text-sm">
                  Innovative solutions harnessing natural resources to power a sustainable future for Nigeria.
                </p>
              </div>
            </div>

            {/* Agro-Tech */}
            <div
              className="relative rounded-xl overflow-hidden shadow-2xl w-[50%] h-[350px] flex items-end"
              style={{
                backgroundImage: `url(${agrotechImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="relative p-4 text-white z-10 text-center">
                <h3 className="text-lg font-semibold mb-2">Agro-Tech</h3>
                <p className="text-sm">
                  Transforming agriculture through technology to boost food security and productivity.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile: All 3 cards in marquee */}
          <div className="md:hidden">
            <Marquee gradient={false} speed={40} pauseOnHover>
              {[renewableImg, agrotechImg, healthcareImg].map((img, index) => {
                const titles = ["Renewable Energy", "Agro-Tech", "Healthcare"];
                const descriptions = [
                  "Innovative solutions harnessing natural resources to power a sustainable future for Nigeria.",
                  "Transforming agriculture through technology to boost food security and productivity.",
                  "Life-changing innovations improving access, efficiency, and quality of medical care.",
                ];

                return (
                  <div
                    key={index}
                    className="relative rounded-xl overflow-hidden shadow-2xl w-[250px] h-[200px] flex items-end mx-4"
                    style={{
                      backgroundImage: `url(${img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="relative p-4 text-white z-10 text-center">
                      <h3 className="text-base font-semibold mb-2">{titles[index]}</h3>
                      <p className="text-xs">{descriptions[index]}</p>
                    </div>
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationHero;