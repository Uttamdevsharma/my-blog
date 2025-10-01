import React from 'react'

const TextAreaField = ({Label,id,type,placeholder}) => {
  return (
    <div className='max-w-3xl'>
        <label htmlFor="message" className='block text-gray-700 text-sm font-bold mb-2'> {Label}</label>
        <textarea rows="4" id={id} type={type} placeholder={placeholder} className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500' placeholder='Enter message'>
        </textarea>
    </div>
  )
}

export default TextAreaField