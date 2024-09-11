import React, { useState } from 'react';
import faqHeading from '../assets/faq-heading.png'
const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqItems = [
        {
            question: 'What services do you offer?',
            answer: 'At DigitalSponge, we bring your ideas to life! Whether you need captivating 2D visuals, immersive 3D designs, or sleek and intuitive UI/UX for websites and apps, we’ve got you covered. Your creative vision is in expert hands!'
        },
        {
            question: 'How do I start a project with you?',
            answer: 'Getting started is easy! Just drop us a line via email, phone, or WhatsApp, and we’ll get back to you with all the details you need, including a personalized guide and pricing options.'
        },
        {
            question: 'What is your typical project timeline?',
            answer: 'Timelines vary depending on the complexity of your idea. Share your vision with us, and we’ll provide a detailed deadline specific to your project.'
        },
        {
            question: 'How do you price your services?',
            answer: 'Our pricing is as unique as your project! Every quote is tailored based on your specific requirements to ensure you get the best value for your investment.'
        },
        {
            question: 'Can I request revisions to the project?',
            answer: 'Absolutely! At DigitalSponge, we’re dedicated to bringing your vision to life. We welcome your feedback and are more than happy to make changes along the way.'
        },
        {
            question: 'Do you offer custom packages?',
            answer: 'Yes, we do! Whether you need a single service or a bundle, just reach out to us via email, WhatsApp, phone, or social media, and we’ll create the perfect package for your needs.'
        }
    ];

    return (
        <section className="pt-5 sm:pt-8 lg:pt-10 pb-10 sm:pb-16 lg:pb-20 ">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    {/* <h2 className="text-3xl font-bold leading-tight text-[#fde000] drop-shadow-[3px_3px_0px_#1f1f1f] sm:text-4xl lg:text-5xl " style={{ WebkitTextStroke: '1px black' }}>Frequently Asked Questions</h2> */}
                    <img src={faqHeading} alt="" />
                    <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">Find the answers to the most common questions below.</p>
                </div>

                <div className=" mt-8 space-y-4 md:mt-16">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => toggleFAQ(index)}
                            className={`transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer rounded-3xl w-full ${activeIndex === index ? 'bg-[#fde000] ' : ''
                                }`}
                        >
                            <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                                <span className="flex text-xl font-semibold text-black">{item.question}</span>
                                <svg
                                    className={`w-6 h-6 transition-transform ease-out duration-500 ${activeIndex === index ? 'rotate-180' : 'rotate-0'
                                        }`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                className={`overflow-hidden transition-all ease-in duration-500 ${activeIndex === index ? 'max-h-96 ease-in' : 'max-h-0 ease-out'
                                    }`}
                            >
                                <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-lg">
                                    <p className="">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
