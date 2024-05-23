import AppTitle from '@/components/AppTitle'
import { Metadata } from 'next';
import React from 'react'
import Marquee from 'react-fast-marquee'

export const metadata: Metadata = {
    title: "Works",
    description: "The Best Partner for Your Interior Design",
};

const WorksPage = () => {
    const projects = [
        { id: 1, name: 'Project 1', location: 'Italy', tag: 'Interior and Architecture Design', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries", imgs: ['/g1.png', '/g2.png', '/g3.png', '/g4.png', '/g5.png',] },
        { id: 2, name: 'Project 2', location: 'Vietnam', tag: 'Interior Design', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries", imgs: ['/g6.png', '/g7.png', '/g8.png', '/g9.png', '/g10.png',] },
        { id: 3, name: 'Project 3', location: 'England', tag: 'Interior Design', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries", imgs: ['/g11.png', '/g12.png', '/g13.png', '/g14.png', '/g15.png',] },
        { id: 4, name: 'Project 4', location: 'Japan', tag: 'Interior Design', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries", imgs: ['/g16.png', '/g17.png', '/g18.png', '/g19.png', '/g1.png'] },
    ]
    return (<>
        <div className='py-10 px-5 sm:px-10 lg:px-20 bg-black text-white'>
            <AppTitle title='Works' />
            <iframe
                src="https://www.youtube.com/embed/NoWyNgAQe34?si=Jthrx77fB35CoOlS&amp;start=10&autoplay=1&mute=1"
                title="YouTube video player"
                allow="autoplay; muted;"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-[300px] md:h-[400px] object-cover"
            ></iframe>
        </div>
        <div className='py-10 px-5 sm:px-10 bg-white'>
            {projects.map((project) => {
                return <div key={project.id} className='mb-10'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <h1 className="mb-3 text-5xl sm:text-6xl uppercase font-bold font-bebas">{project.name}</h1>
                            <div className="flex flex-wrap md:flex-nowrap items-center gap-2 sm:gap-5">
                                <p className="text-3xl sm:text-4xl uppercase font-bold font-bebas">{project.location}</p>
                                <button className="border-black hover:bg-black hover:text-white transition-all duration-300 font-bebas py-2 px-2 sm:px-4 text-center border-2 rounded-full text-xl">
                                    {project.tag}
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-wrap md:flex-nowrap gap-4'>
                            <p>{project.text}</p>
                            <button className="text-nowrap h-max border-black bg-black text-white uppercase hover:bg-white hover:text-black transition-all duration-300 font-bebas py-2 px-5 text-center border-2 rounded-full ">
                                See more
                            </button>
                        </div>
                    </div>
                    <Marquee className='mt-8'>
                        {project.imgs.map((img) => {
                            return <img key={img} src={img} className='h-[200px] sm:h-[280px] w-auto object-cover' />
                        })}
                    </Marquee>
                </div>
            })}
        </div>
    </>
    )
}

export default WorksPage
