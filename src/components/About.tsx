import React from 'react';
import { Code, Coffee, Heart, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Code, number: '50+', label: 'Projects Completed' },
    { icon: Coffee, number: '1000+', label: 'Cups of Coffee' },
    { icon: Heart, number: '3', label: 'Years Experience' },
    { icon: Zap, number: '24/7', label: 'Always Learning' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate developer who loves turning complex problems into simple, beautiful solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm a full-stack developer with a passion for creating exceptional digital experiences. 
                My journey began with curiosity about how websites work, and it has evolved into a 
                deep love for crafting clean, efficient, and user-friendly applications.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I specialize in modern web technologies including React, TypeScript, Node.js, and cloud platforms. 
                I believe in writing clean, maintainable code and creating intuitive user interfaces that 
                solve real-world problems.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or enjoying a good book with a cup of coffee.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-cyan-400 to-purple-500 rounded-3xl p-1">
              <div className="w-full h-full bg-gray-900 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <img src="src\assets\Profile.jpg" className="w-32 h-32 rounded-full" alt="ProfilePic" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Piyush Soni</h3>
                  <p className="text-gray-300">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl mb-4 group-hover:rotate-12 transition-transform duration-300">
                <stat.icon size={24} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;