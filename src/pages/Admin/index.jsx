import { Sidebar } from "../../componentes/Sidebar";
import {Breadcrumb, Button, Menu } from "antd"
import {BiGridAlt, BiReceipt, BiGroup, BiCog, BiHome} from "react-icons/bi"
import {Navbar} from "../../componentes/Navbar"
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AdminContent } from "./styles";
import { useEffect } from "react";

export function Admin() {
    const navigate = useNavigate()
    const {pathname} = useLocation()
    const path = pathname.split("/").filter(path=>path)[1]

    useEffect(()=>{
        if (path.length === 1){
            navigate("/admin/dashboard")
        }
    }, [])

    
    return (
        <div>
            <Navbar />
            <Menu
                onClick={(event) => navigate(event.key)}
                style={{ width: 250, position:"fixed", left: 0, top:50 }}
                mode='inline'
                items={[
                    { label: "Dashboard", key: 'dashboard', icon: <BiGridAlt size={22} /> },
                    { label: "Posts", key: 'posts', icon: <BiReceipt size={22} /> },
                    {
                        label: "Usuários", key: 'usuarios', icon: <BiGroup size={22} />, children: [
                            { key: 'grupo-usuario', label: 'Grupos de Usuarios' },
                            { key: 'Permissões', label: 'Permissões' },
                        ]
                    },
                    { label: "Configurações", key: 'configuracoes', icon: <BiCog size={22} /> },
                ]}
            />

            <AdminContent>
                <Breadcrumb 
                    items={[
                        {title: <BiHome />},
                        {title: "admin"},
                        {title: path[0]}
                    ]}
                />
                <Outlet />
            </AdminContent>
                
            
        </div>
    )
}