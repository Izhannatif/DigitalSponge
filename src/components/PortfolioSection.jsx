import React, { useEffect, useState } from 'react';
import exploreHeading from '../assets/explore-heading.png';

const categories = [
    'All',
    // '2D Animation',
    // '3D Animation',
    'Comics',
    'Emotes',
    'Illustrations',
    'Logos',
    'Realistic',
    'Twitch',
    // 'Graphic Design',
];

const PortfolioSection = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [images, setImages] = useState([]);
    const [visibleItems, setVisibleItems] = useState(4);

    useEffect(() => {
        loadImages(activeCategory);
    }, [activeCategory]);

    const loadImages = async (category) => {
        const basePath = `../assets/`;
        let allImages = [];

        const fetchImages = async (categoryPath) => {
            let imgArray = [];
            if (category == 'Comics') {
                for (let i = 1; i <= 7; i++) {
                    const imgSrc = `${categoryPath}/${i}.PNG`;
                    const res = await fetch(imgSrc);
                    if (res.ok) {
                        console.log(imgSrc);
                        imgArray.push(imgSrc);
                    }

                }
            }
            if (category == 'Illustrations') {
                for (let i = 1; i <= 14; i++) {
                    const imgSrc = `${categoryPath}/${i}.png`;
                    const res = await fetch(imgSrc);
                    if (res.ok) {
                        console.log(imgSrc);
                        imgArray.push(imgSrc);
                    }
                }
            }
            if (category == 'Emotes') {
                for (let i = 1; i <= 7; i++) {
                    const imgSrc = `${categoryPath}/${i}.png`;
                    const res = await fetch(imgSrc);
                    if (res.ok) {
                        console.log(imgSrc);
                        imgArray.push(imgSrc);
                    }
                }
            }
            
            if (category == 'Realistic') {
                for (let i = 1; i <= 4; i++) {
                    const imgSrc = `${categoryPath}/${i}.png`;
                    const res = await fetch(imgSrc);
                    if (res.ok) {
                        console.log(imgSrc);
                        imgArray.push(imgSrc);
                    }
                }
            }
            if (category == 'Twitch') {
                for (let i = 1; i <= 5; i++) {
                    const imgSrc = `${categoryPath}/${i}.png`;
                    const res = await fetch(imgSrc);
                    if (res.ok) {
                        console.log(imgSrc);
                        imgArray.push(imgSrc);
                    }
                }
            }
            
            if (category == 'Logos') {
                for (let i = 1; i <= 3; i++) {
                    const imgSrc = `${categoryPath}/${i}.png`;
                    const res = await fetch(imgSrc);
                    if (res.ok) {
                        console.log(imgSrc);
                        imgArray.push(imgSrc);
                    }
                }
            }
            return imgArray;
        };

        if (category === 'All') {
            for (let cat of categories) {
                if (cat !== 'All') {
                    const catImages = await fetchImages(`${basePath}${cat}`);
                    allImages = [...allImages, ...catImages];
                }
            }
        } else {
            allImages = await fetchImages(`${basePath}${category}`);
        }

        setImages(allImages);
        setVisibleItems(4);
    };

    const loadMoreItems = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
    };

    return (
        <div className='pl-12 pt-20'>
            <img src={exploreHeading} className='w-1/4 pt-5' alt="Explore" />
            <div className="portfolio-section flex pl-12 py-20 items-start bg-transparent">
                <div className="categories w-1/5 flex flex-col grid-cols-2 items-start pr-10 gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`py-10 px-6 text-left w-full border font-bold text-xl border-black ${activeCategory === category
                                ? 'bg-[#1f1f1f] text-white shadow-lg'
                                : 'bg-transparent text-black'
                                } transition-all duration-300 hover:bg-[#1f1f1f] hover:text-white`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="portfolio-items w-3/4 pl-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                        {images.slice(0, visibleItems).map((src, index) => (
                            <div key={index} className={`portfolio-item w-full h-[50vh] border-2 border-stone-900 rounded-sm shadow-[3px_3px_0px_#1f1f1f] hover:shadow-[5px_5px_0px_#1f1f1f] transition-all duration-300 `}>
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
