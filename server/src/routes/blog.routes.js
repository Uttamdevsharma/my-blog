const express = require('express')
const { getAllBlogs, singleBlogs, addBlog, deleteBlog, updateBlog } = require('../controllers/blog.controllers')

const router = express.Router()


//get all blogs
router.get('/',getAllBlogs )



//get a single blog by id
router.get('/:id' , singleBlogs)



//post a new blog
router.post('/add-post',addBlog )

//delete a blog by id
router.delete("/:id" ,deleteBlog )


//update a blog route
router.put("/edit/:id" ,updateBlog)


module.exports  = router;