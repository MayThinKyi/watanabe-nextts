import React from 'react'
import Marquee from 'react-fast-marquee'

const HomeTitle = () => {
    return (
        <div className='relative cursor-pointer mb-36'>
            <img src={'/g4.png'} className='z-10 w-full sm:w-[300px] h-[200px] md:w-[400px] md:h-[300px] object-cover absolute bottom-[-100px] sm:bottom-[-20px] md:bottom-[-40px] left-0' />
            <Marquee className='absolute top-0 left-0 right-0 bottom-0' >
                <h1 className="text-[120px]  sm:text-[200px] md:text-[300px] font-bebas font-bold uppercase">WATANABE</h1>
            </Marquee>
        </div>
    )
}

export default HomeTitle
