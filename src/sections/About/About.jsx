import {
  FaLaptopCode,
  FaRobot,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";

import FeatureCard from "./FeatureCard";

function About() {
return (
    <section id="about" className="scroll-mt-24 min-h-screen py-28 flex items-center">
      <div className="max-w-7xl mx-auto px-6">

      {/* Heading */}
      <div className="text-center">

        <p className="uppercase tracking-[0.3em] text-blue-400 text-sm">
          ABOUT ME
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Passionate about Building
          <span className="text-blue-500">
            {" "}Modern Experiences
          </span>
        </h2>

        <p className="mt-8 max-w-3xl mx-auto text-gray-400 leading-8 text-lg">
          I'm an MSc Computer Science student passionate about
          Full Stack Development and Generative AI.
          I enjoy building clean, scalable web applications
          while continuously learning modern technologies.
        </p>

      </div>

      {/* Journey + What I Do */}
      <div className="mt-20 grid lg:grid-cols-2 gap-10">

        {/* Journey */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-bold mb-6">
            My Journey
          </h3>

          <div className="space-y-6">

            <div>
              <p className="text-blue-400 font-semibold">
                2026 - Present
              </p>

              <h4 className="font-bold mt-1">
                MSc Computer Science
              </h4>

              <p className="text-gray-400 mt-2">
                Expanding my knowledge in software development,
                databases, and artificial intelligence.
              </p>
            </div>

            <div>
              <p className="text-blue-400 font-semibold">
                Current Focus
              </p>

              <h4 className="font-bold mt-1">
                Full Stack Development & AI
              </h4>

              <p className="text-gray-400 mt-2">
                Building modern web applications and AI-powered
                solutions while improving problem-solving skills.
              </p>
            </div>

          </div>

        </div>

        {/* What I Do */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-2xl font-bold mb-6">
            What I Do
          </h3>

          <ul className="space-y-4 text-gray-300">

            <li>✅ Build responsive full-stack web applications.</li>

            <li>✅ Develop AI-powered tools using LLMs.</li>

            <li>✅ Design and manage SQL databases.</li>

            <li>✅ Create clean, modern user interfaces.</li>

            <li>✅ Continuously learn and explore new technologies.</li>

          </ul>

        </div>

      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

        <FeatureCard
          icon={<FaLaptopCode />}
          title="Full Stack"
          description="Building responsive and scalable web applications with modern frontend and backend technologies."
        />

        <FeatureCard
          icon={<FaRobot />}
          title="Generative AI"
          description="Developing AI-powered applications using Prompt Engineering, LLMs and intelligent workflows."
        />

        <FeatureCard
          icon={<FaDatabase />}
          title="Databases"
          description="Designing efficient relational databases with MySQL and PostgreSQL."
        />

        <FeatureCard
          icon={<FaRocket />}
          title="Continuous Learning"
          description="Always exploring new technologies and improving my development skills every day."
        />

      </div>

      {/* Tech Stack */}
      <div className="mt-20">

        <h3 className="text-3xl font-bold text-center mb-8">
          Tech Stack
        </h3>

        <div className="flex flex-wrap justify-center gap-4">

          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Python",
            "MySQL",
            "PostgreSQL",
            "Git",
            "GitHub",
            "Generative AI",
          ].map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-medium transition hover:bg-blue-500/20"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>

    </div>
  </section>
);
}

export default About;