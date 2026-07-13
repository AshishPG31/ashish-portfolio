import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function ContactInfo({ data }) {

  const items = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: data.email,
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: data.phone,
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: data.location,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
    >

      <h3 className="text-4xl font-bold">
        Get In Touch
      </h3>

      <p className="mt-6 text-gray-400 leading-8">
        I'm currently seeking opportunities in Full Stack Development,
        Software Engineering, and Generative AI. Feel free to reach out
        for collaborations or exciting projects.
      </p>

      <div className="space-y-5 mt-10">

        {items.map((item) => (

          <div
            key={item.title}
            className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-blue-500 transition"
          >

            <div className="text-blue-400 text-2xl">
              {item.icon}
            </div>

            <div>
              <p className="text-sm text-gray-400">
                {item.title}
              </p>

              <h4 className="font-semibold">
                {item.value}
              </h4>
            </div>

          </div>

        ))}

      </div>

      <div className="flex gap-5 mt-10">

        <a
          href={data.github}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition text-xl"
        >
          <FaGithub />
        </a>

        <a
          href={data.linkedin}
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:border-blue-500 hover:text-blue-400 transition text-xl"
        >
          <FaLinkedin />
        </a>

      </div>

    </motion.div>
  );
}

export default ContactInfo;