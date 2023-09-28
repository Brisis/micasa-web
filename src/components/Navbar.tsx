"use client"

import React, { useState } from 'react';
import {logoHome, lock, hamburgerMenu, close} from '@/../public/assets'

const Navbar = () => {

    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)

    const [active, setActive] = useState('')

    const scrolltoHash = function (element_id: string) {
        const element = document.getElementById(element_id)
        setActive(element_id)
        element?.scrollIntoView({ behavior: "smooth" });
    }
    
    return (
        <div className='w-full h-[80px] bg-white border-b sticky top-0 z-50'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
                
                {/* <img src={logo.src} width={150}  /> */}
                <a href='/' className='text-3xl text-[#4A74EA] font-bold flex justify-between'>
                    <img src={logoHome.src} className="h-[35px] pr-3" />
                    Micasa
                </a>
                
                <div className='hidden md:flex items-center navigation'>
                    <ul className='flex gap-4'>
                        <li className={`hover:cursor-pointer hero ${active=='hero' ? 'text-indigo-600': ''}`} 
                            onClick={() => scrolltoHash('hero')}>Home</li>
                        <li className={`hover:cursor-pointer howitworks ${active=='howitworks' ? 'text-indigo-600': ''}`} 
                            onClick={() => scrolltoHash('howitworks')}>How it works</li>
                        <li className={`hover:cursor-pointer about ${active=='about' ? 'text-indigo-600': ''}`} 
                            onClick={() => scrolltoHash('about')}>About</li>
                        <li className={`hover:cursor-pointer testimonials ${active=='testimonials' ? 'text-indigo-600': ''}`} 
                            onClick={() => scrolltoHash('testimonials')}>Testimonials</li>
                    </ul>
                </div>


                <div className='hidden md:flex'>
                    <button className='flex justify-between items-center  bg-transparent  px-6 gap-2'>
                        <img src={lock.src} />
                        Login
                    </button>
                    <button className='px-8 py-3 rounded-sm border border-solid border-[#4A74EA] text-[#4A74EA] font-bold'>Sign Up For Free</button>
                </div>

                <div className='md:hidden'  onClick={handleClick}>
                    <img src={toggle?close.src:hamburgerMenu.src} />
                </div>

            </div>

            <div className={toggle?'absolute z-10 p-4  bg-white w-full px-8 md:hidden border-b':'hidden'}>
                <ul>
                    <li className='p-4 hover:bg-gray-100'
                        onClick={() => scrolltoHash('hero')}>Home</li>
                    <li className='p-4 hover:bg-gray-100'
                        onClick={() => scrolltoHash('howitworks')}>How it works</li>
                    <li className='p-4 hover:bg-gray-100'
                        onClick={() => scrolltoHash('about')}>About</li>
                    <li className='p-4 hover:bg-gray-100'
                        onClick={() => scrolltoHash('testimonials')}>Testimonials</li>
                    <div className='flex flex-col my-4 gap-4'>
                        <button className='border border-[20B486] flex justify-center items-center bg-transparent px-6 gap-2 py-4'>
                        <img src={lock.src} />
                        Login
                        </button>
                        <button className='px-8 py-5 rounded-sm bg-[#4A74EA] text-white font-bold'>Sign Up For Free</button>
                    </div>
                </ul>
            </div> 
            
        </div>
    )
}

export default Navbar