"use client"

import React, { useState } from 'react';
import {logo, logoHome, lock, hamburgerMenu, close} from '@/../public/assets'

const Navbar = () => {

    const [toggle,setToggle]=useState(false)
    const handleClick = ()=> setToggle(!toggle)

  return (
    <div className='w-full h-[80px] bg-white border-b sticky top-0 z-50'>
        <div className='md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4'>
            
            {/* <img src={logo.src} width={150}  /> */}
            <h1 className='text-3xl text-[#4A74EA] font-bold flex justify-between'>
                <img src={logoHome.src} className="h-[35px] pr-3" />
                Micasa
            </h1>
            
            <div className='hidden md:flex items-center '>
                <ul className='flex gap-4'>
                    <li>Home</li>
                    <li>How it works</li>
                    <li>About</li>
                    <li>Testimonials</li>
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
                    <li className='p-4 hover:bg-gray-100'>Home</li>
                    <li className='p-4 hover:bg-gray-100'>How it works</li>
                    <li className='p-4 hover:bg-gray-100'>About</li>
                    <li className='p-4 hover:bg-gray-100'>Testimonials</li>
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