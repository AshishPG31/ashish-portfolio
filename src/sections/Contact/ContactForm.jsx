import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    emailjs
      .sendForm(
        "service_p3ccss9",
        "template_78pvo64",
        form.current,
        "yBH7ly3Ekn4lc6fYE"
      )
      .then(
        () => {
          setLoading(false);
          setMessage("✅ Message sent successfully!");
          form.current.reset();
        },
        () => {
          setLoading(false);
          setMessage("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <motion.form
      ref={form}
      onSubmit={sendEmail}
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 lg:p-10"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="bg-[#0B1220] rounded-xl px-5 py-4 border border-white/10 focus:border-blue-500 outline-none transition"
        />

        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="bg-[#0B1220] rounded-xl px-5 py-4 border border-white/10 focus:border-blue-500 outline-none transition"
        />
      </div>

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="w-full mt-6 bg-[#0B1220] rounded-xl px-5 py-4 border border-white/10 focus:border-blue-500 outline-none transition"
      />

      <textarea
        rows="7"
        name="message"
        placeholder="Tell me about your project..."
        required
        className="w-full mt-6 bg-[#0B1220] rounded-xl px-5 py-4 border border-white/10 resize-none focus:border-blue-500 outline-none transition"
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send Message 🚀"}
      </button>

      {message && (
        <p className="mt-6 text-center text-green-400 font-medium">
          {message}
        </p>
      )}
    </motion.form>
  );
}

export default ContactForm;