import React from 'react';
import { Link } from 'react-router-dom';

import search from '../assets/search-icon.svg';
import pending from '../assets/pending-icon.svg';
import verified from '../assets/verified-icon.svg';
import arrowOut from '../assets/arrow-out.svg';

function Nav() {
  return (
      <nav className="sticky top-0 z-10">
        <div className='max-w-5xl mx-auto px-4'>
          <div className='flex items-center justify-center h-16'>
            <div className='flex text-gray-900'>
              <Link to="/" className='text-white text-xl'> 
                Logo
              </Link>
              <Link to='/about'>
                <a className='py-2 px-4 text-lg bg-blue-700 text-white rounded-full font-medium ml-3'>A propos</a>
              </Link>
              <Link to="/auth/login">
                <a className="py-2 px-4 text-lg bg-blue-700 text-white rounded-full font-medium ml-3">Rejoignez nous</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
}

function Landing() {
  return(
    <div className='mt-10 mx-20'>
      <div className='p-2 mx-20'>
        <div className='p-5 mx-20 bg-slate-100 rounded-lg flex flex-row'>
          <div className='p-10 bg-gray-700 rounded-lg flex flex-col'>
            <div className='p-2'>
              <p className='text-white text-5xl font-sans font-bold'>Conçu par et <br/> pour les étudiants</p>
              <p className='text-slate-300 text-md py-4'>La gestion de vos candidatures n'a jamais <br/> été aussi simple</p>
            </div>
            <div className='mt-40'>
              <div className='mt-18 flex flex-col items-start'>
                <p className='text-slate-300 text-md py-4'>La recherche de stage ou d'alternance, <br/>
                c'est difficile et on le sait.<br/> 
                SourceJob est là pour vous aider à <br/>mieux gérer vos candidatures.</p>
                <Link to='/about'>
                  <div className='rounded-full bg-white flex flex-row items-center justify-start p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                    <div className='bg-slate-200 rounded-full'>
                      <img src={arrowOut} className='p-1 mx-3 w-8 h-8' />
                    </div>
                    <p className='text-black text-md mx-3 font-sans font-bold'>Plus de détails</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
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