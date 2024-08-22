import React from 'react'
import { CgQuote } from "react-icons/cg";

const TestimonialCard = ({
    name, review, designation,service
}) => {
  return (
    <div className={`flex flex-col  px-5 bg-[#e2e2e259] m-5 py-5 w-full md:w-1/3 lg:w-1/4 justify-evenly testimonial-card rounded-3xl shadow-[3px_3px_0px_#1a1a1a] border border-stone-800`}>
        <CgQuote className='h-28 w-20 drop-shadow-[2px_2px_0px_black] pb-5 ' color='#ffcc00' />
<div className='pb-5'>
        <div className='text-xl p-1 font-medium'>{review}</div>
        <div className='text-stone-500 pt-4 text-lg font-semibold'>{name} - {designation}</div>
        <div className='pt-1 text-lg font-medium'>{service}</div>
        </div>
    </div>
  )
}

export default TestimonialCard