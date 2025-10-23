import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../assets/blogs/blog-0.png';
import authorImg from '../assets/author.png';
import { useSelector } from 'react-redux';

const Banner = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <section className="my-16">
      {/* ===== Header Section ===== */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold mb-3 text-gray-800 tracking-wide">
          Meta <span className="text-blue-600">Blog</span>
        </h1>
        <ul className="flex flex-wrap justify-center gap-6 text-lg text-gray-600 mt-4">
          <li>
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          {token && (
            <>
              <li>
                <Link to="/add-blog" className="hover:text-blue-600 transition">
                  Add Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/manage-blog"
                  className="hover:text-blue-600 transition"
                >
                  Manage Blogs
                </Link>
              </li>
            </>
          )}
        </ul>
      </header>

      {/* ===== Banner Image Section ===== */}
      <div
        className="relative rounded-xl overflow-hidden md:h-[450px] h-80 flex flex-col justify-end p-6 bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        {/* dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* banner text content */}
        <div className="relative z-10">
          <span className="bg-blue-600 text-sm uppercase px-4 py-1 rounded-md mb-3 inline-block">
            Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold md:w-2/3 mb-4 leading-snug">
            The Impact of Technology on the Workplace
          </h2>

          <div className="flex items-center gap-3">
            <img
              src={authorImg}
              alt="Author"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <div>
              <p className="font-medium">John Doe</p>
              <p className="text-sm text-gray-200">March 22, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
