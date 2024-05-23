import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='relative'>
            <img src={'/bg.png'} className='  object-cover h-[90vh] w-screen' alt='Background Image' />
            <div className="absolute text-white bottom-20 left-4 right-2 flex flex-wrap items-center lg:justify-center gap-3 sm:gap-8">
                <div className='order-2 lg:order-1'>
                    <button className="border-white border-2 transition-colors duration-200 ease-in-out hover:bg-white hover:text-black font-bebas py-1 px-8 rounded-full text-2xl text-center">
                        EXPLORE
                    </button>
                </div>
                <div className='order-1 lg:order-2'>
                    <h1 className="font-bebas text-5xl sm:text-7xl font-bold">The Future of Architecture Design
                    </h1>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

            </div>
        </div>
    )
}

export default Hero
