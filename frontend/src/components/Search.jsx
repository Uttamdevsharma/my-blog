import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (

    <>
    <div className='relative'>
        <input type="text" placeholder='Search' className='bg-[#F4F4F5]' /> 

        <button>
        <CiSearch />
        </button>
    </div>
    
    </>
  )
}

export default Search