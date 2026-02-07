import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useTypewriter } from "react-simple-typewriter";
import Hero3D from "./Hero3D";

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  const [typewriterText] = useTypewriter({
    words: [
      "Web Developer",
      "Frontend Engineer",
      "Backend Engineer",
      "Full Stack Developer",
    ],
    loop: true,
    typeSpeed: 90,
    deleteSpeed: 60,
    delaySpeed: 1500,
  });

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent text-white perspective-1000"
    >
      {/* 3D Background - Parallax */}
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }} className="absolute inset-0 z-0">
          <Hero3D />
      </motion.div>

      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 text-center max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8 backdrop-blur-[2px] rounded-3xl p-8 border border-white/5 bg-black/20 shadow-2xl ring-1 ring-white/10"
      >
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-8xl font-bold font-heading hero-title tracking-tight"
          >
            Hi, I'm{" "}
            <span className="text-brand-secondary inline-block">
              Piyush Soni
            </span>
          </motion.h1>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.3 }}
             className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 h-12 flex items-center justify-center font-light"
          >
            <span className="opacity-80"> - </span>
            <span className="mx-3 font-semibold text-brand-secondary">
              {typewriterText}
            </span>
            <span className="text-brand-primary animate-pulse">_</span>
          </motion.div>
        </div>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed hero-description"
        >
          Building scalable, high-performance web applications with modern architecture.
        </motion.p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 pt-6 gap-4">
          {[
            {
              icon: <Github size={28} />,
              link: "https://github.com/piyush64-bit",
              color: "hover:text-white",
            },
            {
              icon: <Linkedin size={28} />,
              link: "https://linkedin.com/in/piyush64bit",
              color: "hover:text-blue-400",
            },
            {
              icon: <Mail size={28} />,
              link: "mailto:piiyush.sonii@outlook.com",
              color: "hover:text-red-400",
            },
          ].map((social, i) => (
            <motion.a
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                social-icon group relative p-4 rounded-xl 
                bg-white/5 
                text-gray-400 
                border border-white/10
                backdrop-blur-md
                transition-all duration-300 
                hover:scale-110 hover:-translate-y-1
                hover:bg-white/10 hover:shadow-[0_0_20px_rgba(112,66,248,0.5)]
                ${social.color}
              `}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        {/* Scroll Down CTA */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="pt-16 scroll-cta"
        >
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center space-y-2 text-gray-500 hover:text-brand-secondary transition-all duration-300"
          >
            <span className="text-xs font-medium uppercase tracking-[0.2em]">Explore</span>
            <ChevronDown
              size={24}
              className="animate-bounce group-hover:text-brand-secondary group-hover:drop-shadow-[0_0_8px_rgba(0,243,255,0.8)]"
            />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
