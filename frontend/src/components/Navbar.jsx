import React from 'react'

const Navbar = () => {
  return (

    <nav className='bg-white shadow-md'>

     {/* desktop menu and mobile button */}
      <div className='container max-w-7xl mx-auto px-4 py-3 '>Desktop</div>

      {/* mobile menu items */}
      <div className='hidden'>Mobile menu items</div>

    </nav>
  )
}

export default Navbar