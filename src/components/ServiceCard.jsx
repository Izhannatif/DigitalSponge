import React, { useState } from 'react';

const ServiceCard = ({ title, description, categories = [] }) => {
    const [shadowPosition, setShadowPosition] = useState({ x: 5, y: 5 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left; // X coordinate of the cursor relative to the element
        const y = e.clientY - rect.top;  // Y coordinate of the cursor relative to the element

        const moveX = (x - rect.width / 10) / 30;
        const moveY = (y - rect.height / 10) / 30;

        setShadowPosition({ x: moveX, y: moveY });
    };

    return (
        <div className='h-[70vh] w-full flex justify-center items-center p-5'>
            <div
                className='service-card relative h-full w-full md:w-3/4 border-2 border-stone-900 rounded-2xl p-10 flex flex-col justify-evenly text-stone-900 backdrop-blur-[2px]'
                onMouseMove={handleMouseMove}
                style={{
                    boxShadow: `${shadowPosition.x}px ${shadowPosition.y}px 0px #1f1f1f`,
                    transition: 'box-shadow 0.1s ease-out',
                }}
            >
                <div className='service-title text-5xl md:text-6xl xl:text-7xl font-bold text-yellow-200 drop-shadow-[4px_4px_0px_#1f1f1f] text-wrap' style={{ WebkitTextStroke: '2px black' }}>{title}</div>
                <div className='flex flex-col gap-5'>
                    <div className='text-2xl font-semibold'>{description}</div>
                    <div className='flex gap-3 flex-wrap '>
                        {categories.map((cat, index) => (
                            <div
                                key={index}
                                className='text-md bg-gray-100 py-2 px-4 rounded-3xl border border-stone-800 shadow-[4px_4px_0px_#1f1f1f] hover:shadow-[2px_2px_0px_#1f1f1f] duration-300'
                            >
                                {cat}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
