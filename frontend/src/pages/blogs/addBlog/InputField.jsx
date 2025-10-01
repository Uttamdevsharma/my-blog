import React from 'react'

const InputField = ({Label,id,type,placeholder}) => {
  return (
    <div className='max-w-3xl'>
        <label htmlFor="title" className='block text-gray-700 text-sm font-bold mb-2 '>
            {Label}
            </label>
        <input type={type} placeholder={placeholder} name='email' id={id} className='w-full px-4 py-2 border 
        rounded-lg text-gray-700 focus:outline-none 
        focus:ring-2 focus:ring-blue-500' />
    </div>
  )
}

export default InputField