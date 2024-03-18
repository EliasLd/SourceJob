import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();

    const [datas, setDatas] = useState({
        firstName: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatas(previous =>({
            ...previous, [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/auth/signup', datas);
            console.log(response.data);
            navigate('/auth/login');
        } catch (error) {
            console.error('Erreur lors de la création du compte: ', error);
        }
    };

    return(
        <div className="bg-sky bg-no-repeat bg-cover bg-center bg-fixed w-screen h-screen relative">
            <div className="absolute inset-0 flex justify-center items-center">
                <div className=' backdrop-blur-3xl border border-slate-400  rounded-xl px-16 py-5'>
                    <p className='p-4 text-2xl font-sans font-bold'>Créez un compte !</p>
                    <p className='text-slate-700 px-5 text-sm font-inter font-semibold'>En nous rejoignant, vous faites un pas <br/> vers une meilleure organisation</p>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="firstName" value={datas.firstName} onChange={handleChange} placeholder="Prénom..." className="m-5 p-4 flex flex-col bg-slate-100 rounded-lg" />
                        <input type="text" name="email" value={datas.email} onChange={handleChange} placeholder='Email...' className='m-5 p-4 flex flex-col bg-slate-100 rounded-lg'/>
                        <input type="text" name="password" value={datas.password} onChange={handleChange} placeholder='Mot de passe...' className='m-5 p-4 flex flex-col bg-slate-100 rounded-lg'/>
                        <div className='flex justify-start'>
                            <button className='m-5 p-2 text-white bg-blue-600 rounded-lg'>S'inscrire</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}