import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const PortalOverlay = ({ children }) => {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(children, document.body);
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const firstMenuItemRef = useRef(null);
  const previousActiveElement = useRef(null);

  // highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 80;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = section.getAttribute("id");
        }
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // disable scroll + manage focus
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      document.body.style.overflow = "hidden";
      setTimeout(() => firstMenuItemRef.current?.focus(), 0);
    } else {
      document.body.style.overflow = originalOverflow || "";
      previousActiveElement.current?.focus?.();
    }
    return () => {
      document.body.style.overflow = originalOverflow || "";
    };
  }, [isOpen]);

  // close on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // smooth scroll + close
  const handleMenuItemClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Work" },
    { id: "education", label: "Education" },
  ];

  return (
    <>
      {/* MAIN NAVBAR */}
      <nav
        className={`top-0 w-full fixed transition duration-300 px-[7vw] lg:px-[20vw] z-30 ${
          isScrolled
            ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="text-white py-5 flex justify-between items-center">
          {/* Logo */}
          <div className="text-lg font-semibold cursor-pointer select-none">
            <span className="text-[#8245ec]">&lt;</span>
            <span className="text-[#8245ec]">Niyali</span>
            <span className="text-[#8245ec]">/</span>
            <span className="text-[#8245ec]">Mukherjee</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : "text-gray-300"
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://github.com/niyalimukherjee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/niyali-mukh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Hamburger (mobile) */}
          <div className="md:hidden">
            <button
              className="text-3xl text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </nav>

      {/* PORTAL: Overlay + Mobile Menu */}
      <PortalOverlay>
        {/* Background overlay */}
        <div
          aria-hidden={!isOpen}
          className={`fixed inset-0 z-50 transition-opacity duration-300 ${
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          style={{
            backdropFilter: isOpen ? "blur(10px)" : "none",
            WebkitBackdropFilter: isOpen ? "blur(10px)" : "none",
            backgroundColor: isOpen ? "rgba(0,0,0,0.38)" : "transparent",
          }}
        />

        {/* Mobile menu */}
        <div
          role="dialog"
          aria-modal="true"
          aria-hidden={!isOpen}
          className={`fixed top-16 left-1/2 transform -translate-x-1/2
                      w-11/12 max-w-sm sm:w-4/5 z-60 rounded-lg shadow-lg
                      bg-[#050414] bg-opacity-75 backdrop-blur-lg
                      transition-all duration-300 ease-out
                      ${isOpen ? "opacity-100 translate-y-0 scale-100 pointer-events-auto" : "opacity-0 translate-y-3 scale-95 pointer-events-none"}`}
        >
          {/* Cross button inside menu */}
          <div className="flex justify-end pr-4 pt-3">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="text-3xl text-[#8245ec] cursor-pointer"
            >
              <FiX />
            </button>
          </div>

          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300 px-6">
            {menuItems.map((item, index) => (
              <li
                key={item.id}
                className={`w-full text-center cursor-pointer hover:text-white ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button
                  className="w-full py-2 text-lg"
                  ref={index === 0 ? firstMenuItemRef : null}
                  onClick={() => handleMenuItemClick(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex space-x-6 pt-2">
              <a
                href="https://github.com/niyalimukherjee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/niyali-mukh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </ul>
        </div>
      </PortalOverlay>
    </>
  );
};

export default Navbar;