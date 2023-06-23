import { Route, Routes } from "react-router-dom";
import { Welcome } from "../Pages/Welcome";
import { Registration } from "../Pages/Registration";
import { Login } from "../Pages/Login";
import { Dashboard } from "../Pages/Dashboard";
import { StudyMaterial } from "../Pages/StudyMaterial";


export function Allroutes() {
    return <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/material" element={<StudyMaterial />} />
        <Route path="/register" element={<Registration />} />
        <Route path='/login' element={<Login />} />
    </Routes>
}