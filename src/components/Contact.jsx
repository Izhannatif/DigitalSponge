import React, { useEffect, useRef, useState } from 'react';
import { BsSend } from 'react-icons/bs';
import letsConnect from '../assets/lets-connect-heading.png'
import logoIcon from '../assets/logos/logo-icon.png'
import logoText from '../assets/logos/logo-text.png'
import { LiaLinkedin } from 'react-icons/lia';
import { FaLinkedin, FaX, FaXTwitter } from 'react-icons/fa6';

import logo from '../assets/logos/4-2.png'

import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
const Contact = () => {
    const [isContactInView, setIsContactInView] = useState(false);
    const contactRef = useRef(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

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
        <section ref={contactRef} className='flex justify-center items-center max-w-screen '>
            <div className={`${isContactInView ? 'text-[#fff] bg-[#000000f1]' : 
                'translate-y-[100%] opacity-0 bg-white'} 
                w-full md:rounded-[100px] md:rounded-b-none transition-all duration-500 px-5 md:px-20 py-10 items-center justify-between flex flex-col`}>

                <img src={letsConnect} className='w-full md:w-1/2' alt="" />

                <div className='w-full flex flex-col md:flex-row justify-between py-10  items-center'>

                    <div className='w-full md:w-2/5 flex justify-center items-center flex-col gap-5'>
                        <div>
                            <p>Email us</p>
                            <p className='text-xl md:text-4xl font-medium'>Info@DigitalSponge.us</p>
                        </div>
                    </div>
                    <div className='w-full md:w-2/5 flex justify-center items-center flex-col gap-5'>
                        <div>
                            <p>Give us a ring</p>
                            <p className='text-xl md:text-4xl font-medium'>+1 (570) 609 2038</p>
                        </div>
                    </div>
                </div>

                <div className='flex w-full md:w-1/5 justify-center items-center mb-10 md:-mb-10'>
                    <img src={logoIcon} className='w-1/3 md:w-1/2 pt-10 ' alt="" />
                    <img src={logoText} className='w-1/3 md:w-1/2 h-max pt-10 invert' alt="" />
                </div>
                <div className='flex flex-col md:flex-row w-full justify-between items-start md:items-end gap-16'>
                    <div className='flex w-max gap-10'>
                        <div className=' items-center flex w-max px-4 py-2 justify-between gap-3 text-xl font-bold border border-white rounded-full hover:bg-[#ffcc00]
                    hover:text-[#1f1f1f] transition-all duration-300'>
                            LinkedIn
                            <FaLinkedinIn />
                        </div>
                        <div className='items-center flex px-4 py-2 justify-between w-max gap-3 text-xl font-bold border border-white rounded-full hover:bg-[#ffcc00] transition-all duration-300 hover:text-[#1f1f1f]'>
                            Instagram
                            <FaInstagram />
                        </div>
                    </div>
                    <div className='flex w-max gap-10'>
                        <div className='items-center flex px-4 py-2 justify-between w-max gap-3 text-xl font-bold border border-white rounded-full hover:bg-[#ffcc00] transition-all duration-300 hover:text-[#1f1f1f]'>
                            Twitter
                            <FaXTwitter />
                        </div>
                        <div className='items-center flex px-4 py-2 justify-between w-max gap-3 text-xl font-bold border border-white rounded-full hover:bg-[#ffcc00] transition-all duration-300 hover:text-[#1f1f1f]'>
                            Facebook
                            <FaFacebookF />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
