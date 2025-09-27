import React from 'react'
import { NavLink } from 'react-router-dom';
import Search from './Search';



const Navbar = () => {
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
        </div>

      </div>

      {/* mobile menu items */}
      <div className='hidden'>Mobile menu items</div>

    </nav>
  )
}

export default Navbar