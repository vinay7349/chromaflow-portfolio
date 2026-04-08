import { useState, useEffect, useRef, useCallback } from 'react';

export const useHorizontalScroll = (wrapperRef, contentRef, setActiveSection) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [sections, setSections] = useState([]);
  
  const targetX = useRef(0);
  const currentX = useRef(0);
  const maxScroll = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const sectionElements = Array.from(contentRef.current.querySelectorAll('.page-section'));
      setSections(sectionElements);
      
      const updateMaxScroll = () => {
        maxScroll.current = Math.max(0, (sectionElements.length - 1) * window.innerWidth);
        targetX.current = Math.min(targetX.current, maxScroll.current);
      };
      
      updateMaxScroll();
      window.addEventListener('resize', updateMaxScroll);
      return () => window.removeEventListener('resize', updateMaxScroll);
    }
  }, [contentRef]);

  const scrollToSection = useCallback((index) => {
    if (sections.length === 0) return;
    const safeIndex = Math.max(0, Math.min(index, sections.length - 1));
    targetX.current = safeIndex * window.innerWidth;
    setCurrentSectionIndex(safeIndex);
  }, [sections]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (!wrapper || !content || sections.length === 0) return;

    let startX = 0;
    let startY = 0;

    const lerp = (start, end, factor) => start + (end - start) * factor;

    let lastIndex = 0;

    const updateScroll = () => {
      // Smooth continuous scroll logic via linear interpolation
      currentX.current = lerp(currentX.current, targetX.current, 0.08);

      if (Math.abs(targetX.current - currentX.current) < 0.2) {
        currentX.current = targetX.current;
      }

      // GPU-accelerated horizontal transform
      content.style.transform = `translate3d(-${currentX.current}px, 0px, 0px)`;
      
      const rawIdx = currentX.current / window.innerWidth;
      
      // Optional: Apply smooth fade/slide effects to individual sections
      sections.forEach((sec, idx) => {
        const distance = Math.abs(currentX.current - idx * window.innerWidth);
        const visibility = Math.max(0, 1 - (distance / window.innerWidth));
        
        // Enhance with visual depth when transitions happen
        if (distance <= window.innerWidth) {
            sec.style.opacity = visibility * 0.9 + 0.1;
            sec.style.transform = `scale(${0.9 + visibility * 0.1}) translateZ(0)`;
        } else {
            sec.style.opacity = 0;
        }
      });

      const idx = Math.round(rawIdx);
      if (idx !== lastIndex && idx >= 0 && idx < sections.length) {
        lastIndex = idx;
        setCurrentSectionIndex(idx);
        if (setActiveSection) {
            setActiveSection(sections[idx].id);
        }
      }

      rafId.current = requestAnimationFrame(updateScroll);
    };

    rafId.current = requestAnimationFrame(updateScroll);

    let debounceTimer; // Debouncing requirement
    const handleWheel = (e) => {
      e.preventDefault();
      clearTimeout(debounceTimer);
      
      // Translate vertical/horizontal wheel delta to targetX
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      targetX.current += delta * 1.8; 
      targetX.current = Math.max(0, Math.min(targetX.current, maxScroll.current));
      
      debounceTimer = setTimeout(() => {}, 150);
    };

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      e.preventDefault(); // Prevents natural scroll
      const touchNowX = e.touches[0].clientX;
      const touchNowY = e.touches[0].clientY;
      
      const diffX = startX - touchNowX;
      const diffY = startY - touchNowY;
      
      // Let both horizontal and vertical swipes affect horizontal scroll
      const maxDiff = Math.abs(diffX) > Math.abs(diffY) ? diffX : diffY;
      
      targetX.current += maxDiff * 2.2;
      targetX.current = Math.max(0, Math.min(targetX.current, maxScroll.current));
      
      startX = touchNowX;
      startY = touchNowY;
    };

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        targetX.current += window.innerWidth;
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        targetX.current -= window.innerWidth;
      }
      targetX.current = Math.max(0, Math.min(targetX.current, maxScroll.current));
    };

    wrapper.addEventListener('wheel', handleWheel, { passive: false });
    wrapper.addEventListener('touchstart', handleTouchStart, { passive: false });
    wrapper.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('keydown', handleKeyDown, { passive: false });

    return () => {
      wrapper.removeEventListener('wheel', handleWheel);
      wrapper.removeEventListener('touchstart', handleTouchStart);
      wrapper.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('keydown', handleKeyDown);
      cancelAnimationFrame(rafId.current);
    };
  }, [sections, setActiveSection]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const idx = sections.findIndex((s) => s.id === hash);
      if (idx !== -1) {
        scrollToSection(idx);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [sections, scrollToSection]);

  return { currentSectionIndex, scrollToSection, sections };
};
