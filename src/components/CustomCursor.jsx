import React, { useEffect, useState, useRef } from 'react';
import DS2 from '../assets/DS2.png';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a').forEach(a => {
      a.addEventListener('mouseenter', handleMouseEnter);
      a.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a').forEach(a => {
        a.removeEventListener('mouseenter', handleMouseEnter);
        a.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <img
        src={DS2}
        alt="Cursor Trail"
        className=
        'h-10 w-10 custom-cursor '
        style={{ left: `${position.x + 5}px`, top: `${position.y + 25}px` }}
      />

    </>
  );
};

export default CustomCursor;
