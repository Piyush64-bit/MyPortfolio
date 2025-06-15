import React, { useEffect } from "react";
import anime from "animejs";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { useTypewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  const [typewriterText] = useTypewriter({
    words: [
      "Web Developer",
      "Backend Engineer",
      "Full Stack Developer",
      "Open Source Contributor",
    ],
    loop: true,
    typeSpeed: 90,
    deleteSpeed: 60,
    delaySpeed: 1500,
  });

  // Anime.js Animations
  useEffect(() => {
    anime
      .timeline({ easing: "easeOutExpo", duration: 1000 })
      .add({
        targets: ".hero-title span",
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
      })
      .add(
        {
          targets: ".hero-description",
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800,
        },
        "-=500"
      )
      .add(
        {
          targets: ".social-icon",
          scale: [0, 1],
          delay: anime.stagger(100),
          duration: 600,
        },
        "-=600"
      )
      .add(
        {
          targets: ".scroll-cta",
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 700,
        },
        "-=400"
      );

    anime({
      targets: ".bg-blur-blob",
      scale: [1, 1.05],
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
      duration: 5000,
      delay: anime.stagger(500),
    });
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#060606] dark:to-black text-gray-900 dark:text-white transition-colors duration-500"
    >
      {/* Glowing Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 dark:bg-cyan-400/20 rounded-full blur-3xl animate-ping-slow bg-blur-blob" />
        <div className="absolute bottom-24 right-16 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-2xl bg-blur-blob" />
        <div className="absolute bottom-[20%] left-[30%] w-64 h-64 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl bg-blur-blob" />
      </div>

      {/* Twinkling stars - only visible in dark mode */}
      <div className="absolute inset-0 z-0 dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)] dark:[background-size:20px_20px] opacity-0 dark:opacity-10 animate-stars transition-opacity duration-500" />

      <div className="relative z-10 text-center max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white hero-title">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-cyan-600 dark:from-cyan-400 dark:via-purple-500 dark:to-cyan-400 bg-clip-text text-transparent">
              Piyush Soni
            </span>
          </h1>
          <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 h-12 flex items-center justify-center">
            <p>-&nbsp;</p>{" "}
            <span className="font-light">
              {typewriterText}
              <span className="ml-1 bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent animate-blink">
                |
              </span>
            </span>
          </div>
        </div>

        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed hero-description">
          I build fast, aesthetic, and scalable web apps with code and a lot of
          coffee.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 pt-6">
          {[
            { icon: <Github size={24} />, link: 'https://github.com/piyush64-bit' },
            { icon: <Linkedin size={24} />, link: 'https://linkedin.com/in/piyush64bit' },
            { icon: <Mail size={24} />, link: 'mailto:piiyush.sonii@outlook.com' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white/80 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-transform duration-300 hover:scale-110 social-icon shadow-lg dark:shadow-none border border-gray-200/50 dark:border-gray-700"
            >
              <span className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125">
              {social.icon}
              </span>
            </a>
          ))}
        </div>


        {/* Scroll Down CTA */}
        <div className="pt-12 scroll-cta">
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown
              size={24}
              className="animate-bounce group-hover:text-cyan-600 dark:group-hover:text-cyan-400"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
