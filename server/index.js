const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors')


//middleware
app.use(express.json())
app.use(cors())


//routes
const blogRoutes = require('./src/routes/blog.routes.js')
app.use('/blogs',blogRoutes)
const userRoutes = require('./src/routes/user.router.js')
app.use('/user',userRoutes)


const uri = process.env.DB_URL
//mongoose configuration
async function main() {
    await mongoose.connect(uri);
}

main().then(() => console.log("Mongodb connected successfully")).catch(err => console.log(err));


//routes
app.get('/' , (req,res) => {
    res.send("Hello World!")
})

app.listen(port , () => {
    console.log(`Example app listening on port ${port}`)
})
