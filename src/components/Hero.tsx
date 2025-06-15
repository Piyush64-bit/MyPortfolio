import React, { useEffect } from 'react';
import anime from 'animejs';
import { ChevronDown, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { useTypewriter } from 'react-simple-typewriter';

const Hero: React.FC = () => {
  const [typewriterText] = useTypewriter({
    words: [
      'Web Developer',
      'Backend Engineer',
      'Full Stack Developer',
      'Open Source Contributor',
    ],
    loop: true,
    typeSpeed: 90,
    deleteSpeed: 60,
    delaySpeed: 1500,
  });

  // Enhanced Anime.js Animations
  useEffect(() => {
    // Main timeline for hero elements
    anime
      .timeline({ easing: 'easeOutExpo', duration: 1000 })
      .add({
        targets: '.hero-title span',
        translateY: [100, 0],
        opacity: [0, 1],
        rotateX: [90, 0],
        delay: anime.stagger(150),
      })
      .add(
        {
          targets: '.hero-description',
          opacity: [0, 1],
          translateY: [50, 0],
          scale: [0.8, 1],
          duration: 800,
        },
        '-=500'
      )
      .add(
        {
          targets: '.social-icon',
          scale: [0, 1],
          rotate: [180, 0],
          delay: anime.stagger(100),
          duration: 600,
        },
        '-=600'
      )
      .add(
        {
          targets: '.scroll-cta',
          opacity: [0, 1],
          translateY: [30, 0],
          duration: 700,
        },
        '-=400'
      );

    // Floating blobs animation
    anime({
      targets: '.bg-blur-blob',
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
      duration: 8000,
      delay: anime.stagger(1000),
    });

    // Sparkle animation
    anime({
      targets: '.sparkle',
      scale: [0, 1, 0],
      rotate: [0, 360],
      opacity: [0, 1, 0],
      duration: 2000,
      delay: anime.stagger(300),
      loop: true,
      easing: 'easeInOutQuad',
    });

    // Continuous floating animation for profile elements
    anime({
      targets: '.float-element',
      translateY: [-10, 10],
      duration: 3000,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutSine',
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#060606] dark:via-black dark:to-gray-900 text-gray-900 dark:text-white transition-colors duration-500"
    >
      {/* Enhanced Glowing Blobs with more dynamic movement */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 dark:bg-cyan-400/20 rounded-full blur-3xl animate-float bg-blur-blob" />
        <div className="absolute bottom-24 right-16 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-2xl animate-bounce-slow bg-blur-blob" />
        <div className="absolute bottom-[20%] left-[30%] w-64 h-64 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse bg-blur-blob" />
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-yellow-400/5 dark:bg-yellow-400/10 rounded-full blur-2xl animate-float bg-blur-blob" />
      </div>

      {/* Animated Sparkles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Sparkles className="sparkle absolute top-1/4 left-1/4 text-cyan-400 dark:text-cyan-300" size={16} />
        <Sparkles className="sparkle absolute top-1/3 right-1/3 text-purple-400 dark:text-purple-300" size={12} />
        <Sparkles className="sparkle absolute bottom-1/3 left-1/2 text-pink-400 dark:text-pink-300" size={14} />
        <Sparkles className="sparkle absolute top-2/3 right-1/4 text-yellow-400 dark:text-yellow-300" size={10} />
        <Sparkles className="sparkle absolute bottom-1/4 right-1/2 text-cyan-400 dark:text-cyan-300" size={18} />
      </div>

      {/* Twinkling stars - only visible in dark mode */}
      <div className="absolute inset-0 z-0 dark:bg-[radial-gradient(#ffffff22_1px,transparent_1px)] dark:[background-size:20px_20px] opacity-0 dark:opacity-10 animate-pulse transition-opacity duration-500" />

      <div className="relative z-10 text-center max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white hero-title">
            <span className="inline-block float-element">Hi,</span>{' '}
            <span className="inline-block float-element">I'm</span>{' '}
            <span className="inline-block bg-gradient-to-r from-cyan-600 via-purple-600 to-cyan-600 dark:from-cyan-400 dark:via-purple-500 dark:to-cyan-400 bg-clip-text text-transparent animate-gradient float-element">
              Piyush Soni
            </span>
          </h1>
          <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 h-12 flex items-center justify-center">
            <p className="float-element">-&nbsp;</p> 
            <span className="font-light float-element">
              {typewriterText}
              <span className="ml-1 bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent animate-blink">
                |
              </span>
            </span>
          </div>
        </div>

        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed hero-description animate-pulse-glow">
          I build fast, aesthetic, and scalable web apps with code and a lot of coffee.
        </p>

        {/* Enhanced Social Links with more animations */}
        <div className="flex justify-center space-x-6 pt-6">
          {[
            { icon: <Github size={24} />, link: 'https://github.com/piyush64-bit', color: 'hover:text-gray-900 dark:hover:text-white' },
            { icon: <Linkedin size={24} />, link: 'https://linkedin.com/in/piyush64bit', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
            { icon: <Mail size={24} />, link: 'mailto:piiyush.sonii@outlook.com', color: 'hover:text-red-600 dark:hover:text-red-400' },
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full bg-white/80 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 ${social.color} transition-all duration-300 hover:scale-125 hover:-translate-y-2 group social-icon shadow-lg dark:shadow-none border border-gray-200/50 dark:border-gray-700 animate-pulse-glow`}
            >
              <span className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                {social.icon}
              </span>
            </a>
          ))}
        </div>

        {/* Enhanced Scroll Down CTA */}
        <div className="pt-12 scroll-cta">
          <button
            onClick={scrollToAbout}
            className="group flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 animate-bounce-slow"
          >
            <span className="text-sm font-medium group-hover:scale-110 transition-transform duration-300">
              Scroll to explore
            </span>
            <ChevronDown size={24} className="animate-bounce group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:scale-125 transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;