import { useEffect, useState } from "react";
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
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (
          id &&
          scrollY >= top &&
          scrollY < top + height
        ) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}

        <a
          href="#hero"
          className="text-2xl font-bold text-white"
        >
          Ashish
          <span className="text-blue-500">.dev</span>
        </a>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8">

          {navLinks.map((item) => (

            <li key={item.name}>

              <a
                href={item.href}
                className={`relative transition-all duration-300 ${
                  activeSection === item.href.substring(1)
                    ? "text-blue-500 font-semibold"
                    : "text-gray-300 hover:text-blue-500"
                }`}
              >
                {item.name}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-500 transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "w-full"
                      : "w-0"
                  }`}
                ></span>

              </a>

            </li>

          ))}

        </ul>

        {/* Resume Button */}

        <a
          href={portfolioData.personal.resume}
          target="_blank"
          rel="noreferrer"
          className="hidden md:block bg-blue-600 hover:bg-blue-500 transition px-5 py-2 rounded-lg font-medium"
        >
          Resume
        </a>

        {/* Mobile Menu Button */}

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
              onClick={() => setMenuOpen(false)}
              className={`block py-3 transition ${
                activeSection === item.href.substring(1)
                  ? "text-blue-500 font-semibold"
                  : "text-gray-300 hover:text-blue-500"
              }`}
            >
              {item.name}
            </a>

          ))}

          <a
            href={portfolioData.personal.resume}
            target="_blank"
            rel="noreferrer"
            className="block mt-4 bg-blue-600 hover:bg-blue-500 transition text-center py-3 rounded-lg font-medium"
          >
            Resume
          </a>

        </div>

      )}

    </nav>
  );
}

export default Navbar;