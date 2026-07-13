import SkillCategory from "./SkillCategory";

import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaRobot,
  FaTools,
} from "react-icons/fa";

function Skills() {
  return (
    <section id="skills" className="py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm">
            TECH STACK
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Technologies I
            <span className="text-blue-500">
              {" "}Work With
            </span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-gray-400 leading-8 text-lg">
            I enjoy working with modern technologies for web
            development, databases, and AI applications.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          <SkillCategory
            icon={<FaLaptopCode />}
            title="Frontend"
            skills={[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
            ]}
          />

          <SkillCategory
            icon={<FaServer />}
            title="Backend"
            skills={[
              "Python",
              "Flask",
              "REST API",
            ]}
          />

          <SkillCategory
            icon={<FaDatabase />}
            title="Database"
            skills={[
              "MySQL",
              "PostgreSQL",
            ]}
          />

          <SkillCategory
            icon={<FaRobot />}
            title="AI"
            skills={[
              "Prompt Engineering",
              "Generative AI",
              "LLMs",
            ]}
          />

          <SkillCategory
            icon={<FaTools />}
            title="Tools"
            skills={[
              "Git",
              "GitHub",
              "VS Code",
              "Postman",
            ]}
          />

          <SkillCategory
            icon="🚀"
            title="Currently Learning"
            skills={[
              "LangChain",
              "Vector Databases",
              "RAG",
              "Docker",
            ]}
          />

        </div>

      </div>

    </section>
  );
}

export default Skills;