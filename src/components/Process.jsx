// // import React, { useEffect, useRef, useState } from 'react';
// // import { GiAbstract089, GiThink, GiBrainstorm } from "react-icons/gi";
// // import { MdOutlineDesignServices, MdOutlineAnimation } from "react-icons/md";
// // import { AiOutlineDeliveredProcedure } from "react-icons/ai";
// // import sketch1 from '../assets/sketch-1.png';
// // import sketch2 from '../assets/sketch-2.png';
// // import sketch3 from '../assets/sketch-3.png';
// // import sketch4 from '../assets/sketch-4.png';

// // const Process = (props) => {
// //     const [isProcessInView, setIsProcessInView] = useState(false);
// //     const processRef = useRef(null);

// //     useEffect(() => {
// //         const observer = new IntersectionObserver(
// //             ([entry]) => {
// //                 setIsProcessInView(entry.isIntersecting);
// //             },
// //             {
// //                 threshold: 0.2,
// //             }
// //         );

// //         if (processRef.current) {
// //             observer.observe(processRef.current);
// //         }
// //         return () => {
// //             if (processRef.current) {
// //                 observer.unobserve(processRef.current);
// //             }
// //         };
// //     }, []);

// //     return (
// //         <section id='process' ref={processRef} className={`max-w-screen w-full h-full md:pl-24 pr-10 md:pr-20 ${isProcessInView ? 'bg-[#080808]' : 'bg-[#fff0] opacity-0'} backdrop-blur-sm py-16 text-white rounded-3xl bg-image-sponge transition-all duration-500`}>
// //             <div>
// //                 <p className='text-3xl md:text-7xl text-[#ffcc00] font-bold flex items-end pl-5'>BEST SERVICES, RIGHT <br /> TIME, RIGHT PEOPLE <MdOutlineAnimation className='' /> </p>
// //             </div>
// //             <hr className='w-full border-stone-400 mt-5' />
// //             <div className='flex flex-col justify-start w-full items-center'>
// //                 <div className='flex flex-col md:flex-row w-full justify-around p-5 md:p-10 items-start gap-2'>
// //                     <div className='flex flex-col md:flex-row gap-2 md:gap-10 w-full md:w-1/2'>
// //                         <GiAbstract089 className='h-10 w-10' color='#ffcc00' />
// //                         <p className='text-2xl md:text-4xl font-bold'>CREATIVE BRAINSTORM</p>
// //                     </div>
// //                     <p className='w-full md:w-1/2 text-md md:text-xl'>We kick things off by getting to know your vision and sparking creative ideas that align with your project.
// //                     </p>
// //                 </div>

// //                 <hr className='w-[95%] border-stone-400 mt-5' />
// //                 <div className='flex flex-col w-full justify-around p-5 md:p-10 items-start'>
// //                     <div className='flex flex-col md:flex-row w-full'>
// //                         <div className='flex flex-col md:flex-row gap-2 md:gap-10 w-full md:w-1/2'>
// //                             <GiBrainstorm className='h-10 w-10' color='#ffcc00' />
// //                             <p className='text-2xl md:text-4xl font-bold uppercase'>Sketch It Out</p>
// //                         </div>
// //                         <p className='w-full md:w-1/2 text-xl'>Next, we hit the drawing board, crafting an initial draft that brings your concept to life.
// //                         </p>
// //                     </div>
// //                     <div className='flex flex-row flex-wrap gap-5 md:gap-10 pt-5 px-0 md:px-20 items-start md:items-end'>
// //                         <img src={sketch1} alt="" className='rounded-2xl w-32 h-32 md:w-56 md:h-56 object-cover object-top' />
// //                         <img src={sketch2} alt="" className='rounded-2xl w-32 h-32 md:w-56 md:h-56 object-cover object-top' />
// //                         <img src={sketch3} alt="" className='rounded-2xl w-32 h-32 md:w-56 md:h-56 object-cover object-top' />
// //                         <img src={sketch4} alt="" className='rounded-2xl w-32 h-32 md:w-56 md:h-56 object-cover object-top' />
// //                         <p>some of our ideas...</p>
// //                     </div>
// //                 </div>

// //                 <hr className='w-[95%] border-stone-400 mt-5' />
// //                 <div className='flex flex-col w-full justify-around items-start'>
// //                     <div className='flex flex-col md:flex-row w-full justify-around p-5 md:p-10 items-start gap-2'>
// //                         <div className='flex flex-col md:flex-row gap-2 md:gap-10 w-full md:w-1/2'>
// //                             <MdOutlineDesignServices className='h-10 w-10' color='#ffcc00' />
// //                             <p className='text-2xl md:text-4xl font-bold uppercase'>Color & Approve</p>
// //                         </div>
// //                         <p className='w-full md:w-1/2 text-md md:text-xl'>Love the initial draft? Awesome! We add color, shading, and all the magic touches once you give us the thumbs up.</p>
// //                     </div>
// //                 </div>

// //                 <hr className='w-[95%] border-stone-400 mt-5' />
// //                 <div className='flex flex-col w-full justify-around items-start'>
// //                     <div className='flex flex-col md:flex-row w-full justify-around p-5 md:p-10 items-start gap-2'>
// //                         <div className='flex flex-col md:flex-row gap-2 md:gap-10 w-full md:w-1/2'>
// //                             <AiOutlineDeliveredProcedure className='h-10 w-10' color='#ffcc00' />
// //                             <p className='text-2xl md:text-4xl font-bold uppercase'>Final Touch & Delivery</p>
// //                         </div>
// //                         <p className='w-full md:w-1/2 text-md md:text-xl'>With your approval, we wrap things up and hand over your completed masterpiece, ready to impress! Pay worrilessly and seamlessly using Paypal , Stripe, Wise , Cash app. 
// //                         </p>
// //                     </div>
// //                 </div>

// //             </div>
// //             <p className='p-10 text-xl'>At <span className='text-[#fde000]'>DigitalSponge, </span>we make the  process smooth, fun, and all about bringing your ideas to life!</p>
// //         </section>
// //     );
// // }

// // export default Process;

// import React, { useEffect, useRef, useState, memo } from 'react';
// import { GiAbstract089, GiBrainstorm } from "react-icons/gi";
// import { MdOutlineDesignServices, MdOutlineAnimation } from "react-icons/md";
// import { AiOutlineDeliveredProcedure } from "react-icons/ai";
// import sketch1 from '../assets/sketch-1.png';
// import sketch2 from '../assets/sketch-2.png';
// import sketch3 from '../assets/sketch-3.png';
// import sketch4 from '../assets/sketch-4.png';

// // Memoized component to prevent unnecessary re-renders
// const ProcessSection = memo(({ isProcessInView }) => (

//     <section id='process' className={`max-w-screen w-full h-full md:pl-24 pr-10 md:pr-20 ${isProcessInView ? 'bg-[#080808]' : 'bg-[#fff0] opacity-0'} backdrop-blur-sm py-16 text-white rounded-3xl bg-image-sponge transition-all duration-500`}>
//         <div>
//             <p className='text-3xl md:text-7xl text-[#ffcc00] font-bold flex items-end pl-5'>BEST SERVICES, RIGHT <br /> TIME, RIGHT PEOPLE <MdOutlineAnimation className='' /> </p>
//         </div>
//         <hr className='w-full border-stone-400 mt-5' />
//         <div className='flex flex-col justify-start w-full items-center'>
//             <div className='flex flex-col md:flex-row w-full justify-around p-5 md:p-10 items-start gap-2'>
//                 <div className='flex flex-col md:flex-row gap-2 md:gap-10 w-full md:w-1/2'>
//                     <GiAbstract089 className='h-10 w-10' color='#ffcc00' />
//                     <p className='text-2xl md:text-4xl font-bold'>CREATIVE BRAINSTORM</p>
//                 </div>
//                 <p className='w-full md:w-1/2 text-md md:text-xl'>We kick things off by getting to know your vision and sparking creative ideas that align with your project.</p>
//             </div>

//             <hr className='w-[95%] border-stone-400 mt-5' />
//             <div className='flex flex-col w-full justify-around p-5 md:p-10 items-start'>
//                 <div className='flex flex-col md:flex-row w-full'>
//                     <div className='flex flex-col md:flex-row gap-2 md:gap-10 w-full md:w-1/2'>
//                         <GiBrainstorm className='h-10 w-10' color='#ffcc00' />
//                         <p className='text-2xl md:text-4xl font-bold uppercase'>Sketch It Out</p>
//                     </div>
//                     <p className='w-full md:w-1/2 text-xl'>Next, we hit the drawing board, crafting an initial draft that brings your concept to life.</p>
//                 </div>
//                 <div className='flex flex-row flex-wrap gap-5 md:gap-10 pt-5 px-0 md:px-20 items-start md:items-end'>
//                     {/* Optimize image sizes */}
//                     <img src={sketch1} alt="Sketch 1" className='rounded-2xl w-32 h-32 md:w-56 md:h-56 object-cover object-top' />
//                     <img src={sketch2} alt="Sketch 2" className='rounded-2xl w-32 h-32 md:w-56 md:h-56 object-cover object-top' />
//                     <img src={sketch3} alt="Sketch 3" className='rounded-2xl w-32 h-32 md:w-56 md:h-56 object-cover object-top' />
//                     <img src={sketch4} alt="Sketch 4" className='rounded-2xl w-32 h-32 md:w-56 md:h-56 object-cover object-top' />
//                     <p>Some of our ideas...</p>
//                 </div>
//             </div>

//             <hr className='w-[95%] border-stone-400 mt-5' />
//             <div className='flex flex-col w-full justify-around items-start'>
//                 <div className='flex flex-col md:flex-row w-full justify-around p-5 md:p-10 items-start gap-2'>
//                     <div className='flex flex-col md:flex-row gap-2 md:gap-10 w-full md:w-1/2'>
//                         <MdOutlineDesignServices className='h-10 w-10' color='#ffcc00' />
//                         <p className='text-2xl md:text-4xl font-bold uppercase'>Color & Approve</p>
//                     </div>
//                     <p className='w-full md:w-1/2 text-md md:text-xl'>Love the initial draft? Awesome! We add color, shading, and all the magic touches once you give us the thumbs up.</p>
//                 </div>
//             </div>

//             <hr className='w-[95%] border-stone-400 mt-5' />
//             <div className='flex flex-col w-full justify-around items-start'>
//                 <div className='flex flex-col md:flex-row w-full justify-around p-5 md:p-10 items-start gap-2'>
//                     <div className='flex flex-col md:flex-row gap-2 md:gap-10 w-full md:w-1/2'>
//                         <AiOutlineDeliveredProcedure className='h-10 w-10' color='#ffcc00' />
//                         <p className='text-2xl md:text-4xl font-bold uppercase'>Final Touch & Delivery</p>
//                     </div>
//                     <p className='w-full md:w-1/2 text-md md:text-xl'>With your approval, we wrap things up and hand over your completed masterpiece, ready to impress! Pay seamlessly using Paypal, Stripe, Wise, or Cash app.</p>
//                 </div>
//             </div>
//         </div>
//         <p className='p-10 text-xl'>At <span className='text-[#fde000]'>DigitalSponge,</span> we make the process smooth, fun, and all about bringing your ideas to life!</p>
//     </section>
// )
// );

// const Process = () => {
//     const [isProcessInView, setIsProcessInView] = useState(false);
//     const processRef = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setIsProcessInView(entry.isIntersecting);
//             },
//             {
//                 threshold: 0.2,
//             }
//         );

//         if (processRef.current) {
//             observer.observe(processRef.current);
//         }
//         return () => {
//             if (processRef.current) {
//                 observer.unobserve(processRef.current);
//             }
//         };
//     }, []);

//     return (
//         <ProcessSection
//             isProcessInView={isProcessInView}
//             ref={processRef}
//         />
//     );
// }

// export default Process;


import React, { useEffect, useRef, useState, memo, forwardRef } from 'react';
import { GiAbstract089, GiBrainstorm } from "react-icons/gi";
import { MdOutlineDesignServices, MdOutlineAnimation } from "react-icons/md";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import sketch1 from '../assets/sketch-1.png';
import sketch2 from '../assets/sketch-2.png';
import sketch3 from '../assets/sketch-3.png';
import sketch4 from '../assets/sketch-4.png';

// Memoized component to prevent unnecessary re-renders
const ProcessSection = memo(forwardRef(({ isProcessInView }, ref) => (
    <section id='process' ref={ref} className={`max-w-screen w-full h-full md:pl-24 pr-10 md:pr-20 ${isProcessInView ? 'bg-[#080808]' : 'bg-[#fff0] opacity-20'} backdrop-blur-sm py-16 text-white rounded-3xl bg-image-sponge transition-all duration-100`}>
        <div>
            <p className='text-3xl md:text-7xl text-[#ffcc00] font-bold flex items-end pl-5'>BEST SERVICES, RIGHT <br /> TIME, RIGHT PEOPLE <MdOutlineAnimation className='' /> </p>
        </div>
        <hr className='w-full border-stone-400 mt-5' />
        <div className='flex flex-col justify-start w-full items-center'>
            <div className='flex flex-col md:flex-row w-full justify-around p-5 md:p-10 items-start gap-2'>
                <div className='flex flex-col md:flex-row gap-2 md:gap-10 w-full md:w-1/2'>
                    <GiAbstract089 className='h-10 w-10' color='#ffcc00' />
                    <p className='text-2xl md:text-4xl font-bold'>CREATIVE BRAINSTORM</p>
                </div>
                <p className='w-full md:w-1/2 text-md md:text-xl'>We kick things off by getting to know your vision and sparking creative ideas that align with your project.</p>
            </div>

            <hr className='w-[95%] border-stone-400 mt-5' />
            <div className='flex flex-col w-full justify-around p-5 md:p-10 items-start'>
                <div className='flex flex-col md:flex-row w-full'>
                    <div className='flex flex-col md:flex-row gap-2 md:gap-10 w-full md:w-1/2'>
                        <GiBrainstorm className='h-10 w-10' color='#ffcc00' />
                        <p className='text-2xl md:text-4xl font-bold uppercase'>Sketch It Out</p>
                    </div>
                    <p className='w-full md:w-1/2 text-xl'>Next, we hit the drawing board, crafting an initial draft that brings your concept to life.</p>
                </div>
                <div className='flex flex-row flex-wrap gap-5 md:gap-10 pt-5 px-0 md:px-20 items-start md:items-end'>
                    {/* Optimize image sizes */}
                    <img src={sketch1} alt="Sketch 1" className='rounded-2xl w-32 h-32 md:w-56 md:h-56 object-cover object-top' />
                    <img src={sketch2} alt="Sketch 2" className='rounded-2xl w-32 h-32 md:w-56 md:h-56 object-cover object-top' />
                    <img src={sketch3} alt="Sketch 3" className='rounded-2xl w-32 h-32 md:w-56 md:h-56 object-cover object-top' />
                    <img src={sketch4} alt="Sketch 4" className='rounded-2xl w-32 h-32 md:w-56 md:h-56 object-cover object-top' />
                    <p>Some of our ideas...</p>
                </div>
            </div>

            <hr className='w-[95%] border-stone-400 mt-5' />
            <div className='flex flex-col w-full justify-around items-start'>
                <div className='flex flex-col md:flex-row w-full justify-around p-5 md:p-10 items-start gap-2'>
                    <div className='flex flex-col md:flex-row gap-2 md:gap-10 w-full md:w-1/2'>
                        <MdOutlineDesignServices className='h-10 w-10' color='#ffcc00' />
                        <p className='text-2xl md:text-4xl font-bold uppercase'>Color & Approve</p>
                    </div>
                    <p className='w-full md:w-1/2 text-md md:text-xl'>Love the initial draft? Awesome! We add color, shading, and all the magic touches once you give us the thumbs up.</p>
                </div>
            </div>

            <hr className='w-[95%] border-stone-400 mt-5' />
            <div className='flex flex-col w-full justify-around items-start'>
                <div className='flex flex-col md:flex-row w-full justify-around p-5 md:p-10 items-start gap-2'>
                    <div className='flex flex-col md:flex-row gap-2 md:gap-10 w-full md:w-1/2'>
                        <AiOutlineDeliveredProcedure className='h-10 w-10' color='#ffcc00' />
                        <p className='text-2xl md:text-4xl font-bold uppercase'>Final Touch & Delivery</p>
                    </div>
                    <p className='w-full md:w-1/2 text-md md:text-xl'>With your approval, we wrap things up and hand over your completed masterpiece, ready to impress! Pay seamlessly using Paypal, Stripe, Wise, or Cash app.</p>
                </div>
            </div>
            </div>
            <p className='p-10 text-xl'>At <span className='text-[#fde000]'>DigitalSponge,</span> we make the process smooth, fun, and all about bringing your ideas to life!</p>
        </section>
    ))
);

const Process = () => {
    const [isProcessInView, setIsProcessInView] = useState(false);
    const processRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsProcessInView(entry.isIntersecting);
            },
            {
                threshold: 0.2,
            }
        );

        if (processRef.current) {
            observer.observe(processRef.current);
        }
        return () => {
            if (processRef.current) {
                observer.unobserve(processRef.current);
            }
        };
    }, []);

    return (
        <ProcessSection
            isProcessInView={isProcessInView}
            ref={processRef}
        />
    );
}

export default Process;
