import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';

const BlogList = () => {
   
    const [blogs, setBlogs] = useState([]);
    const [showBlogs , setShowBlogs] = useState(6)
    const [searchTerm ,setSearchTerm] = useState('')

    useEffect(() => {
        fetch('blogs.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
        .catch(error => console.error("Error :" +error))

    }, [])

    // filter bloges based on title, description and author name
    const filterBlogs = blogs.filter(blog => 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.author.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // handle view more blog
    const handleMoreBlog = () => {
        setShowBlogs(prev => prev + 3)
    }

  return (
    <>

<div className='container mx-auto '>
        {/* map all blogs */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {
                filterBlogs.slice(0,showBlogs).map((blog,index) => (
                    <BlogCard key={index} blog = {blog} />
                ))
            }
        </div>

        {/* Show more blogs */}
        {
            showBlogs < filterBlogs.length && (
                <div className='flex justify-center items-center mt-8 mb-5'>
                    <button onClick={handleMoreBlog} className='bg-blue-500 rounded-md text-white hover:bg-blue-700 font-semibold flex items-center justify-center px-6 py-2 gap-1 transition-colors duration-200'>
                        View More
                    </button>
                 
                </div>
            )
        }
    </div>
    
    </>
   
    
  )
}

export default BlogList