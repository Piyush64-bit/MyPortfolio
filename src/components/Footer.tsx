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
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className=" flex justify-between items-center">
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
             &lt;&#47; 	&gt; Piyush Soni
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 group"
                aria-label={link.label}
              >
                <link.icon size={20} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* <div className="text-center md:text-right">
            <p className="text-gray-400 flex items-center justify-center md:justify-end space-x-1">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>© {currentYear}</span>
            </p>
          </div> */}
        </div>

        <div className="border-t border-gray-800 mt-5 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Designed & Developed by P I Y U $ H
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;