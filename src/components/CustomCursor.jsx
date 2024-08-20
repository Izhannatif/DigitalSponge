// // import React, { useEffect, useState, useRef } from 'react';
// // import DS2 from '../assets/DS2.png';

// // const CustomCursor = () => {
// //   const [position, setPosition] = useState({ x: 0, y: 0 });
// //   const [isHovering, setIsHovering] = useState(false);

// //   useEffect(() => {
// //     const handleMouseMove = (event) => {
// //       setPosition({ x: event.clientX, y: event.clientY });
// //     };

// //     const handleMouseEnter = () => {
// //       setIsHovering(true);
// //     };

// //     const handleMouseLeave = () => {
// //       setIsHovering(false);
// //     };

// //     window.addEventListener('mousemove', handleMouseMove);
// //     document.querySelectorAll('a').forEach(a => {
// //       a.addEventListener('mouseenter', handleMouseEnter);
// //       a.addEventListener('mouseleave', handleMouseLeave);
// //     });

// //     return () => {
// //       window.removeEventListener('mousemove', handleMouseMove);
// //       document.querySelectorAll('a').forEach(a => {
// //         a.removeEventListener('mouseenter', handleMouseEnter);
// //         a.removeEventListener('mouseleave', handleMouseLeave);
// //       });
// //     };
// //   }, []);

// //   return (
// //     <>
// //       <img
// //         src={DS2}
// //         alt="Cursor Trail"
// //         className=
// //         'h-10 w-10 custom-cursor '
// //         style={{ left: `${position.x + 5}px`, top: `${position.y + 25}px` }}
// //       />

// //     </>
// //   );
// // };

// // export default CustomCursor;


// import React, { useEffect, useState } from 'react';
// import DS2 from '../assets/sponge.png';
// import DS2Clicked from '../assets/squeezed.png'; // Add the clicked version of the image


// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isClicked, setIsClicked] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (event) => {
//       setPosition({ x: event.clientX, y: event.clientY });
//     };

//     const handleClick = () => {
//       setIsClicked(true);
//       setTimeout(() => setIsClicked(false), 500); // Revert back after 0.5s
//     };
//     const handleMouseEnter = () => {
//       setIsHovering(true);
//     };

//     const handleMouseLeave = () => {
//       setIsHovering(false);
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     window.addEventListener('click', handleClick);

//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       window.removeEventListener('click', handleClick);
      
//     };
//   }, []);

//   return (
//     <div className='h-max w-max'>
//       <img
//         src={isClicked ? DS2Clicked : DS2}
//         alt="Cursor Trail"
//         className={`h-16 w-16 custom-cursor transition-transform duration-300 ease-in-out ${isClicked ? ' rotate-12' : 'rotate-0'}`}
//         style={{ left: `${position.x}px`, top: `${position.y}px` }}
//       />
//       <p className={`text-black text-md font-semibold custom-cursor-div ${isHovering ? '' : 'hidden'} `}
//         style={{ left: `${position.x + 0}px`, top: `${position.y + 30}px` }}
//       >Squeeze me!</p>
//     </div>
//   );
// };

// export default CustomCursor;

import React, { useEffect, useState } from 'react';
import DS2 from '../assets/sponge.png';
import DS2Clicked from '../assets/squeezed.png';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicked, setIsClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });

      // Check if the hovered element is a clickable item (links, buttons, etc.)
      const hoveredElement = document.elementFromPoint(event.clientX, event.clientY);
      if (
        hoveredElement &&
        (hoveredElement.tagName === 'A' ||
          hoveredElement.tagName === 'BUTTON' ||
          hoveredElement.tagName === 'INPUT' && hoveredElement.type === 'button' ||
          hoveredElement.type === 'submit' ||
          window.getComputedStyle(hoveredElement).cursor === 'pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 500); // Revert back after 0.5s
    };

    // Add event listeners for mouse movement and clicks
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className='h-max w-max hidden md:block'>
      <img
        src={isClicked ? DS2Clicked : DS2}
        alt="Cursor Trail"
        className={`h-16 w-16 custom-cursor transition-transform duration-300 ease-in-out ${isClicked ? ' rotate-12' : 'rotate-0'}`}
        style={{ left: `${position.x}px`, top: `${position.y}px`, position: 'fixed', pointerEvents: 'none', zIndex: 10000 }}
      />
      <p className={`text-black text-sm font-semibold custom-cursor-div drop-shadow-2xl transition-all duration-300 bg-white rounded-lg p-1  ${isHovering ? '' : 'hidden'} `}
        style={{ left: `${position.x + 0}px`, top: `${position.y + 50}px`, position: 'fixed', pointerEvents: 'none', zIndex: 10000 }}
      >
        Squeeze me!
      </p>
    </div>
  );
};

export default CustomCursor;
