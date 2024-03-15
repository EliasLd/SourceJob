import React from 'react';
import { Link } from 'react-router-dom';

import search from '../assets/search-icon.svg';
import pending from '../assets/pending-icon.svg';
import verified from '../assets/verified-icon.svg';

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

function Landing(){
  return(
    <div className='mt-20 flex flex-col'>  {/* Presentation container */}
      <div className='flex flex-col gap-y-6 items-center justify-center'>  {/* title container */}
        <h1 className='font-sans font-bold text-white text-6xl'>SourceJob</h1>
        <p className='text-2xl text-slate-400'>Gérer vos candidatures avec simplicité</p>
      </div>
      <div className='flex flex-col mx-60'>  { /* Description container */ }
        <div className='m-4 bg-zinc-750 rounded-lg shadow-2xl mx-60'> {/* First Descritpion container */}
          <p className='text-slate-100 text-xl text-justify p-6'>
            Bienvenue sur SourceJob, une application permettant de gérer toutes ses candidatures 
            de manière simple et efficace. Nous savons qu'une recherche d'alternance ou de stage peut 
            s'avérer compliquée, stressante et quelque peu désorganisée en raison du grand nombre de sites 
            permettant de candidater à des offres. 
            Avec SourceJob, vous pouvez gérer vos candidatures au fil du temps, modifier leurs status
            ainsi qu'ajouter des détails et documents supplémentaires.
          </p>
          <div className='flex justify-center'>
            <p className='text-slate-100 text-xl text-justify p-6'>N'hésitez pas, rejoignez nous !</p>
            <div className='flex flex-row items-center justify-end' >
              <Link to='/auth/signup' className='py-2 px-4 text-lg border transition duration-200 ease-out hover:ease-in border-blue-700 bg-zinc-750 hover:bg-blue-700 text-white rounded-full font-medium ml-3'>
                Créer un compte
              </Link>
              <Link to='/auth/login' className='py-2 px-4 text-lg bg-blue-700 text-white rounded-full font-medium ml-3'>
                Se connecter
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-row p-4 mt-20 items-center justify-center gap-x-20'>
        <img src={pending} />
        <img src={search} />
        <img src={verified} />
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