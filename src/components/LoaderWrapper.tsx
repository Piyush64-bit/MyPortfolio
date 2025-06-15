import React, { useEffect, useState } from 'react';
import anime from 'animejs';

const LoaderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(true);

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

    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-[#060606] text-gray-900 dark:text-white gap-8 transition-colors duration-500">
      <div className="flex space-x-4">
        <div className="loader-dot w-5 h-5 rounded-full bg-cyan-600 dark:bg-cyan-400 animate-pulse" />
        <div className="loader-dot w-5 h-5 rounded-full bg-purple-600 dark:bg-purple-500 animate-pulse" />
        <div className="loader-dot w-5 h-5 rounded-full bg-pink-600 dark:bg-pink-500 animate-pulse" />
      </div>
      <p className="loader-text text-xl tracking-wider text-gray-700 dark:text-gray-300">
        Ah, here we go again!
      </p>
    </div>
  );
};

export default LoaderWrapper;