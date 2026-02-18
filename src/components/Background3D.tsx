import React from "react";

const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-50 pointer-events-none">
      {/* Deep Space Base */}
      <div className="absolute inset-0 bg-brand-dark"></div>

      {/* Radial Gradient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-primary/10 blur-[120px]"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-secondary/10 blur-[120px]"></div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(198, 151, 73, 0.05) 1px, transparent 1px), 
                           linear-gradient(90deg, rgba(198, 151, 73, 0.05) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)]"></div>
    </div>
  );
};

export default Background3D;
