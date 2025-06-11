import React from 'react';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: 'The Complete Web Developer Course',
      date: '2023',
      credentialId: 'FSWD-2023-001',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
      verifyUrl: '#',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
      status: 'Active',
    },
    {
      title: 'JavaScript Algorithms and Data Structures',
      issuer: 'FreeCodeCamp',
      date: '2023',
      credentialId: 'JS-ALGO-2023-045',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      verifyUrl: '#',
      skills: ['JavaScript', 'Algorithms', 'Data Structures', 'Problem Solving'],
      status: 'Active',
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2023',
      credentialId: 'REACT-2023-789',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      verifyUrl: '#',
      skills: ['React', 'JSX', 'State Management', 'Component Architecture'],
      status: 'Active',
    },
    {
      title: 'Node.js Backend Development',
      issuer: 'MongoDB University',
      date: '2022',
      credentialId: 'NODE-2022-156',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      verifyUrl: '#',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
      status: 'Active',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'FreeCodeCamp',
      date: '2022',
      credentialId: 'RWD-2022-334',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400',
      verifyUrl: '#',
      skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Mobile-First Design'],
      status: 'Active',
    },
    {
      title: 'Git Version Control',
      issuer: 'GitHub',
      date: '2022',
      credentialId: 'GIT-2022-567',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400',
      verifyUrl: '#',
      skills: ['Git', 'GitHub', 'Version Control', 'Collaboration'],
      status: 'Active',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Validated expertise and continuous learning in cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
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
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
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
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors duration-300 group/link"
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={14} className="group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-white dark:bg-gray-900 rounded-2xl px-8 py-6 shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl">
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
    </section>
  );
};

export default Certifications;