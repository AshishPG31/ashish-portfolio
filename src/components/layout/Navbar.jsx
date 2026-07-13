import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import portfolioData from "../../data/portfolioData";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}

        <h1 className="text-2xl font-bold text-white">
          Ashish<span className="text-blue-500">.dev</span>
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 text-gray-300">

          {navLinks.map((item) => (

            <li key={item.name}>

              <a
                href={item.href}
                className="hover:text-blue-500 transition duration-300"
              >
                {item.name}
              </a>

            </li>

          ))}

        </ul>

        {/* Resume Button */}

        <a
          href={portfolioData.personal.resume}
          target="_blank"
          className="hidden md:block bg-blue-600 hover:bg-blue-500 transition px-5 py-2 rounded-lg font-medium"
        >
          Resume
        </a>

        {/* Mobile Button */}

        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-[#111827] px-6 pb-6">

          {navLinks.map((item) => (

            <a
              key={item.name}
              href={item.href}
              className="block py-3 text-gray-300 hover:text-blue-500"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>

          ))}

          <a
            href={portfolioData.personal.resume}
            className="block mt-4 bg-blue-600 text-center py-3 rounded-lg"
          >
            Resume
          </a>

        </div>

      )}

    </nav>
  );
}

export default Navbar;