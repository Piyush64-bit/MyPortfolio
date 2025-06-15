import React, { useState, useEffect } from 'react';
import { Award, Calendar, ExternalLink, CheckCircle, X } from 'lucide-react';
import GitImage from '../assets/GIT&GITHUB.jpg';
import TCS from '../assets/TCS.jpg';
import Frontend from '../assets/Frontend.png';
import DBMS from '../assets/DBMS.png';
import Backend from '../assets/Backend.png';

const Certifications: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const certifications = [
    {
      title: 'Frontend Development',
      issuer: 'Groot Academy',
      date: 'May 2025',
      credentialId: 'GROOT/2025/2047',
      image: Frontend,
      verifyUrl: '#',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind'],
      status: 'Active',
    },
    {
      title: 'Backend Development',
      issuer: 'Groot Academy',
      date: 'May 2025',
      credentialId: 'GROOT/2025/2047',
      image: Backend,
      verifyUrl: '#',
      skills: ['MongoDB', 'Java', 'Spring Boot', 'Hibernate'],
      status: 'Active',
    },
    {
      title: 'Database Management',
      issuer: 'Groot Academy',
      date: 'May 2025',
      credentialId: 'GROOT/2025/2047',
      image: DBMS,
      verifyUrl: '#',
      skills: ['MySQL', 'MongoDB'],
      status: 'Active',
    },
    {
      title: 'Git & GitHub Basics',
      issuer: 'LetsUpgrade',
      date: 'May 2025',
      credentialId: 'LUEGGMAR1252568',
      image: GitImage,
      verifyUrl: '#',
      skills: ['Git', 'GitHub', 'Version Control'],
      status: 'Active',
    },
    {
      title: 'Designing Basics - Figma & Canva',
      issuer: 'LetsUpgrade',
      date: 'March 2025',
      credentialId: 'LUEFGMAR125767, LUECNVFEB1252169',
      image: '/certificates/letsupgrade-logo.jpg',
      verifyUrl: '#',
      skills: ['UI/UX', 'Figma', 'Canva'],
      status: 'Active',
    },
    {
      title: 'Communication Skill',
      issuer: 'TCS iON',
      date: 'May 2025',
      credentialId: '91306-28399817-1016',
      image: TCS,
      verifyUrl: '#',
      skills: ['Communication', 'Networking', 'Team Collaboration', 'Community Engagement'],
      status: 'Active',
    },
    {
      title: 'HTML, CSS & JS Bootcamp',
      issuer: 'LetsUpgrade',
      date: 'March 2025',
      credentialId: 'LUEHTMLMAR1251990, LUEJSMAR125103',
      image: '/certificates/letsupgrade-logo.jpg',
      verifyUrl: '#',
      skills: ['JavaScript', 'CSS', 'HTML5'],
      status: 'Active',
    },
    {
      title: 'Prompt Engineering',
      issuer: 'Freedom With AI',
      date: 'March 2025',
      credentialId: '',
      image: '/certificates/freedom-ai-logo.jpg',
      verifyUrl: '#',
      skills: ['Generative AI', 'LLM', 'ChatGPT', 'OpenAI GPT-4', 'Prompt Engineering'],
      status: 'Active',
    },
    {
      title: 'AI Tools Workshop',
      issuer: 'Be10x',
      date: 'December 2024',
      credentialId: '',
      image: '/certificates/be10x-logo.jpg',
      verifyUrl: '#',
      skills: ['Generative AI', 'ChatGPT'],
      status: 'Active',
    },
    {
      title: 'AI & ML Techniques',
      issuer: 'IIT Guwahati',
      date: 'July 2024',
      credentialId: 'EICT/107/2024-25/TP/011',
      image: '/certificates/iitg-logo.jpg',
      verifyUrl: '#',
      skills: ['AI', 'Machine Learning'],
      status: 'Active',
    },
    {
      title: 'Java Core',
      issuer: 'Learn and Build',
      date: 'August 2023',
      credentialId: 'LNBID : IN23PM11246798920',
      image: '/certificates/learnandbuild-logo.jpg',
      verifyUrl: '#',
      skills: ['Core Java'],
      status: 'Active',
    },
    {
      title: 'C++ Programming',
      issuer: 'Bodacious IT Hub',
      date: 'January 2023',
      credentialId: '',
      image: '/certificates/bodacious-logo.jpg',
      verifyUrl: '#',
      skills: ['C++'],
      status: 'Active',
    },
  ];

  const visibleCerts = showAll ? certifications : certifications.slice(0, 6);

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-gray-900 relative z-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Validated expertise and continuous learning in cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleCerts.map((cert, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  onClick={() => setSelectedImage(cert.image)}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    <CheckCircle size={12} />
                    <span>{cert.status}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center text-white text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>{cert.date}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                      {cert.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                      {cert.issuer}
                    </p>
                  </div>
                  <Award className="text-yellow-500 flex-shrink-0 ml-2" size={20} />
                </div>

                <div className="mb-4">
                  <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">
                    Credential ID: {cert.credentialId}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs rounded-full">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 text-sm font-medium transition-colors duration-300 group/link"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 inline-block px-6 py-2 bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-medium rounded-full transition duration-300"
          >
            {showAll ? 'View Less' : 'View More'}
          </button>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white dark:bg-gray-900 rounded-2xl px-8 py-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-500 rounded-xl">
              <Award size={24} className="text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Always pursuing new certifications and staying current with industry standards
              </p>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center animate-fade-in">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white bg-red-500 hover:bg-red-600 rounded-full p-2 transition"
          >
            <X size={20} />
          </button>
          <img
            src={selectedImage}
            alt="Full Certificate"
            className="max-w-3xl max-h-[80vh] object-contain rounded-xl shadow-xl transition-transform duration-500 scale-100 animate-zoom-in"
          />
        </div>
      )}
    </section>
  );
};

export default Certifications;