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
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className=" flex justify-between items-center">
          <div className="text-center md:text-left">
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              {"</> Piyush Soni"}
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
  key={index}
  href={link.href}
  target="_blank"
  rel="noopener noreferrer"
  aria-label={link.label}
  className="
    relative p-3 rounded-full
    bg-gray-100 dark:bg-gray-800
    text-gray-600 dark:text-gray-400
    hover:bg-gray-200 dark:hover:bg-gray-700
    hover:text-gray-900 dark:hover:text-white
    border border-gray-200/50 dark:border-gray-700
    shadow-lg dark:shadow-none
    transition-all duration-300
    hover:scale-110
    group
    overflow-hidden
  "
>
  {/* subtle animated glow ring */}
  <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 -z-10"></span>

  <link.icon size={20} className="group-hover:rotate-12 group-hover:scale-125 transition-transform duration-300" />
</a>

            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-5 pt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © 2025 Designed & Developed by P I Y U $ H
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;