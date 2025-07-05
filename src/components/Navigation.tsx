"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  setActiveSection,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-black/70 backdrop-blur-lg border border-gray-200/20 dark:border-white/10"
          : "bg-white/70 dark:bg-black/40 backdrop-blur-xl border border-gray-200/30 dark:border-white/20"
      } rounded-xl mx-4 md:mx-auto max-w-5xl px-4 py-3 shadow-lg shadow-gray-500/10 dark:shadow-black/30`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gray-100/50 dark:bg-white/5 border border-gray-200/50 dark:border-white/10">
            <Code2 size={20} className="text-gray-700 dark:text-gray-300" />
          </div>
          <span className="text-lg font-bold text-transparent bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text">
            Portfolio
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative group text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? "text-cyan-600 dark:text-cyan-400"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}

          {/* Resume Download Button */}
          <a
            href="/PiyushSoni_Resume.pdf"
            download
            className="relative inline-flex items-center justify-center px-4 py-1.5 text-sm font-medium text-white transition bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <span className="z-10">Download Resume</span>
            <motion.div
              className="absolute inset-0 bg-white opacity-10 rounded-lg"
              animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.15, 0.1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </a>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-4 flex flex-col gap-3 bg-white/90 dark:bg-black/80 backdrop-blur-lg p-4 rounded-xl border border-gray-200/50 dark:border-white/10"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-left text-sm font-medium rounded-md px-3 py-2 transition-all duration-300 ${
                activeSection === item.id
                  ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-gray-700"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Resume Button for Mobile */}
          <a
            href="/PiyushSoni_Resume.pdf"
            download
            className="mt-2 text-center text-sm font-medium text-white bg-gradient-to-r from-cyan-600 to-purple-600 py-2 rounded-md shadow-md hover:scale-105 transition-transform"
          >
            Download Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navigation;
