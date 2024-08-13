import React, { useEffect, useState } from 'react';

const categories = [
    'All',
    'Web Development',
    'Illustrations',
    'Comics',
    'Animations',
    'SEO',
    'Graphic Design'
];

const portfolioItems = [
    { id: 1, title: 'Project 1', category: 'Comics' },
    { id: 2, title: 'Project 2', category: 'Illustration' },
    { id: 3, title: 'Project 3', category: 'Animations' },
    { id: 4, title: 'Project 4', category: 'SEO' },
    { id: 5, title: 'Project 5', category: 'Web Development' },
    { id: 6, title: 'Project 6', category: 'Graphic Design' }, 
    { id: 7, title: 'Project 7', category: 'Comics' },
    { id: 8, title: 'Project 8', category: 'Illustration' },
    { id: 9, title: 'Project 9', category: 'Animations' },
    { id: 10, title: 'Project 10', category: 'SEO' },
    { id: 11, title: 'Project 11', category: 'Web Development' },
    { id: 12, title: 'Project 12', category: 'Graphic Design' },
    // Add more items as needed
];

const PortfolioSection = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [visibleItems, setVisibleItems] = useState(4); // Number of items to show initially

    // Get items based on the selected category
    const itemsToDisplay = activeCategory === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === activeCategory);
    
    // Slicing the items to only show a limited number based on visibleItems state
    const displayedItems = itemsToDisplay.slice(0, visibleItems);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const loadMoreItems = () => {
        setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Load 4 more items
    };

    return (
        <div className='pl-32 pt-20'>
            <p className='drop-shadow-[4px_4px_0px_#1f1f1f] text-8xl text-[#fccb0d] font-extrabold py-5' style={{ WebkitTextStroke: '2px #1f1f1f' }}>
                EXPLORE
            </p>
            <div className="portfolio-section flex py-20 items-start bg-transparent">
                <div className="categories w-1/5 flex flex-col grid-cols-2 items-start pr-10 gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                setVisibleItems(4); // Reset visible items when category changes
                            }}
                            className={`py-10 px-6 text-left w-full  border font-bold text-xl border-black  ${activeCategory === category
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
                        {displayedItems.map((item) => (
                            <div key={item.id} className="portfolio-item p-5 w-full h-[50vh] border-2 border-stone-900 rounded-sm shadow-[3px_3px_0px_#1f1f1f] hover:shadow-[5px_5px_0px_#1f1f1f] transition-all duration-300 bg-white">
                                <h3 className="text-3xl font-bold mb-3 text-stone-900 ">{item.title}</h3>
                                <p className="text-xl text-stone-900">{item.category}</p>
                            </div>
                        ))}
                    </div>
                    {visibleItems < itemsToDisplay.length && (
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
