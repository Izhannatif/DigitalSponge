
import React, { useRef, useEffect, useState } from 'react';
import DSTextAnimation from '../components/DSTextAnimation';
import About from '../components/About';
import ServicesSection from '../components/Services';
import OurWork from '../components/OurWork';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import Loader from '../components/Loader';
import FAQs from '../components/FAQs';

const Homepage = () => {
    const servicesRef = useRef(null);
    const aboutRef = useRef(null);
    const ourWorkRef = useRef(null);
    const testimonialsRef = useRef(null);
    const processRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (


        <>
            <DSTextAnimation/>
            <About/>
            <OurWork />
            <Process/>
            <Testimonials/>
            <FAQs />
        </>

    );
};

export default Homepage;
