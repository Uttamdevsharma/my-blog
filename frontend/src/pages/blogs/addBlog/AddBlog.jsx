import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { Upload, Image as ImageIcon } from "lucide-react"; // ⬅️ nice icons

const AddBlog = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null); // 🔹 image preview

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const uploadRes = await axios.post("http://localhost:3000/img/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const imageUrl = uploadRes.data.imageUrl;

      const response = await axios.post("http://localhost:3000/blogs/add-post", {
        title: data.title,
        description: data.description,
        image: imageUrl,
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      if (response.status === 200) {
        toast.success("Blog posted successfully!");
        reset();
        setPreview(null);
        setTimeout(() => window.location.href = "/", 1500);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error posting blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 mt-10 border"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">
        ✍️ Create New Blog
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Blog Title</label>
          <motion.input
            type="text"
            placeholder="Enter blog title..."
            {...register("title", { required: true })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            whileFocus={{ scale: 1.02 }}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">Title is required</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Description</label>
          <motion.textarea
            placeholder="Write something about your blog..."
            {...register("description", { required: true })}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            rows={5}
            whileFocus={{ scale: 1.02 }}
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">Description is required</p>}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-700 font-medium mb-3">Upload Image</label>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
          >
            <Upload className="text-blue-500 w-10 h-10 mb-2" />
            <p className="text-gray-500 mb-2">Drag & drop or click to select image</p>
            <input
              type="file"
              accept="image/*"
              {...register("image", {
                required: true,
                onChange: (e) => setPreview(URL.createObjectURL(e.target.files[0])),
              })}
              className="hidden"
              id="fileUpload"
            />
            <label htmlFor="fileUpload" className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition">
              Choose File
            </label>
          </motion.div>

          {errors.image && <p className="text-red-500 text-sm mt-1">Image is required</p>}

          {/* 🔹 Preview */}
          {/* {preview && (
            <div className="mt-4 flex justify-center">
              <img
                src={preview}
                alt="Preview"
                className="w-48 h-48 object-cover rounded-lg shadow-md border"
              />
            </div>
          )} */}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: loading ? 1 : 1.05 }}
          whileTap={{ scale: loading ? 1 : 0.95 }}
          className={`w-full py-3 mt-6 text-white font-semibold rounded-lg transition ${
            loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Posting..." : "Publish Blog"}
        </motion.button>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </motion.div>
  );
};

export default AddBlog;
