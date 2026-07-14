import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import contactData from "./contactData";

function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 min-h-screen py-28 flex items-center overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-blue-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-24"
        >

          <p className="uppercase tracking-[0.35em] text-blue-400 text-sm">
            CONTACT
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold mt-5">
            Let's Build Something
            <span className="text-blue-500">
              {" "}Amazing
            </span>
          </h2>

          <p className="mt-8 text-gray-400 text-lg max-w-3xl mx-auto leading-8">
            Whether you're hiring, collaborating, or simply want to say hello,
            I'd love to hear from you. My inbox is always open.
          </p>

        </motion.div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">

          <ContactInfo data={contactData} />

          <ContactForm />

        </div>

      </div>
    </section>
  );
}

export default Contact;