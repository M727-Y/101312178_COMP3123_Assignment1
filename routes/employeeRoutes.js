const express = require("express")
const routes = express.Router()
const employeeModel = require('../models/Employee')

routes.post("/employees", async (req,res) => {
    try{
        const newEmployee = new employeeModel(req.body)
        await newEmployee.save()
        res.status(200).send(newEmployee)
    } catch (error) {
        res.status(500).send({
            status:false,
            message:error
        })
    }
})
routes.get("/employees", async (req,res) => {
    try{
        const employees = await employeeModel.find()
        res.status(201).send(employees)
        
    } catch (error) {
        res.status(500).send({
            status:false,
            message:error
        })
    }
})
/*

*/
routes.get("/employees/:eid" , async (req,res)=>{
    try{
        const empl = await employeeModel.findById(req.params.eid)
        res.status(200).send(empl)
    } catch (error){
        res.status(500).send({
            status:false,
            message:error
        })
    }
    

})
routes.put("/employees/:eid" , async (req,res)=>{
    try{
        const empl = await employeeModel.findByIdAndUpdate(req.params.eid, req.body)
        res.status(200).send(empl)
    } catch (error){
        res.status(500).send({
            status:false,
            message:error
        })
    }
    

})
routes.delete("/employees" , async (req,res)=>{
    try{
        const empl = await employeeModel.findByIdAndDelete(req.query.eid)
        res.status(200).send({
            status:true,
            message:"Yhe employee was deleted"
        })
    } catch (error){
        res.status(500).send({
            status:false,
            message:error
        })
    }
    

})
// routes.put("/employees?eid=xxx")
module.exports = routes