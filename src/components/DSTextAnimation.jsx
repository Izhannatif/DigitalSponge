// // // import React, { useState, useEffect } from 'react';
// // // import asset8 from '../assets/asset8.png';
// // // import { CiDesktopMouse1 } from 'react-icons/ci';
// // // import { IoIosArrowRoundDown } from 'react-icons/io';
// // // import sponge from '../assets/sponge.png'

// // // const fontFamilies = ['bangers', 'Lobster', 'Bebas Neue', ''];
// // // const fontStyles = ['normal'];
// // // const colors = ['#facb0d', '#1a1a1a'];

// // // const DSTextAnimation = () => {
// // //     const [letterStyles, setLetterStyles] = useState(
// // //         'DIGITAL SPONGE'.split('').map(() => ({
// // //             fontFamily: fontFamilies[Math.floor(Math.random() * fontFamilies.length)],
// // //             fontStyle: fontStyles[Math.floor(Math.random() * fontStyles.length)],
// // //             color: colors[Math.floor(Math.random() * colors.length)]
// // //         }))
// // //     );

// // //     useEffect(() => {
// // //         const intervalId = setInterval(() => {
// // //             setLetterStyles((prevStyles) =>
// // //                 prevStyles.map(() => ({
// // //                     fontFamily: fontFamilies[Math.floor(Math.random() * fontFamilies.length)],
// // //                     fontStyle: fontStyles[Math.floor(Math.random() * fontStyles.length)],
// // //                     color: colors[Math.floor(Math.random() * colors.length)]
// // //                 }))
// // //             );
// // //         }, 400); // Adjust interval as needed

// // //         return () => clearInterval(intervalId);
// // //     }, []);
// // //     const [isAboutInView, setIsAboutInView] = useState(false);

// // //     useEffect(() => {
// // //         const handleScroll = () => {
// // //             const aboutSection = document.querySelector('.about-section');
// // //             const rect = aboutSection.getBoundingClientRect();
// // //             if (rect.top <= window.innerHeight && rect.bottom >= 0) {
// // //                 setIsAboutInView(true);
// // //             } else {
// // //                 setIsAboutInView(false);
// // //             }
// // //         };

// // //         window.addEventListener('scroll', handleScroll);
// // //         return () => {
// // //             window.removeEventListener('scroll', handleScroll);
// // //         };
// // //     }, []);
// // //     return (
// // //         <div className="animation-container">
// // //             <div className="background bg-transition"></div>
// // //             <div className="overlay"></div>

// // //             <h1>
// // //                 {Array.from('DIGITAL SPONGE').map((letter, index) => (
// // //                     <span
// // //                         key={index}
// // //                         className="letter fadeInUp text-9xl tracking-widest font-semibold drop-shadow-md hover:scale-110"
// // //                         style={{
// // //                             fontFamily: letterStyles[index].fontFamily,
// // //                             fontStyle: letterStyles[index].fontStyle,
// // //                             color: letterStyles[index].color,
// // //                             textShadow: letterStyles[index].color === '#facb0d' ? '4px 4px 0px #1f1f1f' :'4px 4px 0px #facb0d'
// // //                         }}
// // //                     >
// // //                         {letter}
// // //                     </span>
// // //                 ))}
// // //             </h1>

// // //             <div className='text-2xl relative py-5' >
// // //                 WELCOME TO THE <span className='bg-[#facb0d] text-white p-1 drop-shadow-[3px_3px_0px_#1f1f1f]'> WORLD OF FART</span>
// // //             </div>

// // //             <div className='absolute text-center flex flex-col justify-center items-center left-1/2 bottom-0'>
// // //                 <CiDesktopMouse1 size={30} className='text-black' />
// // //                 <div><p>Creativity </p> <p>below</p></div>
// // //                 <IoIosArrowRoundDown size={30} className='text-black animate-bounce pt-2' />
// // //             </div>
// // //             <div
// // //                 className={`spinner-container ${
// // //                     isAboutInView ? 'move-to-about' : ''
// // //                 }`}
// // //             >
// // //                 <div className="spinner">
// // //                     <svg viewBox="0 0 100 100">
// // //                         <path
// // //                             id="circlePath"
// // //                             d="M50,10 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80"
// // //                             fill="transparent"
// // //                         />
// // //                         <text>
// // //                             <textPath xlinkHref="#circlePath" startOffset="0%">
// // //                                 digital • sponge • digital • sponge • digital • sponge •
// // //                             </textPath>
// // //                         </text>
// // //                     </svg>
// // //                     <div className="sponge-image">
// // //                         <img src={sponge} alt="Sponge" />
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default DSTextAnimation;


// // // import React, { useState, useEffect } from 'react';
// // // import sponge from '../assets/sponge.png';
// // // import { IoIosArrowRoundDown } from 'react-icons/io';
// // // import { CiDesktopMouse1 } from 'react-icons/ci';

// // // const fontFamilies = ['bangers', 'Lobster', 'Bebas Neue', ''];
// // // const fontStyles = ['normal'];
// // // const colors = ['#facb0d', '#1a1a1a'];

// // // const DSTextAnimation = () => {
// // //     const [letterStyles, setLetterStyles] = useState(
// // //         'DIGITAL SPONGE'.split('').map(() => ({
// // //             fontFamily: fontFamilies[Math.floor(Math.random() * fontFamilies.length)],
// // //             fontStyle: fontStyles[Math.floor(Math.random() * fontStyles.length)],
// // //             color: colors[Math.floor(Math.random() * colors.length)]
// // //         }))
// // //     );

// // //     useEffect(() => {
// // //         const intervalId = setInterval(() => {
// // //             setLetterStyles((prevStyles) =>
// // //                 prevStyles.map(() => ({
// // //                     fontFamily: fontFamilies[Math.floor(Math.random() * fontFamilies.length)],
// // //                     fontStyle: fontStyles[Math.floor(Math.random() * fontStyles.length)],
// // //                     color: colors[Math.floor(Math.random() * colors.length)]
// // //                 }))
// // //             );
// // //         }, 400); // Adjust interval as needed

// // //         return () => clearInterval(intervalId);
// // //     }, []);

// // //     const [isAboutInView, setIsAboutInView] = useState(false);

// // //     useEffect(() => {
// // //         const handleScroll = () => {
// // //             const aboutSection = document.querySelector('.about-section');
// // //             const rect = aboutSection.getBoundingClientRect();
// // //             const windowHeight = window.innerHeight;

// // //             // Check if the about section is in the viewport
// // //             if (rect.top <= windowHeight - 200 && rect.bottom >= 400) {
// // //                 setIsAboutInView(true);
// // //             } else {
// // //                 setIsAboutInView(false);
// // //             }
// // //         };

// // //         window.addEventListener('scroll', handleScroll);
// // //         return () => {
// // //             window.removeEventListener('scroll', handleScroll);
// // //         };
// // //     }, []);

// // //     return (
// // //         <div className="animation-container">
// // //             <div className="background bg-transition"></div>
// // //             <div className="overlay"></div>

// // //             <h1>
// // //                 {Array.from('DIGITAL SPONGE').map((letter, index) => (
// // //                     <span
// // //                         key={index}
// // //                         className="letter fadeInUp text-9xl tracking-widest font-semibold drop-shadow-md hover:scale-110"
// // //                         style={{
// // //                             fontFamily: letterStyles[index].fontFamily,
// // //                             fontStyle: letterStyles[index].fontStyle,
// // //                             color: letterStyles[index].color,
// // //                             textShadow: letterStyles[index].color === '#facb0d' ? '4px 4px 0px #1f1f1f' :'4px 4px 0px #facb0d'
// // //                         }}
// // //                     >
// // //                         {letter}
// // //                     </span>
// // //                 ))}
// // //             </h1>

// // //             <div className='text-2xl relative py-5'>
// // //                 WELCOME TO THE <span className='bg-[#facb0d] text-white p-1 drop-shadow-[3px_3px_0px_#1f1f1f]'> WORLD OF FART</span>
// // //             </div>

// // //             <div className='absolute text-center flex flex-col justify-center items-center left-1/2 bottom-0'>
// // //                 <CiDesktopMouse1 size={30} className='text-black' />
// // //                 <div><p>Creativity </p> <p>below</p></div>
// // //                 <IoIosArrowRoundDown size={30} className='text-black animate-bounce pt-2' />
// // //             </div>
// // //             <div
// // //                 className={`spinner-container ${
// // //                     isAboutInView ? 'move-to-about' : ''
// // //                 }`}
// // //             >
// // //                 <div className="spinner">
// // //                     <svg viewBox="0 0 100 100">
// // //                         <path
// // //                             id="circlePath"
// // //                             d="M50,10 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80"
// // //                             fill="transparent"
// // //                         />
// // //                         <text>
// // //                             <textPath xlinkHref="#circlePath" startOffset="0%">
// // //                                 digital • sponge • digital • sponge • digital • sponge •
// // //                             </textPath>
// // //                         </text>
// // //                     </svg>
// // //                     <div className="sponge-image">
// // //                         <img src={sponge} alt="Sponge" />
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default DSTextAnimation;


// // import React, { useState, useEffect } from 'react';
// // import sponge from '../assets/sponge.png';
// // import { IoIosArrowRoundDown } from 'react-icons/io';
// // import { CiDesktopMouse1 } from 'react-icons/ci';

// // const fontFamilies = ['bangers', 'Lobster', 'Bebas Neue', ''];
// // const fontStyles = ['normal'];
// // const colors = ['#facb0d', '#1a1a1a'];

// // const DSTextAnimation = ({ servicesRef }) => {
// //     const [letterStyles, setLetterStyles] = useState(
// //         'DIGITAL SPONGE'.split('').map(() => ({
// //             fontFamily: fontFamilies[Math.floor(Math.random() * fontFamilies.length)],
// //             fontStyle: fontStyles[Math.floor(Math.random() * fontStyles.length)],
// //             color: colors[Math.floor(Math.random() * colors.length)]
// //         }))
// //     );

// //     useEffect(() => {
// //         const intervalId = setInterval(() => {
// //             setLetterStyles((prevStyles) =>
// //                 prevStyles.map(() => ({
// //                     fontFamily: fontFamilies[Math.floor(Math.random() * fontFamilies.length)],
// //                     fontStyle: fontStyles[Math.floor(Math.random() * fontStyles.length)],
// //                     color: colors[Math.floor(Math.random() * colors.length)]
// //                 }))
// //             );
// //         }, 400);

// //         return () => clearInterval(intervalId);
// //     }, []);

// //     const [isAboutInView, setIsAboutInView] = useState(false);
// //     const [isServicesInView, setIsServicesInView] = useState(false);

// //     useEffect(() => {
// //         const handleScroll = () => {
// //             const aboutSection = document.querySelector('.about-section');
// //             const servicesSection = servicesRef.current;
// //             const aboutRect = aboutSection.getBoundingClientRect();
// //             const servicesRect = servicesSection.getBoundingClientRect();
// //             const windowHeight = window.innerHeight;

// //             if (aboutRect.top <= windowHeight - 200 && aboutRect.bottom >= 400) {
// //                 setIsAboutInView(true);
// //             } else {
// //                 setIsAboutInView(false);
// //             }

// //             // if (servicesRect.top <= windowHeight && servicesRect.bottom >= 0) {
// //             //     setIsServicesInView(true);
// //             // } else {
// //             //     setIsServicesInView(false);
// //             // }
// //         };

// //         window.addEventListener('scroll', handleScroll);
// //         return () => {
// //             window.removeEventListener('scroll', handleScroll);
// //         };
// //     }, [servicesRef]);

// //     return (
// //         <div className="animation-container">
// //             <div className="background bg-transition"></div>
// //             <div className="overlay"></div>

// //             <h1>
// //                 {Array.from('DIGITAL SPONGE').map((letter, index) => (
// //                     <span
// //                         key={index}
// //                         className="letter fadeInUp text-9xl tracking-widest font-semibold drop-shadow-md hover:scale-110"
// //                         style={{
// //                             fontFamily: letterStyles[index].fontFamily,
// //                             fontStyle: letterStyles[index].fontStyle,
// //                             color: letterStyles[index].color,
// //                             textShadow: letterStyles[index].color === '#facb0d' ? '4px 4px 0px #1f1f1f' :'4px 4px 0px #facb0d'
// //                         }}
// //                     >
// //                         {letter}
// //                     </span>
// //                 ))}
// //             </h1>

// //             <div className='text-2xl relative py-5'>
// //                 WELCOME TO THE <span className='bg-[#facb0d] text-white p-1 drop-shadow-[3px_3px_0px_#1f1f1f]'> WORLD OF FART</span>
// //             </div>

// //             <div className='absolute text-center flex flex-col justify-center items-center left-1/2 bottom-0'>
// //                 <CiDesktopMouse1 size={30} className='text-black' />
// //                 <div><p>Creativity </p> <p>below</p></div>
// //                 <IoIosArrowRoundDown size={30} className='text-black animate-bounce pt-2' />
// //             </div>
// //             <div
// //                 className={`spinner-container ${
// //                     isAboutInView ? (isServicesInView ? 'move-to-services' : '') : ''
// //                 }`}
// //             >
// //                 <div className="spinner">
// //                     <svg viewBox="0 0 100 100">
// //                         <path
// //                             id="circlePath"
// //                             d="M50,10 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80"
// //                             fill="transparent"
// //                         />
// //                         <text>
// //                             <textPath xlinkHref="#circlePath" startOffset="0%">
// //                                 digital • sponge • digital • sponge • digital • sponge •
// //                             </textPath>
// //                         </text>
// //                     </svg>
// //                     <div className="sponge-image">
// //                         <img src={sponge} alt="Sponge" />
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default DSTextAnimation;


// import React, { useState, useEffect, useRef } from 'react';
// import sponge from '../assets/sponge.png';
// import { IoIosArrowRoundDown } from 'react-icons/io';
// import { CiDesktopMouse1 } from 'react-icons/ci';

// const fontFamilies = ['bangers', 'Lobster', 'Bebas Neue', ''];
// const fontStyles = ['normal'];
// const colors = ['#facb0d', '#1a1a1a'];

// const DSTextAnimation = ({ servicesRef }) => {
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

//     const [isAboutInView, setIsAboutInView] = useState(false);
//     const [isServicesInView, setIsServicesInView] = useState(false);

//     const aboutSectionRef = useRef(null);

//     useEffect(() => {
//         const aboutSection = aboutSectionRef.current;
//         const servicesSection = servicesRef.current;

//         const observerAbout = new IntersectionObserver(
//             ([entry]) => {
//                 setIsAboutInView(entry.isIntersecting);
//             },
//             { threshold: 0.1 }
//         );

//         const observerServices = new IntersectionObserver(
//             ([entry]) => {
//                 setIsServicesInView(entry.isIntersecting);
//             },
//             { threshold: 0.1 }
//         );

//         if (aboutSection) {
//             observerAbout.observe(aboutSection);
//         }

//         if (servicesSection) {
//             observerServices.observe(servicesSection);
//         }

//         return () => {
//             if (aboutSection) {
//                 observerAbout.unobserve(aboutSection);
//             }
//             if (servicesSection) {
//                 observerServices.unobserve(servicesSection);
//             }
//         };
//     }, [servicesRef]);

//     return (
//         <div className="animation-container">
//             <div className="background bg-transition"></div>
//             <div className="overlay"></div>

//             <h1>
//                 {Array.from('DIGITAL SPONGE').map((letter, index) => (
//                     <span
//                         key={index}
//                         className="letter fadeInUp text-9xl tracking-widest font-semibold drop-shadow-md hover:scale-110"
//                         style={{
//                             fontFamily: letterStyles[index].fontFamily,
//                             fontStyle: letterStyles[index].fontStyle,
//                             color: letterStyles[index].color,
//                             textShadow: letterStyles[index].color === '#facb0d' ? '4px 4px 0px #1f1f1f' :'4px 4px 0px #facb0d'
//                         }}
//                     >
//                         {letter}
//                     </span>
//                 ))}
//             </h1>

//             <div className='text-2xl relative py-5'>
//                 WELCOME TO THE <span className='bg-[#facb0d] text-white p-1 drop-shadow-[3px_3px_0px_#1f1f1f]'> WORLD OF FART</span>
//             </div>

//             <div className='absolute text-center flex flex-col justify-center items-center left-1/2 bottom-0'>
//                 <CiDesktopMouse1 size={30} className='text-black' />
//                 <div><p>Creativity </p> <p>below</p></div>
//                 <IoIosArrowRoundDown size={30} className='text-black animate-bounce pt-2' />
//             </div>
//             <div
//                 className={`spinner-container ${
//                     isAboutInView ? (isServicesInView ? 'move-to-services' : '') : ''
//                 }`}
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


import React, { useState, useEffect, useRef } from 'react';
import sponge from '../assets/sponge.png';
import { IoIosArrowRoundDown } from 'react-icons/io';
import { CiDesktopMouse1 } from 'react-icons/ci';

const fontFamilies = ['bangers', 'Lobster', 'Bebas Neue', ''];
const fontStyles = ['normal'];
const colors = ['#facb0d', '#1a1a1a'];

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
    //    

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
            { threshold: 0.1 }
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
            { threshold: 0.1 }
        );

        const observerTestimonials = new IntersectionObserver(
            ([entry]) => {
                setIsTestimonialsInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        )

        if (aboutSection) {
            observerAbout.observe(aboutSection);
        }

        if (servicesSection) {
            observerServices.observe(servicesSection);
        }

        if (ourWorkSection) {
            observerOurWork.observe(ourWorkSection);
        }

        if (testimonialsSection) {
            observerTestimonials.observe(testimonialsSection);
        }

        return () => {
            if (aboutSection) {
                observerAbout.unobserve(aboutSection);
            }
            if (servicesSection) {
                observerServices.unobserve(servicesSection);
            }
            if (ourWorkSection) {
                observerOurWork.unobserve(ourWorkSection);
            }
            if (testimonialsSection) {
                observerTestimonials.unobserve(testimonialsSection);
            }
        };
    }, [servicesRef, aboutRef, ourWorkRef, testimonialsRef]);

    return (
        <div className="animation-container fixed z-10">
            <div className="background bg-transition"></div>
            <div className="overlay"></div>

            <h1>
                {Array.from('DIGITAL SPONGE').map((letter, index) => (
                    <span
                        key={index}
                        className="letter fadeInUp text-9xl tracking-widest font-semibold drop-shadow-md hover:scale-110"
                        style={{
                            fontFamily: letterStyles[index].fontFamily,
                            fontStyle: letterStyles[index].fontStyle,
                            color: letterStyles[index].color,
                            textShadow: letterStyles[index].color === '#facb0d' ? '4px 4px 0px #1f1f1f' : '4px 4px 0px #facb0d'
                        }}
                    >
                        {letter}
                    </span>
                ))}
            </h1>

            <div className='text-2xl relative py-5'>
                WELCOME TO THE <span className='bg-[#facb0d] text-white p-1 drop-shadow-[3px_3px_0px_#1f1f1f]'> WORLD OF FART</span>
            </div>

            <div className='absolute text-center flex flex-col justify-center items-center left-1/2 bottom-0'>
                <CiDesktopMouse1 size={30} className='text-black' />
                <div><p>Creativity </p> <p>below</p></div>
                <IoIosArrowRoundDown size={30} className='text-black animate-bounce pt-2' />
            </div>

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