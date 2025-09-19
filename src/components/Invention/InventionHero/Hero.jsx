// src/components/Hero.jsx
import { motion } from "framer-motion";
import InventImg from "../../../assets/inventImg.jpg"; 

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image with Slow Zoom */}
      <motion.div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url(${InventImg})`,
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, ease: "easeOut" }} // slow zoom over 20s
      >
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-3xl">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Invention is the <br className="hidden md:block" /> Soul of Progress
        </motion.h1>

        <motion.p
          className="mt-4 text-base md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          Founded to elevate local talent and reduce innovation brain drain,
          ANI has served as a platform for breakthrough thinkers and
          changemakers.
        </motion.p>

        <motion.div
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
        >
          <a
            href="#innovations"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Explore Innovations
          </a>
          <a
            href="#movement"
            className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Join the Movement
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
