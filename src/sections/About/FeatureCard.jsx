import { motion } from "framer-motion";

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.25 }}
      className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-md
      p-6
      transition-all
      hover:border-blue-500/40
      hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]
    "
    >
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-gray-400 leading-7">
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;