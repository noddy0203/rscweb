const express = require("express")
const router = express.Router()
const Student = require("../db/schema")

router.get("/", (req,res)=>{
    res.send("Hii from the home page generated from the server")
})

router.get("/register" ,(req,res)=>{
    res.status(200).send("showing register page")
})

router.post("/register" , async (req,res)=>{
    const {fullname , dob, time, grade, countryCode, email, phone} = req.body
    if(!fullname || !dob || !time || !grade || !countryCode || !email || !phone){
        res.status(422).json({error:"fill all the mandatory fields"})
    }

    try {
        const studentExist = await Student.findOne({fullname : fullname})
        if(studentExist){
            res.status(422).json({alert:"Student already registered"})
        } else {
            const newStudent = new Student({fullname, dob, time, grade, countryCode, email, phone})
            await newStudent.save()
            res.status(200).json({message:"Student registration successfull"})
        }   
             
    } catch (error) {
         res.status(404).send({alert:"registration failed"})   
    }

})

module.exports = router;
