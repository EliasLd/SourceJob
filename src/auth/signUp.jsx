import { useState } from "react";
import Logout from './logout'

export default function SignUp() {

    return(
        <div className="shadow-xl m-40 p-10 text-gray-700 rounded-lg w-full max-w-xl">
            <h2 className="text-3xl font-medium">Créez un compte !</h2>
            <div>
                <h3 className="py-4 font-small">Remplissez le formulaire ci-dessous</h3>
            </div>
            <form>
                <input placeholder="Prénom..."  
                className="m-5 p-4 flex flex-col bg-slate-100 rounded-lg" />
                <input placeholder='Email...' 
                 className='m-5 p-4 flex flex-col bg-slate-100 rounded-lg'/>
                <input placeholder='Mot de passe...' 
                 className='m-5 p-4 flex flex-col bg-slate-100 rounded-lg'/>
                <div className='flex justify-start'>
                    <button className='m-5 p-2 text-white bg-blue-600 rounded-lg'>Valider</button>
                </div>
                <Logout />
            </form>
        </div>
    );
}