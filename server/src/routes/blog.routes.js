const express = require('express');
const {
  getAllBlogs,
  singleBlogs,
  addBlog,
  deleteBlog,
  updateBlog,
  getUserBlogs
} = require('../controllers/blog.controllers');
const { checkAuthentication } = require('../middleware/check-auth');

const router = express.Router();

// 🧭 Public Routes
router.get('/', getAllBlogs);
router.get('/:id', singleBlogs);

// 🧭 Protected Routes (need login)
router.post('/add-post', checkAuthentication, addBlog);

// 🧭 Only logged-in user can view their blogs
router.get('/user/my-blogs', checkAuthentication, getUserBlogs);

// 🧭 Delete & update allowed if it's your own blog or you're admin
router.delete('/:id', checkAuthentication, deleteBlog);
router.put('/edit/:id', checkAuthentication, updateBlog);

module.exports = router;
