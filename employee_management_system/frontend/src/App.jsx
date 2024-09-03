import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from './components/Home.jsx';
import Create_Emp from './components/Create_Emp.jsx';
import Show_Emp from './components/Show_Emp.jsx';

function App(){
    return (
        <div className="App">
           <nav className="py-5 px-10 flex gap-10 font-bold bg-zinc-200 border-b-2 border-green-500 w-full">
            <Link to="/Add-emp">Add Employee</Link>
            <Link to="/Show-emp">Show Employees</Link>
           </nav>

           
           <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Add-emp" element={<Create_Emp />} />
                <Route path="/Show-emp" element={<Show_Emp />} />
                
           </Routes>
           
        </div>
    );
}

export default App;

