const express = require('express');
const { checkAuthentication, checkAuthorization } = require('../middleware/check-auth');
const User = require('../models/user-model');
const Blog = require('../models/blog.model');
const { singleBlogs, updateBlog } = require('../controllers/blog.controllers');
const router = express.Router();


router.get('/dashboard' , checkAuthentication,checkAuthorization,async(req,res) => {
    try {
        const totalUsers = await User.countDocuments();
        const totalBloges = await Blog.countDocuments();

        res.send({
            message : "admin dashboard data",
            data : {
                totalUsers,
                totalBloges
            }
        })
       
    }catch(error) {
        res.status(500).send({
            message : "Error fetching dashboard data",
            error
        })
    }
})


router.get("/manage-blogs" ,checkAuthentication,checkAuthorization,async(req,res) => {
    try {
        const blogs = await Blog.find().populate("author","name email");
        res.send({
            message : "All Blogs Fetched",
            blogs
        })

    }catch(err) {
        res.status(500).send({
            message : "Error fetching blogs",
            err
        })
    }

})

router.get('/blog/:id', checkAuthentication, checkAuthorization, singleBlogs);
router.put('/blog/edit/:id', checkAuthentication, checkAuthorization, updateBlog);

router.get('/blog/:id', checkAuthentication, checkAuthorization, singleBlogs);
router.put('/blog/edit/:id', checkAuthentication, checkAuthorization, updateBlog);


module.exports = router