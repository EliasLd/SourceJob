import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login(){
    return(
        <div className='shadow-xl  m-40 p-10 text-gray-700 rounded-lg w-full max-w-xl'>
            <h2 className='text-3xl font-medium'>Rejoignez nous aujourd'hui !</h2>
            <div className='py-4'>
                <h3 className='py-4 font-small'>Connectez vous ou créez un compte</h3>
            </div>
            <div>
                <input placeholder='Email...' 
                 className='m-5 p-4 flex flex-col bg-slate-100 rounded-lg'/>
                <input placeholder='Mot de passe...' 
                 className='m-5 p-4 flex flex-col bg-slate-100 rounded-lg'/>
                <div className='flex justify-start'>
                    <button className='m-5 p-2 text-white bg-blue-600 rounded-lg'>Valider</button>
                </div>
                <div>
                    Pas de compte ?
                    <Link to="/signUp">
                      Créez en un !
                    </Link>
                </div>
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