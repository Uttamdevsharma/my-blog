import axios from 'axios'
import InputField from './InputField'
import TextAreaField from './TextAreaField'
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddBlog = () => {
    const { register, handleSubmit, formState: { errors } , reset } = useForm()

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
        try {
            const response =await axios.post("http://localhost:3000/blogs/add-post" , BlogData)
            if(response.status === 200){
                toast.success("Your post is created Successfully!");
                reset()
            }

        }catch(error){
            console.log("Error arise",error)
        }
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
                    Add Blog
                </button>

            </form>

            <ToastContainer
    position="top-right"
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={true}
    closeOnClick
    pauseOnHover
    draggable
  />
        </div>
    )
}

export default AddBlog
