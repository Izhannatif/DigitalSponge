// import React, { useEffect } from 'react'
// import DSTextAnimation from '../components/DSTextAnimation'
// import About from '../components/About'
// import ServicesSection from '../components/Services'
// import OurWork from '../components/OurWork'
// import Contact from '../components/Contact'
// import Testimonials from '../components/Testimonials'

// const Homepage = () => {
//     useEffect(()=>{
//         window.scrollTo(0, 0);
//     })
//     return (
//         <>
//             <DSTextAnimation />
//             <About />
//             <ServicesSection />
//             <OurWork />
//             <Testimonials />
//         </>
//     )
// }

// export default Homepage

import React, { useRef, useEffect, useState } from 'react';
import DSTextAnimation from '../components/DSTextAnimation';
import About from '../components/About';
import ServicesSection from '../components/Services';
import OurWork from '../components/OurWork';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import Loader from '../components/Loader';

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
            <DSTextAnimation servicesRef={servicesRef} aboutRef={aboutRef} ourWorkRef={ourWorkRef} testimonialsRef={testimonialsRef} processRef={processRef} />
            <About ref={aboutRef} />
            {/* <ServicesSection ref={servicesRef} /> */}
            <OurWork ref={ourWorkRef} />
            <Process ref={processRef} />
            <Testimonials ref={testimonialsRef} />

        </>

    );
};

export default Homepage;
