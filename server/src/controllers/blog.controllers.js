const Blog = require("../models/blog.model")

//get all blogs
const getAllBlogs = async(req,res) => {
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
    
}

//get single blogs by id
const singleBlogs = async(req,res) => {
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

}

// post a blog
const addBlog = async(req,res) => {

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
   
}

//delete a blog by id
const deleteBlog =async(req,res) => {
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
    
}

//update a blog
const updateBlog =  async(req,res) => {
    try{
        const {id} = req.params;
        const updateBlog = await Blog.findByIdAndUpdate(id,req.body, {new: true})
        if(!updateBlog) {
            res.status(404).send({message : "not FOUND"})
        } 
        res.status(200).send({
            message : "Updated Succesfully",
            updateBlog
        })
    }catch(error){
        res.status(500).send({
            message : "Error create a  update blog",
            error
        })
    }
}

module.exports = {
    getAllBlogs,
    singleBlogs,
    addBlog,
    deleteBlog,
    updateBlog


}