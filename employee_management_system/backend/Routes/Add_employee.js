import express from 'express';
import Employee from '../models/Employee.js';


const router = express();

router.post('/', async (req, res)=>{
    const {name, email, gender, dept, salary, password} = req.body;
    const newEmployee = await Employee.create({
        name,
        email,
        gender,
        dept,
        salary,
        password
    })
    
    res.json(newEmployee);
})

export default router;
