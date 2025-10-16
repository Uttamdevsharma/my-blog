const express = require('express')
const Blog = require('../models/blog.model')

const router = express.Router()


//get all blogs
router.get('/', async(req,res) => {
    try{
        const blogs = await Blog.find().sort({createdAt : -1})

        res.send({
            message : "succesfully fetching all blogs",
            blogs
        })

    }catch(error){
        res.status(500).send({
            message : "Error create a  new blog",
            error
    })
}
    
})



//get a single blog by id
router.get('/:id' , async(req,res) => {
    const {id} = req.params
    try{
        const blog = await Blog.findById(id);
        if(!blog) {
            res.send({message : "not blog found"})
        } else {
            res.send({
                message : "successfully fetched",
                blog
            })
        }

    }catch(error){
        res.status(500).send({
            message : "Error create a  new blog",
            error
        })
    }

})



//post a new blog
router.post('/add-post', async(req,res) => {

    try{
        const newBlog = new Blog({
            ...req.body
           })
           const blog = await newBlog.save();
           res.status(200).send({
            message : "Post Created Successfully",
            blog
        })
    }catch(error){
        res.status(500).send({
            message : "Error create a  new blog",
            error
        })
    }
   
})

//delete a blog by id
router.delete("/:id" , async(req,res) => {
    const {id} = req.params
    try{
        const deleteBlog = await Blog.findByIdAndDelete(id)
    if(!deleteBlog) {
        res.status(404).send({message : "not FOUND"})
    } 
    res.status(200).send({
        message : "Deleted Succesfully",
        deleteBlog
    })
 }catch(error) {
    res.status(500).send({
        message : "Error create a  new blog",
        error
    })

 }
    
})



module.exports  = router;