import express from 'express';
import Employee from '../models/Employee.js';


const router = express();

router.put('/:id', async (req, res)=>{
    let emp_id= req.params.id;
    const {name, email, gender, dept, salary, password} = req.body;
    let updated_employee= await Employee.updateOne(
        {_id: emp_id},
        {name, email, gender, dept, salary, password}
    )
    
    res.json(updated_employee);
})

export default router;
