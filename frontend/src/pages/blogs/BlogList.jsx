import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [showBlogs, setShowBlogs] = useState(6);

  useEffect(() => {
    fetch('http://localhost:3000/blogs')
      .then(response => response.json())
      .then(data => {
        // Check if backend sends blogs or data.blogs
        if (Array.isArray(data.blogs)) {
          setBlogs(data.blogs);
        } else if (Array.isArray(data.data)) {
          setBlogs(data.data);
        } else {
          console.error("Unexpected data format:", data);
        }
      })
      .catch(error => console.error("Error fetching blogs:", error));
  }, []);

  const filterBlogs = Array.isArray(blogs) ? blogs : [];

  const handleMoreBlog = () => {
    setShowBlogs(prev => prev + 3);
  };

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {filterBlogs.slice(0, showBlogs).map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>

      {showBlogs < filterBlogs.length && (
        <div className='flex justify-center items-center mt-8 mb-5'>
          <button
            onClick={handleMoreBlog}
            className='bg-blue-500 rounded-md text-white hover:bg-blue-700 font-semibold flex items-center justify-center px-6 py-2 gap-1 transition-colors duration-200'
          >
            View More
          </button>
        </div>
      )}
    </div>
  );

};

export default BlogList;
