import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import hero3 from "../../../assets/Hero3.png";
import hero4 from "../../../assets/Hero4.png";
import hero2 from "../../../assets/Hero2.png";
import kids from "../../../assets/kids.png";

export default function OurOrigin() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.2, once: true });

  const milestones = [
    {
      year: "2005",
      text: "ANI is officially established.",
      color: "bg-blue-500",
    },
    {
      year: "2012",
      text: "First National Inventors’ Exhibition held.",
      color: "bg-pink-400",
    },
    {
      year: "2019",
      text: "Invention-to-Market program launched.",
      color: "bg-yellow-400",
    },
    {
      year: "2024",
      text: "Over 1,000 inventions registered across 36 states.",
      color: "bg-green-500",
    },
  ];

  const milestoneVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-16 max-w-[95%]">
      <div className="md:flex justify-between  md:my-18">
        <div className="max-w-[500px]">
          <h2 className="text-4xl md:text-[48px] font-bold mb-12">Our Origin</h2>
          <p className="text-gray-600 max-w-2xl mb-8 md:text-[22px]">
            Founded to elevate local talent and reduce innovation brain drain,
            ANI has served as a platform for breakthrough thinkers and
            changemakers.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 gap-6 overflow-hidden">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={milestoneVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex items-center space-x-4 "
            >
              <span
                className={`text-white px-4 py-2 rounded-lg text-3xl md:h-[74px] flex items-center font-semibold ${m.color}`}
              >
                {m.year}
              </span>
              <p className="text-gray-700 font-open-sans ">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Images */}
      <div className="grid grid-cols-2 md:grid-cols-4 my-12 gap-4">
        {[hero3, hero4, hero2, kids].map((img) => (
          <div key={img} className="relative ">
            <img
              src={img}
              alt="ANI Event"
              className="w-full md:h-80 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/50 rounded-lg" />
            <div className="absolute bottom-2 left-2 text-white text-sm md:text-[20px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
