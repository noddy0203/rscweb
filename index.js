const express = require("express")
const app = express()
const authRoute = require("./routs/router")
const port =  process.env.PORT || 7000
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URI)
.then((res)=>{
    console.log(`database connected`)
}).catch((err)=>{
    console.log(`something went wrong on db connection- ${err}`)
})

app.use(express.json())
app.use(cors())
// using router middleware
app.use("/rsc/students" , authRoute)


if(process.env,NODE_ENV == "production"){
     app.use(express.static("frontend/build"))
}


app.listen(port , function(){
    console.log(`server started at port number ${port}`)
})