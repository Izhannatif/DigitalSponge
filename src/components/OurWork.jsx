

import React, { forwardRef, useEffect, useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import whatwedo from '../assets/what-we-do-heading.png';

const OurWork = forwardRef((props, sectionRef) => {
    const controls = useAnimation();
    const [ourWorkInView, setOurWorkInView] = useState(false);

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
    }, [controls, sectionRef]);

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
        key={1}
            ref={sectionRef} 
            className='w-full py-10'
            initial="hidden"
            animate={controls}
            variants={sectionVariants}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className='flex flex-col md:flex-row justify-between items-center '>
                {/* <p className='heading-text-bg drop-shadow-[4px_4px_0px_#1f1f1f] text-8xl text-[#fccb0d] font-extrabold py-10' style={{ WebkitTextStroke: '2px #1f1f1f' }}>WHAT WE DO</p> */}
                <img src={whatwedo} alt="" className='w-full md:w-2/5 mt-10' />
                <Link to={'/portfolio'}>
                    <button className='hidden md:block text-lg font-semibold px-4 py-3 bg-[#facb0d] mt-10 border border-black drop-shadow-[4px_4px_0px_#1f1f1f] hover:drop-shadow-[1px_1px_0px_#1f1f1f] transition-all duration-200 md:mr-10' style={{ WebkitTextStroke: '0px #1f1f1f', textShadow: 'none' }}>
                        Explore Full Portfolio
                    </button>
                </Link>
            </div>

            <motion.div
                className={`overlay-menu inset-0 text-black flex flex-row items-center justify-start pt-10 lg:pt-0 text-left pl-5 md:pl-28`}
            >
                <div className="w-full h-full">
                    <ul className="text-2xl h-full flex flex-col justify-evenly font-bold lg:font-semibold">
                    <hr  className=' border-stone-400 rounded-xl mt-5 mr-20' />

                        {['Animations', 'Comics', 'Illustrations', 'Characters'].map((item, index) => (
                            <div>
                            <motion.li
                                key={index}
                                className='overlay-menu-item text-5xl lg:text-7xl'
                                variants={listItemVariants}
                                transition={{ delay: 0.2 * index, duration: 0.5, ease: 'easeIn' }}
                            >
                                <Link>{item}</Link>
                                
                            </motion.li>
                            <hr  className=' border-stone-400 rounded-xl mt-5 mr-20' />
                            </div>
                        ))}
                    </ul>
                </div>
            </motion.div>
            <Link to={'/portfolio'}>
                    <button className='block md:hidden text-lg font-semibold px-4 py-3 bg-[#facb0d] mt-10 border border-black drop-shadow-[4px_4px_0px_#1f1f1f] hover:drop-shadow-[1px_1px_0px_#1f1f1f] transition-all duration-200 ml-10' style={{ WebkitTextStroke: '0px #1f1f1f', textShadow: 'none' }}>
                        Explore Full Portfolio
                    </button>
                </Link>
        </motion.section>
    );
});

export default OurWork;
