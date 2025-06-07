"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "features", label: "Features" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const scrollPos = window.scrollY + 100; // offset for header height
      let current = "home";

      for (const { id } of NAV_LINKS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMenuOpen(false);
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/90"
      }`}
      role="banner"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("home")}
          aria-label="Go to home"
          className="text-2xl font-extrabold text-purple-600 hover:text-purple-700 transition focus:outline-none rounded"
        >
          IvyCounsel
        </button>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex space-x-10"
          role="navigation"
          aria-label="Primary Navigation"
        >
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`relative font-medium text-lg text-gray-700 hover:text-purple-600 transition focus:outline-none rounded px-2 py-1 ${
                activeSection === id ? "text-purple-600" : ""
              }`}
              aria-current={activeSection === id ? "page" : undefined}
            >
              {label}
              {/* REMOVED: Active section underline border */}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="md:hidden p-2 rounded focus:outline-none"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden bg-white border-t border-gray-200 shadow-md transition-max-height duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen py-6" : "max-h-0"
        }`}
        role="navigation"
        aria-label="Mobile Navigation"
      >
        <div className="flex flex-col items-center space-y-6">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-base font-semibold text-gray-700 hover:text-purple-600 transition focus:outline-none rounded px-3 py-2 ${
                activeSection === id ? "text-purple-600" : ""
              }`}
              aria-current={activeSection === id ? "page" : undefined}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
