import React, { useEffect, useState } from 'react';
import anime from 'animejs';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack Developer";

  // Typing animation
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  // Anime.js Animations
  useEffect(() => {
    anime
      .timeline({ easing: 'easeOutExpo', duration: 1000 })
      .add({
        targets: '.hero-title span',
        translateY: [50, 0],
        opacity: [0, 1],
        delay: anime.stagger(100),
      })
      .add(
        {
          targets: '.hero-description',
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 800,
        },
        '-=500'
      )
      .add(
        {
          targets: '.social-icon',
          scale: [0, 1],
          delay: anime.stagger(100),
          duration: 600,
        },
        '-=600'
      )
      .add(
        {
          targets: '.scroll-cta',
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 700,
        },
        '-=400'
      );

    anime({
      targets: '.bg-blur-blob',
      scale: [1, 1.05],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: 5000,
      delay: anime.stagger(500),
    });
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060606] text-white"
    >
      {/* Glowing Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-ping-slow bg-blur-blob" />
        <div className="absolute bottom-24 right-16 w-96 h-96 bg-purple-500/20 rounded-full blur-2xl bg-blur-blob" />
        <div className="absolute bottom-[20%] left-[30%] w-64 h-64 bg-pink-500/10 rounded-full blur-3xl bg-blur-blob" />
      </div>

      {/* Twinkling stars layer */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] [background-size:20px_20px] opacity-10 animate-stars" />

      <div className="relative z-10 text-center max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white hero-title">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Piyush Soni
            </span>
          </h1>
          <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 h-12 flex items-center justify-center">
            <span className="font-light">
              {displayText}
              <span className="ml-1 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent animate-blink">
                |
              </span>
            </span>
          </div>
        </div>

        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed hero-description">
          I build fast, aesthetic, and scalable web apps with code and a lot of coffee.
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
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 group social-icon"
            >
              <span className="transition-transform duration-300 group-hover:rotate-12">
                {social.icon}
              </span>
            </a>
          ))}
        </div>

        {/* Scroll Down CTA */}
        <div className="pt-12 scroll-cta">
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-cyan-400 transition-all duration-300"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown size={24} className="animate-bounce group-hover:text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
