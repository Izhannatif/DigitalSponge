import React, { useEffect, useState } from 'react';
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
    const [images, setImages] = useState([]);
    const [visibleItems, setVisibleItems] = useState(4);

    useEffect(() => {
        loadImages(activeCategory);
    }, [activeCategory]);

    const loadImages = async (category) => {
        const basePath = `../assets/${category}`;
        let imgArray = [];

        const fetchImages = async (totalImages) => {
            for (let i = 1; i <= totalImages; i++) {
                const imgSrc = `${basePath}/${i}.png`;
                try {
                    const res = await fetch(imgSrc);
                    if (res.ok) {
                        console.log(`Loaded image: ${imgSrc}`);
                        imgArray.push(imgSrc);
                    }
                } catch (err) {
                    console.error(`Failed to load image: ${imgSrc}`);
                }
            }
        };

        switch (category) {
            case 'Comics':
                await fetchImages(7);
                break;
            case 'Illustrations':
                await fetchImages(14);
                break;
            case 'Emotes':
                await fetchImages(7);
                break;
            case 'Realistic':
                await fetchImages(4);
                break;
            case 'Twitch':
                await fetchImages(5);
                break;
            case 'Logos':
                await fetchImages(3);
                break;
            default:
                console.error('Unknown category');
        }

        setImages(imgArray);
        setVisibleItems(4);
    };

    const loadMoreItems = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
    };

    return (
        <div className='px-4 md:px-12 pt-20'>
            <img src={exploreHeading} className='w-full md:w-1/3 lg:w-1/4 pt-5 mx-auto' alt="Explore" />
            <div className="portfolio-section flex flex-col lg:flex-row py-20 items-start bg-transparent">
                <div className="w-full lg:w-1/5 flex flex-wrap lg:flex-nowrap lg:flex-col items-start pb-10 lg:pb-0 lg:pr-10 gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
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
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center">
                        {images.slice(0, visibleItems).map((src, index) => (
                            <div key={index} className={`portfolio-item w-full md:h-[30vh] lg:h-[50vh] border-2 border-stone-900 rounded-sm shadow-[3px_3px_0px_#1f1f1f] hover:shadow-[5px_5px_0px_#1f1f1f] transition-all duration-300`}>
                                <img className={`h-full w-full object-cover object-top hover:object-bottom transition-all duration-[3s]`} src={src} alt={`Project ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    {visibleItems < images.length && (
                        <div className="flex justify-center mt-10">
                            <button
                                onClick={loadMoreItems}
                                className="px-5 py-3 bg-[#facb0d] text-stone-950 text-lg font-bold shadow-[5px_5px_0px_#1f1f1f] hover:shadow-[3px_3px_0px_#1f1f1f] transition-all duration-300"
                            >
                                Load More
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;
