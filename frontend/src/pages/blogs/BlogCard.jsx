import React from 'react';
import { Link } from 'react-router-dom';
import defaultAuthorImg from "../../assets/author.png";

const BlogCard = ({ blog }) => {
  return (
    <div className="border rounded-md p-4 shadow-md">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h2 className="text-xl font-bold mb-1">{blog.title}</h2>
      <p className="text-gray-500 text-sm mb-2">
        {blog.description.slice(0, 100)}...
      </p>

      <div className="flex items-center">
        <img
          src={blog.author?.image || defaultAuthorImg}
          alt="Author"
          className="w-8 h-8 bg-red-300 rounded-full mr-2"
        />
        <p className="text-sm">{blog.author?.name || "Unknown"}</p>
      </div>

      <Link to={`/blogs/${blog._id}`} className="text-blue-500 mt-2 block">
        Read More
      </Link>
    </div>
  );
};

export default BlogCard;
