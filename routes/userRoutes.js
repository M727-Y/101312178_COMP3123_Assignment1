const express = require("express")
const routes = express.Router()
const userModel = require("../models/User")

routes.post("/signup", async (req, res) => {
    if (req.body.email == ""){
        res.status(500).send("Email cannot be empty")
    }
    if (req.body.password == ""){
        res.status(500).send("password cannot be empty")
    }
    try{
        const user = new userModel(req.body)
        await user.save()
        res.status(201).send(user)
    } catch(error){
        res.status().send({
            status:false,
            message:error
        })
    }
})
routes.post("/login", async (req,res) => {
    try{
        var data =  await userModel.find({
        "username":req.body.username,
        "password":req.body.password
        })
        if(!data.length){
            res.status(200).send({
                status:false,
                message:"user not found"
            })
        } else{
            res.status(200).send({
                status:true,
                message:"user is valid"
            })
        }
    } catch(error){
        res.status(500).send({
            status:false,
            message:error
        })
    }
    
})
module.exports = routes