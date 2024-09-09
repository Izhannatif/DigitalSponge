import React, { useEffect, useRef, useState } from 'react';
import { BsSend } from 'react-icons/bs';
import letsConnect from '../assets/lets-connect-heading.png'
import logoIcon from '../assets/logos/logo-icon.png'
import logoText from '../assets/logos/logo-text.png'
import { LiaLinkedin } from 'react-icons/lia';
import { FaLinkedin, FaThreads, FaX, FaXTwitter } from 'react-icons/fa6';
import { FcIdea } from "react-icons/fc";

import logo from '../assets/logos/4-2.png'

import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { BiBrush } from 'react-icons/bi';
import { GiPaintBrush } from "react-icons/gi";


const Contact = () => {
    const [isContactInView, setIsContactInView] = useState(false);
    const contactRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component mount
    }, []);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //   Handle form submission logic here
        console.log(formData);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsContactInView(entry.isIntersecting);
            },
            {
                threshold: 0.3,
            }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }
        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    return (
        <section ref={contactRef} className='flex flex-col justify-center items-center max-w-screen'>
            {/* <div className='pb-10 text-8xl font-black uppercase text-center tracking-tight text-white py-10 '>
                Turning <br /> <span className='flex text-9xl items-start text-[#ffd426] drop-shadow-[5px_5px_0px_#1f1f1f]'>Imagination<FcIdea className='drop-shadow-2xl' /></span>Into<div className='flex justify-center z-10 bangers tracking-wider text-[20vh]'> Ar <span className='text-[#ffcc00] drop-shadow-[3px_3px_0px_#1f1f1f]'>t</span> <GiPaintBrush className=' rotate-180 drop-shadow-[3px_-3px_0px_#1f1f1f] z-0' color='#ffcc00' /> </div>
            </div> */}
            <div className={`${isContactInView ? 'text-[#fff] bg-[#000000f1]' :
                'translate-y-[100%] opacity-0 bg-white'} 
                w-full md:rounded-[10rem] md:rounded-b-none transition-all duration-500 px-5 md:px-20 py-10 items-center justify-between flex flex-col`}>

                <img src={letsConnect} className='w-full md:w-1/2' alt="" />

                <div className='w-full flex flex-col md:flex-row justify-center pt-10 items-center gap-10 md:gap-0'>
                    <div className='w-full md:w-2/5 flex justify-center items-start md:items-center flex-col gap-5'>
                        <div>
                            <p>Email us</p>
                            <p className='text-2xl md:text-4xl font-medium'>Info@DigitalSponge.us</p>
                        </div>
                    </div>
                    {/* <div className='w-full md:w-2/5 flex justify-center items-start md:items-center flex-col gap-5'>
                        <div>
                            <p>Give us a ring</p>
                            <p className='text-2xl md:text-4xl font-medium'>+1 (570) 609 2038</p>
                        </div>
                    </div> */}
                </div>

                <div className='flex w-full md:w-1/5 justify-center items-center mb-10 md:mb-10'>
                    <img src={logoIcon} className='w-1/3 md:w-1/2 pt-10 object-contain ' alt="" />
                    <img src={logoText} className='w-1/3 md:w-1/2 h-max pt-10 invert object-contain' alt="" />
                </div>
                <div className='flex flex-col md:flex-row w-full justify-between items-start md:items-end gap-5 max-w-screen flex-wrap'>
                    <div className='flex w-full md:w-max gap-5 flex-wrap md:flex-nowrap'>
                        <a target='_blank' href='https://www.linkedin.com/company/digital-sponge1/'><div className=' items-center flex w-max px-3 py-2 justify-between gap-3 text-lg md:text-xl font-bold border border-white rounded-full 
                    hover:text-[#ffcc00] hover:border-[#ffcc00] transition-all duration-300'>
                            LinkedIn
                            <FaLinkedinIn />
                        </div></a>
                        <a target='_blank' href='https://www.instagram.com/digitalsponge.us/'><div className='items-center flex px-3 py-2 justify-between w-max gap-3 text-lg md:text-xl font-bold border border-white rounded-full transition-all duration-300 hover:text-[#ffcc00] hover:border-[#ffcc00] '>
                            Instagram
                            <FaInstagram />
                        </div></a>
                        <a target='_blank' href='https://twitter.com/DigitalSpongeUS'><div className='items-center flex px-3 py-2 justify-between w-max gap-3 text-lg md:text-xl font-bold border border-white rounded-full  transition-all duration-300 hover:text-[#ffcc00] hover:border-[#ffcc00] '>
                            Twitter
                            <FaXTwitter />
                        </div></a>
                    </div>

                    <div className='flex  w-full md:w-max gap-5 flex-wrap md:flex-nowrap'>
                    <a target='_blank' href='https://twitter.com/DigitalSpongeUS'><div className='items-center flex px-3 py-2 justify-between w-max gap-3 text-lg md:text-xl font-bold border border-white rounded-full  transition-all duration-300 hover:text-[#ffcc00] hover:border-[#ffcc00] '>
                            Threads
                            <FaThreads />
                        </div></a>
                        <a target='_blank' href='https://twitter.com/DigitalSpongeUS'><div className='items-center flex px-3 py-2 justify-between w-max gap-3 text-lg md:text-xl font-bold border border-white rounded-full transition-all duration-300 hover:text-[#ffcc00] hover:border-[#ffcc00] '>
                            Whatsapp
                            <FaWhatsapp />
                        </div></a>
                        <a target='_blank' href='https://twitter.com/DigitalSpongeUS'><div className='items-center flex px-3 py-2 justify-between w-max gap-3 text-lg md:text-xl font-bold border border-white rounded-full transition-all duration-300 hover:text-[#ffcc00] hover:border-[#ffcc00] '>
                            Facebook
                            <FaFacebookF />
                        </div></a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
