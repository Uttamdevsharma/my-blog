import React from 'react'
import authorImg from "../../assets/authors/author-1.png"
import blogImg from "../../assets/blogs/blog-1.png"

const BlogDetails = () => {
  return (
    <div className='container max-w-7xl mx-auto px-4 py-8'>
        <div>
            <h2 className='text-3xl font-bold mb-4'>Understanding the most important react context api</h2>

            <div className='flex items-center mb-4'>
                <img src={authorImg} alt="" className='w-10 h-10 rounded-full mr-3' />
                <div>
                    <p className='text-lg font-medium'>Tracye Wilson</p>
                    <p className='text-gray-500'>9/1/2024</p>
                </div>
            </div>

            <img src={blogImg} alt="" className='w-full md:h[580px] rounded-md object-cover mb-4' />
            <div className='space-y-5'>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, accusantium.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur praesentium delectus amet nemo ipsam harum quaerat eveniet est sapiente doloremque, blanditiis quae. Id voluptas rerum ullam magnam dolorum, exercitationem vel perferendis pariatur commodi quidem adipisci quam, et nam accusamus aperiam praesentium repellendus, explicabo soluta modi rem voluptatem voluptates iusto beatae. Nisi placeat aut quod! Quos odit numquam qui officia non quae soluta magni vitae totam corporis aut eligendi necessitatibus natus quibusdam sapiente asperiores eos inventore, a reprehenderit et optio sed temporibus. Fugit quod nesciunt natus optio blanditiis tenetur debitis? Harum laboriosam nemo labore nostrum repellat doloremque magni tempora fugiat itaque molestiae quaerat ab ipsam, soluta deleniti rerum nobis neque aliquid assumenda eos impedit. Aut repellendus repellat magni nobis fugiat pariatur minus enim perspiciatis inventore necessitatibus doloribus deleniti dolore, vel rerum laudantium ratione ad, in cumque! Praesentium assumenda fuga deserunt debitis non tempora repellendus error ipsum sunt, doloribus doloremque asperiores. Numquam sunt deleniti beatae asperiores quidem nobis praesentium assumenda inventore, enim consequatur quaerat? Tenetur error qui eius voluptate esse dolore odio, quidem voluptates, fugit quos laborum aperiam ab eos libero quaerat debitis nam et unde quisquam asperiores magnam deleniti totam laudantium deserunt! Id eveniet, non praesentium ratione deserunt labore laborum quidem.</p>
            </div>
        </div>
      
    </div>
  )
}

export default BlogDetails
