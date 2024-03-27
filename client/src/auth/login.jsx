import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import load from '../assets/loading.svg';

export default function Login(){
    const navigate = useNavigate();

    const [datas, setDatas] = useState({
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false); 
    const [err, setErr] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setDatas(previous => ({
            ...previous, [name]: value
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post('https://sourcejob.onrender.com/api/auth/login', datas);
            console.log(response.data);
            const token = response.data.token;
            localStorage.setItem('token', token);
            
            navigate('/api/jobs');
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            setErr('Erreur lors de la connexion')
        } finally {
            setLoading(false); 
        }
    };

    return(
        <div className="bg-sky bg-no-repeat bg-cover bg-center bg-fixed w-screen h-screen relative">
            <div className="absolute inset-0 flex justify-center items-center">
                <div className=' backdrop-blur-3xl border border-slate-400  rounded-xl px-5 xs:px-16 py-5'>
                    <h2 className='p-4 text-3xl text-white font-sans font-bold'>Rejoignez nous <br/> aujourd'hui !</h2>
                    <div className='py-2'>
                        <h3 className='text-slate-200 px-5 text-sm font-inter font-semibold'>Connectez vous ou créez un compte</h3>
                    </div>
                    {err && <div className='mt-4 p-2 rounded-full bg-red-600 flex justify-center'>
                                <p className='text-white font-inter text-xs'>{err}</p>
                            </div>}
                    <div className='flex flex-col justify-center'>
                        <form onSubmit={handleSubmit}>
                            <input type='text' name='email' value={datas.email} onChange={handleChange} onClick={() => setErr(null)} placeholder='Email...' 
                             className='m-5 p-3 flex flex-col w-60 xs:w-80 bg-slate-300 rounded-2xl transition ease-in-out duration-300 focus:scale-110 focus:bg-white'/>
                            <input type='password' name='password' value={datas.password} onChange={handleChange} onClick={() => setErr(null)} placeholder='Mot de passe...' 
                             className='m-5 p-3 flex flex-col w-60 xs:w-80 bg-slate-300 rounded-2xl transition ease-in-out duration-300 focus:scale-110 focus:bg-white'/>
                            <div className='flex justify-center'>
                                <button className='m-5 p-2 px-10 shadow-xl text-white bg-blue-600 rounded-lg transition ease-in-out duration-300 hover: hover:scale-110' disabled={loading}>
                                    {loading ? (
                                        <div className='flex flex-row items-center gap-x-4'>
                                            <span>Connexion en cours... </span>
                                            <img src={load} alt='chargement' className='animate-spin w-5 h-5' />
                                        </div>
                                    ) : (
                                        'Se connecter'
                                    )}
                                </button>
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
