

// import React, { useState, useEffect, useRef } from 'react';
// import sponge from '../assets/sponge.png';
// import { IoIosArrowRoundDown } from 'react-icons/io';
// import { CiDesktopMouse1 } from 'react-icons/ci';
// import Marquee from 'react-fast-marquee';
// import servicesText from '../assets/services-text.png';
// const fontFamilies = ['bangers', 'Lobster', 'Bebas Neue', ''];
// const fontStyles = ['normal'];
// const colors = ['#ffcc00', '#1a1a1a'];

// const DSTextAnimation = ({ servicesRef, aboutRef, ourWorkRef, testimonialsRef }) => {
//     const [letterStyles, setLetterStyles] = useState(
//         'DIGITAL SPONGE'.split('').map(() => ({
//             fontFamily: fontFamilies[Math.floor(Math.random() * fontFamilies.length)],
//             fontStyle: fontStyles[Math.floor(Math.random() * fontStyles.length)],
//             color: colors[Math.floor(Math.random() * colors.length)]
//         }))
//     );
//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             setLetterStyles((prevStyles) =>
//                 prevStyles.map(() => ({
//                     fontFamily: fontFamilies[Math.floor(Math.random() * fontFamilies.length)],
//                     fontStyle: fontStyles[Math.floor(Math.random() * fontStyles.length)],
//                     color: colors[Math.floor(Math.random() * colors.length)]
//                 }))
//             );
//         }, 400);

//         return () => clearInterval(intervalId);
//     }, []);
//     //    

//     const [isAboutInView, setIsAboutInView] = useState(false);
//     const [isServicesInView, setIsServicesInView] = useState(false);
//     const [isOurWorkInView, setIsOurWorkInView] = useState(false);
//     const [isTestimonialsInView, setIsTestimonialsInView] = useState(false);
//     const [hovering, setHovering] =useState(false);
//     useEffect(() => {
//         const aboutSection = aboutRef.current;
//         const servicesSection = servicesRef.current;
//         const ourWorkSection = ourWorkRef.current;
//         const testimonialsSection = testimonialsRef.current;

//         const observerAbout = new IntersectionObserver(
//             ([entry]) => {
//                 setIsAboutInView(entry.isIntersecting);
//             },
//             { threshold: 0.3 }
//         );

//         const observerServices = new IntersectionObserver(
//             ([entry]) => {
//                 setIsServicesInView(entry.isIntersecting);
//             },
//             { threshold: 0.1 }
//         );

//         const observerOurWork = new IntersectionObserver(
//             ([entry]) => {
//                 setIsOurWorkInView(entry.isIntersecting);
//             },
//             { threshold: 0.3 }
//         );

//         const observerTestimonials = new IntersectionObserver(
//             ([entry]) => {
//                 setIsTestimonialsInView(entry.isIntersecting);
//             },
//             { threshold: 0.3 }
//         )

//         if (aboutSection) {
//             observerAbout.observe(aboutSection);
//         }

//         if (servicesSection) {
//             observerServices.observe(servicesSection);
//         }

//         if (ourWorkSection) {
//             observerOurWork.observe(ourWorkSection);
//         }

//         if (testimonialsSection) {
//             observerTestimonials.observe(testimonialsSection);
//         }

//         return () => {
//             if (aboutSection) {
//                 observerAbout.unobserve(aboutSection);
//             }
//             if (servicesSection) {
//                 observerServices.unobserve(servicesSection);
//             }
//             if (ourWorkSection) {
//                 observerOurWork.unobserve(ourWorkSection);
//             }
//             if (testimonialsSection) {
//                 observerTestimonials.unobserve(testimonialsSection);
//             }
//         };
//     }, [aboutRef, ourWorkRef, testimonialsRef]);

//     return (
//         <div className="animation-container fixed z-10">
//             <div className="background bg-transition"></div>
//             <div className="overlay"></div>

//             <h1>
//                 {Array.from('DIGITAL SPONGE').map((letter, index) => (
//                     <span
//                         key={index}
//                         className="letter fadeInUp text-6xl md:text-7xl lg:text-8xl xl:text-9xl md:tracking-widest font-semibold drop-shadow-md hover:scale-110"
//                         style={{
//                             fontFamily: letterStyles[index].fontFamily,
//                             fontStyle: letterStyles[index].fontStyle,
//                             color: letterStyles[index].color,
//                             textShadow: letterStyles[index].color === '#ffcc00' ? '4px 4px 0px #1f1f1f' : '4px 4px 0px #facb0d'
//                         }}
//                     >
//                         {letter}
//                     </span>
//                 ))}
//             </h1>

//             <div className='text-2xl relative py-5'>
//                 WELCOME TO THE <span className='bg-[#facb0d] text-white p-1 drop-shadow-[3px_3px_0px_#1f1f1f]'> WORLD OF FART</span>
//             </div>
//             <div className='absolute bottom-36'>
//             <Marquee  speed={100} loop={0} pauseOnHover={true} autoFill={true} direction='left' className='overflow-hidden py-0 lg:py-2'>
//                 <p className='text-[#646464c4] text-6xl lg:text-6xl font-semibold uppercase tracking-tighter'>
//                     <span className='hover:text-[#ffcc00] transition-all duration-500'>About</span> .
                    
//                     <span  className='hover:text-[#ffcc00] transition-all duration-500'> 
//                         {/* <img className='w-1/5' src={servicesText} alt="" /> . */}
//                     </span> 
                    
//                     <span className='hover:text-[#ffcc00] transition-all duration-500'>Process&nbsp;.</span><span className='hover:text-[#ffcc00] transition-all duration-500'> Contact&nbsp;.</span>&nbsp;
//                 </p>
//             </Marquee>
//             </div>
//             <div className='absolute text-center flex flex-col justify-center items-center left-1/2 bottom-0'>
//                 <CiDesktopMouse1 size={30} className='text-black' />
//                 <div><p>Creativity </p> <p>below</p></div>
//                 <IoIosArrowRoundDown size={30} className='text-black animate-bounce pt-2' />
//             </div>

//             <div
//                 className={`spinner-container ${isServicesInView
//                     ? 'move-to-services'
//                     : isAboutInView
//                         ? 'move-to-about'
//                         : isOurWorkInView ? 'move-to-work' : isTestimonialsInView ? 'move-to-testimonials' : ''
//                     }`}
//             >
//                 <div className="spinner">
//                     <svg viewBox="0 0 100 100">
//                         <path
//                             id="circlePath"
//                             d="M50,10 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80"
//                             fill="transparent"
//                         />
//                         <text>
//                             <textPath xlinkHref="#circlePath" startOffset="0%">
//                                 digital • sponge • digital • sponge • digital • sponge •
//                             </textPath>
//                         </text>
//                     </svg>
//                     <div className="sponge-image">
//                         <img src={sponge} alt="Sponge" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DSTextAnimation;

import React, { useState, useEffect } from 'react';
import sponge from '../assets/sponge.png';
import { IoIosArrowRoundDown } from 'react-icons/io';
import { CiDesktopMouse1 } from 'react-icons/ci';
import Marquee from 'react-fast-marquee';
import servicesText from '../assets/services-text.png';
import { FaArrowUp } from "react-icons/fa";
const fontFamilies = ['bangers', 'Lobster', 'Bebas Neue', ''];
const fontStyles = ['normal'];
const colors = ['#ffcc00', '#1a1a1a'];
const DSTextAnimation = ({ servicesRef, aboutRef, ourWorkRef, testimonialsRef }) => {
    const [letterStyles, setLetterStyles] = useState(
        'DIGITAL SPONGE'.split('').map(() => ({
            fontFamily: fontFamilies[Math.floor(Math.random() * fontFamilies.length)],
            fontStyle: fontStyles[Math.floor(Math.random() * fontStyles.length)],
            color: colors[Math.floor(Math.random() * colors.length)]
        }))
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLetterStyles((prevStyles) =>
                prevStyles.map(() => ({
                    fontFamily: fontFamilies[Math.floor(Math.random() * fontFamilies.length)],
                    fontStyle: fontStyles[Math.floor(Math.random() * fontStyles.length)],
                    color: colors[Math.floor(Math.random() * colors.length)]
                }))
            );
        }, 400);

        return () => clearInterval(intervalId);
    }, []);

    const [isAboutInView, setIsAboutInView] = useState(false);
    const [isServicesInView, setIsServicesInView] = useState(false);
    const [isOurWorkInView, setIsOurWorkInView] = useState(false);
    const [isTestimonialsInView, setIsTestimonialsInView] = useState(false);

    useEffect(() => {
        const aboutSection = aboutRef.current;
        const servicesSection = servicesRef.current;
        const ourWorkSection = ourWorkRef.current;
        const testimonialsSection = testimonialsRef.current;

        const observerAbout = new IntersectionObserver(
            ([entry]) => {
                setIsAboutInView(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        const observerServices = new IntersectionObserver(
            ([entry]) => {
                setIsServicesInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        const observerOurWork = new IntersectionObserver(
            ([entry]) => {
                setIsOurWorkInView(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        const observerTestimonials = new IntersectionObserver(
            ([entry]) => {
                setIsTestimonialsInView(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (aboutSection) observerAbout.observe(aboutSection);
        if (servicesSection) observerServices.observe(servicesSection);
        if (ourWorkSection) observerOurWork.observe(ourWorkSection);
        if (testimonialsSection) observerTestimonials.observe(testimonialsSection);

        return () => {
            if (aboutSection) observerAbout.unobserve(aboutSection);
            if (servicesSection) observerServices.unobserve(servicesSection);
            if (ourWorkSection) observerOurWork.unobserve(ourWorkSection);
            if (testimonialsSection) observerTestimonials.unobserve(testimonialsSection);
        };
    }, [aboutRef, servicesRef, ourWorkRef, testimonialsRef]);

    return (
        <div className="animation-container fixed z-10">
            <div className="background bg-transition"></div>
            <div className="overlay"></div>

            <h1>
                {Array.from('DIGITAL SPONGE').map((letter, index) => (
                    <span
                        key={index}
                        className="letter fadeInUp text-6xl md:text-7xl lg:text-8xl xl:text-9xl md:tracking-widest font-semibold drop-shadow-md hover:scale-110"
                        style={{
                            fontFamily: letterStyles[index].fontFamily,
                            fontStyle: letterStyles[index].fontStyle,
                            color: letterStyles[index].color,
                            textShadow: letterStyles[index].color === '#ffcc00' ? '4px 4px 0px #1f1f1f' : '4px 4px 0px #facb0d'
                        }}
                    >
                        {letter}
                    </span>
                ))}
            </h1>

            <div className='text-2xl relative py-5'>
                WELCOME TO THE <span className='bg-[#facb0d] text-white p-1 drop-shadow-[3px_3px_0px_#1f1f1f]'> WORLD OF FART</span>
            </div>
           <div className='bg-[#ffcc00] w-full absolute bottom-5 z-30'>
           <Marquee className='w-full py-3' loop={0} autoFill={true} speed={70} direction='right' > 
                <p className='text-5xl font-white flex justify-center items-center gap-3 font-semibold'>
                    LET'S TALK <FaArrowUp className='h-10 w-10 rotate-[40deg] font-thin' /> <span className='text-4xl'> INFO@DIGITALSPONGE.US &nbsp;</span>
                </p>
           </Marquee>
           </div>
           <div className='bg-[#35353583] w-full absolute bottom-6 z-20 rotate-[2deg]'>
           <Marquee className='w-full py-8'> 
                {/* <p className='text-5xl font-white flex justify-center items-center gap-3 font-semibold'>
                    LET'S TALK <FaArrowUp className='h-10 w-10 rotate-[40deg] font-thin' /> INFO@DIGITALSPONGE.US
                </p> */}
           </Marquee>
           </div>
           <div className='bg-[#080808a6] w-full absolute bottom-6 z-20 rotate-[-2deg]'>
           <Marquee className='w-full py-8'> 
                {/* <p className='text-5xl font-white flex justify-center items-center gap-3 font-semibold'>
                    LET'S TALK <FaArrowUp className='h-10 w-10 rotate-[40deg] font-thin' /> INFO@DIGITALSPONGE.US
                </p> */}
           </Marquee>
           </div>
            {/* <div className='absolute text-center flex flex-col justify-center items-center left-1/2 bottom-0'>
                <CiDesktopMouse1 size={30} className='text-black' />
                <div><p>Creativity </p> <p>below</p></div>
                <IoIosArrowRoundDown size={30} className='text-black animate-bounce pt-2' />
            </div> */}

            <div
                className={`spinner-container ${isServicesInView
                    ? 'move-to-services'
                    : isAboutInView
                        ? 'move-to-about'
                        : isOurWorkInView ? 'move-to-work' : isTestimonialsInView ? 'move-to-testimonials' : ''
                    }`}
            >
                <div className="spinner">
                    <svg viewBox="0 0 100 100">
                        <path
                            id="circlePath"
                            d="M50,10 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80"
                            fill="transparent"
                        />
                        <text>
                            <textPath xlinkHref="#circlePath" startOffset="0%">
                                digital • sponge • digital • sponge • digital • sponge •
                            </textPath>
                        </text>
                    </svg>
                    <div className="sponge-image">
                        <img src={sponge} alt="Sponge" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DSTextAnimation;
