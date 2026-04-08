import React from 'react';

const ScrollIndicator = ({ sections, currentSectionIndex, scrollToSection }) => {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="fullpage-scroll-indicator">
      {sections.map((section, index) => (
        <div
          key={section.id || index}
          className={`indicator-dot ${currentSectionIndex === index ? 'active' : ''}`}
          onClick={() => scrollToSection(index)}
          title={`Go to ${section.id || 'Section'}`}
        >
          <span className="dot-tooltip">{section.id}</span>
        </div>
      ))}
    </div>
  );
};

export default ScrollIndicator;
