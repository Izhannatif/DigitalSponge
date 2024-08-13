// // import React from 'react'
// // import { MdArrowOutward } from 'react-icons/md'
// // import {motion} from 'framer-motion'
// // import { Link } from 'react-router-dom'
// // const OurWork = () => {
// //   return (
// //     <section className='w-full py-10 '>
// //         <div className='pl-32 flex justify-between  items-center pr-20'>
// //         <p className='drop-shadow-[4px_4px_0px_#1f1f1f] text-8xl text-[#fccb0d] font-extrabold py-10' style={{WebkitTextStroke:'2px #1f1f1f'}}>OUR WORK </p>
// //         <Link to={'/portfolio'}><button className='text-lg font-semibold px-4 py-3 bg-[#facb0d] mt-10 border border-black drop-shadow-[4px_4px_0px_#1f1f1f] hover:drop-shadow-[1px_1px_0px_#1f1f1f] transition-all duration-200'style={{WebkitTextStroke:'0px #1f1f1f', textShadow:'none'}}>Explore Full Portfolio</button></Link>
// //         </div>
// //         {/* <div> */}
// //         <motion.div
// //             className={`overlay-menu inset-0 text-black flex flex-row items-center justify-start pt-10 lg:pt-0 text-left pl-28`}
// //             initial={{ x: "-100%", opacity: 0 }}
// //             animate={{ x: "0%", opacity: 1 }}
// //             exit={{ x: "-100%", opacity: 0 }}
// //             transition={{ duration: 1, ease: "easeInOut" }}
// //             key="menu"
// //           >
// //             <div className="w-full h-full ">
// //               <ul className="text-2xl h-full flex flex-col justify-evenly font-bold lg:font-semibold">
// //               {/* <hr className='w-full border-stone-500' /> */}
// //                 <li className='overlay-menu-item text-5xl lg:text-7xl'>
// //                   <Link to='services' >Animations</Link>
                  
// //                 </li>

// //                 <li className='overlay-menu-item text-5xl lg:text-7xl'>
// //                   <Link to='home' >Comics</Link>
                  
// //                 </li>
// //                 {/* <hr className='w-full border-stone-500' /> */}
// //                 <li className='overlay-menu-item text-5xl lg:text-7xl'>
// //                   <Link to='about' >Illustrations</Link>
                  
// //                 </li>
// //                 {/* <hr className='w-full border-stone-500' /> */}
// //                 <li className='overlay-menu-item text-5xl lg:text-7xl'>
// //                   <Link to='work' >Characters</Link>
                  
// //                 </li>
                

// //               </ul>
// //             </div>

// //           </motion.div>
// //         {/* </div> */}
// //     </section>
// //   )
// // }

// // export default OurWork

// import React, { useEffect, useRef } from 'react';
// import { MdArrowOutward } from 'react-icons/md';
// import { motion, useAnimation } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const OurWork = () => {
//     const sectionRef = useRef(null);
//     const controls = useAnimation();

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 if (entry.isIntersecting) {
//                     controls.start('visible');
//                 } else {
//                     controls.start('hidden');
//                 }
//             },
//             { threshold: 0.5 } // Trigger when 10% of the section is visible
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

//     return (
//         <section ref={sectionRef} className='w-full py-10 transition-opacity duration-1000'>
//             <div className='pl-32 flex justify-between items-center pr-20'>
//                 <p className='drop-shadow-[4px_4px_0px_#1f1f1f] text-8xl text-[#fccb0d] font-extrabold py-10' style={{ WebkitTextStroke: '2px #1f1f1f' }}>OUR WORK</p>
//                 <Link to={'/portfolio'}>
//                     <button className='text-lg font-semibold px-4 py-3 bg-[#facb0d] mt-10 border border-black drop-shadow-[4px_4px_0px_#1f1f1f] hover:drop-shadow-[1px_1px_0px_#1f1f1f] transition-all duration-200' style={{ WebkitTextStroke: '0px #1f1f1f', textShadow: 'none' }}>Explore Full Portfolio</button>
//                 </Link>
//             </div>

//             <motion.div
//                 className={`overlay-menu inset-0 text-black flex flex-row items-center justify-start pt-10 lg:pt-0 text-left pl-28`}
//                 initial="hidden"
//                 animate={controls}
//                 transition={{ duration: 1, ease: "easeInOut" }}
//             >
//                 <div className="w-full h-full">
//                     <ul className="text-2xl h-full flex flex-col justify-evenly font-bold lg:font-semibold ">
//                         {['Animations', 'Comics', 'Illustrations', 'Characters'].map((item, index) => (
//                             <motion.li
//                                 key={item}
//                                 className='overlay-menu-item text-5xl lg:text-7xl'
//                                 variants={listItemVariants}
//                                 transition={{ delay: 0 * index, duration: 0.5, ease: 'easeInOut' }}
//                             >
//                                 <Link to={''}>{item}</Link>
//                             </motion.li>
//                         ))}
//                     </ul>
//                 </div>
//             </motion.div>
//         </section>
//     );
// }

// export default OurWork;


import React, { useEffect, useRef, useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';

const OurWork = () => {
    const sectionRef = useRef(null);
    const controls = useAnimation();
    const [ourWorkInView, setOurWorkInView] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setOurWorkInView(true);
                if (entry.isIntersecting) {
                    controls.start('visible');
                    console.log('Section is in view'); // Debugging
                } else {
                    controls.start('hidden');
                    console.log('Section is out of view'); // Debugging
                }
            },
            { threshold: 0.5 } // Trigger when 10% of the section is visible
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

    return (
        <motion.section 
            ref={sectionRef} 
            className='w-full py-10'
            initial="hidden"
            animate={controls}
            variants={sectionVariants}
            transition={{ duration: 1, ease: "easeInOut" }}
        >
            <div className='pl-32 flex justify-between items-center pr-20'>
                <p className='drop-shadow-[4px_4px_0px_#1f1f1f] text-8xl text-[#fccb0d] font-extrabold py-10' style={{ WebkitTextStroke: '2px #1f1f1f' }}>OUR WORK</p>
                <Link to={'/portfolio'}>
                    <button className='text-lg font-semibold px-4 py-3 bg-[#facb0d] mt-10 border border-black drop-shadow-[4px_4px_0px_#1f1f1f] hover:drop-shadow-[1px_1px_0px_#1f1f1f] transition-all duration-200' style={{ WebkitTextStroke: '0px #1f1f1f', textShadow: 'none' }}>
                        Explore Full Portfolio
                    </button>
                </Link>
            </div>

            <motion.div
                className={`overlay-menu inset-0 text-black flex flex-row items-center justify-start pt-10 lg:pt-0 text-left pl-28`}
            >
                <div className="w-full h-full">
                    <ul className="text-2xl h-full flex flex-col justify-evenly font-bold lg:font-semibold">
                        {['Animations', 'Comics', 'Illustrations', 'Characters'].map((item, index) => (
                            <motion.li
                                key={item}
                                className='overlay-menu-item text-5xl lg:text-7xl'
                                variants={listItemVariants}
                                transition={{ delay: 0.2 * index, duration: 0.5, ease: 'easeInOut' }}
                            >
                                <Link to={item.toLowerCase()}>{item}</Link>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </motion.section>
    );
}

export default OurWork;
