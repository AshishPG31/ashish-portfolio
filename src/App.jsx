import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Education from "./sections/Education/Education";
import Github from "./sections/Github/Github";
import Contact from "./sections/Contact/Contact";

import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      <div className="bg-[#030712] text-white">
        <ScrollProgress />

        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Education />

        <Github />

        <Contact />

        <Footer />
      </div>
    </>
  );
}

export default App;