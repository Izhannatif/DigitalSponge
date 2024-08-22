import React, { useState, useEffect } from 'react';
import sponge from '../assets/sponge.png';
import { IoIosArrowRoundDown } from 'react-icons/io';
import { CiDesktopMouse1 } from 'react-icons/ci';
import Marquee from 'react-fast-marquee';
import servicesText from '../assets/services-text.png';
import { FaArrowUp } from "react-icons/fa";
import logo from '../assets/logos/5.png'


const fontFamilies = ['bangers', 'Lobster', 'Bebas Neue', ''];
const fontStyles = ['normal'];
const colors = ['#ffcc00', '#1a1a1a'];
const DSTextAnimation = () => {
    const [letterStyles, setLetterStyles] = useState(
        'DIGITAL SPONGE'.split('').map(() => ({
            fontFamily: fontFamilies[Math.floor(Math.random() * fontFamilies.length)],
            fontStyle: fontStyles[Math.floor(Math.random() * fontStyles.length)],
            color: colors[Math.floor(Math.random() * colors.length)]
        }))
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLetterStyles((prevStyles) =>
                prevStyles.map(() => ({
                    fontFamily: fontFamilies[Math.floor(Math.random() * fontFamilies.length)],
                    fontStyle: fontStyles[Math.floor(Math.random() * fontStyles.length)],
                    color: colors[Math.floor(Math.random() * colors.length)]
                }))
            );
        }, 400);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className="animation-container fixed z-10 ">
            <div className="background bg-transition"></div>
            <div className="overlay"></div>

            <h1 className='hidden md:block'>
                {Array.from('DIGITAL SPONGE').map((letter, index) => (
                    <span
                        key={index}
                        className="letter fadeInUp text-6xl md:text-7xl lg:text-8xl xl:text-9xl md:tracking-widest font-semibold drop-shadow-md hover:scale-110"
                        style={{
                            fontFamily: letterStyles[index].fontFamily,
                            fontStyle: letterStyles[index].fontStyle,
                            color: letterStyles[index].color,
                            textShadow: letterStyles[index].color === '#ffcc00' ? '4px 4px 0px #1f1f1f' : '4px 4px 0px #facb0d'
                        }}
                    >
                        {letter}
                    </span>
                ))}
            </h1>
            <h1 className="text-center block md:hidden">
                {['DIGITAL', 'SPONGE'].map((word, wordIndex) => (
                    <span key={wordIndex} className="block">
                        {Array.from(word).map((letter, index) => (
                            <span
                                key={index}
                                className="letter fadeInUp text-8xl md:text-7xl lg:text-8xl xl:text-9xl md:tracking-widest tracking-wider font-semibold drop-shadow-md hover:scale-110"
                                style={{
                                    fontFamily: letterStyles[index].fontFamily,
                                    fontStyle: letterStyles[index].fontStyle,
                                    color: letterStyles[index].color,
                                    textShadow: letterStyles[index].color === '#ffcc00' ? '4px 4px 0px #1f1f1f' : '4px 4px 0px #facb0d'
                                }}
                            >
                                {letter}
                            </span>
                        ))}
                    </span>
                ))}
            </h1>
            <div className='text-2xl relative my-10 w-max text-center'>
                WELCOME TO THE <p className='bg-[#facb0d] text-white p-1 drop-shadow-[3px_3px_0px_#1f1f1f]'> WORLD OF ART</p>
            </div>
            <div className='bg-[#ffcc00] w-full absolute bottom-5 z-30'>
                <Marquee className='w-full py-3' loop={0} autoFill={true} speed={70} direction='right' >
                    <p className='text-5xl font-white flex justify-center items-center gap-3 font-black'>
                        LET'S TALK <FaArrowUp className='h-10 w-10 rotate-[40deg] font-thin' /> <span className='font-semibold text-4xl'> INFO@DIGITALSPONGE.US &nbsp;</span>
                    </p>
                </Marquee>
            </div>
            <div className='bg-gradient-to-b from-[#35353583] to-[#080808a6] w-full absolute bottom-6 z-20 rotate-[4deg] md:rotate-[2deg]'>
                <Marquee className='w-full py-8'>
                </Marquee>
            </div>
            <div className='bg-gradient-to-b to-[#35353583] from-[#080808a6] w-full absolute bottom-6 z-20 rotate-[-4deg] md:rotate-[-2deg]'>
                <Marquee className='w-full py-8'>
                </Marquee>
            </div>
        </div>
    );
};

export default DSTextAnimation;
