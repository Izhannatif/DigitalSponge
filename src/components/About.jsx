// import React, { forwardRef, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import introduction from '../assets/introduction-heading.png';
// const About = forwardRef((props, ref)  => {
//     useEffect(() => {
//     const observer = new IntersectionObserver(
//         ([entry]) => {
//             if (entry.isIntersecting) {
//                 ref.current.classList.add('fade-in');
//                 ref.current.classList.remove('fade-out');
//             } else {
//                 ref.current.classList.remove('fade-in');
//                 ref.current.classList.add('fade-out');
//             }
//         },
//         { threshold: 0.3 }
//     );

//     if (ref.current) {
//         observer.observe(ref.current);
//     }

//     return () => {
//         if (ref.current) {
//             observer.unobserve(ref.current);
//         }
//     };
// }, [ref]);
//     return (
//         <section id='about' ref={ref} className='text-black py-10 px-8 h-[40vh] flex flex-col md:flex-row items-center about-section w-full'>
//             <div className='flex flex-col  gap-5 text-xl'>
//                 {/* <p className='text-xl font-semibold'>First of,  */}
//                     <span><img src={introduction} className='w-full md:w-1/3' alt="" /></span>
//                     {/* <span className='text-4xl'> Introduction. </span> */}
//                     {/* </p> */}
//                 <div className='flex flex-col md:flex-row gap-5 text-2xl w-full pl-10'>
//                     <p>About <span className='bg-[#ffcc00] p-1'><span className=' font-medium text-white drop-shadow-[1px_1px_2px_#1f1f1f] text-2xl p-1'>Digital Sponge</span></span></p>
//                     <p className='hidden md:block'>-</p>
//                     <p className='text-2xl w-full md:w-1/2'>A Team of Skillful and Passionate GFX Artists, Animators and Illustrators who aims to deliver the best art of all forms.
//                     {/* <span className='text-xl text-[#ffcc00] drop-shadow-[1px_1px_1px_black] shadow-2xl'><Link> Deep dive into out services.</Link></span> */}
//                     </p>
//                 </div>
//             </div>
//         </section>
//     );
// });

// export default About

import React, { useEffect, useRef } from 'react';
import introduction from '../assets/introduction-heading.png';

const About = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionRef.current.classList.add('fade-in');
                    sectionRef.current.classList.remove('fade-out');
                } else {
                    sectionRef.current.classList.remove('fade-in');
                    sectionRef.current.classList.add('fade-out');
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id='about' ref={sectionRef} className='text-black py-10 px-8  flex flex-col md:flex-row items-center about-section w-full'>
            <div className='flex flex-col gap-5 text-xl'>
                <span><img src={introduction} className='w-full md:w-1/3' alt="Introduction" /></span>
                <div className='flex flex-col md:flex-row gap-5 text-2xl w-full pl-10'>
                    <p>About <span className='bg-[#ffcc00] p-1'><span className='text-nowrap font-medium text-white drop-shadow-[1px_1px_2px_#1f1f1f] text-2xl p-1'>Digital Sponge</span></span></p>
                    <p className='hidden md:block'>-</p>
                    <p className='text-xl w-full '>At DigitalSponge, we bring imagination to life with stunning visuals and animations. From hand-drawn 2D illustrations to cutting-edge 3D modeling and animation, we create captivating designs that tell your story. Whether you need graphic design, Vtuber creation, or a unique blend of creativity and technology, our team is dedicated to transforming your ideas into art that inspires and engages. At DigitalSponge, we don’t just create visuals—we craft experiences that leave a lasting impression.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
