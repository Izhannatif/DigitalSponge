import React, { forwardRef, useEffect } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import Slider from 'react-slick';

const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        feedback: 'Absolutely fantastic service! Highly recommend.',
        designation: 'CEO, CompanyOne',
    },
    {
        id: 2,
        name: 'Jane Smith',
        feedback: 'The team is incredibly professional and delivered great results.',
        designation: 'Marketing Head, CompanyTwo',
    },
    {
        id: 3,
        name: 'Samuel Green',
        feedback: 'Exceeded my expectations in every way. Outstanding work!',
        designation: 'Founder, CompanyThree',
    },
    {
        id: 4,
        name: 'John Doe',
        feedback: 'Absolutely fantastic service! Highly recommend.',
        designation: 'CEO, CompanyOne',
    },
    {
        id: 5,
        name: 'Jane Smith',
        feedback: 'The team is incredibly professional and delivered great results.',
        designation: 'Marketing Head, CompanyTwo',
    },
    {
        id: 6,
        name: 'Samuel Green',
        feedback: 'Exceeded my expectations in every way. Outstanding work!',
        designation: 'Founder, CompanyThree',
    },
];


function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <GrFormNext size={50} color='#1f1f1f' onClick={onClick} style={{ ...style }} className={`bg-white border-2 border-black p-2 border-l-0 drop-shadow-[3px_3px_0px_#1a1a1a]`} />
    );
}

function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <GrFormPrevious size={50} color='#1f1f1f' onClick={onClick} style={{ ...style }} className={`bg-white border-2 border-black p-2 border-l-0 drop-shadow-[3px_3px_0px_#1a1a1a]`} />
    );
}

const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 5000,
    loop:true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
};
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
            <div className="mb-10 pl-32 pr-16 ">
                <h2 className="text-8xl font-extrabold text-[#facb0d] drop-shadow-[5px_5px_0px_#1a1a1a] " style={{ WebkitTextStroke: '2px #1f1f1f' }}>Testimonials</h2>
            </div>
            <div className="pl-16">
                <Slider {...settings}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className='px-5'>
                            <div className="flex flex-col justify-evenly py-10 my-10 px-10 shadow-[5px_5px_0px_#1f1f1f] border-2 border-[#1f1f1f] h-[40vh] backdrop-blur-[2px]">
                                <p className="text-2xl mb-6 font-semibold">"{testimonial.feedback}"</p>
                                <div>
                                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                                <p className="text-lg">{testimonial.designation}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
});

export default Testimonials;
