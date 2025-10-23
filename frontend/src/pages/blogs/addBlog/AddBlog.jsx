import axios from 'axios';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

const AddBlog = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/blogs/add-post", {
        title: data.title,
        description: data.description,
        image: data.image
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      if(response.status === 200){
        toast.success("Blog posted successfully!");
        reset();
        setTimeout(() => window.location.href = "/", 1500); // redirect after toast
      }
    } catch(error) {
      toast.error("Error posting blog");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      className="container max-w-4xl mx-auto p-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Add New Blog ✍️</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <motion.input
          type="text"
          placeholder="Blog Title"
          {...register("title", { required: true })}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          whileFocus={{ scale: 1.02 }}
        />
        {errors.title && <span className="text-red-500">Title is required</span>}

        <motion.textarea
          placeholder="Description"
          {...register("description", { required: true })}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          rows={5}
          whileFocus={{ scale: 1.02 }}
        />
        {errors.description && <span className="text-red-500">Description is required</span>}

        <motion.input
          type="url"
          placeholder="Blog Image URL"
          {...register("image", { required: true })}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          whileFocus={{ scale: 1.02 }}
        />
        {errors.image && <span className="text-red-500">Image URL is required</span>}

        <motion.button
          type="submit"
          className={`w-full py-3 rounded-lg text-white font-semibold transition ${
            loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
          }`}
          whileHover={{ scale: loading ? 1 : 1.05 }}
          whileTap={{ scale: loading ? 1 : 0.95 }}
          disabled={loading}
        >
          {loading ? 'Posting...' : 'Add Blog'}
        </motion.button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </motion.div>
  );
}

export default AddBlog;
