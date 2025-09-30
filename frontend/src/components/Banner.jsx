import React from 'react'
import { Link } from 'react-router-dom'
import bannerImg from '../assets/blogs/blog-0.png'
import authorImg from '../assets/author.png'

const Banner = () => {
  return (
    <div className='my-16'>
        {/* banner text */}
        <div className='text-center mb-8'>
            <h1 className='text-4xl font-semibold mb-4'>Meta Blog</h1>
            <ul className='flex flex-wrap items-center justify-center gap-4'>
                <li>
                    <Link to="/" className='bg-gray-200 px-2.5 py1 rounded-full hover:text-blue-500 hover:underline underline-offset-4'>Home</Link>
                </li>
                <li>
                    <Link to="/add-blog" className='bg-gray-200 px-2.5 py1 rounded-full hover:text-blue-500 hover:underline underline-offset-4'>Add New Blog</Link>
                </li>
                <li>
                    <Link to="/manage-blog" className='bg-gray-200 px-2.5 py1 rounded-full hover:text-blue-500 hover:underline underline-offset-4'>Manage Blog</Link>
                </li>
            </ul>
        </div>

        {/* banner image */}
        <div className='text-white'>
            <div className='md:min-h-[450px] h-80 w-full bg-cover bg-no-repeat rounded-md' style={{backgroundImage: `url(${bannerImg})`}}> 
                <div className=' flex flex-col h-full justify-end p-5'>
                    <span className='bg-blue-500 text-center max-w-36 px-4 py-1 rounded-md mb-3'>Technology</span>
                    <h2 className='sm:text-3xl text-2xl font-semibold md:w-1/2 mb-5'>The Impact of Technology on the Workplace: How Technology is Changing</h2>
                    <div className='flex items-center gap-1'>
                        <img src={authorImg} alt="" />
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Banner