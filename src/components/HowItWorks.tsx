import React from 'react'
import { howItWorks } from '@/../public/assets'
import {FiCheckSquare} from 'react-icons/fi'
import {FiCalendar} from 'react-icons/fi'
import {SlWallet} from 'react-icons/sl'
import {FiDownload} from 'react-icons/fi'

const HowItWorks = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto px-4 md:px-0'>
            <div className="relative flex py-5 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <h1 className='flex-shrink mx-4 md:leading-[72px] text-4xl font-bold'>How It Works</h1>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>
            
            <div className='grid md:grid-cols-2'>
                <div className='m-auto order-first justify-center'>
                    <img  src={howItWorks.src} className="w-5/6 mx-auto" />
                </div>

                <div className='flex flex-col py-16'>  
                <h1 className='md:leading-[72px] text-3xl font-bold'>Easy steps to follow and use the App</h1>           
                        <div className='py-6 flex'>
                            <div>
                                <div className='p-4 bg-[#F0F7FF] rounded-xl'>
                                    <FiDownload 
                                        size={30}
                                        style={{color:'#4A74EA'}}
                                    />
                                </div>
                            </div>
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>Download and Register</h1>
                                <p className='text-[#6D737A]'>You can download our app from 
                                <span className='text-[#4A74EA]'><a href=""> PlayStore</a></span>. 
                                After installing it, you can create an account and login</p>
                            </div>

                        </div>
                        <div className='py-6 flex'>
                            <div>
                                <div className='p-4 bg-[#F0F7FF] rounded-xl'>
                                    <FiCheckSquare 
                                        size={30}
                                        style={{color:'#4A74EA'}}
                                    />
                                </div>
                            </div>
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>Choose your desired property</h1>
                                <p className='text-[#6D737A]'>Second. Choose your best property that fits your needs</p>
                            </div>

                        </div>
                        <div className='py-6 flex'>
                            <div>
                                <div className='p-4 bg-[#F0F7FF] rounded-xl'>
                                    <FiCalendar 
                                        size={30}
                                        style={{color:'#4A74EA'}}
                                    />
                                </div>
                            </div>
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>Book Viewing</h1>
                                <p className='text-[#6D737A]'>Next, place a booking for viewing. We charge a fixed monthly booking fee of $10 with an optional $5 per property viewing.</p>
                            </div>

                        </div>
                        <div className='py-6 flex'>
                            <div>
                                <div className='p-4 bg-[#F0F7FF] rounded-xl'>
                                    <SlWallet 
                                        size={30}
                                        style={{color:'#4A74EA'}}
                                    />
                                </div>
                            </div>
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>Make payment  to landloard</h1>
                                <p className='text-[#6D737A]'>Finally, you can make a payment for your property to your landlord and move-in.</p>
                            </div>

                        </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default HowItWorks