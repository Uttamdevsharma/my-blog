import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Search from './Search';
import { FaMoon, FaUserCircle } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice'; // Redux slice action

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const toggleMobileMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleProfileMenu = () => setIsProfileOpen(!isProfileOpen);

  const handleLogout = () => {
    dispatch(logout());
    setIsProfileOpen(false);
    navigate('/');
  }

  return (
    <nav className='bg-white shadow-md'>
      <div className='container max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img src="/logo.png" alt="logo" />
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <ul className='md:flex hidden gap-4 items-center'>
          <li>
            <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-gray-800"}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/blogs' className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-gray-800"}>Blogs</NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-gray-800"}>About</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-gray-800"}>Contact</NavLink>
          </li>

          {/* Search Bar */}
          <li>
            <Search />
          </li>

          {/* Dark Mode Toggle */}
          <li>
            <div className={`w-14 h-8 flex items-center bg-[#E8E8EA] rounded-full p-1 cursor-pointer transition-colors duration-300 ${isDarkMode ? "justify-end" : "justify-start"}`}>
              <button onClick={toggleDarkMode} className='w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300'>
                {isDarkMode ? <FaMoon className='text-gray-500'/> : <MdOutlineLightMode className='text-yellow-500'/>}
              </button>
            </div>
          </li>

          {/* Profile Icon */}
          <li className='relative'>
            <button onClick={toggleProfileMenu} className='ml-4 text-2xl'>
              <FaUserCircle />
            </button>
            {isProfileOpen && (
              <div className='absolute right-0 mt-2 w-40 bg-white border shadow-lg rounded-md z-50'>
                {!user ? (
                  <ul className='flex flex-col'>
                    <li>
                      <NavLink to='/login' onClick={() => setIsProfileOpen(false)} className='block px-4 py-2 hover:bg-gray-100'>Login</NavLink>
                    </li>
                    <li>
                      <NavLink to='/register' onClick={() => setIsProfileOpen(false)} className='block px-4 py-2 hover:bg-gray-100'>Register</NavLink>
                    </li>
                  </ul>
                ) : (
                  <ul className='flex flex-col'>
                    <li className='px-4 py-2'>Hello, {user.name}</li>
                    <li>
                      <button onClick={handleLogout} className='w-full text-left px-4 py-2 hover:bg-gray-100'>Logout</button>
                    </li>
                  </ul>
                )}
              </div>
            )}
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className='md:hidden block'>
          <button onClick={toggleMobileMenu}>
            {isMenuOpen ? <IoMdClose className='text-2xl'/> : <HiMiniBars3BottomRight className='text-2xl'/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden bg-white shadow-md p-4'>
          <ul className='flex flex-col items-center space-y-3'>
            <li onClick={toggleMobileMenu}>
              <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-gray-800"}>Home</NavLink>
            </li>
            <li onClick={toggleMobileMenu}>
              <NavLink to='/blogs' className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-gray-800"}>Blogs</NavLink>
            </li>
            <li onClick={toggleMobileMenu}>
              <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-gray-800"}>About</NavLink>
            </li>
            <li onClick={toggleMobileMenu}>
              <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-gray-800"}>Contact</NavLink>
            </li>

            {/* Search Bar */}
            <li className='w-full'>
              <Search />
            </li>

            {/* Dark Mode Toggle */}
            <li className='w-full flex justify-center mt-2'>
              <div className={`w-14 h-8 flex items-center bg-[#E8E8EA] rounded-full p-1 cursor-pointer transition-colors duration-300 ${isDarkMode ? "justify-end" : "justify-start"}`}>
                <button onClick={toggleDarkMode} className='w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300'>
                  {isDarkMode ? <FaMoon className='text-gray-500'/> : <MdOutlineLightMode className='text-yellow-500'/>}
                </button>
              </div>
            </li>

            {/* Profile Mobile */}
            <li className='w-full flex justify-center mt-2 relative'>
              <button onClick={toggleProfileMenu} className='text-2xl'>
                <FaUserCircle />
              </button>
              {isProfileOpen && (
                <div className='absolute top-10 w-40 bg-white border shadow-lg rounded-md z-50'>
                  {!user ? (
                    <ul className='flex flex-col'>
                      <li>
                        <NavLink to='/login' onClick={() => setIsProfileOpen(false)} className='block px-4 py-2 hover:bg-gray-100'>Login</NavLink>
                      </li>
                      <li>
                        <NavLink to='/register' onClick={() => setIsProfileOpen(false)} className='block px-4 py-2 hover:bg-gray-100'>Register</NavLink>
                      </li>
                    </ul>
                  ) : (
                    <ul className='flex flex-col'>
                      <li className='px-4 py-2'>Hello, {user.name}</li>
                      <li>
                        <button onClick={handleLogout} className='w-full text-left px-4 py-2 hover:bg-gray-100'>Logout</button>
                      </li>
                    </ul>
                  )}
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
