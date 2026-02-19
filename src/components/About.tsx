import React from "react";
import { Timeline } from "./ui/Timeline";
import Reveal3D from "./ui/Reveal3D";
import Profile from "../assets/Pro-pic.png";

const timelineData = [
  {
    year: "2025",
    title: "Full Stack Intern",
    subtitle: "Groot Software, Jaipur",
    description: "Building scalable web applications using the MERN stack.",
  },
  {
    year: "2024",
    title: "AI/ML Internship",
    subtitle: "E & ICT Academy, IIT Guwahati",
    description: "Explored advanced AI algorithms and machine learning models.",
  },
  {
    year: "2023",
    title: "Core Java Internship",
    subtitle: "Learn & Build, Remote",
    description:
      "Strengthened object-oriented programming concepts and Java fundamentals.",
  },
  {
    year: "2022",
    title: "Started Journey",
    subtitle: "Bodacious IT Hub, Jaipur",
    description:
      "Began programming with C/C++ and discovered a passion for code.",
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Condensed Bio */}
        <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-12 mb-20">
          <Reveal3D direction="left" className="flex-1 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white tracking-tight">
              About <span className="text-brand-secondary">Me</span>
            </h2>
            <div className="text-xl text-gray-300 font-light max-w-2xl leading-relaxed space-y-3">
              <p>
                Backend-focused full-stack engineer building systems that stay
                reliable under real-world load — transactional databases,
                layered caching, and fail-safe API boundaries.
              </p>
              <p>
                Final-year CSE undergraduate at{" "}
                <span className="text-white font-medium">
                  Global Institute of Technology, Jaipur.
                </span>
              </p>
              <p>
                Open to full-time roles · Flexible with relocation
              </p>
              <p className="text-brand-secondary/80 italic text-lg">
                Clean code. Clear systems. Reliable execution.
              </p>
            </div>
          </Reveal3D>

          <Reveal3D direction="right" delay={0.2} className="flex-shrink-0">
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src={Profile}
                alt="Piyush Soni"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-transparent mix-blend-overlay" />
            </div>
          </Reveal3D>
        </div>

        {/* 2. How I Think */}
        <Reveal3D
          delay={0.2}
          className="mb-20 py-12 px-6 sm:px-12 border-l-4 border-brand-primary bg-white/5 rounded-r-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6">How I Think</h3>
          <p className="text-lg text-gray-300 mb-6 italic">
            "I design systems assuming:"
          </p>
          <div className="grid sm:grid-cols-2 gap-6 text-gray-400">
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold">01.</span>
              <span>
                <strong className="text-white">Traffic will spike.</strong>{" "}
                Scale from day one.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold">02.</span>
              <span>
                <strong className="text-white">Inputs will be wrong.</strong>{" "}
                Validate everything.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold">03.</span>
              <span>
                <strong className="text-white">
                  Users will try weird things.
                </strong>{" "}
                Handle edge cases.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-400 font-bold">04.</span>
              <span>
                <strong className="text-white">Code is for humans.</strong>{" "}
                Write clarity for the future me.
              </span>
            </div>
          </div>
        </Reveal3D>

        {/* 3. Timeline */}
        <Reveal3D delay={0.4} className="border-t border-white/10 pt-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            My Journey - During College
          </h3>
          <Timeline items={timelineData} />
        </Reveal3D>
      </div>
    </section>
  );
};

export default About;
