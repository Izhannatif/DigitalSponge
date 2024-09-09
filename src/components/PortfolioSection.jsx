// import React, { useState, useEffect } from 'react';
// import 'yet-another-react-lightbox/styles.css'; // Lightbox styles
// import Lightbox from 'yet-another-react-lightbox'; // Import Lightbox
// import exploreHeading from '../assets/explore-heading.png';
// import sponge from '../assets/sponge.png'; // Make sure the path to your sponge image is correct

// const categories = [
//     '3D Animation',
//     '3D Model',
//     'Animations',
//     'Comics',
//     'Emotes',
//     'Illustrations',
//     'Logos',
//     'Realistic',
//     'Twitch',
// ];

// const PortfolioSection = () => {
//     const [activeCategory, setActiveCategory] = useState('Animations');
//     const [isLoading, setIsLoading] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);
//     const [currentImage, setCurrentImage] = useState('');
//     const [imageIndex, setImageIndex] = useState(0);
//     useEffect(() => {
//         window.scrollTo(0, 0); // Scroll to top on component mount
//     }, []);
//     const images = {
//         '3D Animation': [
//             '../assets/3D/5.mp4',
//         ],
//         '3D Model': [
//             '../assets/3D/fullbody.jpg',
//         ],
//         Animations: [
//             '../assets/Animations/1.mp4',
//             '../assets/Animations/2.mp4',
//             '../assets/Animations/3.mp4',
//             '../assets/Animations/4.mp4',
//             '../assets/Animations/5.mp4',
            
//         ],
//         Comics: [
//             '../assets/Comics/1.PNG',
//             '../assets/Comics/2.PNG',
//             '../assets/Comics/3.PNG',
//             '../assets/Comics/4.PNG',
//             '../assets/Comics/5.PNG',
//             '../assets/Comics/6.png',
//             '../assets/Comics/7.png',
//             '../assets/Comics/8.png',
//             '../assets/Comics/9.png',
//         ],
//         Emotes: [
//             '../assets/Emotes/1.png',
//             '../assets/Emotes/2.png',
//             '../assets/Emotes/3.png',
//             '../assets/Emotes/4.png',
//             '../assets/Emotes/5.png',
//             '../assets/Emotes/6.png',
//             '../assets/Emotes/7.png',
//         ],
//         Illustrations: [
//             '../assets/Illustrations/1.png',
//             '../assets/Illustrations/2.png',
//             '../assets/Illustrations/3.png',
//             '../assets/Illustrations/4.png',
//             '../assets/Illustrations/5.png',
//             '../assets/Illustrations/6.png',
//             '../assets/Illustrations/7.png',
//             '../assets/Illustrations/8.png',
//             '../assets/Illustrations/9.png',
//             '../assets/Illustrations/10.png',
//             '../assets/Illustrations/11.png',
//             '../assets/Illustrations/12.png',
//             '../assets/Illustrations/13.png',
//             '../assets/Illustrations/14.png',
//         ],
//         Logos: [
//             '../assets/Logos/1.png',
//             '../assets/Logos/2.png',
//             '../assets/Logos/3.png',
//         ],
//         Realistic: [
//             '../assets/Realistic/1.png',
//             '../assets/Realistic/2.png',
//             '../assets/Realistic/3.png',
//             '../assets/Realistic/4.png',
//         ],
//         Twitch: [
//             '../assets/Twitch/1.png',
//             '../assets/Twitch/2.png',
//             '../assets/Twitch/3.png',
//             '../assets/Twitch/4.png',
//             '../assets/Twitch/5.png',
//         ],
//     };

//     useEffect(() => {
//         if (isLoading) {
//             const timer = setTimeout(() => {
//                 setIsLoading(false);
//             }, 2000); 

//             return () => clearTimeout(timer);
//         }
//     }, [isLoading]);

//     const handleCategoryChange = (category) => {
//         setIsLoading(true);
//         setActiveCategory(category);
//     };

//     const handleImageClick = (src, index) => {
//         setCurrentImage(src);
//         setImageIndex(index);
//         setIsOpen(true);
//     };

//     return (
//         <div className='px-4 md:px-12 pt-20'>
//             <img src={exploreHeading} className='w-full md:w-1/2 lg:w-1/3 pt-5 ' alt="Explore" />
//             <div className="portfolio-section flex flex-col lg:flex-row py-20 items-start bg-transparent">
//                 <div className="w-full lg:w-1/5 flex flex-wrap lg:flex-nowrap lg:flex-col items-start pb-10 lg:pb-0 lg:pr-10 gap-2">
//                     {categories.map((category) => (
//                         <button
//                             key={category}
//                             onClick={() => handleCategoryChange(category)}
//                             className={`lg:w-full py-2 md:py-10 px-4 md:px-6 text-left border font-bold text-sm md:text-xl border-black flex-shrink-0 ${activeCategory === category
//                                 ? 'bg-[#1f1f1f] text-white shadow-lg'
//                                 : 'bg-transparent text-black'
//                                 } transition-all duration-300 hover:bg-[#1f1f1f] hover:text-white`}
//                         >
//                             {category}
//                         </button>
//                     ))}
//                 </div>
//                 <div className="portfolio-items w-full lg:w-4/5 pt-10 lg:pt-0 lg:pl-10">
//                     {isLoading ? (
//                         <div className='absolute left-1/2 top-3/4 place-items-center'>
//                             <div className="spinner-container justify-center items-center place-items-center grid">
//                                 <div className="spinner">
//                                     <svg viewBox="0 0 100 100">
//                                         <path
//                                             id="circlePath"
//                                             d="M50,10 a40,40 0 1,1 0,80 a40,40 0 1,1 0,-80"
//                                             fill="transparent"
//                                         />
//                                         <text>
//                                             <textPath xlinkHref="#circlePath" startOffset="0%">
//                                                 digital • sponge • digital • sponge • digital • sponge •
//                                             </textPath>
//                                         </text>
//                                     </svg>
//                                     <div className="sponge-image">
//                                         <img src={sponge} alt="Sponge" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ) : (
//                         <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 place-items-center">
//                             {images[activeCategory].map((src, index) => (
//                                 <div
//                                     key={index}
//                                     className={`portfolio-item w-full h-[30vh] md:h-[30vh] lg:h-[50vh] rounded-sm transition-all duration-300`}
//                                     onClick={() => handleImageClick(src, index)}
//                                 >
//                                     {activeCategory === 'Animations' || activeCategory === '3D Animation' ? (
//                                         <video className='h-full w-full object-cover' muted loop autoPlay playsInline src={src} />
//                                     ) : (
//                                         <img className={`h-full w-full object-cover object-top hover:object-bottom transition-all duration-[3s]`} src={src} alt={`Project ${index + 1}`} />
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Lightbox component */}
//             {isOpen && (
//                 <Lightbox
//                     open={isOpen}
//                     close={() => setIsOpen(false)}
//                     slides={images[activeCategory].map((src) => ({
//                         src,
//                     }))}
//                     currentIndex={imageIndex}
//                     on={{
//                         click: () => setIsOpen(false),
//                     }}
//                 />
//             )}
//         </div>
//     );
// };

// export default PortfolioSection;


import React, { useState, useEffect } from 'react';
import 'yet-another-react-lightbox/styles.css'; // Lightbox styles
import Lightbox from 'yet-another-react-lightbox'; // Import Lightbox
import { Video } from 'yet-another-react-lightbox/plugins'; // Import the Video plugin
import exploreHeading from '../assets/explore-heading.png';
import sponge from '../assets/sponge.png'; // Make sure the path to your sponge image is correct

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
        window.scrollTo(0, 0); // Scroll to top on component mount
    }, []);

    const images = {
        '3D Animation': [
            { type: 'video', src: '../assets/3D/5.mp4' },
        ],
        '3D Model': [
            { type: 'image', src: '../assets/3D/fullbody.jpg' },
        ],
        Animations: [
            { type: 'video', src: '../assets/Animations/1.mp4' },
            { type: 'video', src: '../assets/Animations/2.mp4' },
            { type: 'video', src: '../assets/Animations/3.mp4' },
            { type: 'video', src: '../assets/Animations/4.mp4' },
            { type: 'video', src: '../assets/Animations/5.mp4' },
        ],
        Comics: [
            { type: 'image', src: '../assets/Comics/1.PNG' },
            { type: 'image', src: '../assets/Comics/2.PNG' },
            { type: 'image', src: '../assets/Comics/3.PNG' },
            { type: 'image', src: '../assets/Comics/4.PNG' },
            { type: 'image', src: '../assets/Comics/5.PNG' },
            { type: 'image', src: '../assets/Comics/6.PNG' },
            { type: 'image', src: '../assets/Comics/7.PNG' },
            { type: 'image', src: '../assets/Comics/8.PNG' },
            { type: 'image', src: '../assets/Comics/9.PNG' },

            // Add more images similarly...
        ],
        Emotes: [
            { type: 'image', src: '../assets/Emotes/1.png' },
            { type: 'image', src: '../assets/Emotes/2.png' },
            { type: 'image', src: '../assets/Emotes/3.png' },
            { type: 'image', src: '../assets/Emotes/4.png' },
            { type: 'image', src: '../assets/Emotes/5.png' },
            { type: 'image', src: '../assets/Emotes/6.png' },
            { type: 'image', src: '../assets/Emotes/7.png' },
            // Add more images similarly...
        ],
        Illustration:[
            { type: 'image', src: '../assets/Illustration/1.png' },
            { type: 'image', src: '../assets/Illustration/2.png' },
            { type: 'image', src: '../assets/Illustration/3.png' },
            { type: 'image', src: '../assets/Illustration/4.png' },
            { type: 'image', src: '../assets/Illustration/5.png' },
            { type: 'image', src: '../assets/Illustration/6.png' },
            { type: 'image', src: '../assets/Illustration/7.png' },
            { type: 'image', src: '../assets/Illustration/8.png' },
            { type: 'image', src: '../assets/Illustration/9.png' },
            { type: 'image', src: '../assets/Illustration/10.png' },
            { type: 'image', src: '../assets/Illustration/11.png' },
            { type: 'image', src: '../assets/Illustration/12.png' },
            { type: 'image', src: '../assets/Illustration/13.png' },
            { type: 'image', src: '../assets/Illustration/14.png' },
        ],
        Logos:[
            { type: 'image', src: '../assets/Logos/1.png' },
            { type: 'image', src: '../assets/Logos/2.png' },
            { type: 'image', src: '../assets/Logos/3.png' },
            ],
            
        Realistic:[
            { type: 'image', src: '../assets/Realistic/1.png' },
            { type: 'image', src: '../assets/Realistic/2.png' },
            { type: 'image', src: '../assets/Realistic/3.png' },
            { type: 'image', src: '../assets/Realistic/4.png' },
        ],

        Twitch:[
            { type: 'image', src: '../assets/Twitch/1.png' },
            { type: 'image', src: '../assets/Twitch/2.png' },
            { type: 'image', src: '../assets/Twitch/3.png' },
            { type: 'image', src: '../assets/Twitch/4.png' },
            { type: 'image', src: '../assets/Twitch/5.png' },
        ]
        // Add similar mappings for other categories...
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
        <div className='px-4 md:px-12 pt-20'>
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
                        <div className='absolute left-1/2 top-3/4 place-items-center'>
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
                                        <video className='h-full w-full object-cover' muted loop autoPlay playsInline src={item.src} />
                                    ) : (
                                        <img className={`h-full w-full object-cover object-top hover:object-bottom transition-all duration-[3s]`} src={item.src} alt={`Project ${index + 1}`} />
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Lightbox component */}
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
                />
            )}
        </div>
    );
};

export default PortfolioSection;
