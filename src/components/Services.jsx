import React, { useEffect, forwardRef } from 'react';
import Slider from 'react-slick';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import ServiceCard from './ServiceCard';

const services = [
    { id: 1, code: 'WEB', title: 'Web Development', description: 'Building responsive and high-quality websites.', categories: ['Creative web design', 'Web development', 'Copywriting', 'E-Commerce', 'WordPress'] },
    { id: 2, code: 'DESIGN', title: 'Graphic Design', description: 'Creating visually stunning designs for your brand.', categories: ['Illustrations', 'Comics', 'Digital Paintings', 'GFX'] },
    { id: 3, code: 'MARKETING', title: 'Digital Marketing', description: 'Helping you reach your target audience effectively.', categories: ['Illustrations', 'Comics', 'Digital Paintings', 'GFX'] },
    { id: 4, code: 'SEO', title: 'SEO Optimization', description: 'Improving your website’s visibility on search engines.', categories: ['Illustrations', 'Comics', 'Digital Paintings', 'GFX'] },
];

const ServicesSection = forwardRef((props, ref) => {
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
        <div
            ref={ref}
            className="pl-32 pr-12 pb-20 opacity-0 transition-opacity duration-1000 fade-out w-full flex flex-col"
        >
            <div>
                <p className='drop-shadow-[3px_3px_0px_#1f1f1f] text-8xl text-[#fccb0d] font-extrabold pb-10 ' style={{ WebkitTextStroke: '2px #1f1f1f' }}>OUR EXPERTISE</p>
            </div>
            <div className='flex flex-wrap gap-5 justify-center items-center w-full'>
                {services.map((service, index) => (
                    <ServiceCard key={service.id} title={service.title} categories={service.categories} description={service.description} index={index} />
                ))}
            </div>
        </div>
    );
});

export default ServicesSection;
