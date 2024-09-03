import express from 'express';
import Employee from '../models/Employee.js';


const router = express();

router.delete('/:id', async (req, res)=>{
    let emp_id= req.params.id;
    let deleted_employee= await Employee.findOneAndDelete({_id:emp_id});
    res.json(deleted_employee);
})

export default router;
