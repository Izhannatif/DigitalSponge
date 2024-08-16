import React, { forwardRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const About = forwardRef((props, ref)  => {
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
        { threshold: 0.3 }
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
        <section ref={ref} className='text-black pl-32 py-10 h-[40vh] flex items-center about-section'>
            <div className='flex flex-col  gap-5 text-xl'>
                <p className='text-xl font-semibold'>First of, <span className='text-4xl'> Introduction. </span></p>
                <div className='flex gap-5 '>
                    <p>About <span className=' bg-[#fccb0d] text-white text-2xl p-1'>Digital Sponge</span></p>
                    <p>-</p>
                    <p className='text-xl w-1/2'>A Team of Skillful and Passionate GFX Artits, Animators and Illustrators who aims to deliver the best art of all forms.
                    <span className='text-lg text-[#fccb0d]'><Link> Deep dive into out services.</Link></span>
                    </p>
                </div>
            </div>
        </section>
    );
});

export default About