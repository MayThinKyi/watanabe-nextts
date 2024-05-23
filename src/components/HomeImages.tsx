import React from 'react'
import Marquee from 'react-fast-marquee'

const HomeImages = () => {
    const images = [
        '/s1.png', '/s2.png', '/s3.png', '/s4.png', '/s5.png', '/s6.png', '/s7.png', '/s8.png'
    ]
    return (
        <div>
            <Marquee className='mt-8'>
                {images.map((img) => {
                    return <img key={img} src={img} className='h-[250px] sm:h-[350px] w-auto object-cover' />
                })}
            </Marquee>
        </div>
    )
}

export default HomeImages
