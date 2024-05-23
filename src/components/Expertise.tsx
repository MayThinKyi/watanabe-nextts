import React from 'react'

const Expertise = () => {
    return (
        <div className='py-20 px-5 lg:px-20'>
            <h1 className="font-bebas text-center  text-7xl lg:text-9xl font-bold uppercase">Our Expertise</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto mt-8">
                <div className='px-5 sm:px-10 py-8 border-2 border-black'>
                    <h1 className="text-center text-3xl lg:text-5xl font-bebas font-bold mb-4">Design Interior </h1>
                    <div className='h-[300px] cursor-pointer overflow-hidden'>
                        <img src={'/ep1.png'} className='duration-500 transition-all hover:scale-110 h-full w-full object-cover' />
                    </div>
                </div>
                <div className='px-5 sm:px-10 py-8 border-2  border-black'>
                    <h1 className="text-center  text-3xl lg:text-5xl  font-bebas font-bold mb-4">Architecture Design  </h1>
                    <div className='h-[300px] cursor-pointer overflow-hidden'>
                        <img src={'/ep2.png'} className='duration-500 transition-all hover:scale-110 h-full w-full object-cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expertise
