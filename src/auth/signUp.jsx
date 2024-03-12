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
            navigate('/login');
        } catch (error) {
            console.error('Erreur lors de la création du compte: ', error);
        }
    };

    return(
        <div className="shadow-xl m-40 p-10 text-gray-700 rounded-lg w-full max-w-xl">
            <h2 className="text-3xl font-medium">Créez un compte !</h2>
            <div>
                <h3 className="py-4 font-small">Remplissez le formulaire ci-dessous</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" value={datas.firstName} onChange={handleChange} placeholder="Prénom..."  
                className="m-5 p-4 flex flex-col bg-slate-100 rounded-lg" />
                <input type="text" name="email" value={datas.email} onChange={handleChange} placeholder='Email...' 
                 className='m-5 p-4 flex flex-col bg-slate-100 rounded-lg'/>
                <input type="text" name="password" value={datas.password} onChange={handleChange} placeholder='Mot de passe...' 
                 className='m-5 p-4 flex flex-col bg-slate-100 rounded-lg'/>
                <div className='flex justify-start'>
                    <button className='m-5 p-2 text-white bg-blue-600 rounded-lg'>S'inscrire</button>
                </div>
            </form>
        </div>
    );
}