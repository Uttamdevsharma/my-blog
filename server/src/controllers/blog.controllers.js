const Blog = require("../models/blog.model");

// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "name email image").sort({ createdAt: -1 });
    res.send({ message: "Successfully fetched all blogs", blogs });
  } catch (error) {
    res.status(500).send({ message: "Error fetching blogs", error });
  }
};

// Get single blog
const singleBlogs = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate("author", "name email image");
    if (!blog) return res.status(404).send({ message: "Blog not found" });
    res.send({ message: "Successfully fetched blog", blog });
  } catch (error) {
    res.status(500).send({ message: "Error fetching blog", error });
  }
};

// Add new blog
const addBlog = async (req, res) => {
  try {
    const newBlog = new Blog({
      ...req.body,
      author: req.user.sub, // logged-in user id
    });
    const blog = await newBlog.save();
    await blog.populate("author", "name email image");
    res.status(200).send({ message: "Post Created Successfully", blog });
  } catch (error) {
    res.status(500).send({ message: "Error creating blog", error });
  }
};

// Get blogs of logged-in user
const getUserBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ author: req.user.sub }).populate("author", "name email image").sort({ createdAt: -1 });
    res.send({ message: "Fetched user blogs successfully", blogs });
  } catch (error) {
    res.status(500).send({ message: "Error fetching user blogs", error });
  }
};

// Delete blog
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog.author.toString() !== req.user.sub && req.user.role !== "admin") {
      return res.status(403).send({ message: "Not authorized" });
    }
    await blog.deleteOne();
    res.status(200).send({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting blog", error });
  }
};

// Update blog
const updateBlog = async (req, res) => {

  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).send({ message: "Blog not found" });
    }


    if (blog.author.toString() !== req.user.sub && req.user.role !== "admin") {
      console.log("Authorization failed");
      return res.status(403).send({ message: "Not authorized" });
    }

    const updated = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    await updated.populate("author", "name email image");
    res.status(200).send({ message: "Updated Successfully", blog: updated });
  } catch (error) {
    res.status(500).send({ message: "Error updating blog", error });
  }
};

module.exports = { getAllBlogs, singleBlogs, addBlog, getUserBlogs, deleteBlog, updateBlog };
