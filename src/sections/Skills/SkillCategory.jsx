import { motion } from "framer-motion";

function SkillCategory({ title, icon, skills }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]"
    >
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">{icon}</span>

        <h3 className="text-xl font-bold">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm hover:bg-blue-500/20 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default SkillCategory;