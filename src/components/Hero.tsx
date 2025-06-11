import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full Stack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                Piyush Soni
              </span>
            </h1>
            <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-300 h-12 flex items-center justify-center">
              <span className="font-light">
                {displayText}
                <span className="animate-blink">|</span>
              </span>
            </div>
          </div>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I craft beautiful, functional web experiences with modern technologies.
            Passionate about creating innovative solutions that make a difference.
          </p>

          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/piyush64-bit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 group"
            >
              <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/piyush64bit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 group"
            >
              <Linkedin size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
            <a
              href="mailto:piiyush.sonii@outlook.com.com"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 group"
            >
              <Mail size={24} className="group-hover:rotate-12 transition-transform duration-300" />
            </a>
          </div>

          <div className="pt-12">
            <button
              onClick={scrollToAbout}
              className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-cyan-400 transition-all duration-300"
            >
              <span className="text-sm font-medium">Scroll to explore</span>
              <ChevronDown size={24} className="animate-bounce group-hover:text-cyan-400" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;