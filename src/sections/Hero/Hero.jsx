import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import profile from "../../assets/images/profile.jpeg";

import portfolioData from "../../data/portfolioData";

function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-20">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-blue-500 text-xl">
            {portfolioData.hero.greeting}
          </p>

          <h1 className="text-6xl font-black mt-4">
            {portfolioData.hero.name}
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Web Developer",
              2000,
              "Generative AI Enthusiast",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="h2"
            speed={40}
            repeat={Infinity}
            className="text-3xl mt-6 text-gray-300"
          />

          <p className="text-gray-400 mt-8 leading-8 max-w-lg">
            Building beautiful, scalable web applications
            and AI-powered solutions with modern technologies.
          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-blue-600 px-7 py-4 rounded-xl hover:scale-105 transition">
              View Projects
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              className="border border-gray-700 px-7 py-4 rounded-xl hover:border-blue-500 transition"
            >
              Resume
            </a>

          </div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >

          <img
            src={profile}
            alt="Ashish"
            className="
            w-[320px]
            lg:w-[360px]
            rounded-full
            border-4
            border-blue-500
            shadow-[0_0_60px_rgba(59,130,246,0.35)]
            transition-all
            duration-500
            hover:scale-105
            "
          />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;