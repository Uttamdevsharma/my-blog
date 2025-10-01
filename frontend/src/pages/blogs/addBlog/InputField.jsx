import React from 'react'

const InputField = ({ Label, id, type, placeholder, register, validation, error }) => {
  return (
    <div className='max-w-3xl mb-4'>
        <label htmlFor={id} className='block text-gray-700 text-sm font-bold mb-2'>
            {Label}
        </label>
        <input 
            {...register(id, validation)}
            type={type}
            placeholder={placeholder}
            id={id}
            className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500' 
        />
        {error && <span className='text-red-500 text-sm'>{Label} is required</span>}
    </div>
  )
}

export default InputField
