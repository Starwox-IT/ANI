import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import heroLarge from "../../../assets/heroLarge.png";
import studentImg from "../../../assets/studentImg.png";
import partnerImg from "../../../assets/partnerImg.png";
import patronImg from "../../../assets/patronImg.png";

export default function JoinSection() {
  const [swiper, setSwiper] = useState(null);

  const whyItems = [
    {
      title: "Exhibitions",
      text: "Gain exclusive access to national and international platforms to showcase your inventions",
    },
    {
      title: "Advocacy",
      text: "Be part of a collective voice pushing for innovation-friendly policies and support",
    },
    {
      title: "Funding",
      text: "Unlock opportunities for grants, sponsorships, and investment to bring your ideas to life",
    },
    {
      title: "Visibility",
      text: "Boost your public profile and attract collaborators, media attention, and global recognition",
    },
  ];

  const roleCards = [
    {
      title: "Inventor",
      subtitle: "Access funding, mentorship, and showcase opportunities.",
      img: heroLarge,
      cta: "Apply Now",
    },
    {
      title: "Student",
      subtitle: "Get early exposure, training, and innovation resources.",
      img: studentImg,
      cta: "Apply Now",
    },
    {
      title: "Partner",
      subtitle: "Collaborate on events, research, and initiatives.",
      img: partnerImg,
      cta: "Apply Now",
    },
    {
      title: "Patron",
      subtitle: "Support innovation through sponsorship and grants.",
      img: patronImg,
      cta: "Apply Now",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 ">
      {/* Heading + CTA */}
      <div className="text-center max-w-3xl mx-auto mt-24 md:mt-32">
        <h1 className="text-3xl md:text-7xl font-extrabold mb-6">
          Invent. Belong. Lead.
        </h1>
        <p className="text-gray-600 md:text-2xl mb-10">
          We welcome inventors, collaborators, supporters, and visionaries ready
          to shape Nigeria's innovation landscape.
        </p>
        <div className="flex justify-center">
          <button className="bg-green-800 text-white font-bold text-lg px-4 py-3 rounded-2xl w-[190px] shadow hover:bg-green-900">
            Join ANI
          </button>
        </div>
      </div>

      {/* DESKTOP/TABLET HERO WITH OVERLAPS */}
      <div className="relative mt-64 hidden md:block">
        {/* Large Hero */}
        <div className="relative">
          <img
            src={heroLarge}
            alt="Hero Inventor"
            className="w-full h-[500px] object-cover rounded-[28px]"
          />
          {/* Overlay content (Inventor) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h4 className="text-white text-3xl lg:text-5xl font-bold mb-4">
              {roleCards[0].title}
            </h4>
            <p className="text-white/90 max-w-xs mb-6 text-lg lg:text-xl">
              {roleCards[0].subtitle}
            </p>
            <button className="bg-green-800 text-white font-bold text-lg px-4 py-3 rounded-2xl w-[190px] shadow hover:bg-green-900">
              {roleCards[0].cta}
            </button>
          </div>
        </div>

        {/* Why Join Section - Overlap Top */}
        <div className="absolute -top-56 left-1/2 -translate-x-1/2 w-11/12 max-w-[1295px]">
          <div className="bg-white rounded-4xl shadow-lg py-8 md:px-8 lg:px-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Why Join ANI?
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {whyItems.map((w, i) => (
                <div key={i} className="text-black">
                  <h4 className="font-semibold font-montserrat text-[#252525] lg:text-2xl">
                    {w.title}
                  </h4>
                  <div className="h-1 bg-[#252525] max-w-[50px] my-2" />
                  <p className="lg:text-[18px] text-[#252525B2] opacity-80 mt-8">
                    {w.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Role Cards - Overlap Bottom but stay in flow */}
      <div className="hidden md:block -mt-24 relative z-10">
        <div className="grid grid-cols-3 gap-6">
          {roleCards.slice(1).map((card, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex flex-col justify-end items-center p-6">
                <h5 className="text-white font-montserrat lg:text-2xl font-semibold">
                  {card.title}
                </h5>
                <p className="text-white/80 font-open-sans lg:text-lg max-w-[285px] text-center my-3">{card.subtitle}</p>
                <button className="bg-green-800 text-white font-bold lg:text-lg px-4 py-3 rounded-2xl w-[190px] shadow hover:bg-green-900">
                  {card.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE SWIPER (all 4 cards including Inventor) */}
      <div className="md:hidden mt-12">
        <h3 className="text-xl font-semibold text-center mb-6">Why Join ANI?</h3>
        <div className="grid grid-cols-1 gap-6 mb-8">
          {whyItems.map((w, i) => (
            <div key={i} className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">{w.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{w.text}</p>
            </div>
          ))}
        </div>

        <Swiper
          onSwiper={setSwiper}
          modules={[Autoplay, Pagination]}
          spaceBetween={16}
          slidesPerView={1.05}
          centeredSlides={true}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          loop={true}
        >
          {roleCards.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-xl overflow-hidden shadow-lg mx-4">
                <div className="relative">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h5 className="text-white text-lg font-semibold">
                      {card.title}
                    </h5>
                    <p className="text-white/80 text-sm mb-3">
                      {card.subtitle}
                    </p>
                    <button className="bg-green-700 text-white px-5 py-2 rounded-full self-start hover:bg-green-800">
                      {card.cta}
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-pagination flex justify-center mt-10 items-center" />
      </div>
    </section>
  );
}
