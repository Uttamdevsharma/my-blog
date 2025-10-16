import React from 'react'
import blogImg from "../../assets/blogs/blog-1.png"
import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react'

const BlogDetails = () => {

    const [blog,setBlog] = useState(null);
    const[isLoading,setIsloading] = useState(true)
    
    const {id} = useParams();

    useEffect(() => {
        const fetchBlog = async() => {
            try{
            const response = await axios.get(`http://localhost:3000/blogs/${id}`)
            setBlog(response.data.blog)
            setIsloading(false)

            }catch(error){
                console.log("Error arise",error)
            }
            
        }
        fetchBlog()
        window.scrollTo(0,0)
    },[id])
    if(isLoading) return <h1>Loading ....</h1>

  return (
    <div className='container max-w-7xl mx-auto px-4 py-8'>
        <div>
            <h2 className='text-3xl font-bold mb-4'>{blog.title}</h2>

            <div className='flex items-center mb-4'>
                <img src={blog.author.image} alt="" className='w-10 h-10 rounded-full mr-3' />
                <div>
                    <p className='text-lg font-medium'>{blog.author.name}</p>
                    <p className="text-gray-500">
                  {new Date(blog.createdAt).toLocaleDateString()}
                   </p>

                </div>
            </div>

            <img src={blogImg} alt="" className='w-full md:h[580px] rounded-md object-cover mb-4' />
            <div className='space-y-5'>
                <p>{blog.description}</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur praesentium delectus amet nemo ipsam harum quaerat eveniet est sapiente doloremque, blanditiis quae. Id voluptas rerum ullam magnam dolorum, exercitationem vel perferendis pariatur commodi quidem adipisci quam, et nam accusamus aperiam praesentium repellendus, explicabo soluta modi rem voluptatem voluptates iusto beatae. Nisi placeat aut quod! Quos odit numquam qui officia non quae soluta magni vitae totam corporis aut eligendi necessitatibus natus quibusdam sapiente asperiores eos inventore, a reprehenderit et optio sed temporibus. Fugit quod nesciunt natus optio blanditiis tenetur debitis? Harum laboriosam nemo labore nostrum repellat doloremque magni tempora fugiat itaque molestiae quaerat ab ipsam, soluta deleniti rerum nobis neque aliquid assumenda eos impedit. Aut repellendus repellat magni nobis fugiat pariatur minus enim perspiciatis inventore necessitatibus doloribus deleniti dolore, vel rerum laudantium ratione ad, in cumque! Praesentium assumenda fuga deserunt debitis non tempora repellendus error ipsum sunt, doloribus doloremque asperiores. Numquam sunt deleniti beatae asperiores quidem nobis praesentium assumenda inventore, enim consequatur quaerat? Tenetur error qui eius voluptate esse dolore odio, quidem voluptates, fugit quos laborum aperiam ab eos libero quaerat debitis nam et unde quisquam asperiores magnam deleniti totam laudantium deserunt! Id eveniet, non praesentium ratione deserunt labore laborum quidem.</p>
            </div>
        </div>
      
    </div>
  )
}

export default BlogDetails
