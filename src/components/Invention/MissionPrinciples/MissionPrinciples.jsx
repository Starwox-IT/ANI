import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";

export default function MissionPrinciples() {
  const principles = [
    {
      title: "Creativity as Currency",
      body: "We value creativity as a powerful tool for generating real-world impact, treating it as a national asset that drives development.",
      bg: "bg-green-50",
    },
    {
      title: "Invention with Purpose",
      body: "Every idea we support is designed to solve pressing challenges and create meaningful improvements in people's lives.",
      bg: "bg-slate-100",
    },
    {
      title: "Solutions for Society",
      body: "Our focus is on innovations that uplift communities, bridge gaps, and promote inclusive growth across Nigeria.",
      bg: "bg-green-50",
    },
    {
      title: "Collaboration Before Competition",
      body: "We believe progress comes faster when minds unite—encouraging partnerships that prioritize collective success over rivalry.",
      bg: "bg-slate-100",
    },
  ];

  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.2 });

  const arrowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: [0, 8, 0],
      transition: { duration: 0.8, ease: "easeInOut", repeat: Infinity },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section ref={sectionRef} className="container mx-auto font-lato px-4 py-28 max-w-[95%]">
      {/* Arrow */}
      <div className="flex justify-center mb-12">
        <motion.div
          variants={arrowVariants}
          animate={inView ? "visible" : "hidden"}
          className="text-green-900 text-6xl font-extrabold"
        >
          <FontAwesomeIcon icon={faAngleDoubleDown} />
        </motion.div>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold text-[#333333] font-lato text-center mb-6 md:mb-12">
        Our Mission and Principles
      </h2>
      <p className="text-center text-[#333333] max-w-3xl md:text-[22px] mx-auto mb-12 md:mb-20">
        Mission: ANI aims to promote and support creative ingenuity, innovation,
        and inventions among Nigerians both domestically and internationally.
      </p>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-4 gap-6">
        {principles.map((p, i) => (
          <motion.div
            key={i}
            className={`rounded-md p-8 ${p.bg} shadow-sm`}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={i}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-3">{p.title}</h3>
            <p className="text-gray-600 text-sm md:text-lg">{p.body}</p>
          </motion.div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden mt-6">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1.1}
          autoplay={{ delay: 2500, disableOnInteraction: true }}
          pagination={{ clickable: true, el: '.pagination'}}
          loop
        >
          {principles.map((p, i) => (
            <SwiperSlide key={i}>
              <div className={`rounded-md p-6 ${p.bg} shadow-sm h-[199px]`}>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-gray-600 text-sm">{p.body}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="pagination mt-10 flex items-center justify-center" />
      </div>
    </section>
  );
}
