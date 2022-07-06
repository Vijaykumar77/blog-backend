const express=require("express")

const employeController=require("../Components/employee")

const employeeRouter=express.Router()
employeeRouter.route("/employee")
.get(employeController.employeGet)

module.exports=employeeRouter


