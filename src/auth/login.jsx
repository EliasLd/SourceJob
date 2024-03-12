import { FcGoogle } from 'react-icons/fc';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();

    const [datas, setDatas] = useState({
        email: '',
        password: ''
    })
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setDatas(previous => ({
            ...previous, [name]: value
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', datas);
            console.log(response.data);
            navigate('/jobs');
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        }
    };

    return(
        <div className='shadow-xl  m-40 p-10 text-gray-700 rounded-lg w-full max-w-xl'>
            <h2 className='text-3xl font-medium'>Rejoignez nous aujourd'hui !</h2>
            <div className='py-4'>
                <h3 className='py-4 font-small'>Connectez vous ou créez un compte</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <input type='text' name='email' value={datas.email} onChange={handleChange} placeholder='Email...' 
                 className='m-5 p-4 flex flex-col bg-slate-100 rounded-lg'/>
                <input type='text' name='password' value={datas.password} onChange={handleChange} placeholder='Mot de passe...' 
                 className='m-5 p-4 flex flex-col bg-slate-100 rounded-lg'/>
                <div className='flex justify-start'>
                    <button className='m-5 p-2 text-white bg-blue-600 rounded-lg'>Se connecter</button>
                </div>
            </form>
            <div>
                    Pas de compte ?
                    <Link to="/signup">
                      Créez en un !
                    </Link>
                </div>
            <div className='rounded-b border-gray-500'>
            </div>
            <div className=''>
                <button className=' text-white bg-gray-700 p-4 font-medium rounded-lg flex gap-2'>
                    <FcGoogle className='text-3xl'/>Connectez vous avec Google
                </button>
            </div>
        </div>
    );
}