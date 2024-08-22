import testimonialsHeading from '../assets/testimonials-heading.png';
import React, { forwardRef, useEffect } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Slider from 'react-slick';
import TestimonialCard from './TestimonialCard';

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        feedback: 'Absolutely fantastic service! Highly recommend.',
        designation: 'CEO, CompanyOne',
        service:'3D Illustration'
    },
    {
        id: 2,
        name: 'Jane Smith',
        feedback: 'The team is incredibly professional and delivered great results.',
        designation: 'Marketing Head, CompanyTwo',
        service:'2D Illustration'
    },
    {
        id: 3,
        name: 'Samuel Green',
        feedback: 'Exceeded my expectations in every way. Outstanding work!',
        designation: 'Founder, CompanyThree',
        service:'Animation'
    },
    {
        id: 4,
        name: 'John Doe',
        feedback: 'Absolutely fantastic service! Highly recommend.',
        designation: 'CEO, CompanyOne',
        service:'Comics'
    },
    {
        id: 5,
        name: 'Jane Smith',
        feedback: 'The team is incredibly professional and delivered great results.',
        designation: 'Marketing Head, CompanyTwo',
        service:'3D Animtion'
    },
    {
        id: 6,
        name: 'Samuel Green',
        feedback: 'Exceeded my expectations in every way. Outstanding work!',
        designation: 'Founder, CompanyThree',
        service:'2D Illustration'
    },
];

const Testimonials = forwardRef((props, ref)  => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    ref.current.classList.add('fade-in');
                    ref.current.classList.remove('fade-out');
                } else {
                    ref.current.classList.remove('fade-in');
                    ref.current.classList.add('fade-out');
                }
            },
            { threshold: 0.1 }
        );
    
        if (ref.current) {
            observer.observe(ref.current);
        }
    
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref]);

    return (
        <section ref={ref} className="w-full py-20 text-[#1f1f1f] ">
            <div className=" ">
                {/* <h2 className="text-8xl font-extrabold text-[#facb0d] drop-shadow-[5px_5px_0px_#1a1a1a] " style={{ WebkitTextStroke: '2px #1f1f1f' }}>Testimonials</h2> */}
                <span><img src={testimonialsHeading} className='w-full md:w-2/5' alt="" /></span>

            </div>
            <div className='flex flex-wrap w-full justify-evenly'>
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} name={testimonial.name} review={testimonial.feedback} designation={testimonial.designation} service={testimonial.service}  />
                    ))}
                    </div>
        </section>
    );
});

export default Testimonials;
