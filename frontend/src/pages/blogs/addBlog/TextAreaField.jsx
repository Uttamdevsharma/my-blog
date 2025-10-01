import React from 'react'

const TextAreaField = () => {
  return (
    <div>
        <label htmlFor="message" className='block text-gray-700 text-sm font-bold mb-2'> Message</label>
        <textarea rows="4" className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus-ring-2 focus:ring-blue-500' placeholder='Enter message'>
        </textarea>
    </div>
  )
}

export default TextAreaField