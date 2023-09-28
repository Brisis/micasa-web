import React from 'react'
import { logo, logoBlack } from '@/../public/assets'
import {FaFacebookF, FaInstagram, FaYoutube, FaTwitter, FaTiktok} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-[#e8edfc] pt-24 pb-8'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-5 max-[780px]:grid-cols-2  gap-8 max-w-[600px]  px-4 md:px-0'>
            
            <div className='col-span-2'>
                <h1 className='text-3xl text-black font-bold flex'>
                    <img src={logoBlack.src} className="h-[35px] pr-3" />
                    Micasa
                </h1>

                <h3 className='text-2xl font-bold pt-6'>Subscribe</h3>
                <h3 className='py-2 text-[#6D737A]'>Get latest information from Micasa</h3>
                <form className='py-4'>
                    <input 
                        className='bg-[#F2F3F4] p-4 w-full rounded' 
                        placeholder='Type your email' required type='email'
                    />
                    <button disabled className='max-[780px]:w-full my-4 px-5 py-3 rounded-md bg-[#4A74EA] text-white font-medium'>Subscribe Now</button>
                </form>

            </div>

            <div>
                <h3 className='text-2xl font-bold'>Explore</h3>
                <ul className='py-6 text-[#6D737A]'>
                    <li className='py-2'><a href="#!">Rent a property</a></li>
                    <li className='py-2'><a href="#!">Buy a property</a></li>
                    <li className='py-2'><a href="#!">Sell a property</a></li>

                </ul>
            </div>

            <div>
                <h3 className='text-2xl font-bold'>About</h3>
                <ul className='py-6 text-[#6D737A]'>
                    <li className='py-2'><a href="#!">Our Story</a></li>
                    <li className='py-2'><a href="#!">Benefits</a></li>
                    <li className='py-2'><a href="#!">Testimonials</a></li>

                </ul>
            </div>

            <div>
                <h3 className='text-2xl font-bold'>Get Help</h3>
                <ul className='py-6 text-[#6D737A]'>
                    <li className='py-2'><a href="#!">Download App</a></li>
                    <li className='py-2'><a href="#!">Contact</a></li>
                    <li className='py-2'><a href="#!">FAQs</a></li>

                </ul>
            </div>
        
        </div>

        <hr className='mx-auto bg-gray-300 h-[2px]' />

        <div className='md:max-w-[1480px] mx-auto max-w-[600px] flex sm:flex-row flex-col justify-between items-center'>
         <h3 className='py-2 text-[#363A3D]'>@2023 Micasa. All rights reserved.</h3>
         <div className='flex sm:flex-row flex-col justify-between items-center'>
            <h3 className='py-2 text-[#363A3D]'><a href="#!">Privacy Policy</a></h3>
            <h3 className='pl-4 py-2 text-[#363A3D]'><a href="#!">Terms and Conditions</a></h3>
            <div className='flex gap-4 py-2 pl-4'>
                <a href="https://www.facebook.com/micasalistings/" target='_blank' className='p-4 bg-[#dde5fb] rounded-xl'>
                    <FaFacebookF size={15} style={{color:'#4A74EA'}} />
                </a>
                <a href="https://www.instagram.com/micasalistings" target='_blank' className='p-4 bg-[#dde5fb] rounded-xl'>
                    <FaInstagram size={15} style={{color:'#4A74EA'}} />
                </a>
                <a href="https://www.twitter.com/micasalistings" target='_blank' className='p-4 bg-[#dde5fb] rounded-xl'>
                    <FaTwitter size={15} style={{color:'#4A74EA'}} />
                </a>
                <a href="https://www.youtube.com/@MicasaListings" target='_blank' className='p-4 bg-[#dde5fb] rounded-xl'>
                    <FaYoutube size={15} style={{color:'#4A74EA'}} />
                </a>
                <a href="https://vm.tiktok.com/ZM2KSqC1p/" target='_blank' className='p-4 bg-[#dde5fb] rounded-xl'>
                    <FaTiktok size={15} style={{color:'#4A74EA'}} />
                </a>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Footer