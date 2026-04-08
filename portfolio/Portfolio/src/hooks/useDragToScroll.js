import { useEffect, useRef } from 'react';

const useDragToScroll = () => {
  const isDragging = useRef(false);
  const startY = useRef(0);
  const scrollTop = useRef(0);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const handleMouseDown = (e) => {
      // Don't trigger drag on links or buttons
      if (['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
        return;
      }
      
      isDragging.current = true;
      startY.current = e.pageY - document.documentElement.offsetTop;
      startX.current = e.pageX - document.documentElement.offsetLeft;
      
      scrollTop.current = window.scrollY;
      scrollLeft.current = window.scrollX;
      
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none'; // Prevent text selection
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      document.body.style.cursor = 'default';
      document.body.style.userSelect = '';
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.body.style.cursor = 'default';
      document.body.style.userSelect = '';
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      
      const y = e.pageY - document.documentElement.offsetTop;
      const x = e.pageX - document.documentElement.offsetLeft;
      
      const walkY = (y - startY.current) * 1.5; // Scroll speed multiplier
      const walkX = (x - startX.current) * 1.5;

      window.scrollTo({
        top: scrollTop.current - walkY,
        left: scrollLeft.current - walkX,
        behavior: 'auto' // Must be auto for smooth dragging, not smooth CSS
      });
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
};

export default useDragToScroll;
