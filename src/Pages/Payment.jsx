import React, { useEffect } from 'react';
import { FaPaypal } from 'react-icons/fa6';
import { BiLogoVenmo } from "react-icons/bi";
import { SiCashapp } from "react-icons/si";
import { FaStripeS } from "react-icons/fa";
import Marquee from 'react-fast-marquee';


const Payment = () => {
    const paymentOptions = [
        { name: 'PayPal', icon: <FaPaypal color='#0070BA' />, color: '#0070BA', link: 'https://www.paypal.com/ncp/payment/HF6QBKGEC8CLW' },
        { name: 'Stripe', icon: <FaStripeS color='#6772E5' />, color: '#6772E5', link: 'https://buy.stripe.com/dR67t40pH1Cd5Hi4gh' },
        // { name: 'Venmo', icon: <BiLogoVenmo color='#3D95CE' />, color: '#3D95CE', link: '' },
        { name: 'Cash App', icon: <SiCashapp color='#00C244' />, color: '#00C244', link: 'https://cash.app/$Muhajir0786' },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="min-h-screen flex flex-col justify-between pt-20">
            <div className='rotate-[3deg]'>
                <Marquee className='bg-[#000] w-full py-5 opacity-70' loop={0} autoFill={true} speed={70} direction='right' >
                    <p className='text-5xl text-[#ffcc00] flex justify-center items-center gap-3 font-black'>
                        PAY NOW .&nbsp;
                    </p>
                </Marquee>
            </div>
            <div className="flex flex-col justify-center items-center w-full  p-10">
                <h1 className="text-4xl md:text-6xl font-bold text-center text-[#ffcc00] drop-shadow-[3px_3px_0px_#1f1f1f] mb-10 mt-10 ">
                    Choose a Payment Method
                </h1>
                <div className='flex flex-col md:flex-row gap-6 w-full lg:w-full pt-10'>
                    {paymentOptions.map((option, index) => (
                        <a
                            href={option.link}
                            target='_blank'
                            key={index}
                            className="payment-option w-full flex items-center justify-start p-4 rounded-md transition-transform transform hover:scale-110  text-stone-900 border-2 border-[#1f1f1f] shadow-[5px_5px_0px_#1f1f1f] bg-[#ffffff5b] backdrop-blur-sm"
                        // style={{ backgroundColor: option.color }}
                        >
                            <span className="text-4xl md:text-5xl">{option.icon}</span>
                            <span className="ml-4 text-xl md:text-2xl font-semibold">
                                {option.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
            <div className='rotate-[3deg]'>
                <Marquee className='bg-[#000] w-full py-5 mb-5 rotate-[30deg] opacity-70' loop={0} autoFill={true} speed={70} direction='left' >
                    <p className='text-5xl text-[#ffcc00] flex justify-center items-center gap-3 font-black'>
                        PAY NOW .&nbsp;
                    </p>
                </Marquee>
            </div>
        </div>
    );
};

export default Payment;
