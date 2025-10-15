import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const ManageBlog = () => {
    const [blogs, setBlogs] = useState([]);

     useEffect(() => {
            fetch('blogs.json')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error("Error :" +error))
    
        }, [])
  return (
    <section className='container max-w-7xl mx-auto px-4 py-24'>
        <h2 className='text-2xl font-bold mb-6'>Manage Your Blog</h2>

         <div>

            {
               blogs.length > 0 ? ( 
                <table class="w-full text-left table-auto min-w-max">
            <thead >
                <tr className='bg-gray-100'>
                    <th className="p-4 border-b border-slate-600">
                        <p className="text-sm font-normal leading-none">
                            Title
                        </p>
                    </th>
                    <th className="p-4 border-b border-slate-600">
                        <p className="text-sm font-normal leading-none">
                            Author
                        </p>
                    </th>
                    <th className="p-4 border-b border-slate-600">
                        <p className="text-sm font-normal leading-none">
                            Date
                        </p>
                    </th>
                    <th className="p-4 border-b border-slate-600">
                        <p className="text-sm font-normal leading-none">
                            Actions
                        </p>
                    </th>
                </tr>
            </thead>
            <tbody>
                      {
                        blogs.map((blog,index) => (
                            <tr key={index}>                 
                    <td className="p-4 border-b border-slate-700">
                        <p className="text-sm font-semibold">
                            {blog.title}
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700">
                        <p className="text-sm">
                            {blog.author.name}
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700">
                        <p className="text-sm">
                            {blog.date}
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700">
                        <p className="text-sm">
                            Fiction
                        </p>
                    </td>
                </tr>
                
                        ))
                    }
                
            </tbody>
        </table>

               ) : <div>No data found </div> 
            }
         
         </div>
    </section>
  )
}

export default ManageBlog
