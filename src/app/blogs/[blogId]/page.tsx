import React from 'react'
import { blogs } from '../data';
import { Metadata } from 'next';

interface Props {
    params: {
        blogId: string;
    }
}
export const generateMetadata = ({ params: { blogId } }: Props): Metadata => {
    const blog = blogs.filter((blog) => blog.id === Number(blogId))[0]
    return {
        title: blog.title,
        description: blog.text
    }
}
const BlogDetailsPage = ({ params: { blogId } }: Props) => {
    const blog = blogs.filter((blog) => blog.id === Number(blogId))[0]
    return (
        <div className='bg-black text-white py-10 px-5 sm:px-10 lg:px-20'>
            <div className='border-t-2  border-b-2 py-3'>
                <h1 className='text-2xl font-bold mb-2 font-bebas'>Watanabe Architecture</h1>
                <p className='mb-3'>{new Date().toLocaleString()}</p>
                <button className="border-white hover:bg-black hover:text-white transition-all duration-300 font-bebas py-2 px-2 sm:px-4 text-center border-2 rounded-full text-xl">
                    Interior Design
                </button>
            </div>
            <h1 className="font-bold text-5xl  sm:text-6xl mt-5 mb-4 font-bebas">{blog.title}</h1>
            <img src={blog.thumbnail} className='h-[350px] sm:h-[500px] w-auto mx-auto object-cover' />
            <p className='mt-10'>{blog.text}</p>
        </div>
    )
}

export default BlogDetailsPage
