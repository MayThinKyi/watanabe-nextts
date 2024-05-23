import AppTitle from '@/components/AppTitle';
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Gallery",
    description: "The Best Partner for Your Interior Design",
};

const GalleryPage = () => {
    const gallery = [
        '/g1.png', '/g2.png', '/g3.png', '/g4.png', '/g5.png', '/g6.png', '/g7.png', '/g8.png', '/g9.png', '/g10.png', '/g11.png', '/g12.png', '/g13.png', '/g14.png', '/g15.png', '/g16.png', '/g17.png', '/g18.png', '/g19.png',
    ]
    const randomColumns = () => {
        const columnSize = [
            "sm:row-span-1",
            "sm:col-span-3 row-span-1",
            "col-span-1 sm:row-span-2",
        ];
        const randomIndex = Math.floor(Math.random() * columnSize.length);

        return columnSize[randomIndex];
    };
    return (
        <div className='bg-black text-white  px-5 lg:px-10 pt-10 pb-20  relative'>
            <AppTitle title='Gallery' />
            <p className='mt-[-40px] text-lg mb-8'>Our Entire works are showcased here.</p>
            <div className="grid-cols-1 bg-black grid-flow-row-dense gap-6 sm:grid-cols-2 md:grid-cols-4 grid">
                {gallery.map((item, index) => {
                    return (
                        <div key={index} className={randomColumns()}>
                            <img src={item} className='object-cover w-full h-full' />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default GalleryPage
