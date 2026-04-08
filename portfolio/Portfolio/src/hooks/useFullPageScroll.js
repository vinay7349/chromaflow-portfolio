import { useState, useEffect, useRef, useCallback } from 'react';

export const useFullPageScroll = (scrollRef) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [sections, setSections] = useState([]);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    if (scrollRef.current) {
      const sectionElements = Array.from(scrollRef.current.querySelectorAll('.page-section'));
      setSections(sectionElements);
      
      const currentScrollY = scrollRef.current.scrollTop;
      let closestIdx = 0;
      let minDiff = Infinity;
      sectionElements.forEach((sec, idx) => {
        const diff = Math.abs(sec.offsetTop - currentScrollY);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = idx;
        }
      });
      setCurrentSectionIndex(closestIdx);
    }
  }, [scrollRef]);

  const scrollToSection = useCallback((index) => {
    if (!scrollRef.current || sections.length === 0) return;
    
    const safeIndex = Math.max(0, Math.min(index, sections.length - 1));
    setCurrentSectionIndex(safeIndex);
    
    const targetSection = sections[safeIndex];
    scrollRef.current.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  }, [sections, scrollRef]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || sections.length === 0) return;

    let touchStartY = 0;

    const handleWheel = (e) => {
      e.preventDefault();
      const timeNow = new Date().getTime();
      
      // Debounce window to prevent rapid scrolling on inertial trackpads
      if (timeNow - lastScrollTime.current < 1200) {
        return;
      }

      if (e.deltaY > 0) {
        scrollToSection(currentSectionIndex + 1);
        lastScrollTime.current = timeNow;
      } else if (e.deltaY < 0) {
        scrollToSection(currentSectionIndex - 1);
        lastScrollTime.current = timeNow;
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      e.preventDefault();
    };

    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const swipeDistance = touchStartY - touchEndY;
      
      const timeNow = new Date().getTime();
      if (timeNow - lastScrollTime.current < 1200) {
        return;
      }

      if (swipeDistance > 50) {
        scrollToSection(currentSectionIndex + 1);
        lastScrollTime.current = timeNow;
      } else if (swipeDistance < -50) {
        scrollToSection(currentSectionIndex - 1);
        lastScrollTime.current = timeNow;
      }
    };

    const handleKeyDown = (e) => {
      const timeNow = new Date().getTime();
      if (timeNow - lastScrollTime.current < 1200) return;

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToSection(currentSectionIndex + 1);
        lastScrollTime.current = timeNow;
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSection(currentSectionIndex - 1);
        lastScrollTime.current = timeNow;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart, { passive: false });
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd, { passive: false });
    window.addEventListener('keydown', handleKeyDown, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSectionIndex, sections, scrollToSection, scrollRef]);

  // Expose an updater so navbar clicks sync with the indicator
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const idx = sections.findIndex((s) => s.id === hash);
      if (idx !== -1) {
        setCurrentSectionIndex(idx);
        lastScrollTime.current = new Date().getTime();
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [sections]);

  return { currentSectionIndex, scrollToSection, sections };
};
