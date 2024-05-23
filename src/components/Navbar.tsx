'use client';
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = [
        { id: 1, name: 'HOME', link: '/' },
        { id: 2, name: 'BLOG', link: '/blogs' },
        { id: 3, name: 'WORKS', link: '/works' },
        { id: 4, name: 'SERVICES', link: '/services' },
        { id: 5, name: 'GALLERY', link: '/gallery' },
    ]
    return (
        <div className='bg-black'>
            <div className="cursor-pointer text-white hidden md:flex items-center justify-between py-4 px-5">
                <h1 className='text-4xl font-bebas'>WATANABE</h1>
                <div className="flex items-center gap-8">
                    {navLinks.map((item) => {
                        return <Link className='xl:text-lg' key={item.id} href={item.link}>
                            {item.name}
                        </Link>
                    })}
                </div>
                <button className="border-white border-2 transition-colors duration-200 ease-in-out hover:bg-white hover:text-black font-bebas py-1 px-4 rounded-full text-center">
                    CONTACT US
                </button>
            </div>
            <div className="cursor-pointer  relative text-white md:hidden   py-4 px-5">
                <div className="flex items-center justify-between  ">
                    <h1 className='text-4xl font-bebas'>WATANABE</h1>
                    {isMenuOpen ? <p onClick={() => setIsMenuOpen(false)}>Close</p> :
                        <p onClick={() => setIsMenuOpen(true)}>Menu</p>}
                </div>
                <div className=''>
                    <div className={`absolute z-20 top-8 left-0 right-0 bottom-0 flex flex-col items-center   bg-black  gap-8  transition-all duration-500   ${isMenuOpen ? ' h-[88vh] mt-10 pt-10 opacity-100 ' : 'h-0 opacity-0 top-16 pt-10  '}`}
                        style={{ transitionProperty: 'height, opacity' }}
                    >
                        {navLinks.map((item) => {
                            return <Link className='xl:text-lg' key={item.id} href={item.link}>
                                {item.name}
                            </Link>
                        })}
                        <button className="border-white border-2 transition-colors duration-200 ease-in-out hover:bg-white hover:text-black font-bebas py-1 px-4 rounded-full text-center">
                            CONTACT US
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar
