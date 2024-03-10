import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'

function Catchy(){
    return(
        <div className='m-10 '>
            <h1 className='text-2xl'>Une meilleur gestion de vos candidature à portée de mains</h1>
            <h3 className='mt-2'>Optez pour SourceJob</h3>
        </div>
    );
}

function Nav(){
    return(
      <div>
        <nav className="flex flex-wrap justify-between items-center py-10 mx-14">
          <Link to="/">
            <img src={logo} alt="Logo de l'application" className='w-10 h-10'/>
          </Link>
          <ul>
            <Link to="/auth/login">
              <a className="py-2 px-4 text-lg bg-blue-600 text-white rounded-lg font-medium ml-8">Rejoignez nous</a>
            </Link>
          </ul>
        </nav>
        <Catchy />
      </div>
    );
}

export { Nav, Catchy };