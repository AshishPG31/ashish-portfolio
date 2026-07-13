import {
  FaStar,
  FaCodeBranch,
  FaExternalLinkAlt,
} from "react-icons/fa";

function GithubCard({ repo }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-500 transition hover:-translate-y-2 duration-300">

      <div className="flex justify-between items-start">

        <h3 className="text-2xl font-bold">
          {repo.name}
        </h3>

        <a
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-400"
        >
          <FaExternalLinkAlt />
        </a>

      </div>

      <p className="text-gray-400 mt-4 min-h-[70px]">
        {repo.description || "No description available."}
      </p>

      <div className="flex gap-6 mt-8 text-sm text-gray-300">

        <span className="flex items-center gap-2">
          <FaStar />
          {repo.stargazers_count}
        </span>

        <span className="flex items-center gap-2">
          <FaCodeBranch />
          {repo.forks_count}
        </span>

        <span className="text-blue-400">
          {repo.language || "Unknown"}
        </span>

      </div>

    </div>
  );
}

export default GithubCard;