import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2">

      {/* Image Placeholder */}

      <div className="h-52 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">

        <h3 className="text-3xl font-bold text-white/30">
          {project.title}
        </h3>

      </div>

      <div className="p-6">

        <div className="flex justify-between items-center">

          <h3 className="text-2xl font-bold">
            {project.title}
          </h3>

          <span
            className={`text-sm px-3 py-1 rounded-full ${
              project.status === "Completed"
                ? "bg-green-500/20 text-green-400"
                : "bg-yellow-500/20 text-yellow-400"
            }`}
          >
            {project.status}
          </span>

        </div>

        <p className="text-gray-400 mt-4 leading-7">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">

          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm"
            >
              {tech}
            </span>
          ))}

        </div>

        <div className="flex gap-4 mt-8">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaGithub />

            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition"
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