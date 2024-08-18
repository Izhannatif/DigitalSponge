import React, { useEffect, useRef, useState } from 'react';
import { BsSend } from 'react-icons/bs';
import letsConnect from '../assets/lets-connect-heading.png'
import logo from '../assets/logos/7-2.png'
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
        <section ref={contactRef} className='flex justify-center items-center'>
            <div className={`${isContactInView ? 'text-[#1f1f1f]' : 'translate-y-[100%] bg-white'} w-full  rounded-[150px] rounded-b-none transition-all duration-500 px-20 py-10 items-center justify-between flex flex-col`}>
                {/* <div className='text-center md:text-left text-8xl text-white font-bold drop-shadow-[4px_4px_0px_#1f1f1f]' style={{ WebkitTextStroke: '1px #1f1f1f' }}>
                    Contact
                </div> */}
                <img src={letsConnect} className='w-1/2' alt="" />
                <div className='w-full  flex justify-center py-10 pl-16'>
                    {/* <form onSubmit={handleSubmit} className='w-full md:w-2/5 flex flex-col gap-5'>
                        <div className='flex flex-col'>
                            <label htmlFor='name' className='text-xl font-semibold mb-2'>Name</label>
                            <input
                                type='text'
                                id='name'
                                name='name'
                                value={formData.name}
                                onChange={handleChange}
                                className='p-3 text-xl rounded-lg border-2 border-[#1f1f1f] shadow-[4px_4px_0px_#1f1f1f] focus:outline-none '
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='email' className='text-xl font-semibold mb-2'>Email</label>
                            <input
                                type='email'
                                id='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                className='p-3 text-xl rounded-lg border-2 border-[#1f1f1f] shadow-[4px_4px_0px_#1f1f1f] focus:outline-none'
                            />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='message' className='text-xl font-semibold mb-2'>Message</label>
                            <textarea
                                id='message'
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                                rows='3'
                                className='p-3 text-xl rounded-lg border-2 border-[#1f1f1f] shadow-[4px_4px_0px_#1f1f1f] focus:outline-none'
                            />
                        </div>
                        <button
                            type='submit'
                            className='p-4 bg-[#ececec7e] hover:bg-white text-stone-950 text-xl font-bold rounded-lg shadow-[5px_5px_0px_#1f1f1f] transition-all duration-300 group hover:shadow-[2px_2px_0px_#1f1f1f] border-2 border-black'
                        >
                            <div className='flex justify-center items-center gap-3'>
                                <div>Send Message</div>
                                <div>
                                    <BsSend className='group-hover:translate-x-8 group-hover:-translate-y-8 group-hover:opacity-0 transition-all duration-300 font-bold ' />
                                </div>
                            </div>
                        </button>
                    </form> */}
                    <div className='w-full md:w-2/5 flex justify-center items-center flex-col gap-5'>
                        <p className='text-4xl font-medium animate-bounce'>Info@DigitalSponge.us</p>
                    </div>
                </div>
                <img src={logo} className='w-1/5 pt-10' alt="" />
            </div>
        </section>
    );
};

export default Contact;
