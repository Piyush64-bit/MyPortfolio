import React, { useState, useEffect } from 'react';
import { Award, ExternalLink, X, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import MernInternship from '../assets/MernInternship.jpg';
import AIMLInternship from '../assets/AIMLInternship.jpg';
import CoreJavaInternship from '../assets/CoreJavaInternship.jpg'; 

const Certifications: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const certifications = [
    {
      title: 'MERN Stack Development',
      issuer: 'Groot Software',
      date: 'AUG 2025',
      id: 'GROOT-2025-3135',
      image: MernInternship,
      tags: ['MongoDB', 'Express', 'React', 'Node'],
    }, 
    {
      title: 'AI & Machine Learning',
      issuer: 'IIT Guwahati',
      date: 'JUL 2024',
      id: 'EICT-107-2024',
      image: AIMLInternship,
      tags: ['Python', 'ML Models', 'Data Science'],
    },
    {
      title: 'Core Java Programming',
      issuer: 'Learn and Build',
      date: 'AUG 2023',
      id: 'LNIB-23-1124',
      image: CoreJavaInternship,
      tags: ['Java', 'OOPs', 'Data Structures'],
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-6">
             <ShieldCheck size={14} />
             <span>Verified Credentials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-6">
            Professional <span className="text-brand-secondary">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:border-brand-primary/30 transition-colors duration-300"
            >
              {/* Image Header */}
              <div className="h-48 overflow-hidden relative cursor-pointer" onClick={() => setSelectedImage(cert.image)}>
                 <img 
                   src={cert.image} 
                   alt={cert.title} 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/50 group-hover:bg-transparent transition-colors duration-300" />
                 
                 {/* ID Badge */}
                 <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-xs font-mono text-gray-400 px-2 py-1 rounded border border-white/10">
                    {cert.id}
                 </div>
              </div>

              {/* Content */}
              <div className="p-6">
                 <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-lg font-bold text-white leading-tight mb-1">{cert.title}</h3>
                        <p className="text-sm text-gray-500">{cert.issuer}</p>
                    </div>
                    <Award className="text-brand-secondary w-5 h-5 opacity-50 group-hover:opacity-100 transition-opacity" />
                 </div>

                 <div className="flex flex-wrap gap-2 mb-6">
                    {cert.tags.map((tag, i) => (
                        <span key={i} className="text-[10px] uppercase tracking-wider font-semibold text-gray-400 bg-white/5 px-2 py-1 rounded">
                            {tag}
                        </span>
                    ))}
                 </div>

                 <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-xs font-mono text-gray-500">{cert.date}</span>
                    <button 
                        onClick={() => setSelectedImage(cert.image)}
                        className="text-xs font-medium text-brand-secondary flex items-center gap-1 hover:text-white transition-colors"
                    >
                        VIEW CREDENTIAL <ExternalLink size={10} />
                    </button>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 left-0 text-white hover:text-brand-secondary transition-colors"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto rounded-lg shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
