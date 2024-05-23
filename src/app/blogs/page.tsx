import AppTitle from '@/components/AppTitle'
import React from 'react'
import { blogs } from './data'
import Link from 'next/link'
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Blogs",
    description: "The Best Partner for Your Interior Design",
};
const BlogsPage = () => {
    return (
        <div className='py-10 px-5 sm:px-10 lg:px-20 bg-black text-white'>
            <AppTitle title='Our Blogs' />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 mx-auto mt-8">
                {blogs.map((blog) => {
                    return <Link key={blog.id} href={`/blogs/${blog.id}`}>
                        <div className='px-5 py-5 border-2 border-white'>
                            <h1 className="line-clamp-1 text-center text-4xl   font-bebas font-bold mb-2">{blog.title}</h1>
                            <div className="mb-2 font-semibold flex items-center justify-between">
                                <p>WATANABE Architecture</p>
                                <p>{new Date().toLocaleDateString()}</p>
                            </div>
                            <div className='h-[300px] cursor-pointer overflow-hidden'>
                                <img src={blog.thumbnail} className='duration-500 transition-all hover:scale-110 h-full w-full object-cover' />
                            </div>
                        </div>
                    </Link>
                })}


            </div>
        </div>
    )
}

export default BlogsPage
