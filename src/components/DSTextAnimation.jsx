import React, { useState, useEffect } from 'react';
import asset8 from '../assets/asset8.png';
import { CiDesktopMouse1 } from 'react-icons/ci';
import { IoIosArrowRoundDown } from 'react-icons/io';

const fontFamilies = ['bangers', 'Lobster', 'Bebas Neue', 'abril fatface'];
const fontStyles = ['normal'];
const colors = ['#fccb0d', '#1a1a1a'];

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
        }, 400); // Adjust interval as needed

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="animation-container">
            <div className="background bg-transition"></div>
            <div className="overlay"></div>

            <h1>
                {Array.from('DIGITAL SPONGE').map((letter, index) => (
                    <span
                        key={index}
                        className="letter fadeInUp text-9xl tracking-widest font-semibold drop-shadow-md hover:scale-110"
                        style={{
                            fontFamily: letterStyles[index].fontFamily,
                            fontStyle: letterStyles[index].fontStyle,
                            color: letterStyles[index].color,
                            textShadow: letterStyles[index].color === '#fccb0d' ? '3px 3px 0px #1f1f1f' :'3px 3px 0px #fccb0d'
                        }}
                    >
                        {letter}
                    </span>
                ))}
            </h1>

            <div className='text-2xl relative py-5' >
                WELCOME TO THE <span className='bg-[#fccb0d] text-white p-1 drop-shadow-[3px_3px_0px_#1f1f1f]'> WORLD OF FART</span>
            </div>

            <div className='absolute text-center flex flex-col justify-center items-center left-1/2 bottom-0'>
                <CiDesktopMouse1 size={30} className='text-black' />
                <div><p>Creativity </p> <p>below</p></div>
                <IoIosArrowRoundDown size={30} className='text-black animate-bounce pt-2' />
            </div>
        </div>
    );
}

export default DSTextAnimation;
