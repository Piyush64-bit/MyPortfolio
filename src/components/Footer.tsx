import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {

    const socialLinks = [
      {
        icon: Github,
        href: 'https://github.com/piyush64-bit',
        label: 'GitHub',
      },
      {
        icon: Linkedin,
        href: 'https://www.linkedin.com/in/piyush64bit',
        label: 'LinkedIn',
      },
      {
        icon: Mail,
        href: 'mailto:piiyush.sonii@outlook.com',
        label: 'Email',
      },
    ];
  
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
    return (
      <footer className="bg-transparent border-t border-white/10 pt-20 pb-10 relative overflow-hidden">


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <button
                onClick={scrollToTop}
                className="text-3xl font-bold font-heading text-white hover:text-brand-secondary transition-colors duration-300"
              >
                {"Piyush Soni."}
              </button>
              <p className="text-gray-400 mt-2 text-sm max-w-xs">
                Building scalable web systems, from API to interface.
              </p>
            </div>
  
            <div className="flex gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="
                    relative p-4 rounded-full
                    bg-white/5 border border-white/10
                    text-gray-400 hover:text-white
                    hover:bg-brand-primary/20 hover:border-brand-primary/50
                    transition-all duration-300
                    group
                  "
                >
                  <link.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
  
          <div className="border-t border-white/5 mt-12 pt-8 text-center flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
            <p>© 2025 Piyush Soni. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;