import React from 'react'
import InputField from './InputField'
import TextAreaField from './TextAreaField'
import { useForm } from "react-hook-form"

const AddBlog = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        const BlogData = {
            title:data.title,
            description: data.description,
            image:data.image,
            author: {
                name : data.authorName,
                image:data.authorImage
            }
        }
        console.log(BlogData)
    }
    

    return (
        <div className='container max-w-7xl mx-auto px-4 py-24 space-y-4'>
            <h2 className='text-2xl font-bold mb-6'>Add New Blog</h2>

            <form onSubmit={handleSubmit(onSubmit)}>

                <InputField
                    Label="Blog Title"
                    id="title"
                    type="text"
                    placeholder="Blog Title"
                    register={register}
                    validation={{ required: true }}
                    error={errors.title}
                />

                <TextAreaField
                    Label="Blog Description"
                    id="description"
                    placeholder="Blog Description"
                    register={register}
                    validation={{ required: true }}
                    error={errors.description}
                />

                <InputField
                    Label="Author Name"
                    id="authorName"
                    type="text"
                    placeholder="Author Name"
                    register={register}
                    validation={{ required: true }}
                    error={errors.authorName}
                />

                <InputField
                    Label="Author Image URL"
                    id="authorImage"
                    type="url"
                    placeholder="Author Image URL"
                    register={register}
                    validation={{ required: true }}
                    error={errors.authorImage}
                />

                <InputField
                    Label="Blog Image URL"
                    id="image"
                    type="url"
                    placeholder="Blog Image URL"
                    register={register}
                    validation={{ required: true }}
                    error={errors.image}
                />

                <button
                    type='submit'
                    className='w-full max-w-3xl bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
                >
                    Submit Blog
                </button>

            </form>
        </div>
    )
}

export default AddBlog
