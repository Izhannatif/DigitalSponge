import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouteLink, useNavigate, useLocation } from 'react-router-dom';
import { RiMenu4Fill } from 'react-icons/ri';
import { MdArrowOutward } from "react-icons/md";
import { CgClose } from 'react-icons/cg';
import { AnimatePresence, motion } from 'framer-motion';
import logoIcon from '../assets/logos/logo-icon.png';
import logoText from '../assets/logos/logo-text.png';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkSectionVisible, setIsDarkSectionVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsDarkSectionVisible(true);
        } else {
          setIsDarkSectionVisible(false);
        }
      },
      {
        threshold: 0.1, // Adjust this threshold as needed
        rootMargin: '0px 0px -70% 0px', // Adjust the root margin if needed
      }
    );

    const darkSection = document.getElementById('process');
    if (darkSection) {
      observer.observe(darkSection);
    }

    return () => {
      if (darkSection) {
        observer.unobserve(darkSection);
      }
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (to) => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      scrollToSection(to);
      toggleMenu();
    }
  };

  const scrollToSection = (section) => {
    setTimeout(() => {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 500,
      });
    }, 100);
  };

  return (
    <div className={`max-w-full w-full h-16 border-t-0 border-b-2 border-black flex justify-between items-center tracking-wide fixed z-50`}>
      <div className={`flex h-full ${!menuOpen ? 'w-full backdrop-blur-md' : ''}`}>
        <div onClick={toggleMenu} className={`${!menuOpen ? 'bg-[#ffd21d] text-white' : 'bg-transparent text-black border-b-2'} text-3xl font-bold h-full w-16 grid place-items-center hover:text-black hover:bg-white transition-all duration-500 border-r-2 border-black z-50`}>
          <div>{menuOpen ? <CgClose /> : <RiMenu4Fill />}</div>
        </div>

        <RouteLink to={'/'}>
          <div className='text-xl p-2 text-black font-bold h-full w-max flex hover:text-[#fccb0d] transition-all duration-500 border-r-2 border-black text-center leading-none'>
          <img src={logoIcon} className={`w-20 object-contain ${isDarkSectionVisible ? '' : ''}`} alt="Logo" />
          <img src={logoText} className={`w-20 object-contain ${isDarkSectionVisible ? 'inverted-logo' : ''}`} alt="Logo" />
          </div>
        </RouteLink>
      </div>

      <div className={`text-sm lg:text-md grid px-5 lg:px-10 md:border-l-2 border-black h-full w-48 lg:w-40 place-items-center backdrop-blur-md font-semibold hover:bg-[#fccb0d] hover:text-white duration-500 transition-all `}>
        <RouteLink to={'/payment'}>
          <p className={`${isDarkSectionVisible ? 'inverted-logo' : ''}`}>PAY NOW</p>
        </RouteLink>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`overlay-menu fixed inset-0 bg-white text-black flex flex-row items-center justify-start pt-10 lg:pt-0 z-20 text-left max-h-screen`}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key="menu"
          >
            <div className="w-full lg:w-1/2 pl-0 lg:pl-20 max-h-screen">
              <ul className="text-2xl h-full flex flex-col justify-evenly font-bold lg:font-semibold">
                <li className='overlay-menu-item text-5xl lg:text-7xl'>
                  <ScrollLink to='home' onClick={() => handleNavigation('home')} smooth={true} duration={500}>Home</ScrollLink>
                  <div className='overlay-menu-arrow'>
                    <MdArrowOutward size={50} className='bg-black rounded-full text-white p-1' />
                  </div>
                </li>
                <hr className='w-full border-stone-500' />
                <li className='overlay-menu-item text-5xl lg:text-7xl'>
                  <ScrollLink to='about' onClick={() => handleNavigation('about')} smooth={true} duration={500}>About</ScrollLink>
                  <div className='overlay-menu-arrow'>
                    <MdArrowOutward size={50} className='bg-black rounded-full text-white p-1' />
                  </div>
                </li>
                <hr className='w-full border-stone-500' />
                <li className='overlay-menu-item text-5xl lg:text-7xl'>
                  <ScrollLink to='work' onClick={() => handleNavigation('work')} smooth={true} duration={500}>Work</ScrollLink>
                  <div className='overlay-menu-arrow'>
                    <MdArrowOutward size={50} className='bg-black rounded-full text-white p-1' />
                  </div>
                </li>
                <hr className='w-full border-stone-500' />
                <li className='overlay-menu-item text-5xl lg:text-7xl'>
                  <ScrollLink to='services' onClick={() => handleNavigation('services')} smooth={true} duration={500}>Services</ScrollLink>
                  <div className='overlay-menu-arrow'>
                    <MdArrowOutward size={50} className='bg-black rounded-full text-white p-1' />
                  </div>
                </li>
                <hr className='w-full border-stone-500' />
                <li className='overlay-menu-item text-5xl lg:text-7xl'>
                  <ScrollLink to='process' onClick={() => handleNavigation('process')} smooth={true} duration={500}>Process</ScrollLink>
                  <div className='overlay-menu-arrow'>
                    <MdArrowOutward size={50} className='bg-black rounded-full text-white p-1' />
                  </div>
                </li>
                <hr className='w-full border-stone-500' />
                <li className='overlay-menu-item text-5xl lg:text-7xl'>
                  <RouteLink to='/contact' onClick={toggleMenu}>Contact</RouteLink>
                  <div className='overlay-menu-arrow'>
                    <MdArrowOutward size={50} className='bg-black rounded-full text-white p-1' />
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
