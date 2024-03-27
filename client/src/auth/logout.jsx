import React from "react";
import { useNavigate } from "react-router-dom";
import out from '../assets/quit.svg';

export default function Logout() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/auth/login');
    }

    return(
        <div className='m-5 p-2 flex items-center'>
            <button onClick={handleLogout}>
                <img src={out} alt='logo de déconnexion' className='w-8 h-8' />
            </button>
        </div>
    );

}
