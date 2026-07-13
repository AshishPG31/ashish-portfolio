import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

import footerData from "./footerData";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-white/10 mt-32">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top */}

        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left */}

          <div>

            <h2 className="text-3xl font-bold">
              {footerData.name}
            </h2>

            <p className="text-gray-400 mt-5 leading-8">
              {footerData.tagline}
            </p>

          </div>

          {/* Center */}

          <div>

            <h3 className="font-semibold text-xl mb-5">
              Quick Links
            </h3>

            <div className="space-y-3">

              {footerData.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-gray-400 hover:text-blue-400 transition"
                >
                  {link.name}
                </a>
              ))}

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="font-semibold text-xl mb-5">
              Connect
            </h3>

            <div className="flex gap-5 mb-6 text-2xl">

              <a
                href={footerData.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href={footerData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href={`mailto:${footerData.email}`}
                className="hover:text-blue-400 transition"
              >
                <FaEnvelope />
              </a>

            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 rounded-xl border border-white/10 px-5 py-3 hover:border-blue-500 hover:text-blue-400 transition"
            >
              <FaArrowUp />
              Back to Top
            </button>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ashish. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Built with React • Tailwind CSS • Framer Motion
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;