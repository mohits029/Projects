import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Create_Emp(){
    const { register, handleSubmit } = useForm();

    // Handle form submission
    const onSubmit = async (data) => {
        await axios.post('http://localhost:3000/create', data)
        .then( (Response)=>{
            if(Response.data){
                console.log(Response.data);
                toast.success("User added successfully", {position: "top-right"} );
            }
            else{
                toast.error("User Already Exist", {position: "top-right"});
            }
        })
        .catch((error) => {
            toast.error("Failed to add user");
            console.error(error);
        });
        
    };


    return(
        <>
        <div className="p-10 bg-zinc-200 flex flex-col items-center w-[100vw] h-screen">

            <div className="w-[70vw] md:w-[35vw]">   
                <h1 className="font-bold text-2xl uppercase bg-cyan-600 text-white text-center rounded py-3 ">Add New Employee</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-10 w-[100vw] mt-10 md:w-[50vw]" >
                    <input {...register('name') } type="text" placeholder="Name" className="px-4 py-2 w-[70%] border-[1px] border-cyan-600 rounded" />
                    <input {...register('email') } type="email" placeholder="Email" className="px-4 py-2 w-[70%] border-[1px]  border-cyan-600 rounded" />
                    <input {...register('gender') } type="text" placeholder="gender" className="px-4 py-2 w-[70%] border-[1px]  border-cyan-600 rounded" />
                    <input {...register('dept') } type="text" placeholder="Department" className="px-4 py-2 w-[70%] border-[1px]  border-cyan-600 rounded" />
                    <input {...register('salary') } type="number" placeholder="Salary" className="px-4 py-2 w-[70%] border-[1px]  border-cyan-600 rounded" />
                    <input {...register('password') } type="password" placeholder="Password" className="px-4 py-2 w-[70%] border-[1px]  border-cyan-600 rounded" />
                    <input type="submit" value="Add Employee"  className="bg-cyan-600 text-white font-semibold px-20 py-4 rounded-md cursor-pointer w-[70%] uppercase" />
                </form>
            </div>

        </div>
        </>
    )
}

export default Create_Emp;
