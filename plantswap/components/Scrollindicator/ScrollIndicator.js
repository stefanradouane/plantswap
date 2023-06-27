'use client'
import React, { useEffect, useRef, useState } from 'react';

const ScrollIndicator = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const indicatorRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setActiveSection(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    sectionsRef.current.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const maxScrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      let currentSectionIndex = 0;
      let sectionOffsetTop = 0;

      sectionsRef.current.forEach((section, index) => {
        const { offsetTop, clientHeight } = section;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + clientHeight) {
          currentSectionIndex = index;
          sectionOffsetTop = offsetTop;
        }
      });

      const sectionHeight = sectionsRef.current[currentSectionIndex].clientHeight;
      const scrollPercent = (scrollPosition - sectionOffsetTop) / sectionHeight;
      setScrollPercent((currentSectionIndex + scrollPercent) * (100 / sections.length));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSectionRef = (ref, index) => {
    sectionsRef.current[index] = ref;
  };

  return (
    <div>
      {sections.map((section, index) => (
        <div
          key={index}
          ref={(ref) => handleSectionRef(ref, index)}
          style={{ scrollSnapAlign: 'start' }}
        >
          {section}
        </div>
      ))}
      {scrollPercent && (
        <div
          ref={indicatorRef}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '4px',
            backgroundColor: '#f00',
            width: `${scrollPercent}%`,
            transition: 'width 0.2s',
            zIndex: 9999,
          }}
        />
      )}
    </div>
  );
};

export default ScrollIndicator;

