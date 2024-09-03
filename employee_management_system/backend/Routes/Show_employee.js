import express from 'express';
import Employee from '../models/Employee.js';


const router = express();

router.get('/', async (req, res)=>{
    let employees= await Employee.find();
    res.json(employees);
})

export default router;
