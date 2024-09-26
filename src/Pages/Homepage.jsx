import React, { useRef, useEffect, useState } from 'react';
import DSTextAnimation from '../components/DSTextAnimation';
import About from '../components/About';
import OurWork from '../components/OurWork';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import FAQs from '../components/FAQs';
import Scrollbar from 'smooth-scrollbar';

const Homepage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        const scrollbar = Scrollbar.init(document.querySelector('#scroll-container'), {
            damping: 0.1, // Adjust damping to control scroll speed
        });

        return () => scrollbar.destroy(); // Clean up on component unmount
    }, []);


    return (
        <div id='scroll-container'>
            <DSTextAnimation />
            <About />
            <OurWork />
            <Process />
            {/* <Testimonials /> */}
            <FAQs />
        </div>
    );
};

export default Homepage;
