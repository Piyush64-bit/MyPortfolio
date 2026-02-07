import React from "react";

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle?: string;
  description?: string;
  isLast?: boolean;
}

const TimelineItem = ({ year, title, subtitle, description, isLast }: TimelineItemProps) => {
  return (
    <div className="relative pl-8 sm:pl-32 py-6 group">
      {/* Date - Mobile: Top, Desktop: Left */}
      <div className="font-heading font-bold text-2xl text-brand-primary mb-1 sm:mb-0 sm:absolute sm:left-0 sm:w-24 sm:text-right">
        {year}
      </div>

      {/* Line & Dot */}
      {!isLast && (
        <div className="absolute left-2 sm:left-[7.5rem] top-8 bottom-0 w-px bg-white/10"></div>
      )}
      <div className="absolute left-[0.2rem] sm:left-[7.2rem] top-8 w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-primary z-10 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(112,66,248,0.5)]"></div>

      {/* Content */}
      <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-brand-primary/30 transition-colors duration-300 backdrop-blur-sm">
        <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
        {subtitle && <div className="text-brand-secondary text-sm font-medium mb-2">{subtitle}</div>}
        {description && <div className="text-gray-400 text-sm leading-relaxed">{description}</div>}
      </div>
    </div>
  );
};

export const Timeline = ({ items }: { items: TimelineItemProps[] }) => {
  return (
    <div className="max-w-3xl mx-auto px-4">
      {items.map((item, index) => (
        <TimelineItem key={index} {...item} isLast={index === items.length - 1} />
      ))}
    </div>
  );
};
