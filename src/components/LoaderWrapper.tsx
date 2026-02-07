import React, { useEffect, useState, useRef } from 'react';
import anime from 'animejs';

const LoaderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loaderTimeline = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 500,
    });

    loaderTimeline
      .add({
        targets: '.loader-dot',
        scale: [0, 1],
        opacity: [0, 1],
        delay: anime.stagger(150),
      })
      .add({
        targets: '.loader-text',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 600,
      }, '-=400');

    // Extended duplicate animation loop for the dots while waiting
    anime({
      targets: '.loader-dot',
      scale: [1, 1.2, 1],
      opacity: [1, 0.8, 1],
      easing: 'easeInOutQuad',
      duration: 1000,
      loop: true,
      delay: anime.stagger(200)
    });

    const timer = setTimeout(() => {
        // Exit animation
        anime({
            targets: wrapperRef.current,
            opacity: 0,
            duration: 500,
            easing: 'easeInOutQuad',
            complete: () => setLoading(false)
        });
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return <>{children}</>;

  return (
    <div ref={wrapperRef} className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050505] text-white gap-8">
      <div className="flex space-x-4">
        <div className="loader-dot w-6 h-6 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
        <div className="loader-dot w-6 h-6 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]" />
        <div className="loader-dot w-6 h-6 rounded-full bg-pink-500 shadow-[0_0_15px_rgba(236,72,153,0.6)]" />
      </div>
      <p className="loader-text text-lg tracking-[0.2em] font-medium text-gray-400 uppercase">
        Loading Portfolio
      </p>
    </div>
  );
};

export default LoaderWrapper;