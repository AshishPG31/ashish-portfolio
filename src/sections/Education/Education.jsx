import education from "./educationData";
import EducationCard from "./EducationCard";

function Education() {
  return (
    <section id="education" className="py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-blue-400 text-sm">
            EDUCATION
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Academic
            <span className="text-blue-500"> Journey</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto leading-8">
            My academic journey has built a strong foundation in
            software development, artificial intelligence,
            databases, and modern web technologies.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-10">
          {education.map((item) => (
            <EducationCard
              key={item.id}
              education={item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;