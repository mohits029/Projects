import mongoose from 'mongoose';
const organizationSchema = new mongoose.Schema({
    name:{
        type:"string",
        require: true
    },
    email:{
        type:"string",
        require: true,
    },
    password:{
        type:"string",
        require: true
    }
})

const Organization = mongoose.model("Organization", organizationSchema);
export default Organization; 