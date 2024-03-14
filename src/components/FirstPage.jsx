import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import ux from '../assets/ux-abstract.png'

function Nav() {
  return (
    <div>
        <nav className="flex justify-end items-center py-5 mx-4">
        <Link to="/"> 
          
        </Link>
        <Link to='/about'>
          <a className='py-2 px-4 text-lg bg-blue-500 text-white rounded-full font-medium ml-3'>A propos</a>
        </Link>
        <Link to="/auth/login">
          <a className="py-2 px-4 text-lg bg-blue-500 text-white rounded-full font-medium ml-3">Rejoignez nous</a>
        </Link>
    </nav>
    </div>
    );
}

function Landing(){
  return(
    <div className='m-20 flex flex-row justify-between'>
      <div className='my-20 mx-40'>
        <h1 className='p-4 text-6xl text-slate-700 font-sans font-bold'>SourceJob</h1>
      </div>
      <div className='flex flex-row-reverse'>
        <img src={ux} className='mx-20'/>
      </div>
    </div>
  );
}

function FirstPage(){
    return(
      <div>
        <Nav />
        <Landing />

      </div>
    );
}

export { FirstPage };