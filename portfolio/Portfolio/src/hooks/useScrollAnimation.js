import { useEffect } from 'react';

const useScrollAnimation = (setActiveSection) => {
  useEffect(() => {
    // 1. Reveal Elements Observer
    const revealCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Add staggered delay to children if any
          const staggerChildren = entry.target.querySelectorAll('.stagger');
          staggerChildren.forEach((child, index) => {
            child.style.transitionDelay = `${index * 0.1}s`;
            child.classList.add('active');
          });
        }
      });
    };

    const revealOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => revealObserver.observe(el));

    // 2. Active Section Observer (for Navbar tracking)
    const sectionCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
          if (setActiveSection) {
            setActiveSection(entry.target.id);
          }
        }
      });
    };

    const sectionOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: [0.3],
    };

    const sectionObserver = new IntersectionObserver(sectionCallback, sectionOptions);
    const sections = document.querySelectorAll('.page-section');
    sections.forEach((sec) => sectionObserver.observe(sec));

    return () => {
      reveals.forEach((el) => revealObserver.unobserve(el));
      sections.forEach((sec) => sectionObserver.unobserve(sec));
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [setActiveSection]);
};

export default useScrollAnimation;
