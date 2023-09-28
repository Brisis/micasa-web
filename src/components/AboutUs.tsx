import React from 'react'
import { teamBen, teamJane, teamVictor } from '@/../public/assets'
import {FiFacebook} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'

const AboutUs = () => {
  return (
    <section id='about' className='w-full bg-white sm:py-24 py-0'>
        <div className='md:max-w-[1480px] m-auto px-4 md:px-0'>
            <div className="relative flex sm:py-5 py-24 items-center">
                <div className="flex-grow border-t border-gray-400"></div>
                <h1 className='flex-shrink mx-4 md:leading-[72px] text-4xl font-bold'>About Us</h1>
                <div className="flex-grow border-t border-gray-400"></div>
            </div>
            
            <h1 className='md:leading-[72px] sm:pb-0 pb-4 text-3xl font-bold'>Meet our Team</h1> 
            <p className='text-lg text-gray-600'>Our top rated expects ready to assist in your search</p>

            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

                    <div className="flex flex-col border rounded-sm border-gray-300">
                        <img className="object-cover w-full rounded-sm aspect-square" src={teamBen.src} alt="Ben" />
                        <div className='p-4 sm:p-4'>
                            <h1 className="text-2xl font-semibold text-gray-700 capitalize">Benevolent Mudzinganyama</h1>
                            <div className='mt-2 flex flex-row justify-between items-center'>
                                <p className="text-gray-500 capitalize ">software engineer</p>
                                <div className="flex mt-3 -mx-2">
                                    <a href="https://www.facebook.com/benevolentmudzinganyama/" target='_blank' className="mx-2 text-white transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                                        <div className='p-2 bg-black rounded-full'>
                                            <FiFacebook size={18} />
                                        </div>  
                                    </a>
                                    <a href="https://www.twitter.com/ibenevolentking" target='_blank' className="mx-2 text-white transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="Twitter">     
                                        <div className='p-2 bg-black rounded-full'>
                                            <FiTwitter size={18} />
                                        </div>  
                                    </a>
                                    <a href="https://www.linkedin.com/in/benevolentmudzinganyama/" target='_blank' className="mx-2 text-white transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="Linkedin">
                                        <div className='p-2 bg-black rounded-full'>
                                            <FiLinkedin size={18} />
                                        </div>  
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col border rounded-sm border-gray-300">
                        <img className="object-cover w-full rounded-sm aspect-square" src={teamVictor.src} alt="Ben" />
                        <div className='p-4 sm:p-4'>
                            <h1 className="text-2xl font-semibold text-gray-700 capitalize">Victor Mudzinganyama</h1>
                            <div className='mt-2 flex flex-row justify-between items-center'>
                                <p className="text-gray-500 capitalize ">ceo / agent</p>
                                <div className="flex mt-3 -mx-2">
                                    <a href="#" target='_blank' className="mx-2 text-white transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                                        <div className='p-2 bg-black rounded-full'>
                                            <FiFacebook size={18} />
                                        </div>  
                                    </a>
                                    <a href="#" target='_blank' className="mx-2 text-white transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="Twitter">     
                                        <div className='p-2 bg-black rounded-full'>
                                            <FiTwitter size={18} />
                                        </div>  
                                    </a>
                                    <a href="#" target='_blank' className="mx-2 text-white transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="Linkedin">
                                        <div className='p-2 bg-black rounded-full'>
                                            <FiLinkedin size={18} />
                                        </div>  
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col border rounded-sm border-gray-300">
                        <img className="object-cover w-full rounded-sm aspect-square" src={teamJane.src} alt="Ben" />
                        <div className='p-4 sm:p-4'>
                            <h1 className="text-2xl font-semibold text-gray-700 capitalize">Jane Doe</h1>
                            <div className='mt-2 flex flex-row justify-between items-center'>
                                <p className="text-gray-500 capitalize ">agent</p>
                                <div className="flex mt-3 -mx-2">
                                    <a href="#" target='_blank' className="mx-2 text-white transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                                        <div className='p-2 bg-black rounded-full'>
                                            <FiFacebook size={18} />
                                        </div>  
                                    </a>
                                    <a href="#" target='_blank' className="mx-2 text-white transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="Twitter">     
                                        <div className='p-2 bg-black rounded-full'>
                                            <FiTwitter size={18} />
                                        </div>  
                                    </a>
                                    <a href="#" target='_blank' className="mx-2 text-white transition-colors duration-300  hover:text-blue-500 dark:hover:text-blue-400" aria-label="Linkedin">
                                        <div className='p-2 bg-black rounded-full'>
                                            <FiLinkedin size={18} />
                                        </div>  
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutUs