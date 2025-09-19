import React from "react";
import TimelineVideoThumb from "../../../assets/InnoVideo.png";
import DownArrow from "../../../assets/HomeMissionArrow.png"; 

const InnovationTimeline = () => {
  return (
    <section className="pb-24 font-montserrat relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Downward Arrow Above Section */}
        <div className="flex justify-center mb-20">
          <img src={DownArrow} alt="Down arrow" />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Heading + Paragraph */}
          <div>
            <h2 className="text-4xl sm:text-[2rem] lg:text-[3rem] font-extrabold text-[#252525] mb-6 leading-tight md:max-w-[70%] max-w-[100%]  text-center sm:text-left">
              Innovation Timeline Strip
            </h2>
            <p className="lg:text-[1.35rem] sm:text-[1rem] text-[#4B4B4B] leading-8 font-medium font-open-sans lg:max-w-[80%] text-center sm:text-left">
              From humble beginnings to national impact, ANI has consistently championed groundbreaking ideas and inspired a culture of direction across Nigeria. Explore our journey of innovation, progress, and the key milestones that have shaped our legacy.
            </p>
          </div>

          {/* Right: Video Thumbnail */}
          <div className="relative">
            <img
              src={TimelineVideoThumb}
              alt="Innovation Timeline Video"
              className="w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationTimeline;