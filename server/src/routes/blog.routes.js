const express = require('express')
const Blog = require('../models/blog.model')

const router = express.Router()

router.get('/', (req,res) => {
    res.send("From Blog routes")
})

router.post('/add-post', async(req,res) => {
   const newBlog = new Blog({
    ...req.body
   })
   const blog = await newBlog.save();
   res.status(200).send({
    message : "Post Created Successfully",
    blog
})
})


module.exports  = router;