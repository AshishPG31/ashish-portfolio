import { motion } from "framer-motion";

function ContactForm() {
  return (
    <motion.form
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: .8 }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:p-10"
    >

      <div className="grid md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="Your Name"
          className="bg-[#0B1220] rounded-xl px-5 py-4 border border-white/10 focus:border-blue-500 outline-none transition"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="bg-[#0B1220] rounded-xl px-5 py-4 border border-white/10 focus:border-blue-500 outline-none transition"
        />

      </div>

      <input
        type="text"
        placeholder="Subject"
        className="w-full mt-6 bg-[#0B1220] rounded-xl px-5 py-4 border border-white/10 focus:border-blue-500 outline-none transition"
      />

      <textarea
        rows="7"
        placeholder="Tell me about your project..."
        className="w-full mt-6 bg-[#0B1220] rounded-xl px-5 py-4 border border-white/10 resize-none focus:border-blue-500 outline-none transition"
      />

      <button
        className="mt-8 w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-lg"
      >
        Send Message 🚀
      </button>

    </motion.form>
  );
}

export default ContactForm;