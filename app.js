const express=require("express")
const employeeRouter=require("./Route/employee")
const cors=require("cors")

app.use(cors())

const app=express()
app.use("/api/v1",employeeRouter)
app.listen(5000,()=>{
console.log("Application is running")

})

