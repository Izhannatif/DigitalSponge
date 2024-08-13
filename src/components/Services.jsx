// import React from 'react';
// import Slider from 'react-slick';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// import ServiceCard from './ServiceCard';
// import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
// function CustomNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <GrFormNext size={50} color='#1f1f1f' onClick={onClick} style={{ ...style }} className={`${className} h-8 w-8`} />
//     );
// }

// function CustomPrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <GrFormPrevious  size={50} color='#1f1f1f' onClick={onClick} style={{ ...style }} className={`${className} h-8 w-8`} />
//     );
// }
// // Sample service data
// const services = [
//     { id: 1, code: 'WEB', title: 'Web Development', description: 'Building responsive and high-quality websites.', categories: ['Creative web design', 'Web development', 'Copywriting', 'E-Commerce', 'WordPress'] },
//     { id: 2, code: 'DESIGN', title: 'Graphic Design', description: 'Creating visually stunning designs for your brand.', categories: ['Illustrations', 'Comics', 'Digital Paintings', 'GFX'] },
//     { id: 3, code: 'MARKETING', title: 'Digital Marketing', description: 'Helping you reach your target audience effectively.', categories: ['Illustrations', 'Comics', 'Digital Paintings', 'GFX'] },
//     { id: 4, code: 'SEO', title: 'SEO Optimization', description: 'Improving your website’s visibility on search engines.', categories: ['Illustrations', 'Comics', 'Digital Paintings', 'GFX'] },
// ];

// // Slider settings
// var settings = {
//     dots: false,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 2,
//     // centerMode: true,
//     slidesToScroll: 1,
//     // centerTile:true,
//     autoplay: true,
//     loop: true,
//     nextArrow: <CustomNextArrow />,
//     prevArrow: <CustomPrevArrow />,
//     autoplaySpeed: 5000,
//     pauseOnHover: false,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow:1,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true,
//             },
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             },
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             },
//         },
//     ],

// };
// const ServicesSection = () => {
//     return (
//         <div className="pl-32 pr-12 pb-20 ">
//             <p className='drop-shadow-[3px_3px_0px_#1f1f1f] text-8xl  text-[#fccb0d] font-extrabold ' style={{WebkitTextStroke:'2px #1f1f1f'}}>OUR EXPERTISE</p>
//             <Slider  {...settings}>
//                 {services.map((service) => (
//                     <ServiceCard key={service.id} title={service.title} categories={service.categories} description={service.description} />
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default ServicesSection;


import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import ServiceCard from './ServiceCard';

function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <GrFormNext size={50} color='#1f1f1f' onClick={onClick} style={{ ...style }} className={`${className} h-8 w-8`} />
    );
}

function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <GrFormPrevious size={50} color='#1f1f1f' onClick={onClick} style={{ ...style }} className={`${className} h-8 w-8`} />
    );
}

// Sample service data
const services = [
    { id: 1, code: 'WEB', title: 'Web Development', description: 'Building responsive and high-quality websites.', categories: ['Creative web design', 'Web development', 'Copywriting', 'E-Commerce', 'WordPress'] },
    { id: 2, code: 'DESIGN', title: 'Graphic Design', description: 'Creating visually stunning designs for your brand.', categories: ['Illustrations', 'Comics', 'Digital Paintings', 'GFX'] },
    { id: 3, code: 'MARKETING', title: 'Digital Marketing', description: 'Helping you reach your target audience effectively.', categories: ['Illustrations', 'Comics', 'Digital Paintings', 'GFX'] },
    { id: 4, code: 'SEO', title: 'SEO Optimization', description: 'Improving your website’s visibility on search engines.', categories: ['Illustrations', 'Comics', 'Digital Paintings', 'GFX'] },
];

// Slider settings
var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const ServicesSection = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    sectionRef.current.classList.add('fade-in');
                    sectionRef.current.classList.remove('fade-out');
                } else {
                    sectionRef.current.classList.remove('fade-in');
                    sectionRef.current.classList.add('fade-out');
                }
            },
            { threshold: 0.5 } // Trigger when 10% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="pl-32 pr-12 pb-20 opacity-0 transition-opacity duration-1000 fade-out"
        >
            <p className='drop-shadow-[3px_3px_0px_#1f1f1f] text-8xl  text-[#fccb0d] font-extrabold ' style={{ WebkitTextStroke: '2px #1f1f1f' }}>OUR EXPERTISE</p>
            <Slider  {...settings}>
                {services.map((service) => (
                    <ServiceCard key={service.id} title={service.title} categories={service.categories} description={service.description} />
                ))}
            </Slider>
        </div>
    );
};

export default ServicesSection;
