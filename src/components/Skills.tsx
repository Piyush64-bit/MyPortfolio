import React from "react";
import { Layout, Server, Database, Wrench } from "lucide-react";
import Reveal3D from "./ui/Reveal3D";

const skillsData = [
  {
    category: "Backend Systems",
    icon: <Server className="w-6 h-6 text-purple-400" />,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs (/api/v1)",
      "JWT Authentication",
      "Role-Based Authorization",
      "Zod Validation",
      "Rate Limiting",
      "WebSockets / Socket.IO",
      "Global Error Handling",
    ],
  },
  {
    category: "Databases & Caching",
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    skills: [
      "MongoDB",
      "ACID Transactions",
      "Mongoose Patterns",
      "Redis",
      "Database Indexing",
      "Aggregation Pipelines",
      "Schema Design",
    ],
  },
  {
    category: "DevOps & Tooling",
    icon: <Wrench className="w-6 h-6 text-orange-400" />,
    skills: [
      "Docker & Docker Compose",
      "GitHub Actions (CI/CD)",
      "OpenAPI / Swagger",
      "Git & GitHub",
      "Postman",
      "Linux",
      "/health Endpoints",
      "Environment Management",
    ],
  },
  {
    category: "Frontend",
    icon: <Layout className="w-6 h-6 text-brand-secondary" />,
    skills: ["React.js", "Tailwind CSS", "Framer Motion", "Redux Toolkit"],
  },
];

const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal3D className="text-center mb-20" direction="down">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-6">
            <Server size={14} />
            <span>Technical Stack</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-6">
            Engineering <span className="text-brand-secondary">Stack</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Backend-first. Every tool chosen for reliability and production
            readiness.
          </p>
        </Reveal3D>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {skillsData.map((category, index) => (
            <Reveal3D
              key={index}
              delay={index * 0.1}
              enableParallax={true}
              parallaxSpeed={index % 2 === 0 ? 0.05 : 0.1}
              className={`p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm transition-all duration-300 group hover:border-brand-primary/20 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white font-heading tracking-wide">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-400 bg-white/5 border border-white/5 hover:text-white hover:border-white/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
