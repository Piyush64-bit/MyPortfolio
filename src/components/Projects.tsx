import React, { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import Venue from "../assets/Venue.png";
import QuickScreen from "../assets/QuickScreen.png";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import Reveal3D from "./ui/Reveal3D";

const projects = [
  {
    title: "VENUE – Event & Entertainment Booking Platform",
    description:
      "Production-grade event booking platform supporting multi-role access, secure authentication, transactional slot booking, and a fair waitlist promotion system to prevent overbooking.",
    image: Venue,
    tags: ["MERN Stack", "MongoDB Transactions", "JWT Auth", "Socket.IO"],
    githubUrl: "https://github.com/Piyush64-bit/VENUE",
    liveUrl: "https://venueapp.vercel.app/",
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

const ProjectCard = ({ project }: { project: any }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * 32.5;
    const mouseY = (e.clientY - rect.top) * 32.5;

    const rX = (mouseY / height - 32.5 / 2) * -1;
    const rY = mouseX / width - 32.5 / 2;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        transform,
      }}
      className="group relative rounded-xl bg-gray-900/40 border border-white/10 p-6 shadow-2xl transition-all duration-200 hover:shadow-cyan-500/20"
    >
        <div style={{ transform: "translateZ(50px)" }} className="relative overflow-hidden rounded-lg mb-6">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                 <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all hover:scale-110"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all hover:scale-110"
                  >
                    <ExternalLink size={20} />
                  </a>
            </div>
        </div>

      <div style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-2xl font-bold font-heading text-white mb-2 group-hover:text-brand-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 bg-brand-primary/10 text-brand-secondary text-xs rounded-full border border-brand-primary/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-transparent relative overflow-hidden">


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal3D className="text-center mb-20" direction="down">
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-6">
            Featured <span className="text-brand-secondary">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A showcase of my technical capabilities and engineering practices.
          </p>
        </Reveal3D>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-5xl mx-auto perspective-1000">
          {projects.map((project, index) => (
            <Reveal3D
                key={index}
                delay={index * 0.2}
                enableParallax={true}
                parallaxSpeed={index % 2 === 0 ? 0.05 : 0.02}
                className="h-full"
            >
                <ProjectCard project={project} />
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
