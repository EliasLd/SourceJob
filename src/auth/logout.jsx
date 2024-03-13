import React from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/auth/login');
    }

    return(
        <div className='m-5 p-4 flex flex-col'>
            <button className='p-4 rounded-lg text-white bg-red-700' onClick={handleLogout}>Se déconnecter</button>
        </div>
    );

}
