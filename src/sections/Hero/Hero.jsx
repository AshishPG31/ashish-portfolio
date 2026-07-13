import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

import profile from "../../assets/images/profile.jpeg";

import portfolioData from "../../data/portfolioData";

import { FaArrowRight, FaDownload } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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
    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">          {/* Left */}
    
        <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
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

          <div className="mt-10 flex flex-wrap gap-4">
            {/* Primary Button */}
            <a
                href="#projects"
                className="group inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-4 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_10px_30px_rgba(59,130,246,0.4)]">
                View My Work

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            {/* Secondary Button */}
            <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-xl border border-gray-700 px-7 py-4 font-semibold transition-all duration-300 hover:border-blue-500 hover:bg-white/5 hover:-translate-y-1">
                <FaDownload />
                Download Resume
            </a>

            </div>
            <div className="mt-10 flex items-center gap-6 text-2xl">

            <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-white hover:scale-110">
                <FaGithub />
            </a>

            <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-blue-400 hover:scale-110">
                <FaLinkedin />
            </a>

            <a
                href={`mailto:${portfolioData.personal.email}`}
                className="text-gray-400 transition hover:text-red-400 hover:scale-110">
                <MdEmail />
            </a>

            </div>

        </motion.div>

        {/* Right */}

        {/* <motion.div
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

        </motion.div> */}

      </div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
        }}
        transition={{
            opacity: { duration: 1 },
            x: { duration: 1 },
            y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            },
        }}
        className="flex justify-center relative -ml-6"
        >
        {/* Background Glow */}
        <div className="absolute w-80 h-80 rounded-full bg-blue-500/20 blur-3xl"></div>

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

    </section>
  );
}

export default Hero;