import React from "react";
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  Terminal, 
  Cpu,
  Shield
} from "lucide-react";
import Reveal3D from "./ui/Reveal3D";

const skillsData = [
  {
    category: "Languages & Core CS",
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "Java",
      "C++",
      "Python",
      "SQL"
    ]
  },
  {
    category: "Frontend Engineering",
    icon: <Layout className="w-6 h-6 text-brand-secondary" />,
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Redux Toolkit",
      "Accessibility (WCAG)"
    ]
  },
  {
    category: "Backend & System Design",
    icon: <Server className="w-6 h-6 text-purple-400" />,
    skills: [
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "JWT Authentication",
      "Microservices Architecture",
      "API Rate Limiting"
    ]
  },
  {
    category: "Data & Optimization",
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    skills: [
      "MongoDB",
      "Mongoose Patterns",
      "Redis",
      "Database Indexing",
      "Aggregation Pipelines",
      "Schema Design"
    ]
  },
  {
    category: "Security & Reliability",
    icon: <Shield className="w-6 h-6 text-cyan-400" />,
    skills: [
      "OWASP Best Practices",
      "Input Validation (Zod)",
      "Sanitization Strategies",
      "Secure File Handling",
      "System Health Checks",
      "Environment Management"
    ]
  },
  {
    category: "DevOps & Developer Tooling",
    icon: <Wrench className="w-6 h-6 text-orange-400" />,
    skills: [
      "Git & GitHub",
      "Docker",
      "Postman",
      "OpenAPI / Swagger",
      "CI/CD Pipelines",
      "Linux"
    ]
  }
];

const Skills: React.FC = () => {
    return (
      <section id="skills" className="py-24 bg-transparent relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <Reveal3D className="text-center mb-20" direction="down">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-6">
               <Cpu size={14} />
               <span>Technical Arsenal</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-6">
              My <span className="text-brand-secondary">Tech Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
              A curated stack of technologies I use to build scalable, high-performance digital solutions.
            </p>
          </Reveal3D>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {skillsData.map((category, index) => (
              <Reveal3D
                key={index}
                delay={index * 0.1}
                enableParallax={true}
                parallaxSpeed={index % 2 === 0 ? 0.05 : 0.1}
                className={`p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm transition-all duration-300 group hover:border-brand-primary/20 ${index === 0 ? 'lg:col-span-2' : ''}`}
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
            
            {/* "Currently Learning" Card */}
             <Reveal3D
                delay={0.5}
                enableParallax={true}
                parallaxSpeed={0.08}
                className="p-6 rounded-2xl border border-dashed border-white/10 bg-transparent hover:bg-white/[0.01] transition-colors flex flex-col justify-center items-center text-center gap-4"
              >
                  <div className="p-3 rounded-full bg-brand-secondary/10 text-brand-secondary animate-pulse">
                      <Terminal size={20} />
                  </div>
                  <div>
                      <h4 className="text-white font-bold mb-1">Currently Exploring</h4>
                      <p className="text-sm text-gray-500">Web3 / Solidity & Three.js Shaders</p>
                  </div>
              </Reveal3D>

          </div>
        </div>
      </section>
    );
  };

export default Skills;