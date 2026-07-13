import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2">

      {/* Project Image */}
      <div className="h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">

        {/* Title + Status */}
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold">
            {project.title}
          </h3>

          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              project.status === "Completed"
                ? "bg-green-500/20 text-green-400"
                : "bg-yellow-500/20 text-yellow-400"
            }`}
          >
            {project.status === "Completed"
              ? "🟢 Completed"
              : "🟡 In Progress"}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-400 mt-4 leading-7">
          {project.description}
        </p>

        {/* Features */}
        <div className="mt-6">
          <h4 className="font-semibold text-lg mb-3">
            Key Features
          </h4>

          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-gray-300"
              >
                <span className="text-blue-400">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm font-medium hover:bg-blue-500/20 transition"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 hover:border-blue-500 transition"
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;