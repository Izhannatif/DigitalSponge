import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import sponge from '../assets/sponge.png'
import { RiMenu4Fill } from 'react-icons/ri';
import { MdArrowOutward } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';
import DS1 from '../assets/DS1.png'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`w-full h-16  border-t-2 border-b-2 border-black flex justify-between items-center tracking-wide fixed z-50 bg-white/90 `}>
      <div className='flex h-full '>

        <div onClick={toggleMenu} className={`${!menuOpen ? 'bg-[#fccb0d] text-white' : 'bg-transparent text-black'} text-3xl font-bold h-full w-16 grid place-items-center hover:text-black hover:bg-white transition-all duration-500 border-r-2 border-black z-30`}>
          <div><RiMenu4Fill /></div>
        </div>

      <Link to={'/'}> <div className=' bg-black text-xl p-2 text-black font-bold h-full w-max grid place-items-center hover:text-[#fccb0d] transition-all duration-500 border-r-2 border-black text-center leading-none'>
          {/* <div>Digtal<br/>Sponge.</div> */}
          <img src={DS1} className='h-10' alt="" />
        </div></Link>


      </div>

      <div className='px-10 border-l-2 border-black h-full grid place-items-center font-semibold hover:bg-[#fccb0d] hover:text-white duration-500 transition-all'>
        <p className=' '>PAY NOW
        </p>

      </div>
      <div className='h-full w-16 fixed left-0 top-16 border-r-2 border-black z-30'></div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`overlay-menu fixed inset-0 bg-white text-black flex flex-row items-center justify-start pt-10 lg:pt-0 z-20  text-left`}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            key="menu"
          >
            <div className="w-full lg:w-1/2 pl-0 lg:pl-20 h-full ">
              <ul className="text-2xl h-full flex flex-col justify-evenly font-bold lg:font-semibold">
                <li className='overlay-menu-item text-5xl lg:text-7xl'>
                  <Link to='home' onClick={toggleMenu}>Home</Link>
                  <div className='overlay-menu-arrow'>
                    <MdArrowOutward size={50} className=' bg-black rounded-full text-white p-1' />
                  </div>
                </li>
                <hr className='w-full border-stone-500' />
                <li className='overlay-menu-item text-5xl lg:text-7xl'>
                  <Link to='about' onClick={toggleMenu}>About</Link>
                  <div className='overlay-menu-arrow'>
                    <MdArrowOutward size={50} className=' bg-black rounded-full text-white p-1' />
                  </div>
                </li>
                <hr className='w-full border-stone-500' />
                <li className='overlay-menu-item text-5xl lg:text-7xl'>
                  <Link to='work' onClick={toggleMenu}>Work</Link>
                  <div className='overlay-menu-arrow'>
                    <MdArrowOutward size={50} className=' bg-black rounded-full text-white p-1' />
                  </div>
                </li>
                <hr className='w-full border-stone-500' />
                <li className='overlay-menu-item text-5xl lg:text-7xl'>
                  <Link to='services' onClick={toggleMenu}>Services</Link>
                  <div className='overlay-menu-arrow'>
                    <MdArrowOutward size={50} className=' bg-black rounded-full text-white p-1' />
                  </div>
                </li>
                <hr className='w-full border-stone-500' />
                <li className='overlay-menu-item text-5xl lg:text-7xl'>
                  <Link to='process' onClick={toggleMenu}>Process</Link>
                  <div className='overlay-menu-arrow'>
                    <MdArrowOutward size={50} className=' bg-black rounded-full text-white p-1' />
                  </div>
                </li>
                <hr className='w-full border-stone-500' />
                <li className='overlay-menu-item text-5xl lg:text-7xl'>
                  <Link to='contact' onClick={toggleMenu}>Contact</Link>
                  <div className='overlay-menu-arrow'>
                    <MdArrowOutward size={50} className=' bg-black rounded-full text-white p-1' />
                  </div>
                </li>
              </ul>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar