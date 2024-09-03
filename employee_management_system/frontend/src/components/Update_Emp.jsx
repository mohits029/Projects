import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Update_Emp(){

    const { register, handleSubmit } = useForm();

    const { id } = useParams(); 
    
    const [val, setVal]= useState();

    // Fetch User Data from API using the id parameter
    useEffect( ()=>{
        const fetchUser = async ()=>{
            await axios.get(`http://localhost:3000/read/${id}`)
            .then( (response)=>{
                console.log(response.data.user[0]);
                setVal(response.data.user[0]);
            })
            .catch((err)=>{
                    console.log(err);
                }
            );
        }
        fetchUser();
    },[]);
    

// Handle form submission
const onSubmit = async (data) => {
    await axios.put(`http://localhost:3000/user/update/${id}`, data)
    .then( (Response)=>{
        if(Response.data.user){
            toast.success("User Updated successfully", {position: "top-right"} );
        }
        else{
            toast.error("User Updation Failed", {position: "top-right"});
        }
    })
    .catch((error) => {
        toast.error("Failed to add user");
        console.error(error);
    });
    // console.log(data);
};



    return (
        <div>
            
            <div>   
                <h1 className="font-bold text-2xl uppercase bg-orange-600 text-white px-16 py-3 ">Update User</h1>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-10 w-[50vw] mt-10" >
                {
                    val ? (
                        <>
                        <input {...register('name')} type="text" placeholder={`${val.name}`} className="px-4 py-2 w-[40%] border-[1px] border-cyan-600 rounded" />
                        <input {...register('email')} type="email" placeholder={`${val.email}`} className="px-4 py-2 w-[40%] border-[1px]  border-cyan-600 rounded" />
                        <input {...register('gender')} type="text" placeholder={`${val.gender}`} className="px-4 py-2 w-[40%] border-[1px]  border-cyan-600 rounded" />
                        <input {...register('iscommitted')} type="text" placeholder={`${val.iscommitted}`} className="px-4 py-2 w-[40%] border-[1px]  border-cyan-600 rounded" />
                        <input type="submit" value="Update User"  className="bg-orange-600 text-white font-semibold px-20 py-4 rounded-md cursor-pointer w-[40%] uppercase" />
                    </>
                    ) : (
                    <h1>User not found</h1>
                    )
                }
                
            </form>

        </div>
    );
}

export default UpdateUser;
