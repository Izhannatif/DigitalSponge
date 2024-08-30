import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { GiAbstract089 } from "react-icons/gi";
import { GiThink } from "react-icons/gi";
import { GiBrainstorm } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { MdOutlineAnimation } from "react-icons/md";
import sketch1 from '../assets/sketch-1.png'
import sketch2 from '../assets/sketch-2.png'
import sketch3 from '../assets/sketch-3.png'
import sketch4 from '../assets/sketch-4.png'


const Process = forwardRef((props, ref) => {
    const [isProcessInView, setIsProcessInView] = useState(false);
    const processRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // console.log('contact in view')
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
        <section id='process' ref={processRef} className={`max-w-screen w-full h-full  md:pl-24 pr-10 md:pr-20 ${isProcessInView ? 'bg-[#080808]' : 'bg-[#fff0] opacity-0'} backdrop-blur-sm py-16 text-white rounded-3xl bg-image-sponge transition-all duration-500`}>
            <div>
                <p className='text-3xl md:text-7xl text-[#ffcc00] font-bold flex items-end pl-5 '>BEST SERVICES, RIGHT <br /> TIME, RIGHT PEOPLE <MdOutlineAnimation className='' /> </p>
            </div>
            <hr className='w-full border-stone-400 mt-5' />
            <div className='flex flex-col justify-start w-full items-center'>
                <div className='flex flex-col md:flex-row w-full justify-around p-5 md:p-10 items-start gap-2'>
                    <div className='flex flex-col md:flex-row gap-2 md:gap-10 w-full md:w-1/2'>
                        <GiAbstract089 className='h-10 w-10' color='#ffcc00' />
                        <p className='text-2xl md:text-4xl font-bold'>UNDERSTANDING BRIEF</p>
                    </div>
                    <p className='w-full md:w-1/2 text-md md:text-xl'>The First Process is to understand the brief that has been sent by the slient via online meet or chat and then the next process is the deal budget.</p>
                </div>

                <hr className='w-[95%] border-stone-400 mt-5' />
                <div className='flex flex-col w-full justify-around p-5 md:p-10 items-start'>
                    <div className='flex flex-col md:flex-row w-full'>
                        <div className='flex flex-col md:flex-row gap-2 md:gap-10 w-full md:w-1/2'>
                            <GiBrainstorm className='h-10 w-10' color='#ffcc00' />
                            <p className='text-2xl md:text-4xl font-bold'>BRAINSTORMING & RESEARCH</p>
                        </div>
                        <p className='w-full md:w-1/2 text-xl'>We begin to plan an structure the project process based on the discovery phase before starting to jump into the design phase.</p>
                    </div>
                    <div className='flex flex-row flex-wrap gap-5 md:gap-10 pt-5 px-0 md:px-20 item-start md:items-end'>
                        <img src={sketch1} alt="" className='rounded-2xl w-32 h-32 md:w-44 md:h-44 object-cover object-top' />
                        <img src={sketch2} alt="" className='rounded-2xl w-32 h-32 md:w-44 md:h-44  object-cover object-top' />
                        <img src={sketch3} alt="" className='rounded-2xl w-32 h-32 md:w-44 md:h-44  object-cover object-top' />
                        <img src={sketch4} alt="" className='rounded-2xl w-32 h-32 md:w-44 md:h-44  object-cover object-top' />
                        
                        <p>some of our ideas...</p>
                    </div>

                </div>

                <hr className='w-[95%] border-stone-400 mt-5' />
                <div className='flex flex-col w-full justify-around items-start'>
                    <div className='flex flex-col md:flex-row w-full justify-around p-5 md:p-10 items-start gap-2'>
                        <div className='flex flex-col md:flex-row gap-2 md:gap-10 w-full md:w-1/2'>
                            <MdOutlineDesignServices className='h-10 w-10' color='#ffcc00' />
                            <p className=' text-2xl md:text-4xl font-bold'>DESIGN PROCESS</p>
                        </div>
                        <p className='w-full md:w-1/2 text-md md:text-xl'>After completing the brainstorming & research process then we make ow fidelity and after low fodelity is approved the ast step is high fidelity.</p>
                    </div>
                </div>


                <hr className='w-[95%] border-stone-400 mt-5' />
                <div className='flex flex-col w-full justify-around items-start'>
                    <div className='flex flex-col md:flex-row w-full justify-around p-5 md:p-10 items-start gap-2'>
                        <div className='flex flex-col md:flex-row gap-2 md:gap-10 w-full md:w-1/2'>
                            <AiOutlineDeliveredProcedure className='h-10 w-10' color='#ffcc00' />
                            <p className=' text-2xl md:text-4xl font-bold'>DELIVER & PAYMENT</p>
                        </div>
                        <p className='w-full md:w-1/2 text-md md:text-xl'>After the lofi and hifi processes have gone through the feedback process and are final, the file can be sent to the client while the client pays the payment.</p>
                    </div>
                </div>

            </div>
        </section>
    )
})

export default Process