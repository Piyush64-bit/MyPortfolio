import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Netflix Clone',
      description: 'A clone of the popular streaming platform Netflix, featuring a responsive UI and dynamic movie listings using TMDB API.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Firebase', 'TMDB API', 'Styled Components'],
      githubUrl: 'https://github.com/Piyush64-bit/Netflix_Clone',
      liveUrl: '#',
    },
    {
      title: 'Tic Tac Toe Game',
      description: 'A classic Tic Tac Toe game built using HTML, CSS, and JavaScript. Simple UI with win logic and score tracking.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/Piyush64-bit/TIC-TAC-TOE_GAME',
      liveUrl: '#',
    },
    {
      title: 'ChatBot',
      description: 'AI-powered chatbot built using JavaScript. Interactive and intelligent responses to basic user inputs.',
      image: 'https://images.pexels.com/photos/8439009/pexels-photo-8439009.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/Piyush64-bit/ChatBot',
      liveUrl: '#',
    },
    {
      title: 'IPL Scorecard',
      description: 'Web application displaying IPL match statistics with real-time score updates and team details.',
      image: 'https://images.pexels.com/photos/675740/pexels-photo-675740.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/Piyush64-bit/IPL-Scorecard',
      liveUrl: '#',
    },
    {
      title: 'CSS Project One',
      description: 'Responsive and animated website layout focusing purely on advanced CSS styling and layout structuring.',
      image: 'https://images.pexels.com/photos/374074/pexels-photo-374074.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['CSS3', 'HTML5'],
      githubUrl: 'https://github.com/Piyush64-bit/css-project-one',
      liveUrl: '#',
    },
    {
      title: 'Furnio - Furniture Store',
      description: 'Modern furniture e-commerce platform with sleek UI, dynamic product loading, and animations using Framer Motion.',
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      githubUrl: 'https://github.com/zencoderlaksh/furnio_project',
      liveUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-black rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    className="p-2 bg-black bg-opacity-80 rounded-full text-white hover:text-cyan-400 transition-colors duration-200"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-2 bg-black bg-opacity-80 rounded-full text-white hover:text-cyan-400 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full group-hover:bg-gray-700 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;