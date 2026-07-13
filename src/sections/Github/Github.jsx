import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import GithubCard from "./GithubCard";
import { getRepositories } from "./githubService";

function Github() {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    getRepositories().then(setRepos);
  }, []);

  return (
    <section id="github" className="py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm">
            GITHUB
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Latest
            <span className="text-blue-500">
              {" "}Repositories
            </span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            These projects are fetched live from my GitHub profile.
            Every new repository I publish automatically appears here.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {repos.map((repo) => (
            <GithubCard
              key={repo.id}
              repo={repo}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Github;