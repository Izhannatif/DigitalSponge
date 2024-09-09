import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { BsSend } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    useEffect(() => {
        window.scrollTo(-100, -100); // Scroll to top on component mount
    }, []);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const honeypot = e.target.elements.honeypot.value;
        if (honeypot) {
            // If honeypot is filled, it's likely a bot. Do not proceed.
            toast.error('Spam detected.', {
                className: 'custom-toast-error',
                progressClassName: 'custom-toast-error-progress'
            });
            return;
        }

        emailjs.send(
            'service_0cnfzhw', // replace with your EmailJS service ID
            'template_ayk35vl', // replace with your EmailJS template ID
            formData,
            'bqBv6t8x5zCYzWXKH' // replace with your EmailJS user ID (found in EmailJS dashboard)
        ).then((result) => {
            toast.success('Form successfully submitted!', {
                className: 'custom-toast-success',
                progressClassName: 'custom-toast-success-progress'
            });
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        }, (error) => {
            toast.error('Failed to submit form.', {
                className: 'custom-toast-error',
                progressClassName: 'custom-toast-error-progress'
            });
        });
    };

    return (
        <>
            <section className="flex flex-col items-center pt-20 z-20 w-full">
                <div className={`w-full rounded-[150px] rounded-b-none transition-all duration-500 px-8 md:px-20 py-10 pb-16 items-center`}>
                    <div className='text-center md:text-left text-6xl md:text-8xl text-[#ffcc00] font-bold drop-shadow-[4px_4px_0px_#1f1f1f]'
                        style={{ WebkitTextStroke: '1px #1f1f1f' }}
                    >
                        Let's Create Together !
                    </div>
                    <div className='w-full flex flex-col md:flex-row justify-between items-center mt-10 z-20'>
                        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                            <div className='flex flex-col md:flex-row w-full justify-between items-center gap-5'>
                                <div className='flex flex-col w-full  md:w-1/2'>
                                    <label htmlFor='name' className='text-xl font-semibold mb-2'>Name</label>
                                    <input
                                        type='text'
                                        id='name'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        className='p-3 text-xl rounded-lg border-2 border-[#1f1f1f] shadow-[4px_4px_0px_#1f1f1f] focus:outline-none'
                                    />
                                </div>
                                <div className='flex flex-col w-full md:w-1/2'>
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
                            </div>

                            {/* Honeypot Field */}
                            <div style={{ display: 'none' }}>
                                <label htmlFor="honeypot">Leave this field empty</label>
                                <input
                                    type="text"
                                    id="honeypot"
                                    name="honeypot"
                                    value=""
                                    onChange={() => {}} // No action needed
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
                                className='p-4 bg-[#ffcc00] hover:bg-white text-stone-950 text-xl font-bold rounded-lg shadow-[5px_5px_0px_#1f1f1f] transition-all duration-300 group hover:shadow-[2px_2px_0px_#1f1f1f] border-2 border-black'
                            >
                                <div className='flex justify-center items-center gap-3'>
                                    <div>Send Message</div>
                                    <div>
                                        <BsSend className='group-hover:translate-x-8 group-hover:-translate-y-8 group-hover:opacity-0 transition-all duration-300 font-bold ' />
                                    </div>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </section>
        </>
    );
};

export default ContactForm;
