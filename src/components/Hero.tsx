import React from 'react';
import {heroImg} from '../../public/assets';

const Hero = () => {

    const downloadApp = () => {
        const URL = 'http://dynamic-link.com/sample.xlsx'
            if (typeof window !== "undefined") {
              window.location.href = URL
        }
    }

    return (
        <section id='hero' className='w-full bg-white sm:py-24 py-[46px] relative scroll-mt-24'>
            <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
                
                <div className='flex flex-col justify-start gap-4'>
                    <h1 className='md:leading-[90px] leading-[60px] py-2 md:text-6xl sm:text-6xl text-4xl font-semibold'>
                        Micasa. Your Perfect
                        <span className='text-[#4A74EA]'> Dream Home </span> Awaits!
                    </h1>
                    <p className='py-2 text-lg text-gray-600 pr-12 leading-10'>
                        Are you ready to find your dream home? 
                        We have a lot of amazing offers for you. 
                        Experts at Micasa Listings will help you get the best homes at the best price. 
                        Planning on Buying, Renting or Selling a Home or Space. Think Micasa!
                    </p>
                    
                    <div className='flex'>
                        <button className='px-8 py-3 rounded-sm bg-[#4A74EA] text-white font-bold'>Get Started</button>
                        <a href="../../assets/files/app.apk" download="micasa" className='px-8 py-3 rounded-sm border border-solid border-[#4A74EA] text-[#4A74EA] font-bold ml-5'>Download App</a>
                    </div>

                </div>
                
                <div className='md:order-last order-first border border-solid border-slate-200 sm:p-8 p-0 sm:mb-0 mb-6 justify-center'>
                    <img src={heroImg.src} className="rounded-t-extraLarge sm:w-5/6 w-full mx-auto" />
                </div>
            </div>  

        </section>
    )
}

export default Hero