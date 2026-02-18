import React from "react";
import { Timeline } from "./ui/Timeline";
import Reveal3D from "./ui/Reveal3D";
import Profile from "../assets/Pro-pic.png";
import { Server, Layout, Database, Shield, Zap, Code2 } from "lucide-react";

const timelineData = [
  {
    year: "2025",
    title: "Full Stack Intern",
    subtitle: "Groot Software",
    description: "Building scalable web applications using the MERN stack.",
  },
  {
    year: "2024",
    title: "AI/ML Internship",
    subtitle: "IIT Guwahati",
    description: "Explored advanced AI algorithms and machine learning models.",
  },
  {
    year: "2023",
    title: "Core Java Internship",
    subtitle: "Learn & Build",
    description: "Strengthened object-oriented programming concepts and Java fundamentals.",
  },
  {
    year: "2022",
    title: "Started Journey",
    subtitle: "Bodacious IT Hub",
    description: "Began programming with C/C++ and discovered a passion for code.",
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Bio Section with Small Profile */}
        <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-12 mb-24">
          <Reveal3D 
            direction="left"
            className="flex-1 space-y-6"
          >
            {/* <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
              Hey, I’m <span className="text-brand-primary">Piyush Soni</span>
            </h2> */}
            <div className="text-xl text-gray-300 font-light max-w-2xl leading-relaxed">
              <p className="mb-4">
                Full Stack Engineer with a focus on scalable systems. Final-year CSE undergraduate at <span className="text-white font-medium">Global Institute of Technology</span>, available for full-time opportunities.
              </p>
              <p>
                I build fast, scalable, and aesthetic full-stack web applications with a strong focus on performance, security, and real-world production practices. I don’t just make apps work — I make them reliable under load, safe by default, and easy to scale.
              </p>
              <p className="mt-4 text-brand-secondary/80 italic text-lg">
                Clean code, system thinking, and caffeine keep me going
              </p>
            </div>
          </Reveal3D>

          <Reveal3D 
            direction="right"
            delay={0.2}
            className="flex-shrink-0"
          >
             <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src={Profile} alt="Piyush Soni" className="object-cover w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent mix-blend-overlay"></div>
             </div>
          </Reveal3D>
        </div>

        {/* 2. "What I Actually Engineer" - Clean Grid */}
        <div className="mb-24">
            <Reveal3D delay={0.1}>
              <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                <Code2 className="text-brand-primary" />
                What I Actually Engineer
              </h3>
            </Reveal3D>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Frontend */}
                <Reveal3D 
                   delay={0.2}
                   className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/30 transition-colors"
                >
                    <Layout className="w-8 h-8 text-brand-secondary mb-4" />
                    <h4 className="text-xl font-bold text-white mb-3">Frontend</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>React with modern hooks & component architecture</li>
                        <li>Tailwind CSS for scalable design systems</li>
                        <li>Framer Motion for performant micro-interactions</li>
                        <li>Responsive, mobile-first, accessibility-aware UI</li>
                    </ul>
                </Reveal3D>

                {/* Backend */}
                <Reveal3D 
                   delay={0.3}
                   className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/30 transition-colors"
                >
                    <Server className="w-8 h-8 text-purple-400 mb-4" />
                    <h4 className="text-xl font-bold text-white mb-3">Backend & APIs</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>RESTful APIs with clear versioning (/api/v1)</li>
                        <li>JWT-based authentication & role-based authorization</li>
                        <li>Global error handling middleware</li>
                        <li>Centralized input validation using Zod</li>
                        <li>Rate limiting to protect APIs from abuse</li>
                    </ul>
                </Reveal3D>

                 {/* Data & Performance */}
                 <Reveal3D 
                   delay={0.4}
                   className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/30 transition-colors"
                >
                    <Database className="w-8 h-8 text-emerald-400 mb-4" />
                    <h4 className="text-xl font-bold text-white mb-3">Data & Performance</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>MongoDB with optimized schema design</li>
                        <li>Atomic transactions for critical operations</li>
                        <li>Redis caching to reduce DB load</li>
                        <li>Pagination, indexing, and query optimization</li>
                    </ul>
                </Reveal3D>
                
                 {/* Security & Reliability */}
                 <Reveal3D 
                   delay={0.5}
                   className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/30 transition-colors"
                >
                    <Shield className="w-8 h-8 text-red-400 mb-4" />
                    <h4 className="text-xl font-bold text-white mb-3">Security & Reliability</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>Password hashing with bcrypt</li>
                        <li>Input sanitization (XSS & NoSQL injection prevention)</li>
                        <li>Secure file uploads using Multer</li>
                        <li>Environment-based config & secrets management</li>
                    </ul>
                </Reveal3D>

                 {/* DX */}
                 <Reveal3D 
                   delay={0.6}
                   className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/30 transition-colors lg:col-span-2"
                >
                    <Zap className="w-8 h-8 text-yellow-400 mb-4" />
                    <h4 className="text-xl font-bold text-white mb-3">Developer Experience & Standards</h4>
                    <ul className="space-y-2 text-gray-400 text-sm grid sm:grid-cols-2 gap-x-4">
                        <li>API documentation with Swagger / OpenAPI</li>
                        <li>Clean folder structure following MVC / modular patterns</li>
                        <li>Production-ready logging & error tracing mindset</li>
                        <li>Secure CORS configuration for cross-origin safety</li>
                        <li>/health endpoint for uptime & monitoring checks</li>
                    </ul>
                </Reveal3D>
            </div>
        </div>

        {/* 3. "How I Think" Statement */}
        <Reveal3D delay={0.4} className="mb-24 py-12 px-6 sm:px-12 border-l-4 border-brand-primary bg-white/5 rounded-r-2xl">
           <h3 className="text-2xl font-bold text-white mb-6">How I Think</h3>
           <p className="text-lg text-gray-300 mb-6 italic">
             "I design systems assuming:"
           </p>
           <div className="grid sm:grid-cols-2 gap-6 text-gray-400">
              <div className="flex items-start gap-3">
                 <span className="text-red-400 font-bold">01.</span>
                 <span><strong className="text-white">Traffic will spike.</strong> Scale from day one.</span>
              </div>
              <div className="flex items-start gap-3">
                 <span className="text-red-400 font-bold">02.</span>
                 <span><strong className="text-white">Inputs will be wrong.</strong> Validate everything.</span>
              </div>
              <div className="flex items-start gap-3">
                 <span className="text-red-400 font-bold">03.</span>
                 <span><strong className="text-white">Users will try weird things.</strong> Handle edge cases.</span>
              </div>
              <div className="flex items-start gap-3">
                 <span className="text-red-400 font-bold">04.</span>
                 <span><strong className="text-white">Code is for humans.</strong> Write clarity for the future me.</span>
              </div>
           </div>
        </Reveal3D>

        {/* 4. Timeline */}
        <Reveal3D
           delay={0.6}
           className="border-t border-white/10 pt-16"
        >
             <h3 className="text-2xl font-bold text-white mb-8 text-center">My Journey</h3>
             <Timeline items={timelineData} />
        </Reveal3D>

      </div>
    </section>
  );
};

export default About;
