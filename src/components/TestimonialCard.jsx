import React from 'react'
import { CgQuote } from "react-icons/cg";

const TestimonialCard = ({
    name, review, designation,service
}) => {
  return (
    <div className={`flex flex-col  px-5 bg-[#e2e2e259] m-5 py-5 w-1/4 justify-evenly testimonial-card rounded-3xl shadow-[3px_3px_0px_#1a1a1a] border border-stone-800`}>
        <CgQuote className='h-28 w-20 drop-shadow-[2px_2px_0px_black] pb-5 ' color='#ffcc00' />
<div className='pb-5'>
        <div className='text-lg p-1'>{review}</div>
        <div className='text-stone-500 pt-4'>{name} - {designation}</div>
        <div className='pt-1'>{service}</div>
        </div>
    </div>
  )
}

export default TestimonialCard