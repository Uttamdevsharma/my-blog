import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Search from './Search';
import { FaMoon } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";



const Navbar = () => {

  const[isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  return (

    <nav className='bg-white shadow-md'>

     {/* desktop menu and mobile button */}
      <div className='container max-w-7xl mx-auto px-4 py-3  flex justify-between '>
        {/* logo */}
        <div>
          <a href='/'>
          <img src="/logo.png" alt="logo" />
          </a>
        </div>


        {/* menu items */}
        <ul className='md:flex hidden gap-4'>
          <li>
            <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-gray-800"}>
          Home
        </NavLink>  
          </li>

          <li>
            <NavLink to='/blogs' className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-gray-800"}>
          Blogs
        </NavLink>  
          </li>

          <li>
            <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-gray-800"}>
          About
        </NavLink>  
          </li>

          <li>
            <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-500" : "hover:text-gray-800"}>
          Contact
        </NavLink>  
          </li>

        </ul>

        {/* search and toggle */}
        <div className='md:flex hidden items-center space-x-4'>
         <Search/>

         <div className={`w-14 h-8 flex items-center bg-[#E8E8EA] rounded-full p-1 cursor-pointer transition-colors duration-300 ${isDarkMode ? "justify-end" : "justify-start"}` }>
          <button onClick={toggleDarkMode} className='w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-transform duration-300'>
            {
              isDarkMode ? <FaMoon  className='text-gray-500'/> : <MdOutlineLightMode  className='text-yellow-500'/>
            }
          </button>
         </div>
        </div>

      </div>

      {/* mobile menu items */}
      <div className='hidden'>Mobile menu items</div>

    </nav>
  )
}

export default Navbar