import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import profile from "../../assets/images/profile.jpeg";

import portfolioData from "../../data/portfolioData";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

      {/* Background Effects */}

    <div className="absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-3xl"></div>

    <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-purple-600/15 blur-3xl"></div>  

    <div className="absolute inset-0 opacity-5"
        style={{
            backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
        }}
        ></div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
        {/* Left */}
    
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="text-blue-400 uppercase tracking-[0.3em] text-sm font-semibold">
            {portfolioData.hero.greeting}
          </p>

          <h1 className="mt-4 text-6xl lg:text-7xl font-extrabold leading-tight">
  <span className="text-white">Ash</span>
  <span className="text-blue-500">ish</span>
</h1>

          <TypeAnimation
            sequence={[
                "Full Stack Web Developer",
                1800,
                "React Developer",
                1800,
                "Generative AI Enthusiast",
                1800,
                "Python Developer",
                1800,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="text-3xl lg:text-4xl font-semibold text-gray-300 mt-6"
            />

          <p className="text-gray-400 mt-8 leading-8 max-w-lg">
            I specialize in creating responsive web applications,
            modern user interfaces, and AI-powered solutions using
            React, JavaScript, Python, and SQL. I'm passionate about
            solving real-world problems through clean, efficient code.
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