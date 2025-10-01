import React from 'react'
import InputField from './InputField'
import TextAreaField from './TextAreaField'

const AddBlog = () => {
  return (
    <div className='container max-w-7xl mx-auto px-4 py-24 space-y-4'>
        <h2 className='text-2xl font-bold mb-6'>Add New Blog</h2>


        {/* form */}

        <InputField 
        Label="Blog Title"
        id="title"
        type='text'
        placeholder="Blog Title"
        />
        {/* text area */}
        <TextAreaField 
        Label="Blog Description"
        id="description"
        type ="text"
        placeholder="Blog Description"
        />




        <InputField 
        Label="Author Name"
        id="authorName"
        type='text'
        placeholder="Author Name"
        />
        <InputField 
        Label="Author Image URL"
        id="authorImage"
        type='url'
        placeholder="Author Image URL"
        />
        <InputField 
        Label="Blog Image URL"
        id="image"
        type='url'
        placeholder="Blog Image URL"
        />

        <button
        type='submit'
        className='w-full max-w-3xl bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50' 
        >Send Message</button>
    </div>
  )
}

export default AddBlog