import React from 'react'

const Footer = () => {
    const links = [
        { id: 1, name: 'Dribble', link: '/' },
        { id: 2, name: 'Behance', link: '/' },
        { id: 3, name: 'Instagram', link: '/' },
    ]
    return (
        <div className='bg-black   text-white py-20 sm:px-20 flex flex-col items-center justify-center '>
            <h1 className="font-bebas text-6xl sm:text-9xl tracking-wider font-bold">Let&apos;s talk</h1>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-5">
                {links.map((item) => {
                    return <button key={item.id} className="border-white border-2 transition-colors duration-200 ease-in-out hover:bg-white hover:text-black   py-1 px-8 rounded-full  text-center">
                        {item.name}
                    </button>
                })}
            </div>
        </div>
    )
}

export default Footer
