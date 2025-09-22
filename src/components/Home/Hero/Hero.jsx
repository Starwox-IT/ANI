import React from "react";

const Hero = () => {
  return (
    <section
      className="
        bg-[#EFEFEF] text-[#252525]
        pt-24
        min-h-[calc(100vh)]
        flex items-center
      "
      aria-label="Hero"
    >
      <div className="mx-auto  max-w-[95%]">
        <div className="text-center mx-auto ">
          {/* Headline */}
          <h1 className="max-w-3xl mx-auto font-montserrat font-extrabold leading-tight text-4xl sm:text-5xl lg:text-6xl">
            Igniting Nigeria’s Creative Genius
          </h1>


          {/* Subtext */}
          <p className="mt-5 w-full font-montserrat font-medium text-gray-600 text-base sm:text-lg lg:text-[1.4rem]">
            We connect Nigeria’s brightest minds, foster ingenuity, and bring
            inventions to life.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="
                inline-flex items-center justify-center
                bg-primary text-white
                font-semibold
                font-montserrat
                px-12 py-3 rounded-[1.2em]
                hover:opacity-90 transition
              "
            >
              <button className="cursor-pointer">
                Explore Innovations
              </button>
              
            </a>
            <a
              href="#"
              className="
                inline-flex items-center justify-center
                bg-muted text-[#111827]
                font-semibold
                font-montserrat
                border
                border-primary
                px-12 py-3 rounded-[1.2em]
                hover:bg-muted-dark transition
              "
            >
              <button>
                Join the Movement
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
