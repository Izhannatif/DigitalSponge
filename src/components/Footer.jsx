import React from 'react'
import DS1 from '../assets/DS1.png'

const Footer = () => {
    return (
        <div className='w-full flex justify-center items-center  ml-16'>
            <img style={{ WebkitTextStroke: '2px #1f1f1f' }} src={DS1} className='w-1/4 drop-shadow-[3px_3px_0px_black]' alt="" />
        </div>
    )
}

export default Footer