import React from "react";
import { ExternalLink, Github, BookOpen, GitBranch, Star } from "lucide-react";
import Venue from "../assets/Venue.png";
import QuickScreen from "../assets/QuickScreen.png";
import { motion } from "framer-motion";
import Reveal3D from "./ui/Reveal3D";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  badges?: string[];
  apiDocsUrl?: string;
  architectureId?: string;
}

const projects: Project[] = [
  {
    title: "VENUE – Event & Entertainment Booking Platform",
    description:
      "Event booking platform with multi-role access, JWT authentication, transactional slot booking, and a waitlist promotion system to prevent overbooking. Backend built with ACID transactions, Redis rate limiting, and a modular domain-driven structure.",
    image: Venue,
    tags: [
      "MERN Stack",
      "MongoDB Transactions",
      "Redis",
      "JWT Auth",
      "Socket.IO",
      "Swagger/OpenAPI",
      "Docker",
    ],
    githubUrl: "https://github.com/Piyush64-bit/VENUE",
    liveUrl: "https://venueapp.vercel.app/",
    featured: true,
    badges: ["ACID Transactions", "Redis Rate Limiting", "Swagger Docs"],
    apiDocsUrl: "https://venue-z8ti.onrender.com/docs/",
    architectureId: "architecture",
  },
  {
    title: "QuickScreen – Real-Time Screen Sharing App",
    description:
      "Low-latency peer-to-peer screen sharing application built with WebRTC, featuring real-time signaling, cross-network connectivity, and browser-based streaming without server-side media processing.",
    image: QuickScreen,
    tags: ["WebRTC", "React.js", "Node.js", "Socket.IO"],
    githubUrl: "https://github.com/Piyush64-bit/QUICKSCREEN",
    liveUrl: "https://quickscreen-app.vercel.app/",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Reveal3D delay={index * 0.15} enableParallax parallaxSpeed={0.02}>
      <motion.div
        whileHover={{ y: -3 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`
          group relative rounded-2xl overflow-hidden border transition-all duration-300
          ${
            project.featured
              ? "border-brand-primary/30 bg-gray-900/60 shadow-2xl shadow-brand-primary/10 hover:border-brand-primary/50 hover:shadow-brand-primary/20"
              : "border-white/10 bg-gray-900/40 shadow-xl hover:border-white/20"
          }
        `}
      >
        {/* ★ Featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-brand-primary/40 backdrop-blur-sm">
            <Star size={11} className="text-brand-primary fill-brand-primary" />
            <span className="text-brand-primary text-xs font-semibold tracking-wide">
              Featured
            </span>
          </div>
        )}

        {/* Screenshot — full, uncropped */}
        <div className="w-full bg-black/40 border-b border-white/5">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Tech badges (featured only) */}
          {project.featured && project.badges && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.badges.map((badge, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-brand-primary/10 text-brand-secondary border border-brand-primary/20"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3
            className={`font-bold font-heading mb-3 transition-colors duration-300 ${
              project.featured
                ? "text-2xl text-white group-hover:text-brand-secondary"
                : "text-xl text-white group-hover:text-gray-200"
            }`}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-1 bg-brand-primary/10 text-brand-secondary text-xs rounded-full border border-brand-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div
            className={`flex flex-wrap gap-2.5 pt-5 border-t ${
              project.featured ? "border-brand-primary/10" : "border-white/5"
            }`}
          >
            {project.apiDocsUrl && (
              <a
                href={project.apiDocsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/25 text-brand-secondary text-xs font-medium hover:bg-brand-primary/20 transition-all duration-200 hover:scale-105"
              >
                <BookOpen size={13} />
                API Docs
              </a>
            )}
            {project.architectureId && (
              <button
                onClick={() => scrollToSection(project.architectureId!)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium hover:bg-white/10 hover:text-white transition-all duration-200 hover:scale-105"
              >
                <GitBranch size={13} />
                Architecture
              </button>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium hover:bg-white/10 hover:text-white transition-all duration-200 hover:scale-105"
            >
              <Github size={13} />
              GitHub
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-medium hover:bg-white/10 hover:text-white transition-all duration-200 hover:scale-105"
            >
              <ExternalLink size={13} />
              Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </Reveal3D>
  );
};

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal3D className="text-center mb-16" direction="down">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-6">
            Featured <span className="text-brand-secondary">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Systems built with real architectural decisions — authentication,
            transactions, caching, and deployment.
          </p>
        </Reveal3D>

        {/* Single column — both cards full width, stacked */}
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
