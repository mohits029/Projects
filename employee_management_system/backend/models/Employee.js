import mongoose from 'mongoose';
const employeeSchema= new mongoose.Schema({
    name:{
        type:"string",
        require: true
    },
    email:{
        type:"string",
        require: true,
    },
    gender:{
        type:"string",
        require: true
    },
    dept:{
        type:"string",
        require: true
    },
    salary:{
        type:"number",
        default: 0
    },
    password:{
        type:"string",
        require: true
    }
})

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee; 