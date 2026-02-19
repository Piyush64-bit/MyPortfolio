import React from "react";
import { GitBranch, ArrowRight } from "lucide-react";
import Reveal3D from "./ui/Reveal3D";

interface Diagram {
  title: string;
  caption: string;
  content: string;
}

const diagrams: Diagram[] = [
  {
    title: "Request Lifecycle",
    caption:
      "Every API request passes rate limiting and auth middleware before reaching business logic. Redis absorbs repeated reads; MongoDB handles writes transactionally.",
    content: `Client Request
    │
    ▼
[Vercel Edge / Nginx]
    │
    ▼
Express Router  ──────────────────────────────────────┐
    │                                                  │
    ▼                                                  │
Rate Limiter MW  ←── Redis (sliding window)            │
    │  (IP + user-tier checks)                         │
    ▼                                                  │
Auth Middleware  (JWT verify + role check)             │
    │                                                  │
    ▼                                                  │
Controller Layer                                       │
    │                                                  │
    ▼                                                  │
Service Layer    ←── Redis L1 Cache (read-through)     │
    │                    ↓ miss                        │
    ▼                    ▼                             │
MongoDB  ←──────── Session / Transaction ──────────────┘
    │
    ▼
Response  →  Socket.IO broadcast (real-time listeners)`,
  },
  {
    title: "Booking Transaction Flow",
    caption:
      "Booking operations use MongoDB ACID transactions to prevent overselling. Socket.IO pushes real-time seat updates to all connected clients on commit.",
    content: `POST /api/v1/bookings
    │
    ├─► Zod Schema Validation  (400 Bad Request on failure)
    │
    ├─► MongoDB Session.startTransaction()
    │       │
    │       ├─► Read slot document  (atomic, within session)
    │       │       └─ 409 Conflict if slot fully booked
    │       │
    │       ├─► Decrement slot.available  (atomic write)
    │       │
    │       ├─► Insert booking document
    │       │
    │       └─► session.commitTransaction()
    │               └─ session.abortTransaction() on any error
    │
    ├─► Socket.IO broadcast → "seat-map:update" event
    │
    └─► 201 Created  { bookingId, status: "confirmed" }`,
  },
];

const SystemDesign: React.FC = () => {
  return (
    <section
      id="architecture"
      className="py-20 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal3D className="text-center mb-20" direction="down">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-6">
            <GitBranch size={14} />
            <span>System Design</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-6">
            System <span className="text-brand-secondary">Architecture</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            How the VENUE backend is structured — from edge to database, request
            to response.
          </p>
        </Reveal3D>

        <div className="space-y-8 max-w-5xl mx-auto">
          {diagrams.map((diagram, index) => (
            <Reveal3D key={index} delay={index * 0.15}>
              <div className="rounded-xl bg-gray-900/40 border border-white/10 overflow-hidden shadow-2xl">
                {/* Card Header */}
                <div className="px-6 py-4 border-b border-white/5 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/60" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <span className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <ArrowRight size={13} className="text-brand-secondary" />
                    <span className="font-mono text-xs text-gray-500">
                      venue-backend /
                    </span>
                    <span className="font-medium text-white text-sm font-heading">
                      {diagram.title}
                    </span>
                  </div>
                </div>

                {/* Diagram Body */}
                <div className="p-6">
                  <pre className="font-mono text-xs text-gray-400 bg-black/40 rounded-lg p-5 overflow-x-auto border border-white/5 leading-relaxed whitespace-pre">
                    {diagram.content}
                  </pre>

                  {/* Caption */}
                  <div className="mt-4 flex items-start gap-3 px-1">
                    <div className="w-0.5 h-full min-h-[2.5rem] bg-brand-primary/40 rounded-full flex-shrink-0 mt-0.5" />
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {diagram.caption}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SystemDesign;
