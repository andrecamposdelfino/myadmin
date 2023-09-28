import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./Login"
import { Admin } from "./Admin"
import { Home } from "./Home"
import { Dashboard } from "./Admin/modules/Dashboard"
import { Posts } from "./Admin/modules/Posts"
import { Usuarios } from "./Admin/modules/Usuarios"



export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
               
                <Route path="/" element={<Home />} />

                <Route path="/admin" element={<Admin />}>
                    <Route path="dashboard" element={<Dashboard />} />             
                    <Route path="posts" element={<Posts />} />             
                    <Route path="usuarios" element={<Usuarios />} />             
                </Route>

            </Routes>
        </BrowserRouter>
    )
}