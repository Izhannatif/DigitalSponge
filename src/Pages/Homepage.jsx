import React, { useEffect } from 'react'
import DSTextAnimation from '../components/DSTextAnimation'
import About from '../components/About'
import ServicesSection from '../components/Services'
import OurWork from '../components/OurWork'
import Contact from '../components/Contact'

const Homepage = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    })
    return (
        <>
            <DSTextAnimation />
            <About />
            <ServicesSection />
            <OurWork />

        </>
    )
}

export default Homepage