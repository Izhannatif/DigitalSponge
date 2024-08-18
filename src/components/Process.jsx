import React, { useEffect, useRef, useState } from 'react'
import { GiAbstract089 } from "react-icons/gi";
import { GiThink } from "react-icons/gi";
import { GiBrainstorm } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import { MdOutlineAnimation } from "react-icons/md";

const Process = () => {
    const [isProcessInView, setIsProcessInView] = useState(false);
    const processRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // console.log('contact in view')
                setIsProcessInView(entry.isIntersecting);
            },
            {
                threshold: 0.3,
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
        <section ref={processRef} className={`w-full h-full pl-24 pr-20 ${isProcessInView ? 'bg-[#080808]' : 'bg-[#fff0]'} backdrop-blur-sm py-16 text-white mx-5 rounded-3xl bg-image-sponge transition-all duration-500`}>
            <div>
                <p className='text-7xl text-[#ffcc00] font-bold flex items-end '>BEST SERVICES, RIGHT <br /> TIME, RIGHT PEOPLE <MdOutlineAnimation className='h-104 w-14' /> </p>
            </div>
            <hr className='w-full border-stone-400 mt-5' />
            <div className='flex flex-col justify-start w-full items-center'>
                <div className='flex flex-row w-full justify-around p-10 items-start'>
                    <div className='flex gap-10 w-1/2'>
                        <GiAbstract089 className='h-10 w-10' color='#ffcc00' />
                        <p className='text-4xl font-bold'>UNDERSTANDING BRIEF</p>
                    </div>
                    <p className='w-1/2 text-xl'>The First Process is to understand the brief that has been sent by the slient via online meet or chat and then the next process is the deal budget.</p>
                </div>

                <hr className='w-[95%] border-stone-400 mt-5' />
                <div className='flex flex-col w-full justify-around p-10 items-start'>
                    <div className='flex w-full'>
                        <div className='flex gap-10 w-1/2'>
                            <GiBrainstorm className='h-10 w-10' color='#ffcc00' />
                            <p className=' text-4xl font-bold'>BRAINSTORMING & RESEARCH</p>
                        </div>
                        <p className='w-1/2 text-xl'>We begin to plan an structure the project process based on the discovery phase before starting to jump into the design phase.</p>
                    </div>
                    <div className='flex gap-10 pt-5 px-20 items-end'>
                        <img src="https://www.clipstudio.net/wp-content/uploads/2021/05/0164_015.png" alt="" className='rounded-2xl w-44 h-44 object-cover object-top' />
                        <img src="https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/zanoz/23tmmJohyrJca82hrUQsQWYmn6H1GDaSEC3b2Hww1eAsPBHM39cf6zGXA6enE7VfPxG7v.png" alt="" className='rounded-2xl w-44 h-44 object-cover object-top' />
                        <img src="https://pm1.aminoapps.com/6628/c617d0f6e39424c9e47324996e6c58f76dae83e4_hq.jpg" alt="" className='rounded-2xl w-44 h-44 object-cover object-top' />
                        <p>some of our ideas...</p>
                    </div>

                </div>

                <hr className='w-[95%] border-stone-400 mt-5' />
                <div className='flex flex-col w-full justify-around p-10 items-start'>
                    <div className='flex w-full'>
                        <div className='flex gap-10 w-1/2'>
                            <MdOutlineDesignServices className='h-10 w-10' color='#ffcc00' />
                            <p className=' text-4xl font-bold'>DESIGN PROCESS</p>
                        </div>
                        <p className='w-1/2 text-xl'>After completing the brainstorming & research process then we make ow fidelity and after low fodelity is approved the ast step is high fidelity.</p>
                    </div>
                    {/* <div className='flex gap-10 py-5 px-20 items-end'>
                    <img src="https://www.clipstudio.net/wp-content/uploads/2021/05/0164_015.png" alt="" className='rounded-2xl w-44 h-44 object-cover object-top' />
                    <img src="https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/zanoz/23tmmJohyrJca82hrUQsQWYmn6H1GDaSEC3b2Hww1eAsPBHM39cf6zGXA6enE7VfPxG7v.png" alt="" className='rounded-2xl w-44 h-44 object-cover object-top' />
                    <img src="https://pm1.aminoapps.com/6628/c617d0f6e39424c9e47324996e6c58f76dae83e4_hq.jpg" alt="" className='rounded-2xl w-44 h-44 object-cover object-top' />
                    <p>some of our ideas...</p>
                    </div> */}

                </div>


                <hr className='w-[95%] border-stone-400 mt-5' />
                <div className='flex flex-col w-full justify-around p-10 items-start'>
                    <div className='flex w-full'>
                        <div className='flex gap-10 w-1/2'>
                            <AiOutlineDeliveredProcedure className='h-10 w-10' color='#ffcc00' />
                            <p className=' text-4xl font-bold'>DELIVER & PAYMENT</p>
                        </div>
                        <p className='w-1/2 text-xl'>After the lofi and hifi processes have gone through the feedback process and are final, the file can be sent to the client while the client pays the payment.</p>
                    </div>
                    {/* <div className='flex gap-10 py-5 px-20 items-end'>
                    <img src="https://www.clipstudio.net/wp-content/uploads/2021/05/0164_015.png" alt="" className='rounded-2xl w-44 h-44 object-cover object-top' />
                    <img src="https://images.hive.blog/0x0/https://files.peakd.com/file/peakd-hive/zanoz/23tmmJohyrJca82hrUQsQWYmn6H1GDaSEC3b2Hww1eAsPBHM39cf6zGXA6enE7VfPxG7v.png" alt="" className='rounded-2xl w-44 h-44 object-cover object-top' />
                    <img src="https://pm1.aminoapps.com/6628/c617d0f6e39424c9e47324996e6c58f76dae83e4_hq.jpg" alt="" className='rounded-2xl w-44 h-44 object-cover object-top' />
                    <p>some of our ideas...</p>
                    </div> */}

                </div>

            </div>
        </section>
    )
}

export default Process