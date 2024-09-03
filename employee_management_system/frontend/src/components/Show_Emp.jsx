import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast  from "react-hot-toast";

function Show_Emp(){

    const [employee, setEmployee]= useState();

    useEffect(  function(){
        // Fetching Data from API
        const fetchData= async function(){
            await axios.get('http://localhost:3000/read')
            .then(
                (response)=>{
                    console.log(response.data);
                    setEmployee(response.data);
                }
            )
            .catch(
                (err)=>{
                    console.log(err);
                }
            )
        }

        fetchData();
    },[]);


    // delete handle
    const handleDelete = async (userId)=>{
        await axios.delete(`http://localhost:3000/delete/${userId}`)
        .then(
            (response)=>{
                if(response.data){
                    setEmployee(data.filter(emp => emp._id !== userId));
                    toast.success("User deleted successfully", {position: "top-right"} );
                    
                }else{
                    toast.error("User not found", {position: "top-right"});
                }
            }
        )
        .catch(
            (err)=>{
                console.log(err);
            }
        )
    }

   
    return(
        <>
        <div className="p-10 bg-zinc-200 flex flex-col items-center w-full min-h-screen">  
            <div>
                <h1 className="bg-green-600 text-white font-bold text-xl uppercase px-10 py-2 mb-5">All Employees</h1>
            </div>
            <table className="min-w-full divide-y divide-gray-900">
                <thead className="bg-gray-100 py-2">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >Sr.No.</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >Gender</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >dept</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" >Action</th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                {
                    
                    employee ? employee.map( (emp, index)=>{
                        return (
                            <tr key={emp._id}>
                                <td className="px-6 py-4 whitespace-nowrap" >{index+1}</td>
                                <td className="px-6 py-4 whitespace-nowrap" >{emp.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap" >{emp.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap" >{emp.gender}</td>
                                <td className="px-6 py-4 whitespace-nowrap" >{emp.dept}</td>
                                
                                <td className="px-6 py-4 whitespace-nowrap flex gap-5" > 
                                    <Link to={`/update-user/${emp._id}`} className="px-5 py-2 bg-yellow-500 rounded-md font-bold text-white" >update</Link>
                                    <button onClick={() => handleDelete(emp._id)} className="px-5 py-2 bg-red-500 rounded-md font-bold text-white" >delete</button> 
                                </td>
                                
                            </tr>
                        )
                    }) : (
                        <tr>
                            <td colSpan="6" className="text-center py-4">No users available</td>
                        </tr>
                    )}
                
                </tbody>
            </table>

        </div>
        </>
    )
}

export default Show_Emp;
