const express = require('express');
const User = require('../models/user-model');
const userRouter = express.Router()



//register
userRouter.post('/register' , async(req,res) => {
    const userBody = req.body;
    try{
        if(await User.isEmailTaken(userBody.email)){
            return res.status(400).send({
                message : "Email Already Taken"
            })
        }

        const user = await User.create({
            name : userBody.name,
            email:userBody.email,
            password:userBody.password
        })


        res.status(200).send({
            message : "User Registered Successfully",
            data : {
                id : user._id,
                name : user.name,
                email : user.email,
            }
        })

    }catch(error){
        res.status(500).json({
            message : error?.message
        })
    }

})

module.exports = userRouter