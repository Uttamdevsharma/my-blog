import React from 'react'
import {Link} from 'react-router-dom'

const BlogCard = ({blog}) => {
  return (
    <div className='border rounded-lg p-4 bg-white shadow-md'>

        {/* image and category */}
        <Link to={`/blogs/${blog?._id}`}>
        <img src={blog.image} alt="" className='w-full h-48 object-cover hover:scale-105 transition-all duration-200 cursor-pointer rounded-md mb-1  ' />   
        </Link>
        <div className='bg-gray-300 inline-block text-sm text-blue-400 px-3 py-1 rounded-md mb-3'>
            Technology
        </div>
          
          {/*title  */}
        <Link to={`/blogs/${blog?._id}`}>
        <h3 className='text-xl font-semibold text-gray-800 hover:text-blue-500 mb-2'>{blog.title}</h3>
        </Link>

        {/* description */}
        <p className='text-gray-500'>{`${blog.description.substring(0,120)}`}...</p>
        
        {/* date */}
        <div className='mt-4 flex items-center' >
            <img src={blog.author.image} alt=""  className='size-10 rounded-full mr-3'/>
            <div>
                <p className='text-sm text-gray-600'>{blog.author.name}</p>
                <p className='text-xs text-gray-400'>
                    {
                    blog?.date ? <span>{new Date(blog.date).toLocaleDateString()} 
                    </span> : <span>{new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                    }</p>
            </div>
        </div>

    </div>
  )
}

export default BlogCard