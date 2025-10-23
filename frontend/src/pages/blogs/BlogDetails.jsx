import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import defaultAuthorImg from "../../assets/author.png"; // make sure file exists
import blogImg from "../../assets/blogs/blog-1.png";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/blogs/${id}`);
        setBlog(res.data.blog);
        setIsLoading(false);
      } catch(err) {
        console.log(err);
      }
    }
    fetchBlog();
    window.scrollTo(0,0);
  }, [id]);

  if(isLoading) return <h1>Loading...</h1>;

  return (
    <div className="container max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div className="flex items-center mb-4">
        <img src={blog.author?.image || defaultAuthorImg} alt="" className="w-12 h-12 bg-red-300 rounded-full mr-3"/>
        <div>
          <p className="font-medium">{blog.author?.name || "Unknown"}</p>
          <p className="text-gray-500">{new Date(blog.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
      <img src={blog.image || blogImg} alt="" className="w-full h-80 object-cover mb-4 rounded"/>
      <p>{blog.description}</p>
    </div>
  );
}

export default BlogDetails;
