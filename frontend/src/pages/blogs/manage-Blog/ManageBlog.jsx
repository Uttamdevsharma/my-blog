import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ManageBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const { token, user } = useSelector((state) => state.auth);

  useEffect(() => {
    const url = user?.role === 'admin' 
      ? 'http://localhost:3000/blogs' 
      : 'http://localhost:3000/blogs/user/my-blogs';

    axios.get(url, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setBlogs(res.data.blogs))
    .catch(err => console.error(err));
  }, [token, user]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure to delete this blog?")) return;
    try {
      await axios.delete(`http://localhost:3000/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex justify-center mt-6">
      <div className="w-full max-w-6xl p-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6 text-center">
          Manage Your Blogs
        </h2>

        {blogs.length ? (
          <div className="overflow-x-auto shadow-md rounded-lg">
            <table className="min-w-full border-collapse border border-gray-300 text-center">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-3 border-b">Title</th>
                  {user?.role === 'admin' && <th className="p-3 border-b">Author</th>}
                  <th className="p-3 border-b">Date</th>
                  <th className="p-3 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map(blog => (
                  <tr key={blog._id} className="hover:bg-gray-50 transition">
                    <td className="p-3 border-b">{blog.title}</td>
                    {user?.role === 'admin' && <td className="p-3 border-b">{blog.author?.name || 'Unknown'}</td>}
                    <td className="p-3 border-b">{new Date(blog.createdAt).toLocaleDateString()}</td>
                    <td className="p-3 border-b flex justify-center gap-2">
                      <Link to={user?.role === 'admin' ? `/admin/blog/${blog._id}` : `/blogs/${blog._id}`} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        View
                      </Link>
                      <Link to={user?.role === 'admin' ? `/admin/blog/edit/${blog._id}` : `/blogs/edit/${blog._id}`} className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                        Edit
                      </Link>
                      <button onClick={() => handleDelete(blog._id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-4">No blogs found</p>
        )}
      </div>
    </section>
  );
};

export default ManageBlog;
