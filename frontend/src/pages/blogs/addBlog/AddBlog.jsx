import React from 'react'
import InputField from './InputField'

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
    </div>
  )
}

export default AddBlog