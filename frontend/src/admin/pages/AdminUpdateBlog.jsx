import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const AdminUpdateBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
  const { token } = useSelector(state => state.auth);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/admin/blog/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const blog = res.data.blog;

        setValue('title', blog.title);
        setValue('description', blog.description);
        setValue('image', blog.image);
      } catch (err) {
        console.error("Error fetching blog:", err);
      }
    };
    if(token) fetchBlog();
  }, [id, setValue, token]);

  const onSubmit = async (data) => {
    try {
      const blogData = {
        title: data.title,
        description: data.description,
        image: data.image
      };

      const res = await axios.put(`http://localhost:3000/admin/blog/edit/${id}`, blogData, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (res.status === 200) {
        toast.success("Blog updated successfully!");
        reset();
        navigate("/admin/manage-blogs"); // redirect after update
      }
    } catch (err) {
      console.error("Error updating blog:", err);
      toast.error("Error updating blog");
    }
  };

  return (
    <div className="container max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Update Blog</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input 
          type="text" 
          placeholder="Blog Title" 
          {...register("title", { required: true })} 
          className="w-full p-2 border rounded"
        />
        {errors.title && <span className="text-red-500">Title is required</span>}

        <textarea 
          placeholder="Description" 
          {...register("description", { required: true })} 
          className="w-full p-2 border rounded"
        />
        {errors.description && <span className="text-red-500">Description is required</span>}

        <input 
          type="url" 
          placeholder="Blog Image URL" 
          {...register("image", { required: true })} 
          className="w-full p-2 border rounded"
        />
        {errors.image && <span className="text-red-500">Image URL is required</span>}

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Update Blog
        </button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default AdminUpdateBlog;
