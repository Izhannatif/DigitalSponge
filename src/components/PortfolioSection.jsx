// // // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // // import exploreHeading from '../assets/explore-heading.png'
// // // // // // // // import illustration from '../assets/Illustrations/7.png'
// // // // // // // // const categories = [
// // // // // // // //     'All',
// // // // // // // //     '2D Animation',
// // // // // // // //     '3D Animation',
// // // // // // // //     'Comics',
// // // // // // // //     'Graphic Design',
// // // // // // // //     'Illustrations',

// // // // // // // // ];

// // // // // // // // const portfolioItems = [
// // // // // // // //     { id: 1, title: 'Project 1', category: 'Comics' },
// // // // // // // //     { id: 2, title: 'Project 2', category: 'Illustration', src: illustration },
// // // // // // // //     { id: 3, title: 'Project 3', category: 'Animations' },
// // // // // // // //     { id: 4, title: 'Project 4', category: 'SEO' },
// // // // // // // //     { id: 5, title: 'Project 5', category: 'Web Development' },
// // // // // // // //     { id: 6, title: 'Project 6', category: 'Graphic Design' },
// // // // // // // //     { id: 7, title: 'Project 7', category: 'Comics' },
// // // // // // // //     { id: 8, title: 'Project 8', category: 'Illustration' },
// // // // // // // //     { id: 9, title: 'Project 9', category: 'Animations' },
// // // // // // // //     { id: 10, title: 'Project 10', category: 'SEO' },
// // // // // // // //     { id: 11, title: 'Project 11', category: 'Web Development' },
// // // // // // // //     { id: 12, title: 'Project 12', category: 'Graphic Design' },
// // // // // // // //     // Add more items as needed
// // // // // // // // ];

// // // // // // // // const PortfolioSection = () => {
// // // // // // // //     const [activeCategory, setActiveCategory] = useState('All');
// // // // // // // //     const [visibleItems, setVisibleItems] = useState(4); // Number of items to show initially

// // // // // // // //     // Get items based on the selected category
// // // // // // // //     const itemsToDisplay = activeCategory === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === activeCategory);

// // // // // // // //     // Slicing the items to only show a limited number based on visibleItems state
// // // // // // // //     const displayedItems = itemsToDisplay.slice(0, visibleItems);

// // // // // // // //     useEffect(() => {
// // // // // // // //         window.scrollTo(0, 0);
// // // // // // // //     }, []);

// // // // // // // //     const loadMoreItems = () => {
// // // // // // // //         setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Load 4 more items
// // // // // // // //     };

// // // // // // // //     const illustrationUrl = '../assets/illustrations/'

// // // // // // // //     return (
// // // // // // // //         <div className='pl-12 pt-20'>
// // // // // // // //             {/* <p className='drop-shadow-[4px_4px_0px_#1f1f1f] text-8xl text-[#fccb0d] font-extrabold py-5' style={{ WebkitTextStroke: '2px #1f1f1f' }}>
// // // // // // // //                 EXPLORE
// // // // // // // //             </p> */}
// // // // // // // //             <img src={exploreHeading} className='w-1/4 pt-5' alt="" />
// // // // // // // //             <div className="portfolio-section flex pl-12 py-20 items-start bg-transparent">
// // // // // // // //                 <div className="categories w-1/5 flex flex-col grid-cols-2 items-start pr-10 gap-2">
// // // // // // // //                     {categories.map((category) => (
// // // // // // // //                         <button
// // // // // // // //                             key={category}
// // // // // // // //                             onClick={() => {
// // // // // // // //                                 setActiveCategory(category);
// // // // // // // //                                 setVisibleItems(4); // Reset visible items when category changes
// // // // // // // //                             }}
// // // // // // // //                             className={`py-10 px-6 text-left w-full  border font-bold text-xl border-black  ${activeCategory === category
// // // // // // // //                                 ? 'bg-[#1f1f1f] text-white shadow-lg'
// // // // // // // //                                 : 'bg-transparent text-black'
// // // // // // // //                                 } transition-all duration-300 hover:bg-[#1f1f1f] hover:text-white`}
// // // // // // // //                         >
// // // // // // // //                             {category}
// // // // // // // //                         </button>
// // // // // // // //                     ))}
// // // // // // // //                 </div>
// // // // // // // //                 <div className="portfolio-items w-3/4 pl-10">
// // // // // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
// // // // // // // //                         {displayedItems.map((item, i) => {
// // // // // // // //                             console.log(`${illustrationUrl}${i+1}.png`);
// // // // // // // //                             return < div key={item.id} className={`portfolio-item p-5 w-full h-[50vh] border-2 border-stone-900 rounded-sm shadow-[3px_3px_0px_#1f1f1f] hover:shadow-[5px_5px_0px_#1f1f1f] transition-all duration-300`
// // // // // // // //                             }>
// // // // // // // //                                 <h3 className="text-3xl font-bold mb-3 text-stone-900 ">{item.title}</h3>
// // // // // // // //                                 <p className="text-xl text-stone-900">{item.category}</p>
// // // // // // // //                                 {/* <img className='h-20' src=`illustrationUrl i+1.png` alt="" /> */}
// // // // // // // //                             </div>
// // // // // // // //                         })}
// // // // // // // //                     </div>
// // // // // // // //                     {visibleItems < itemsToDisplay.length && (
// // // // // // // //                         <div className="flex justify-center mt-10">
// // // // // // // //                             <button
// // // // // // // //                                 onClick={loadMoreItems}
// // // // // // // //                                 className="px-5 py-3 bg-[#facb0d] text-stone-950 text-lg font-bold shadow-[5px_5px_0px_#1f1f1f] hover:shadow-[3px_3px_0px_#1f1f1f] transition-all duration-300"
// // // // // // // //                             >
// // // // // // // //                                 Load More
// // // // // // // //                             </button>
// // // // // // // //                         </div>
// // // // // // // //                     )}
// // // // // // // //                 </div>
// // // // // // // //             </div>
// // // // // // // //         </div >
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default PortfolioSection;


// // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // import exploreHeading from '../assets/explore-heading.png';
// // // // // // // // import image from '../assets/Illustrations/1.png'
// // // // // // // const categories = [
// // // // // // //     'All',
// // // // // // //     '2D Animation',
// // // // // // //     '3D Animation',
// // // // // // //     'Comics',
// // // // // // //     'Graphic Design',
// // // // // // //     'Illustrations',
// // // // // // // ];

// // // // // // // const portfolioItems = [
// // // // // // //     { id: 1, title: 'Project 1', category: 'Comics' },
// // // // // // //     { id: 2, title: 'Project 2', category: 'Illustrations' },
// // // // // // //     { id: 3, title: 'Project 3', category: 'Animations' },
// // // // // // //     { id: 4, title: 'Project 4', category: 'SEO' },
// // // // // // //     { id: 5, title: 'Project 5', category: 'Web Development' },
// // // // // // //     { id: 6, title: 'Project 6', category: 'Graphic Design' },
// // // // // // //     { id: 7, title: 'Project 7', category: 'Comics' },
// // // // // // //     { id: 8, title: 'Project 8', category: 'Illustrations' },
// // // // // // //     { id: 9, title: 'Project 9', category: 'Animations' },
// // // // // // //     { id: 10, title: 'Project 10', category: 'SEO' },
// // // // // // //     { id: 11, title: 'Project 11', category: 'Web Development' },
// // // // // // //     { id: 12, title: 'Project 12', category: 'Graphic Design' },
// // // // // // //     // Add more items as needed
// // // // // // // ];

// // // // // // // const getImageSrc = (category, id) => {
// // // // // // //     // Convert category to folder name (assuming they match)
// // // // // // //     // const folderName = category.replace(/\s+/g, ''); // Removes spaces from category names
// // // // // // //     try {
// // // // // // //         console.log(`../assets/${category}/${id}.png`);
// // // // // // //         return (`../assets/${category}/${id}.png`);
// // // // // // //     } catch (err) {
// // // // // // //         console.error(`Error loading image: ${err.message}`);
// // // // // // //         return require('../assets/sponge.png');
// // // // // // //     }
// // // // // // // };

// // // // // // // const PortfolioSection = () => {
// // // // // // //     const [activeCategory, setActiveCategory] = useState('All');
// // // // // // //     const [visibleItems, setVisibleItems] = useState(4); // Number of items to show initially

// // // // // // //     // Get items based on the selected category
// // // // // // //     const itemsToDisplay = activeCategory === 'All'
// // // // // // //         ? portfolioItems
// // // // // // //         : portfolioItems.filter(item => item.category === activeCategory);

// // // // // // //     // Slicing the items to only show a limited number based on visibleItems state
// // // // // // //     const displayedItems = itemsToDisplay.slice(0, visibleItems);

// // // // // // //     useEffect(() => {
// // // // // // //         window.scrollTo(0, 0);
// // // // // // //     }, []);

// // // // // // //     const loadMoreItems = () => {
// // // // // // //         setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Load 4 more items
// // // // // // //     };

// // // // // // //     return (
// // // // // // //         <div className='pl-12 pt-20'>
// // // // // // //             <img src={exploreHeading} className='w-1/4 pt-5' alt="Explore" />
// // // // // // //             <div className="portfolio-section flex pl-12 py-20 items-start bg-transparent">
// // // // // // //                 <div className="categories w-1/5 flex flex-col grid-cols-2 items-start pr-10 gap-2">
// // // // // // //                     {categories.map((category) => (
// // // // // // //                         <button
// // // // // // //                             key={category}
// // // // // // //                             onClick={() => {
// // // // // // //                                 setActiveCategory(category);
// // // // // // //                                 setVisibleItems(4); // Reset visible items when category changes
// // // // // // //                             }}
// // // // // // //                             className={`py-10 px-6 text-left w-full  border font-bold text-xl border-black  ${activeCategory === category
// // // // // // //                                 ? 'bg-[#1f1f1f] text-white shadow-lg'
// // // // // // //                                 : 'bg-transparent text-black'
// // // // // // //                                 } transition-all duration-300 hover:bg-[#1f1f1f] hover:text-white`}
// // // // // // //                         >
// // // // // // //                             {category}
// // // // // // //                         </button>
// // // // // // //                     ))}
// // // // // // //                 </div>
// // // // // // //                 <div className="portfolio-items w-3/4 pl-10">
// // // // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
// // // // // // //                         {displayedItems.map((item, i) => (
// // // // // // //                             <div key={item.id} className={`portfolio-item  w-full h-[50vh] border-2 border-stone-900 rounded-sm shadow-[3px_3px_0px_#1f1f1f] hover:shadow-[5px_5px_0px_#1f1f1f] transition-all duration-300 hover:p-2 `}>
// // // // // // //                                 {/* <h3 className="text-3xl font-bold mb-3 text-stone-900 ">{item.category} Project {item.id}</h3> */}
// // // // // // //                                 <img className='h-full w-full object-cover  object-top  transition-all duration-500' src={getImageSrc(item.category, i)} alt={`${item.category} Project ${item.id}`} />
// // // // // // //                             </div>
// // // // // // //                         ))}
// // // // // // //                     </div>
// // // // // // //                     {visibleItems < itemsToDisplay.length && (
// // // // // // //                         <div className="flex justify-center mt-10">
// // // // // // //                             <button
// // // // // // //                                 onClick={loadMoreItems}
// // // // // // //                                 className="px-5 py-3 bg-[#facb0d] text-stone-950 text-lg font-bold shadow-[5px_5px_0px_#1f1f1f] hover:shadow-[3px_3px_0px_#1f1f1f] transition-all duration-300"
// // // // // // //                             >
// // // // // // //                                 Load More
// // // // // // //                             </button>
// // // // // // //                         </div>
// // // // // // //                     )}
// // // // // // //                 </div>
// // // // // // //             </div>
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default PortfolioSection;


// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import exploreHeading from '../assets/explore-heading.png';

// // // // // // const categories = [
// // // // // //     'All',
// // // // // //     '2D Animation',
// // // // // //     '3D Animation',
// // // // // //     'Comics',
// // // // // //     'Graphic Design',
// // // // // //     'Illustrations',
// // // // // // ];

// // // // // // const PortfolioSection = () => {
// // // // // //     const [activeCategory, setActiveCategory] = useState('All');
// // // // // //     const [visibleItems, setVisibleItems] = useState(4); // Number of items to show initially
// // // // // //     const [images, setImages] = useState([]);

// // // // // //     useEffect(() => {
// // // // // //         window.scrollTo(0, 0);
// // // // // //     }, []);

// // // // // //     useEffect(() => {
// // // // // //         loadImages();
// // // // // //     }, [activeCategory]);

// // // // // //     const loadImages = (sum) => {
// // // // // //         const folderName = activeCategory === 'All' ? '' : activeCategory.replace(/\s+/g, '');
// // // // // //         const imagesList = [];
        
// // // // // //         // Assuming you have numbered image files like 1.png, 2.png, etc.
// // // // // //         for (let i = 1; i <= sum; i++) {  // Replace 100 with the max number of images you have in a category
// // // // // //             const imagePath = `${folderName}/${i}.png`;
// // // // // //             imagesList.push(imagePath);
// // // // // //         }

// // // // // //         setImages(imagesList);
// // // // // //     };

// // // // // //     const loadMoreItems = () => {
// // // // // //         setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Load 4 more items
// // // // // //     };

// // // // // //     return (
// // // // // //         <div className='pl-12 pt-20'>
// // // // // //             <img src={exploreHeading} className='w-1/4 pt-5' alt="Explore" />
// // // // // //             <div className="portfolio-section flex pl-12 py-20 items-start bg-transparent">
// // // // // //                 <div className="categories w-1/5 flex flex-col grid-cols-2 items-start pr-10 gap-2">
// // // // // //                     {categories.map((category) => (
// // // // // //                         <button
// // // // // //                             key={category}
// // // // // //                             onClick={() => {
// // // // // //                                 setActiveCategory(category);
// // // // // //                                 setVisibleItems(4); // Reset visible items when category changes
// // // // // //                             }}
// // // // // //                             className={`py-10 px-6 text-left w-full  border font-bold text-xl border-black  ${activeCategory === category
// // // // // //                                 ? 'bg-[#1f1f1f] text-white shadow-lg'
// // // // // //                                 : 'bg-transparent text-black'
// // // // // //                                 } transition-all duration-300 hover:bg-[#1f1f1f] hover:text-white`}
// // // // // //                         >
// // // // // //                             {category}
// // // // // //                         </button>
// // // // // //                     ))}
// // // // // //                 </div>
// // // // // //                 <div className="portfolio-items w-3/4 pl-10">
// // // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
// // // // // //                         {images.slice(0, visibleItems).map((image, index) => (
// // // // // //                             <div key={index} className={`portfolio-item w-full h-[50vh] border-2 border-stone-900 rounded-sm shadow-[3px_3px_0px_#1f1f1f] hover:shadow-[5px_5px_0px_#1f1f1f] transition-all duration-300 hover:p-2 hover:bg-yellow-500`}>
// // // // // //                                 <img className='h-full w-full object-cover object-top' src={`/assets/${image}`} alt={`${activeCategory} Project ${index + 1}`} />
// // // // // //                             </div>
// // // // // //                         ))}
// // // // // //                     </div>
// // // // // //                     {visibleItems < images.length && (
// // // // // //                         <div className="flex justify-center mt-10">
// // // // // //                             <button
// // // // // //                                 onClick={loadMoreItems}
// // // // // //                                 className="px-5 py-3 bg-[#facb0d] text-stone-950 text-lg font-bold shadow-[5px_5px_0px_#1f1f1f] hover:shadow-[3px_3px_0px_#1f1f1f] transition-all duration-300"
// // // // // //                             >
// // // // // //                                 Load More
// // // // // //                             </button>
// // // // // //                         </div>
// // // // // //                     )}
// // // // // //                 </div>
// // // // // //             </div>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default PortfolioSection;


// // // // // import React, { useEffect, useState } from 'react';
// // // // // import exploreHeading from '../assets/explore-heading.png';

// // // // // const categories = [
// // // // //     'All',
// // // // //     '2D Animation',
// // // // //     '3D Animation',
// // // // //     'Comics',
// // // // //     'Graphic Design',
// // // // //     'Illustrations',
// // // // // ];

// // // // // // Function to load images dynamically
// // // // // const importAllImages = (r) => r.keys().map(r);

// // // // // const PortfolioSection = () => {
// // // // //     const [activeCategory, setActiveCategory] = useState('All');
// // // // //     const [visibleItems, setVisibleItems] = useState(4); // Number of items to show initially

// // // // //     // Load images based on the active category
// // // // //     const loadImages = (category) => {
// // // // //         try {
// // // // //             if (category === 'All') {
// // // // //                 const allCategories = categories.filter(cat => cat !== 'All');
// // // // //                 return allCategories.flatMap(cat => importAllImages(`../assets/${cat}`, false, /\.(png|jpe?g|svg)$/));
// // // // //             }
// // // // //             return importAllImages(`../assets/${category}`, false, /\.(png|jpe?g|svg)$/);
// // // // //         } catch (err) {
// // // // //             console.error(`Error loading images: ${err.message}`);
// // // // //             return [];
// // // // //         }
// // // // //     };

// // // // //     const imagesToDisplay = loadImages(activeCategory);

// // // // //     useEffect(() => {
// // // // //         window.scrollTo(0, 0);
// // // // //     }, [activeCategory]);

// // // // //     const loadMoreItems = () => {
// // // // //         setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Load 4 more items
// // // // //     };

// // // // //     return (
// // // // //         <div className='pl-12 pt-20'>
// // // // //             <img src={exploreHeading} className='w-1/4 pt-5' alt="Explore" />
// // // // //             <div className="portfolio-section flex pl-12 py-20 items-start bg-transparent">
// // // // //                 <div className="categories w-1/5 flex flex-col grid-cols-2 items-start pr-10 gap-2 ">
// // // // //                     {categories.map((category) => (
// // // // //                         <button
// // // // //                             key={category}
// // // // //                             onClick={() => {
// // // // //                                 setActiveCategory(category);
// // // // //                                 setVisibleItems(4); // Reset visible items when category changes
// // // // //                             }}
// // // // //                             className={`py-10 px-6 text-left w-full border font-bold text-xl border-black ${activeCategory === category
// // // // //                                 ? 'bg-[#1f1f1f] text-white shadow-lg'
// // // // //                                 : 'bg-transparent text-black'
// // // // //                                 } transition-all duration-300 hover:bg-[#1f1f1f] hover:text-white`}
// // // // //                         >
// // // // //                             {category}
// // // // //                         </button>
// // // // //                     ))}
// // // // //                 </div>
// // // // //                 <div className="portfolio-items w-3/4 pl-10">
// // // // //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
// // // // //                         {imagesToDisplay.slice(0, visibleItems).map((src, index) => (
// // // // //                             <div key={index} className={`portfolio-item w-full h-[50vh] border-2 border-stone-900 rounded-sm shadow-[3px_3px_0px_#1f1f1f] hover:shadow-[5px_5px_0px_#1f1f1f] transition-all duration-300 hover:p-2 hover:bg-yellow-500`}>
// // // // //                                 <img className='h-full w-full object-cover object-top' src={src} alt={`Project ${index + 1}`} />
// // // // //                             </div>
// // // // //                         ))}
// // // // //                     </div>
// // // // //                     {visibleItems < imagesToDisplay.length && (
// // // // //                         <div className="flex justify-center mt-10">
// // // // //                             <button
// // // // //                                 onClick={loadMoreItems}
// // // // //                                 className="px-5 py-3 bg-[#facb0d] text-stone-950 text-lg font-bold shadow-[5px_5px_0px_#1f1f1f] hover:shadow-[3px_3px_0px_#1f1f1f] transition-all duration-300"
// // // // //                             >
// // // // //                                 Load More
// // // // //                             </button>
// // // // //                         </div>
// // // // //                     )}
// // // // //                 </div>
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default PortfolioSection;


// // // // import React, { useEffect, useState } from 'react';
// // // // import exploreHeading from '../assets/explore-heading.png';

// // // // const categories = [
// // // //     'All',
// // // //     '2D Animation',
// // // //     '3D Animation',
// // // //     'Comics',
// // // //     'Graphic Design',
// // // //     'Illustrations',
// // // // ];

// // // // const PortfolioSection = () => {
// // // //     const [activeCategory, setActiveCategory] = useState('All');
// // // //     const [visibleItems, setVisibleItems] = useState(4); // Number of items to show initially

// // // //     const getImagesForCategory = (category) => {
// // // //         if (category === 'All') {
// // // //             const allImages = categories
// // // //                 .filter(cat => cat !== 'All')
// // // //                 .flatMap(cat => getImagesForCategory(cat));
// // // //             return allImages;
// // // //         } else {
// // // //             // Generating image paths dynamically based on category
// // // //             const imagePaths = [];
// // // //             for (let i = 1; i <= 100; i++) {
// // // //                 const imagePath = `../assets/${category}/${i}.png`;
// // // //                 imagePaths.push(imagePath);
// // // //             }
// // // //             return imagePaths;
// // // //         }
// // // //     };

// // // //     const imagesToDisplay = getImagesForCategory(activeCategory).filter(src => {
// // // //         const img = new Image();
// // // //         img.src = src;
// // // //         return img.complete;
// // // //     });

// // // //     useEffect(() => {
// // // //         window.scrollTo(0, 0);
// // // //     }, [activeCategory]);

// // // //     const loadMoreItems = () => {
// // // //         setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Load 4 more items
// // // //     };

// // // //     return (
// // // //         <div className='pl-12 pt-20'>
// // // //             <img src={exploreHeading} className='w-1/4 pt-5' alt="Explore" />
// // // //             <div className="portfolio-section flex pl-12 py-20 items-start bg-transparent">
// // // //                 <div className="categories w-1/5 flex flex-col grid-cols-2 items-start pr-10 gap-2">
// // // //                     {categories.map((category) => (
// // // //                         <button
// // // //                             key={category}
// // // //                             onClick={() => {
// // // //                                 setActiveCategory(category);
// // // //                                 setVisibleItems(4); // Reset visible items when category changes
// // // //                             }}
// // // //                             className={`py-10 px-6 text-left w-full border font-bold text-xl border-black ${activeCategory === category
// // // //                                 ? 'bg-[#1f1f1f] text-white shadow-lg'
// // // //                                 : 'bg-transparent text-black'
// // // //                                 } transition-all duration-300 hover:bg-[#1f1f1f] hover:text-white`}
// // // //                         >
// // // //                             {category}
// // // //                         </button>
// // // //                     ))}
// // // //                 </div>
// // // //                 <div className="portfolio-items w-3/4 pl-10">
// // // //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
// // // //                         {imagesToDisplay.slice(0, visibleItems).map((src, index) => (
// // // //                             <div key={index} className={`portfolio-item w-full h-[50vh] border-2 border-stone-900 rounded-sm shadow-[3px_3px_0px_#1f1f1f] hover:shadow-[5px_5px_0px_#1f1f1f] transition-all duration-300 hover:p-2 hover:bg-yellow-500`}>
// // // //                                 <img className='h-full w-full object-cover object-top' src={src} alt={`Project ${index + 1}`} />
// // // //                             </div>
// // // //                         ))}
// // // //                     </div>
// // // //                     {visibleItems < imagesToDisplay.length && (
// // // //                         <div className="flex justify-center mt-10">
// // // //                             <button
// // // //                                 onClick={loadMoreItems}
// // // //                                 className="px-5 py-3 bg-[#facb0d] text-stone-950 text-lg font-bold shadow-[5px_5px_0px_#1f1f1f] hover:shadow-[3px_3px_0px_#1f1f1f] transition-all duration-300"
// // // //                             >
// // // //                                 Load More
// // // //                             </button>
// // // //                         </div>
// // // //                     )}
// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default PortfolioSection;


// // // import React, { useEffect, useState } from 'react';
// // // import exploreHeading from '../assets/explore-heading.png';

// // // const categories = [
// // //     'All',
// // //     '2D Animation',
// // //     '3D Animation',
// // //     'Comics',
// // //     'Graphic Design',
// // //     'Illustrations',
// // // ];

// // // const PortfolioSection = () => {
// // //     const [activeCategory, setActiveCategory] = useState('All');
// // //     const [visibleItems, setVisibleItems] = useState(4); // Number of items to show initially
// // //     const [images, setImages] = useState([]);

// // //     useEffect(() => {
// // //         const loadImages = () => {
// // //             let allImages = [];
// // //             if (activeCategory === 'All') {
// // //                 categories.filter(cat => cat !== 'All').forEach(category => {
// // //                     for (let i = 1; i <= 100; i++) {
// // //                         allImages.push({ src: `../assets/${category}/${i}.png`, category });
// // //                     }
// // //                 });
// // //             } else {
// // //                 for (let i = 1; i <= 100; i++) {
// // //                     allImages.push({ src: `../assets/${activeCategory}/${i}.png`, category: activeCategory });
// // //                 }
// // //             }

// // //             // Filter out invalid images (using onError event on the img tag)
// // //             setImages(allImages);
// // //         };

// // //         loadImages();
// // //         setVisibleItems(4); // Reset visible items when category changes
// // //     }, [activeCategory]);

// // //     useEffect(() => {
// // //         window.scrollTo(0, 0);
// // //     }, []);
// // //     const loadMoreItems = () => {
// // //         setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Load 4 more items
// // //     };

// // //     return (
// // //         <div className='pl-12 pt-20'>
// // //             <img src={exploreHeading} className='w-1/4 pt-5' alt="Explore" />
// // //             <div className="portfolio-section flex pl-12 py-20 items-start bg-transparent">
// // //                 <div className="categories w-1/5 flex flex-col grid-cols-2 items-start pr-10 gap-2">
// // //                     {categories.map((category) => (
// // //                         <button
// // //                             key={category}
// // //                             onClick={() => setActiveCategory(category)}
// // //                             className={`py-10 px-6 text-left w-full border font-bold text-xl border-black ${activeCategory === category
// // //                                 ? 'bg-[#1f1f1f] text-white shadow-lg'
// // //                                 : 'bg-transparent text-black'
// // //                                 } transition-all duration-300 hover:bg-[#1f1f1f] hover:text-white`}
// // //                         >
// // //                             {category}
// // //                         </button>
// // //                     ))}
// // //                 </div>
// // //                 <div className="portfolio-items w-3/4 pl-10">
// // //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
// // //                         {images.slice(0, visibleItems).map((img, index) => (
// // //                             <div key={index} className={`portfolio-item w-full h-[50vh] border-2 border-stone-900 rounded-sm shadow-[3px_3px_0px_#1f1f1f] hover:shadow-[5px_5px_0px_#1f1f1f] transition-all duration-300 hover:p-2 hover:bg-yellow-500`}>
// // //                                 <img 
// // //                                     className='h-full w-full object-cover object-top lazyload' 
// // //                                     src={img.src} 
// // //                                     alt={`Project ${index + 1}`} 
// // //                                     onError={(e) => { e.target.style.display = 'none'; }} 
// // //                                 />
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                     {visibleItems < images.length && (
// // //                         <div className="flex justify-center mt-10">
// // //                             <button
// // //                                 onClick={loadMoreItems}
// // //                                 className="px-5 py-3 bg-[#facb0d] text-stone-950 text-lg font-bold shadow-[5px_5px_0px_#1f1f1f] hover:shadow-[3px_3px_0px_#1f1f1f] transition-all duration-300"
// // //                             >
// // //                                 Load More
// // //                             </button>
// // //                         </div>
// // //                     )}
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default PortfolioSection;


// // import React, { useEffect, useState } from 'react';
// // import exploreHeading from '../assets/explore-heading.png';

// // const categories = [
// //     'All',
// //     // '2D Animation',
// //     // '3D Animation',
// //     'Comics',
// //     // 'Graphic Design',
// //     'Illustrations',
// // ];

// // // Function to dynamically import all images from a category
// // const importAllImages = (context) => {
// //     return Object.keys(context).map((key) => context[key]());
// // };

// // const images = {
// //     // '2D Animation': importAllImages(import.meta.glob('../assets/2D Animation/*.{png,jpg,jpeg,svg}', { eager: true })),
// //     // '3D Animation': importAllImages(import.meta.glob('../assets/3D Animation/*.{png,jpg,jpeg,svg}', { eager: true })),
// //     'Comics': importAllImages(import.meta.glob('/assets/Comics/*.{png,jpg,jpeg,svg}', { eager: true })),
// //     // 'Graphic Design': importAllImages(import.meta.glob('../assets/Graphic Design/*.{png,jpg,jpeg,svg}', { eager: true })),
// //     'Illustrations': importAllImages(import.meta.glob('/assets/Illustrations/*.{png,jpg,jpeg,svg}', { eager: true })),
// // };

// // const PortfolioSection = () => {
// //     const [activeCategory, setActiveCategory] = useState('All');
// //     const [visibleItems, setVisibleItems] = useState(4); // Number of items to show initially
// //     const [imagesToDisplay, setImagesToDisplay] = useState([]);

// //     useEffect(() => {
// //         if (activeCategory === 'All') {
// //             const allImages = categories
// //                 .filter(cat => cat !== 'All')
// //                 .flatMap(cat => images[cat]);
// //             setImagesToDisplay(allImages);
// //         } else {
// //             setImagesToDisplay(images[activeCategory] || []);
// //         }
// //         setVisibleItems(4); // Reset visible items when category changes
// //     }, [activeCategory]);

// //     const loadMoreItems = () => {
// //         setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Load 4 more items
// //     };

// //     return (
// //         <div className='pl-12 pt-20'>
// //             <img src={exploreHeading} className='w-1/4 pt-5' alt="Explore" />
// //             <div className="portfolio-section flex pl-12 py-20 items-start bg-transparent">
// //                 <div className="categories w-1/5 flex flex-col grid-cols-2 items-start pr-10 gap-2">
// //                     {categories.map((category) => (
// //                         <button
// //                             key={category}
// //                             onClick={() => setActiveCategory(category)}
// //                             className={`py-10 px-6 text-left w-full border font-bold text-xl border-black ${activeCategory === category
// //                                 ? 'bg-[#1f1f1f] text-white shadow-lg'
// //                                 : 'bg-transparent text-black'
// //                                 } transition-all duration-300 hover:bg-[#1f1f1f] hover:text-white`}
// //                         >
// //                             {category}
// //                         </button>
// //                     ))}
// //                 </div>
// //                 <div className="portfolio-items w-3/4 pl-10">
// //                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
// //                         {imagesToDisplay.slice(0, visibleItems).map((srcPromise, index) => (
// //                             <div key={index} className={`portfolio-item w-full h-[50vh] border-2 border-stone-900 rounded-sm shadow-[3px_3px_0px_#1f1f1f] hover:shadow-[5px_5px_0px_#1f1f1f] transition-all duration-300 hover:p-2 hover:bg-yellow-500`}>
// //                                 <img className='h-full w-full object-cover object-top' src={srcPromise.default} alt={`Project ${index + 1}`} />
// //                             </div>
// //                         ))}
// //                     </div>
// //                     {visibleItems < imagesToDisplay.length && (
// //                         <div className="flex justify-center mt-10">
// //                             <button
// //                                 onClick={loadMoreItems}
// //                                 className="px-5 py-3 bg-[#facb0d] text-stone-950 text-lg font-bold shadow-[5px_5px_0px_#1f1f1f] hover:shadow-[3px_3px_0px_#1f1f1f] transition-all duration-300"
// //                             >
// //                                 Load More
// //                             </button>
// //                         </div>
// //                     )}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default PortfolioSection;


// import React, { useEffect, useState } from 'react';
// import exploreHeading from '../assets/explore-heading.png';

// const categories = [
//     'All',
//     '2D Animation',
//     '3D Animation',
//     'Comics',
//     'Graphic Design',
//     'Illustrations',
// ];

// const PortfolioSection = () => {
//     // const [activeCategory, setActiveCategory] = useState('All');
//     // const [images, setImages] = useState([]);
//     // const [visibleItems, setVisibleItems] = useState(4); // Number of items to show initially

//     // useEffect(() => {
//     //     loadImages(activeCategory);
//     // }, [activeCategory]);

//     // const loadImages = (category) => {
//     //     const basePath = `${window.location.origin}/assets/`;
//     //     const allImages = [];

//     //     const loadImagePaths = (path) => {
//     //         const imageExtensions = ['.png', '.jpg', '.jpeg', '.svg'];
//     //         let imgIndex = 1;

//     //         while (true) {
//     //             const imagePath = `${path}/${imgIndex}.png`;

//     //             if (imageExists(imagePath)) {
//     //                 allImages.push(imagePath);
//     //             } else {
//     //                 break;
//     //             }
//     //             imgIndex++;
//     //         }
//     //     };

//     //     const imageExists = (url) => {
//     //         const http = new XMLHttpRequest();
//     //         http.open('HEAD', url, false);
//     //         http.send();
//     //         return http.status !== 404;
//     //     };

//     //     if (category === 'All') {
//     //         categories.forEach((cat) => {
//     //             if (cat !== 'All') loadImagePaths(`${basePath}/${cat}`);
//     //         });
//     //     } else {
//     //         loadImagePaths(`${basePath}/${category}`);
//     //     }

//     //     setImages(allImages);
//     //     setVisibleItems(4); // Reset visible items when category changes
//     // };

//     // const loadMoreItems = () => {
//     //     setVisibleItems((prevVisibleItems) => prevVisibleItems + 4); // Load 4 more items
//     // };

//     return (
//         <div className='pl-12 pt-20'>
//             {/* <img src={exploreHeading} className='w-1/4 pt-5' alt="Explore" />
//             <div className="portfolio-section flex pl-12 py-20 items-start bg-transparent">
//                 <div className="categories w-1/5 flex flex-col grid-cols-2 items-start pr-10 gap-2">
//                     {categories.map((category) => (
//                         <button
//                             key={category}
//                             onClick={() => setActiveCategory(category)}
//                             className={`py-10 px-6 text-left w-full border font-bold text-xl border-black ${activeCategory === category
//                                 ? 'bg-[#1f1f1f] text-white shadow-lg'
//                                 : 'bg-transparent text-black'
//                                 } transition-all duration-300 hover:bg-[#1f1f1f] hover:text-white`}
//                         >
//                             {category}
//                         </button>
//                     ))}
//                 </div>
//                 <div className="portfolio-items w-3/4 pl-10">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
//                         {images.slice(0, visibleItems).map((src, index) => (
//                             <div key={index} className={`portfolio-item w-full h-[50vh] border-2 border-stone-900 rounded-sm shadow-[3px_3px_0px_#1f1f1f] hover:shadow-[5px_5px_0px_#1f1f1f] transition-all duration-300 hover:p-2 hover:bg-yellow-500`}>
//                                 <img className='h-full w-full object-cover object-top' src={src} alt={`Project ${index + 1}`} />
//                             </div>
//                         ))}
//                     </div>
//                     {visibleItems < images.length && (
//                         <div className="flex justify-center mt-10">
//                             <button
//                                 onClick={loadMoreItems}
//                                 className="px-5 py-3 bg-[#facb0d] text-stone-950 text-lg font-bold shadow-[5px_5px_0px_#1f1f1f] hover:shadow-[3px_3px_0px_#1f1f1f] transition-all duration-300"
//                             >
//                                 Load More
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div> */}
//         </div>
//     );
// };

// export default PortfolioSection;


import React, { useEffect, useState } from 'react';
import exploreHeading from '../assets/explore-heading.png';

const categories = [
    'All',
    // '2D Animation',
    // '3D Animation',
    'Comics',
    // 'Graphic Design',
    'Illustrations',
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
            const extensions = ['png'];
            let imgArray = [];
            for (let i = 1; i <= 20; i++) {
                for (let ext of extensions) {
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
                            <div key={index} className={`portfolio-item w-full h-[50vh] border-2 border-stone-900 rounded-sm shadow-[3px_3px_0px_#1f1f1f] hover:shadow-[5px_5px_0px_#1f1f1f] transition-all duration-300 hover:p-2 hover:bg-yellow-500`}>
                                <img className='h-full w-full object-cover object-top' src={src} alt={`Project ${index + 1}`} />
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
