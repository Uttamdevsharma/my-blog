import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const AdminManageBlogs = () => {
  const navigate = useNavigate();
  const { token, user } = useSelector((state) => state.auth);
  const [blogs, setBlogs] = useState([]);

  // ✅ Route Protection
  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else if (user.role !== "admin") {
      navigate("/unauthorized");
    }
  }, [token, user, navigate]);

  // ✅ Fetch all blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/admin/manage-blogs", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBlogs(res.data.blogs || []);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    if (token && user?.role === "admin") {
      fetchBlogs();
    }
  }, [token, user]);

  // Delete blog
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      await axios.delete(`http://localhost:3000/blogs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Manage All Blogs</h2>

      {blogs.length ? (
        <table className="w-full table-auto border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Author</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="hover:bg-gray-50">
                <td className="p-2 border">{blog.title}</td>
                <td className="p-2 border">{blog.author?.name || "Unknown"}</td>
                <td className="p-2 border">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </td>
                <td className="p-2 border space-x-2">
                  <Link
                    to={`/admin/blog/${blog._id}`}
                    className="px-2 py-1 bg-blue-500 text-white rounded"
                  >
                    View
                  </Link>
                  <Link
                    to={`/admin/blog/edit/${blog._id}`}
                    className="px-2 py-1 bg-yellow-500 text-white rounded"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="px-2 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">No blogs found.</p>
      )}
    </section>
  );
};

export default AdminManageBlogs;
