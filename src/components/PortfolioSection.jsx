import React, { useState } from 'react';
import exploreHeading from '../assets/explore-heading.png';

const categories = [
    'Comics',
    'Emotes',
    'Illustrations',
    'Logos',
    'Realistic',
    'Twitch',
];

const PortfolioSection = () => {
    const [activeCategory, setActiveCategory] = useState('Comics');

    const images = {
        Comics: [
            '../assets/Comics/1.png',
            '../assets/Comics/2.png',
            '../assets/Comics/3.png',
            '../assets/Comics/4.png',
            '../assets/Comics/5.png',
            '../assets/Comics/6.png',
            '../assets/Comics/7.png',
        ],
        Emotes: [
            '../assets/Emotes/1.png',
            '../assets/Emotes/2.png',
            '../assets/Emotes/3.png',
            '../assets/Emotes/4.png',
            '../assets/Emotes/5.png',
            '../assets/Emotes/6.png',
            '../assets/Emotes/7.png',
        ],
        Illustrations: [
            '../assets/Illustrations/1.png',
            '../assets/Illustrations/2.png',
            '../assets/Illustrations/3.png',
            '../assets/Illustrations/4.png',
            '../assets/Illustrations/5.png',
            '../assets/Illustrations/6.png',
            '../assets/Illustrations/7.png',
            '../assets/Illustrations/8.png',
            '../assets/Illustrations/9.png',
            '../assets/Illustrations/10.png',
            '../assets/Illustrations/11.png',
            '../assets/Illustrations/12.png',
            '../assets/Illustrations/13.png',
            '../assets/Illustrations/14.png',
        ],
        Logos: [
            '../assets/Logos/1.png',
            '../assets/Logos/2.png',
            '../assets/Logos/3.png',
        ],
        Realistic: [
            '../assets/Realistic/1.png',
            '../assets/Realistic/2.png',
            '../assets/Realistic/3.png',
            '../assets/Realistic/4.png',
        ],
        Twitch: [
            '../assets/Twitch/1.png',
            '../assets/Twitch/2.png',
            '../assets/Twitch/3.png',
            '../assets/Twitch/4.png',
            '../assets/Twitch/5.png',
        ],
    };

    return (
        <div className='px-4 md:px-12 pt-20'>
            <img src={exploreHeading} className='w-full md:w-1/2 lg:w-1/3 pt-5 ' alt="Explore" />
            <div className="portfolio-section flex flex-col lg:flex-row py-20 items-start bg-transparent">
                <div className="w-full lg:w-1/5 flex flex-wrap lg:flex-nowrap lg:flex-col items-start pb-10 lg:pb-0 lg:pr-10 gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory('');
                                setActiveCategory(category);
                            }}
                            className={`lg:w-full py-2 md:py-10 px-4 md:px-6 text-left border font-bold text-sm md:text-xl border-black flex-shrink-0 ${activeCategory === category
                                ? 'bg-[#1f1f1f] text-white shadow-lg'
                                : 'bg-transparent text-black'
                                } transition-all duration-300 hover:bg-[#1f1f1f] hover:text-white`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="portfolio-items w-full lg:w-4/5 pt-10 lg:pt-0 lg:pl-10">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 place-items-center">
                        {images[activeCategory].map((src, index) => (
                            <div key={index} className={`portfolio-item w-full md:h-[30vh] lg:h-[50vh] rounded-sm transition-all duration-300`}>
                                <img loading='lazy' className={`h-full w-full object-cover object-top hover:object-bottom transition-all duration-[3s]`} src={src} alt={`Project ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;
