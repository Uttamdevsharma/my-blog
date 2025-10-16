import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router';

const ManageBlog = () => {
    const [blogs, setBlogs] = useState([]);

     useEffect(() => {
            fetch('http://localhost:3000/blogs/')
            .then(response => response.json())
            .then(data => setBlogs(data.blogs))
            .catch(error => console.error("Error :" +error))
    
        }, [])

        const handleDelete = async(id) => {
            try{
                await axios.delete(`http://localhost:3000/blogs/${id}`)
            }catch(error){
                console.log("Error arise ",error)
            }
        }

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
                             {new Date(blog.createdAt).toLocaleDateString('en-US')}
                        </p>
                    </td>
                    <td className="p-4 border-b border-slate-700 space-x-2">
                       
                            <Link to={`/blogs/${blog._id}`}
                            className='bg-blue-400 text-white px-2 py-1 hover:bg-blue-600' >
                            View
                            
                           </Link>

                           <Link to={`/blogs/edit/${blog._id}`} className='bg-yellow-400 text-white px-2 py-1 hover:bg-blue-600' >
                            Edit
                            
                           </Link>

                           <Link onClick={() => handleDelete(blog._id)} className='bg-red-400 text-white px-2 py-1 hover:bg-blue-600' >
                            Delete
                            
                           </Link>
            
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
