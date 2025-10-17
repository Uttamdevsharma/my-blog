import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import InputField from '../addBlog/InputField'
import TextAreaField from '../addBlog/TextAreaField'
import { useParams } from 'react-router'
import axios from 'axios'

const UpdateBlog = () => {
    const {id} = useParams()
  const { register, handleSubmit,reset,setValue, formState: { errors } } = useForm()

  useEffect(() => {
    const updateBlogs = async() => {
        try{
            const fetchSingleBlog = await axios.get(`http://localhost:3000/blogs/${id}`)
            const blog = fetchSingleBlog.data.blog
            setValue('title', blog.title)
            setValue('description',blog.description)
            setValue('authorImage',blog.author.image)
            setValue('authorName',blog.author.name);
            setValue('image',blog.image)
        }catch(error) {
            console.log("Error arise",error)
        }
       

    }
    updateBlogs()

  },[])
  
      const onSubmit = async(data) => {
          const BlogData = {
              title:data.title,
              description: data.description,
              image:data.image,
              author: {
                  name : data.authorName,
                  image:data.authorImage
              }
          }
          try{
            const blogUpdate = await axios.put(`http://localhost:3000/blogs/edit/${id}`,BlogData)
            if(blogUpdate.status === 200){
                alert("blog updated successfully");
                reset()
            }

          }catch(error){
            console.log("Error arise",error)
          }
      }

      
      
  return (
    <div>
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
                    Update Blog
                </button>

            </form>
        </div>
    </div>
  )
}

export default UpdateBlog
