import React from 'react'

const Intro = () => {
    return (
        <div className='px-5 sm:px-10 py-14 grid gap-5 grid-cols-1 md:grid-cols-2'>
            <div>
                <h1 className='text-5xl font-bebas font-bold'>WATANABE FURNITURE FOR COMFORT LIVING</h1>
                <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eius repellat est enim consequatur.</p>
            </div>
            <div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, corrupti doloribus est reprehenderit veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae incidunt consequuntur quis laboriosam, voluptatibus, temporibus maiores soluta repellendus cum non quasi voluptates autem nulla et provident vero tenetur omnis?</p>
                <button className="mt-5 border-black text-black border-2 transition-colors duration-300 ease-in-out hover:bg-black hover:text-white font-bebas  px-5 rounded-full text-lg text-center">
                    DETAIL
                </button>
            </div>
        </div>
    )
}

export default Intro
