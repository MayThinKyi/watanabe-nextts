import AppTitle from '@/components/AppTitle'
import { Metadata } from 'next';
import React from 'react'
import Marquee from "react-fast-marquee";

export const metadata: Metadata = {
    title: "Services",
    description: "The Best Partner for Your Interior Design",
};

const ServicesPage = () => {
    const services = [
        { id: 1, title: 'We craft the future dwellin', text: 'Lorem ipsum dolor sit amet, strong adipisicing elit, sed do emphasis tempor incididunt ut underlined et dolore strikethrough aliqua. Ut subscript ad superscript veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in link in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { id: 2, title: 'We craft the future dwellin 2 ', text: 'Lorem ipsum dolor sit amet, strong adipisicing elit, sed do emphasis tempor incididunt ut underlined et dolore strikethrough aliqua. Ut subscript ad superscript veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in link in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { id: 3, title: 'We craft the future dwellin 3 ', text: 'Lorem ipsum dolor sit amet, strong adipisicing elit, sed do emphasis tempor incididunt ut underlined et dolore strikethrough aliqua. Ut subscript ad superscript veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in link in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    ]
    const images = [
        '/s1.png', '/s2.png', '/s3.png', '/s4.png', '/s5.png', '/s6.png', '/s7.png', '/s8.png'
    ]
    return (
        <div className='bg-black text-white py-10 px-5 sm:px-10 xl:px-20'>
            <AppTitle title='Services' />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((item) => {
                    return <div key={item.id} className='px-5 py-5 border-2  border-white'>
                        <h1 className="text-4xl font-bebas font-bold mb-4">{item.title}</h1>
                        <p>{item.text}</p>
                        <button className="border-2 mt-5 hover:bg-white hover:text-black transition-all duration-300 w-full border-white py-3 text-center text-2xl sm:text-3xl font-bold  uppercase font-bebas">
                            Contact us
                        </button>
                    </div>
                })}
            </div>
            <Marquee className='mt-8'>
                {images.map((img) => {
                    return <img key={img} src={img} className='h-[350px] sm:h-[450px] w-auto object-cover' />
                })}
            </Marquee>
        </div>
    )
}

export default ServicesPage
