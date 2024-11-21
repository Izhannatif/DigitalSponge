import React, { useState, useEffect } from 'react';
import 'yet-another-react-lightbox/styles.css'; // Lightbox styles
import Lightbox from 'yet-another-react-lightbox'; // Import Lightbox
import { Video } from 'yet-another-react-lightbox/plugins'; // Import the Video plugin
import exploreHeading from '../assets/explore-heading.png';
import sponge from '../assets/sponge.png'; // Make sure the path to your sponge image is correct
import Scrollbar from 'smooth-scrollbar';

const categories = [
    '3D Animation',
    '3D Model',
    'Animations',
    'Comics',
    'Emotes',
    'Illustrations',
    'Logos',
    'Realistic',
    'Twitch',
];

const PortfolioSection = () => {
    const [activeCategory, setActiveCategory] = useState('Animations');
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    useEffect(() => {
        const scrollbar = Scrollbar.init(document.querySelector('#scroll-container'), {
            damping: 0.1, // Adjust damping to control scroll speed
        });

        return () => scrollbar.destroy(); // Clean up on component unmount
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on component mount
    }, []);

    const images = {
        '3D Animation': [
            { type: 'video', src: '/assets/3D/5.mp4' },
        ],
        '3D Model': [
            { type: 'image', src: '/assets/3D/fullbody.webp' },
        ],
        Animations: [
            { type: 'video', src: '/assets/Animations/1.mp4' },
            { type: 'video', src: '/assets/Animations/2.mp4' },
            { type: 'video', src: '/assets/Animations/3.mp4' },
            { type: 'video', src: '/assets/Animations/4.mp4' },
            { type: 'video', src: '/assets/Animations/5.mp4' },
        ],
        Comics: [
            { type: 'image', src: '/assets/Comics/1.webp' },
            { type: 'image', src: '/assets/Comics/2.webp' },
            { type: 'image', src: '/assets/Comics/3.webp' },
            { type: 'image', src: '/assets/Comics/4.webp' },
            { type: 'image', src: '/assets/Comics/5.webp' },
            { type: 'image', src: '/assets/Comics/6.webp' },
            { type: 'image', src: '/assets/Comics/7.webp' },
            { type: 'image', src: '/assets/Comics/8.webp' },
            { type: 'image', src: '/assets/Comics/9.webp' },
        ],
        Emotes: [
            { type: 'image', src: '/assets/Emotes/1.webp' },
            { type: 'image', src: '/assets/Emotes/2.webp' },
            { type: 'image', src: '/assets/Emotes/3.webp' },
            { type: 'image', src: '/assets/Emotes/4.webp' },
            { type: 'image', src: '/assets/Emotes/5.webp' },
            { type: 'image', src: '/assets/Emotes/6.webp' },
            { type: 'image', src: '/assets/Emotes/7.webp' },
        ],
        Illustrations:[
            { type: 'image', src: '/assets/Illustrations/1.webp' },
            { type: 'image', src: '/assets/Illustrations/2.webp' },
            { type: 'image', src: '/assets/Illustrations/3.webp' },
            { type: 'image', src: '/assets/Illustrations/4.webp' },
            { type: 'image', src: '/assets/Illustrations/5.webp' },
            { type: 'image', src: '/assets/Illustrations/6.webp' },
            { type: 'image', src: '/assets/Illustrations/7.webp' },
            { type: 'image', src: '/assets/Illustrations/8.webp' },
            { type: 'image', src: '/assets/Illustrations/9.webp' },
            { type: 'image', src: '/assets/Illustrations/10.webp' },
            { type: 'image', src: '/assets/Illustrations/11.webp' },
            { type: 'image', src: '/assets/Illustrations/12.webp' },
            { type: 'image', src: '/assets/Illustrations/13.webp' },
            { type: 'image', src: '/assets/Illustrations/14.webp' },
            { type: 'image', src: '/assets/Illustrations/15.webp' },
            { type: 'image', src: '/assets/Illustrations/16.webp' },
            { type: 'image', src: '/assets/Illustrations/17.webp' },
            { type: 'image', src: '/assets/Illustrations/18.webp' },
            { type: 'image', src: '/assets/Illustrations/19.webp' },
            { type: 'image', src: '/assets/Illustrations/20.webp' },
            { type: 'image', src: '/assets/Illustrations/21.webp' },
            { type: 'image', src: '/assets/Illustrations/22.webp' },
            { type: 'image', src: '/assets/Illustrations/23.webp' },
            { type: 'image', src: '/assets/Illustrations/24.webp' },
            { type: 'image', src: '/assets/Illustrations/25.webp' },
            { type: 'image', src: '/assets/Illustrations/26.webp' },
            { type: 'image', src: '/assets/Illustrations/27.webp' },
            { type: 'image', src: '/assets/Illustrations/28.webp' },
            { type: 'image', src: '/assets/Illustrations/29.webp' },
            
        ],
        Logos:[
            { type: 'image', src: '/assets/Logos/1.webp' },
            { type: 'image', src: '/assets/Logos/2.webp' },
            { type: 'image', src: '/assets/Logos/3.webp' },
            { type: 'image', src: '/assets/Logos/4.webp' },
            { type: 'image', src: '/assets/Logos/5.webp' },
            { type: 'image', src: '/assets/Logos/6.webp' },
            { type: 'image', src: '/assets/Logos/7.webp' },
            ],
            
        Realistic:[
            { type: 'image', src: '/assets/Realistic/1.webp' },
            { type: 'image', src: '/assets/Realistic/2.webp' },
            { type: 'image', src: '/assets/Realistic/3.webp' },
            { type: 'image', src: '/assets/Realistic/4.webp' },
        ],

        Twitch:[
            { type: 'image', src: '/assets/Twitch/1.webp' },
            { type: 'image', src: '/assets/Twitch/2.webp' },
            { type: 'image', src: '/assets/Twitch/3.webp' },
            { type: 'image', src: '/assets/Twitch/4.webp' },
            { type: 'image', src: '/assets/Twitch/5.webp' },
            { type: 'image', src: '/assets/Twitch/6.webp' },
            { type: 'image', src: '/assets/Twitch/7.webp' },
            { type: 'image', src: '/assets/Twitch/8.webp' },
        ],
    };

    useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 2000); 

            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    const handleCategoryChange = (category) => {
        setIsLoading(true);
        setActiveCategory(category);
    };

    const handleImageClick = (index) => {
        setImageIndex(index);
        setIsOpen(true);
    };

    return (
        <div id='scroll-container' className='px-4 md:px-12 pt-20'>
            <img src={exploreHeading} className='w-full md:w-1/2 lg:w-1/3 pt-5 ' alt="Explore" />
            <div className="portfolio-section flex flex-col lg:flex-row py-20 items-start bg-transparent">
                <div className="w-full lg:w-1/5 flex flex-wrap lg:flex-nowrap lg:flex-col items-start pb-10 lg:pb-0 lg:pr-10 gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryChange(category)}
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
                    {isLoading ? (
                        <div className='absolute top-1/2 left-28 p-2 md:left-1/2 md:top-1/3 place-items-center'>
                            <div className="spinner-container justify-center items-center place-items-center grid">
                                <div className="spinner">
                                    <svg viewBox="0 0 100 100">
                                        <path
                                            id="circlePath"
                                            d="M50,10 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80"
                                            fill="transparent"
                                        />
                                        <text>
                                            <textPath xlinkHref="#circlePath" startOffset="0%">
                                                digital • sponge • digital • sponge • digital • sponge •
                                            </textPath>
                                        </text>
                                    </svg>
                                    <div className="sponge-image">
                                        <img src={sponge} alt="Sponge" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 place-items-center">
                            {images[activeCategory].map((item, index) => (
                                <div
                                    key={index}
                                    className={`portfolio-item w-full h-[30vh] md:h-[30vh] lg:h-[50vh] rounded-sm transition-all duration-300`}
                                    onClick={() => handleImageClick(index)}
                                >
                                    {item.type === 'video' ? (
                                        <video className='h-full w-full object-cover' muted loop autoPlay playsInline src={item.src} preload='none' />
                                    ) : (
                                        <img className={`h-full w-full object-cover object-top`} src={item.src} alt={`Project ${index + 1}`} 
                                        loading='lazy'
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            {isOpen && (
                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    slides={images[activeCategory]}
                    plugins={[Video]} // Enable video support
                    currentIndex={imageIndex}
                    on={{
                        click: () => setIsOpen(false),
                    }}
                    video={{
                        controls: true, // Show video controls if needed
                        autoplay: true, // Attempt to autoplay
                        playsInline:true,
                    }}
                />
            )}
        </div>
    );
};

export default PortfolioSection;
