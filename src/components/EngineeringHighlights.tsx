import React from "react";
import {
  Database,
  Shield,
  Layers,
  BookOpen,
  Container,
  Zap,
} from "lucide-react";
import Reveal3D from "./ui/Reveal3D";

interface Highlight {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  problem: string;
  solution: string;
}

const highlights: Highlight[] = [
  {
    icon: <Database size={22} />,
    iconColor: "text-purple-400",
    title: "Concurrency Control",
    problem:
      "Simultaneous booking requests caused double-confirmation race conditions — two users claimed the same slot.",
    solution:
      "MongoDB multi-document ACID transactions with atomic session commits ensure exactly-once slot reservation under concurrent load.",
  },
  {
    icon: <Shield size={22} />,
    iconColor: "text-emerald-400",
    title: "API Rate Limiting",
    problem:
      "Endpoints were exposed to burst traffic and credential-stuffing patterns with no enforcement boundary.",
    solution:
      "Redis-backed sliding-window rate limiter with per-IP and per-user-tier limits. Configurable thresholds per route class.",
  },
  {
    icon: <Zap size={22} />,
    iconColor: "text-cyan-400",
    title: "Fail-Open Resiliency",
    problem:
      "Redis cache unavailability during peak hours caused critical booking flows to block entirely.",
    solution:
      "Graceful degradation: cache misses fall through to MongoDB without throwing. Errors are logged non-fatally; upstream continues serving.",
  },
  {
    icon: <Layers size={22} />,
    iconColor: "text-brand-secondary",
    title: "Domain Architecture",
    problem:
      "Monolithic code with cross-cutting concerns caused tight coupling between auth, booking, and event modules.",
    solution:
      "Modular monolith with domain-driven folder structure (auth / booking / events). Clean service layer boundaries — no controller-to-controller calls.",
  },
  {
    icon: <BookOpen size={22} />,
    iconColor: "text-yellow-400",
    title: "API Documentation",
    problem:
      "Internal API surface was undocumented and hard to test; frontend integration relied on tribal knowledge.",
    solution:
      "Swagger / OpenAPI spec auto-generated from route decorators, hosted at /api/docs with try-it-out for every endpoint.",
  },
  {
    icon: <Container size={22} />,
    iconColor: "text-orange-400",
    title: "Deployment Pipeline",
    problem:
      "Manual deploys caused environment config drift — missed env vars would surface only after deployment.",
    solution:
      "Docker Compose orchestration with environment validation on startup, paired with GitHub Actions CI/CD for automated builds and checks.",
  },
];

const EngineeringHighlights: React.FC = () => {
  return (
    <section
      id="engineering"
      className="py-20 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal3D className="text-center mb-20" direction="down">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-6">
            <Layers size={14} />
            <span>Engineering Depth</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-6">
            Engineering <span className="text-brand-secondary">Highlights</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Architectural decisions made while building{" "}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-brand-secondary font-semibold hover:underline underline-offset-4 cursor-pointer"
            >
              VENUE
            </a>{" "}
            — the problems that came up and how they were solved.
          </p>
        </Reveal3D>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {highlights.map((item, index) => (
            <Reveal3D
              key={index}
              delay={index * 0.1}
              enableParallax={true}
              parallaxSpeed={index % 2 === 0 ? 0.03 : 0.02}
            >
              <div className="group h-full rounded-xl bg-gray-900/40 border border-white/10 p-6 shadow-2xl transition-all duration-300 hover:shadow-cyan-500/10 hover:border-white/20 hover:bg-gray-900/60">
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${item.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white">
                    {item.title}
                  </h3>
                </div>

                {/* Problem */}
                <div className="mb-4">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-red-400/70 mb-1.5 block">
                    Problem
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.problem}
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-white/5 mb-4" />

                {/* Solution */}
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-brand-secondary/70 mb-1.5 block">
                    Solution
                  </span>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringHighlights;
