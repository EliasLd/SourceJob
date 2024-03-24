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
            const response = await axios.post('https://sourcejob.onrender.com/api/auth/login', datas);
            console.log(response.data);
            const token = response.data.token;
            localStorage.setItem('token', token);
            
            navigate('/api/jobs');
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
        }
    };

    return(
        <div className="bg-sky bg-no-repeat bg-cover bg-center bg-fixed w-screen h-screen relative">
            <div className="absolute inset-0 flex justify-center items-center">
                <div className=' backdrop-blur-3xl border border-slate-400  rounded-xl px-5 xs:px-16 py-5'>
                    <h2 className='p-4 text-3xl text-white font-sans font-bold'>Rejoignez nous <br/>    aujourd'hui !</h2>
                    <div className='py-2'>
                        <h3 className='text-slate-200 px-5 text-sm font-inter font-semibold'>Connectez vous ou créez un compte</h3>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <form onSubmit={handleSubmit}>
                            <input type='text' name='email' value={datas.email} onChange={handleChange} placeholder='Email...' 
                             className='m-5 p-3 flex flex-col w-60 xs:w-80 bg-slate-300 rounded-2xl transition ease-in-out duration-300 focus:scale-110 focus:bg-white'/>
                            <input type='password' name='password' value={datas.password} onChange={handleChange} placeholder='Mot de passe...' 
                             className='m-5 p-3 flex flex-col w-60 xs:w-80 bg-slate-300 rounded-2xl transition ease-in-out duration-300 focus:scale-110 focus:bg-white'/>
                            <div className='flex justify-center'>
                                <button className='m-5 p-2 px-10 shadow-xl text-white bg-blue-600 rounded-lg transition ease-in-out duration-300 hover: hover:scale-110'>Se connecter</button>
                            </div>
                        </form>
                        <div className='flex flex-row items-center justify-center'>
                            <p className='text-slate-200 px-5 text-sm font-inter font-semibold'>Pas de compte ?</p>
                            <Link to='/auth/signup' className='text-blue-500 font-inter font-semibold underline'>Inscrivez-vous</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}