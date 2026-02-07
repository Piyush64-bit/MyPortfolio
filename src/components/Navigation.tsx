"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Home, User, Cpu, Award, FolderGit2, Mail, Download } from "lucide-react";
import ShinyButton from "./ui/ShinyButton";

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
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Cpu },
    { id: "certifications", label: "Certs", icon: Award },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "contact", label: "Contact", icon: Mail },
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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-auto max-w-3xl transition-all duration-300`}
      >
        <div
          className={`
            flex items-center justify-between sm:justify-center gap-1 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full
            ${
              isScrolled
                ? "bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-brand-primary/10"
                : "bg-black/50 backdrop-blur-md border border-transparent"
            }
          `}
        >
          {/* Logo - Mobile Only */}
          <div className="flex sm:hidden items-center gap-2 mr-auto" onClick={() => scrollToSection('home')}>
             <div className="p-1.5 rounded-lg bg-brand-primary/20">
               <Code2 size={18} className="text-brand-secondary" />
             </div>
             <span className="font-bold text-white text-sm">Piyush</span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden sm:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    hover:text-white
                    ${isActive ? "text-white" : "text-gray-400"}
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {/* <item.icon size={14} /> */}
                    {item.label}
                  </span>
                </button>
              );
            })}
            
            {/* Desktop Resume Button */}
            <ShinyButton
              href="/PiyushSoni_Resume.pdf"
              download
              className="ml-2 bg-white/10 border-white/20 hover:bg-white/20"
            >
              <span>Resume</span>
              <Download size={14} />
            </ShinyButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-20 left-4 right-4 z-40 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all
                    ${
                      activeSection === item.id
                        ? "bg-brand-primary/20 text-brand-secondary border border-brand-primary/20"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Resume Button */}
              <ShinyButton
                href="/PiyushSoni_Resume.pdf"
                download
                className="mt-2 w-full justify-center bg-white/10 border-white/20"
              >
                <span>Download Resume</span>
                <Download size={18} />
              </ShinyButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
