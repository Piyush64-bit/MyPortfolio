import React from "react";
import { motion } from "framer-motion";

interface ShinyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  download?: boolean;
}

const ShinyButton: React.FC<ShinyButtonProps> = ({ 
  children, 
  className = "", 
  onClick, 
  href,
  download,
  ...props 
}) => {
  const Component = href ? motion.a : motion.button;
  
  return (
    // @ts-ignore
    <Component
      href={href}
      download={download}
      onClick={onClick}
      {...props}
      initial={{ "--x": "100%", scale: 1 } as any}
      animate={{ "--x": "-100%" } as any}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className={`
        relative overflow-hidden rounded-full px-6 py-2 
        bg-slate-950 text-white font-medium
        border border-slate-800
        transition-all duration-300
        hover:border-slate-600 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
        group
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      
      {/* Shine Effect */}
      <span 
        className="absolute inset-0 -z-10 block rounded-full bg-[linear-gradient(-75deg,transparent_calc(var(--x)+20%),rgba(255,255,255,0.1)_calc(var(--x)+25%),rgba(255,255,255,0.5)_calc(var(--x)+50%),rgba(255,255,255,0.1)_calc(var(--x)+75%),transparent_calc(var(--x)+100%))]"
      />
      
      {/* Glow Effect on Hover */}
      <span className="absolute inset-0 -z-20 bg-gradient-to-r from-indigo-500/0 via-purple-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-20 group-hover:from-indigo-500/20 group-hover:via-purple-500/20 group-hover:to-cyan-500/20 transition-all duration-500 rounded-full blur-md" />
      
    </Component>
  );
};

export default ShinyButton;
