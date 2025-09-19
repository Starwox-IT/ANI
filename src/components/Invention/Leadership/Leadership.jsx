import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import president from "../../../assets/president.png"
import secretary from "../../../assets/secretary.png"
import member from "../../../assets/member.png"

import "swiper/css";
import "swiper/css/pagination";

export default function Leadership() {
  const leaders = [
    {
      name: "Osasuna Daniel",
      role: "President",
      quote: "Innovation begins with belief — belief in people, purpose, and progress.",
      img: president,
    },
    {
      name: "Sophia Ethan",
      role: "Secretary",
      quote: "We rise by creating, empowering, and reimagining what's possible.",
      img: secretary,
    },
    {
      name: "Igbinadion Clement",
      role: "Chairman of Board of Directors",
      quote: "A true leader builds the future by unlocking the genius in others.",
      img: member,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
        Meet Our Leadership
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
        Mission: ANI aims to promote and support creative ingenuity, innovation,
        and inventions among Nigerians both domestically and internationally.
      </p>

      {/* Desktop */}
      <div className="hidden md:grid grid-cols-3 gap-6">
        {leaders.map((leader, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-6 md:h-[550px]">
            <img
              src={leader.img}
              alt={leader.name}
              className="w-full  object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold">{leader.name}</h3>
            <p className="text-gray-600">{leader.role}</p>
            <p className="text-sm italic text-gray-500 mt-2">"{leader.quote}"</p>
          </div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="md:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={16}
          slidesPerView={1.1}
          pagination={{ clickable: true }}
          loop
        >
          {leaders.map((leader, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-lg shadow p-6">
                <img
                  src={leader.img}
                  alt={leader.name}
                  className="w-full object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-bold">{leader.name}</h3>
                <p className="text-gray-600">{leader.role}</p>
                <p className="text-sm italic text-gray-500 mt-2">
                  "{leader.quote}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
