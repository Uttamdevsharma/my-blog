import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/blogs/blog-0.png';
import authorImg from '../assets/author.png';
import { useSelector } from 'react-redux';

const Banner = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <div className="my-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold mb-4">Meta Blog</h1>
        <ul className="flex flex-wrap justify-center gap-4">
          <li><Link to="/">Home</Link></li>
          {token && (
            <>
              <li><Link to="/add-blog">Add New Blog</Link></li>
              <li><Link to="/manage-blog">Manage Blog</Link></li>
            </>
          )}
        </ul>
      </div>
      <div
        className="md:min-h-[450px] h-80 w-full bg-cover bg-no-repeat rounded-md text-white flex flex-col justify-end p-5"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <span className="bg-blue-500 text-center max-w-36 px-4 py-1 rounded-md mb-3">
          Technology
        </span>
        <h2 className="sm:text-3xl text-2xl font-semibold md:w-1/2 mb-5">
          The Impact of Technology on the Workplace
        </h2>
        <div className="flex items-center gap-1">
          <img src={authorImg} alt="author" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
