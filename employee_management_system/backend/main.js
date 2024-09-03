import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Add_employee from "./Routes/Add_employee.js";
import Show_employee from "./Routes/Show_employee.js";
import Update_employee from "./Routes/Update_employee.js";
import Delete_employee from "./Routes/Delete_employee.js";



// Data base connectivity
dotenv.config();
mongoose.connect(process.env.URI)
.then( function(){
    console.log("Database connected successfully")
})
.catch( function(err){
    console.log(err);
})


const app= express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extends: true}));


//routes
app.get('/', (req, res)=>{
    res.send("Hello world my app is running properly");
})

app.use('/create', Add_employee)
app.use('/read', Show_employee)
app.use('/update', Update_employee)
app.use('/delete', Delete_employee)


app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})