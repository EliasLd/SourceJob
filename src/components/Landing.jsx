import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import arrowOut from '../assets/arrow-out.svg';
import eye from '../assets/eye.svg';
import time from '../assets/time.svg';
import calendar from '../assets/calendar.svg';
import search from '../assets/search.svg';
import message from '../assets/message.svg';

function Nav() {
  return (
      <nav className=" top-0 z-10">
        <div className='max-w-5xl mx-auto px-4'>
          <div className='flex items-center justify-center h-16'>
            <div className='flex text-gray-900 items-center xs:gap-x-10 sm:gap-x-10 '>
              <Link to="/" className='text-white text-xl'> 
                <img src={logo} className=' w-10 h-10'/>
              </Link>
              <Link to='/about' className='p-3 rounded-2xl hover:bg-slate-100'>
                <p className='font-inter font-semibold'>À propos</p>
              </Link>
              <Link to="/auth/login" className='p-3 rounded-2xl hover:bg-slate-100' >
                <p className='font-inter font-semibold'>Rejoignez nous</p>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
}

function Landing(){
  return (
    <div className='flex justify-center'>
      <div className='bg-slate-100 rounded-3xl mt-12 grid grid-cols-2 grid-rows-9 md:grid-cols-5 md:grid-rows-6 sm:grid-cols-1 sm:grid-rows-12 gap-5 p-4'>
        {/* container principal */}
        <div className='col-span-2 row-span-4 md:col-span-3 md:row-span-6 bg-gray-700 rounded-3xl p-8 grid grid-cols-2 grid-rows-2'>
          {/* Container de gauche */}
          <div className='col-span-2 row-span-1'>
            {/* Titre + petite phrase */}
            <p className='text-white text-5xl font-sans font-bold'>Conçu par et <br/> pour les étudiants</p>
            <p className='font-inter text-slate-300 md:text-lg text-2xl py-4'>La gestion de vos candidatures n'a jamais <br/> été aussi simple</p>
          </div>
          <div className='col-span-2 sm:col-span-1 row-span-1'>
            <p className='font-inter text-slate-300 text-2xl md:text-lg mt-1 sm:mt-24 '>La recherche de stage ou d'alternance, <br/>
                c'est difficile et on le sait.<br/> 
                SourceJob est là pour vous aider à <br/>mieux gérer vos candidatures.
            </p>
            <Link to='/auth'>
              <div className='bg-white rounded-3xl mt-10 p-2 flex flex-row transition ease-in-out duration-500 hover: hover:scale-105'>
                <div className='bg-slate-200 rounded-full'>
                    <img src={arrowOut} className='p-1 mx-3 w-8 h-8' />
                </div>
                <div className='flex items-center'>
                  <p className='text-black text-md mx-3 font-sans font-bold'>À la recherche de plus de détails ?</p>
                </div>
              </div>
            </Link>
          </div>
          <div className='col-span-2 sm:col-span-1 row-span-1 grid grid-cols-2 grid-rows-1 gap-3 sm:ml-20 mt-5 sm:mt-40 '>
            <p className='font-inter text-slate-300 text-2xl md:text-lg py-1 md:py-3 col-span-2 justify-end sm:justify-center'>Commencez dès maintenant</p>
            <Link to='/auth/signup' className='flex justify-center col-span-1 row-span-1 rounded-full border border-white hover:bg-white transition ease-in-out duration-500'>
              <p className='text-white text-md text-sans font-semibold py-2 px-4 hover:text-black transition ease-in-out duration-500'> S'inscrire</p>
            </Link>
            <Link to='auth/login' className='col-span-1 row-span-1 rounded-full border border-white bg-white'>
              <p className='text-black text-md text-sans font-semibold py-2 px-4 flex justify-center'>Se connecter</p>
            </Link>
          </div>
        </div>
        <div className='col-span-2 row-span-6 grid grid-cols-1 grid-rows-9 sm:grid-cols-2 sm:grid-rows-7 gap-4'>
          {/* Container de droite */}
          <div className='col-span-1 row-span-2 xs:col-start-1 xs:row-span-3 p-4 bg-green-400 rounded-3xl grid gap-5'>
            <p className='p-1 mr-20 font-sans font-semibold text-black text-3xl md:text-lg'>Enregistrez vos <br/> candidatures</p>  
            <p className='font-inter text-slate-900 text-xl md:text-base'>pour avoir une<br/>vue globale et plus claire.</p>
            <img src={eye} className='w-16 h-16 md:w-10 md:h-10' />
          </div>
          <div className='col-span-1 row-span-2 xs:col-start-2 xs:row-span-3 p-4 bg-blue-400 rounded-3xl grid gap-5'>
            <p className='p-1 mr-10 font-sans font-semibold text-black text-3xl md:text-lg'>Gardez leurs status <br/> à jour</p>
            <p className='font-inter text-slate-900 text-xl md:text-base'>et restez dans le moment<br/>présent, c'est important.</p>
            <img src={time} className='w-16 h-16 md:w-10 md:h-10' />
          </div>
          <div className='col-span-1 row-span-2 xs:col-span-1 xs:row-span-3 p-4 bg-green-800 rounded-3xl grid gap-5'>
            <p className='p-1 mr-20 font-sans font-semibold text-white text-3xl md:text-lg'>Planifiez vos<br/>entretiens</p>
            <p className='font-inter text-white text-xl md:text-base'>et n'oubliez pas de rester<br/> vous même.</p>
            <img src={calendar} className='w-16 h-16 md:w-10 md:h-10' />
          </div>
          <div className='col-span-1 row-span-2 xs:col-start-2 xs:row-span-3 p-4 bg-red-200 rounded-3xl grid gap-5'>
            <p className='p-1 mr-20 font-sans font-semibold text-white text-3xl md:text-lg'>Filtrez vos <br/> candidatures</p>
            <p className='font-inter text-white text-xl md:text-base'>par thème, date, durée,<br/>préférences...</p>
            <div className='p-1  flex rounded-full'>
              <div className=' rounded-full'>
                <img src={search} className='w-16 h-16 md:w-10 md-h-10' />
              </div>
            </div>
          </div>
          <div className='row-span-1 xs:col-start-1 xs:col-end-3 p-4 bg-yellow-300 rounded-3xl grid grid-cols-4 grid-rows-1'>
            <div className='col-span-3 row-span-1 flex items-center justify-center'>
              <p className='font-inter font-semibold text-2xl xs:text-3xl md:text-xl ml-2'>Une question ? Contactez nous</p>
            </div>
            <div className='col-span-1 row-span-1 flex items-center justify-center mx-0 xs:mx-6 rounded-3xl bg-yellow-500 transition ease-in-out duration-500 hover: hover:scale-110'>
              <img src={message} className='w-16 h-16 md:w-10 md:h-10 mx-3'/>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

function LandingPage(){
    return(
      <div>
        <Nav />
        <Landing />
      </div>
    );
}

export { LandingPage };