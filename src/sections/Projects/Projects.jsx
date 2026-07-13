import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm">
            PROJECTS
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Featured
            <span className="text-blue-500">
              {" "}Projects
            </span>
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-gray-400 leading-8 text-lg">
            A collection of projects showcasing my skills in
            Full Stack Development and Generative AI.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;