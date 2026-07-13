import { motion } from "framer-motion";
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

function EducationCard({ education }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-2xl border border-white/10 bg-white/5 p-8 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-300"
    >
      {/* Status Badge */}
      <div className="absolute top-6 right-6">
        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">
          {education.status}
        </span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-2xl">
          <FaGraduationCap />
        </div>

        <div>
          <h3 className="text-2xl font-bold">
            {education.degree}
          </h3>

          <p className="text-blue-400 mt-1">
            {education.institute}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-3 text-gray-300">

        <div className="flex items-center gap-3">
          <FaCalendarAlt className="text-blue-400" />
          <span>{education.duration}</span>
        </div>

        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-blue-400" />
          <span>{education.location}</span>
        </div>

        <div>
          <span className="text-blue-400 font-semibold">
            Percentage:
          </span>{" "}
          {education.score}
        </div>

      </div>

      {/* Subjects */}
      <div className="mt-8">

        <h4 className="font-semibold mb-4">
          Key Subjects
        </h4>

        <div className="flex flex-wrap gap-3">

          {education.subjects.map((subject) => (
            <span
              key={subject}
              className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm hover:bg-blue-500/20 transition"
            >
              {subject}
            </span>
          ))}

        </div>

      </div>

    </motion.div>
  );
}

export default EducationCard;