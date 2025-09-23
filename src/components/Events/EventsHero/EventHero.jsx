import { motion } from "framer-motion";
import bgDesktop from "../assets/33 (1).jpg"; // your desktop hero

const EventHero = () => {
  return (
    <section className="relative w-full">
      {/* background image */}
      <picture>
        <source srcSet={bgDesktop} media="(min-width: 768px)" />
        <img
          src={bgMobile}
          alt="Association of Nigerian Inventors event"
          className="w-full h-[60vh] md:h-[70vh] object-cover"
        />
      </picture>

      {/* overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-white font-extrabold text-3xl md:text-5xl max-w-4xl">
          Showcasing the Nation’s Genius
        </h1>
      </motion.div>
    </section>
  );
};

export default EventHero;
