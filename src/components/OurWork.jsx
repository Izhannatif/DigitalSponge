// import React, { useEffect, useRef, useState } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import whatwedo from '../assets/what-we-do-heading.png';
// import illustration from '../assets/illustration.png';
// import comics from '../assets/comics.png';
// import emotes from '../assets/emotes.png';
// import animation from '../assets/animations.png';

// const OurWork = () => {
//     const controls = useAnimation();
//     const sectionRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     controls.start('visible');
//                 } else {
//                     controls.start('hidden');
//                 }
//             },
//             { threshold: 0.3 } // Trigger when 30% of the section is visible
//         );

//         if (sectionRef.current) {
//             observer.observe(sectionRef.current);
//         }

//         return () => {
//             if (sectionRef.current) {
//                 observer.unobserve(sectionRef.current);
//             }
//         };
//     }, [controls]);

//     const listItemVariants = {
//         hidden: { opacity: 0, y: 50 },
//         visible: { opacity: 1, y: 0 },
//     };

//     const sectionVariants = {
//         hidden: { opacity: 0 },
//         visible: { opacity: 1 },
//     };

//     return (
//         <motion.section
//             key={1}
//             ref={sectionRef}
//             className='w-full py-10'
//             initial="hidden"
//             animate={controls}
//             variants={sectionVariants}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//         >
//             <div id='work' className='flex flex-col md:flex-row justify-between items-center '>
//                 <img src={whatwedo} alt="What We Do" className='w-full md:w-2/5 mt-20 md:mt-10' />
//                 <Link to={'/portfolio'}>
//                     <button className='hidden md:block text-lg font-semibold px-4 py-3 bg-[#facb0d] mt-10 border border-black drop-shadow-[4px_4px_0px_#1f1f1f] hover:drop-shadow-[1px_1px_0px_#1f1f1f] transition-all duration-200 md:mr-10' style={{ WebkitTextStroke: '0px #1f1f1f', textShadow: 'none' }}>
//                         Explore Full Portfolio
//                     </button>
//                 </Link>
//             </div>

//             <motion.div
//                 className={`inset-0 text-black flex flex-row items-center justify-start pt-10 lg:pt-0 text-left`}
//             >
//                 <div className="w-full h-full p-10">
//                     <ul className="text-2xl h-full flex flex-col justify-evenly font-bold lg:font-semibold">


//                         {['Animations', 'Comics', 'Illustrations', 'Emotes'].map((item, index) => (
//                             <div className='group' key={index}>
//                                 <motion.li
//                                     className='flex justify-between text-5xl lg:text-7xl px-5 py-10 transition-all duration-500 bg-white rounded-full my-5 hover:tracking-wider'
//                                     variants={listItemVariants}
//                                     transition={{ delay: 0.2 * index, duration: 0.5, ease: 'easeIn' }}
//                                 >
//                                     <p>{item}</p>
//                                     <img className='mr-20 absolute right-0  hidden group-hover:block w-48 h-40  float-right object-cover ' src={item === 'Animations' ? animation : item === 'Illustrations' ? illustration : item === 'Comics' ? comics : item === 'Emotes' ? emotes : null} alt="" />
//                                 </motion.li>
//                             </div>
//                         ))}
//                     </ul>
//                 </div>
//             </motion.div>
//             <Link to={'/portfolio'}>
//                 <button className='block md:hidden text-lg font-semibold px-4 py-3 bg-[#facb0d] mt-10 border border-black drop-shadow-[4px_4px_0px_#1f1f1f] hover:drop-shadow-[1px_1px_0px_#1f1f1f] transition-all duration-200 ml-10' style={{ WebkitTextStroke: '0px #1f1f1f', textShadow: 'none' }}>
//                     Explore Full Portfolio
//                 </button>
//             </Link>
//         </motion.section>
//     );
// };

// export default OurWork;


import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import whatwedo from '../assets/what-we-do-heading.png';
import illustration from '../assets/illustration.png';
import comics from '../assets/comics.png';
import emotes from '../assets/emotes.png';
import animation from '../assets/animations.png';

const OurWork = () => {
    const controls = useAnimation();
    const sectionRef = useRef(null);
    const [hovered, setHovered] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start('visible');
                } else {
                    controls.start('hidden');
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [controls]);

    const listItemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    const sectionVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const handleMouseMove = (e) => {
        if (hovered) {
            const rect = hovered.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setMousePosition({ x, y });
        }
    };

    const handleMouseEnter = (index) => {
        setHovered(document.getElementById(`hovered-item-${index}`));
    };

    const handleMouseLeave = () => {
        setHovered(null);
        // setMousePosition({ x: 0, y: 0 });
    };

    return (
        <motion.section
            key={1}
            ref={sectionRef}
            className='w-full py-10'
            initial="hidden"
            animate={controls}
            variants={sectionVariants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div id='work' className='flex flex-col md:flex-row justify-between items-center'>
                <img src={whatwedo} alt="What We Do" className='w-full md:w-2/5 mt-20 md:mt-10' />
                <Link to={'/portfolio'}>
                    <button className='hidden md:block text-lg font-semibold px-4 py-3 bg-[#facb0d] mt-10 border border-black drop-shadow-[4px_4px_0px_#1f1f1f] hover:drop-shadow-[1px_1px_0px_#1f1f1f] transition-all duration-200 md:mr-10' style={{ WebkitTextStroke: '0px #1f1f1f', textShadow: 'none' }}>
                        Explore Full Portfolio
                    </button>
                </Link>
            </div>

            <motion.div
                className={`inset-0 text-black flex flex-row items-center justify-start pt-10 lg:pt-0 text-left`}
            >
                <div className="w-full h-full p-10">
                    <ul className="text-2xl h-full flex flex-col justify-evenly font-bold lg:font-semibold">
                        {['Animations', 'Comics', 'Illustrations', 'Emotes'].map((item, index) => (
                            <Link to={'/portfolio'} ><div
                                className='group relative'
                                key={index}
                                id={`hovered-item-${index}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                            >
                                <motion.li
                                    className='backdrop-blur-sm flex justify-between text-5xl lg:text-7xl px-5 py-10 transition-all duration-500 bg-[#ffffff67] rounded-full my-5 hover:tracking-wider'
                                    variants={listItemVariants}
                                    transition={{ delay: 0.2 * index, duration: 0.5, ease: 'easeIn' }}
                                >
                                    <p className='px-10'>{item}</p>
                                    <motion.img
                                        className='z-50  rounded-3xl hidden group-hover:block absolute right-1/2 bottom-0 w-64 h-56 float-right object-cover'
                                        src={item === 'Animations' ? animation : item === 'Illustrations' ? illustration : item === 'Comics' ? comics : item === 'Emotes' ? emotes : null}
                                        alt={item}
                                        style={{
                                            transform: `translate(${mousePosition.x / 5}px, ${mousePosition.y / 5}px)`,
                                            opacity: hovered ? 1 : 0,
                                        }}
                                    />
                                </motion.li>
                            </div></Link>
                        ))}
                    </ul>
                </div>
            </motion.div>
            <Link to={'/portfolio'}>
                <button className='block md:hidden text-lg font-semibold px-4 py-3 bg-[#facb0d] mt-10 border border-black drop-shadow-[4px_4px_0px_#1f1f1f] hover:drop-shadow-[1px_1px_0px_#1f1f1f] transition-all duration-200 ml-10' style={{ WebkitTextStroke: '0px #1f1f1f', textShadow: 'none' }}>
                    Explore Full Portfolio
                </button>
            </Link>
                <p className='px-20 py-5 text-3xl font-semibold'>and so much <Link to={'/portfolio'}><span className='text-[#fde000] text-4xl drop-shadow-[2px_2px_0px_#1f1f1f] hover:underline transition-all duration-500'>more..</span></Link></p>
        </motion.section>
    );
};

export default OurWork;
