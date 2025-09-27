import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (

    <>
    <div className='relative'>
        <input type="text" placeholder='Search' className='bg-[#F4F4F5] py-2 pl-4 pr-4 rounded-full focus:outline-none' /> 

        <button>
        <CiSearch className=' absolute right-3 top-2.5 hover:bg-gray-100' />
        </button>
    </div>
    
    </>
  )
}

export default Search