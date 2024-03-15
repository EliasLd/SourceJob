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
            <div className='flex text-gray-900 items-center gap-x-10 '>
              <Link to="/" className='text-white text-xl'> 
                <img src={logo} className='w-10 h-10'/>
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

function Landing() {
  return(
    <div className='mt-10 mx-20'>
      <div className='p-2 mx-20'>
        <div className='p-5 mx-20 bg-slate-100 rounded-3xl flex flex-row gap-x-8'>
          <div className='p-10 bg-gray-700 rounded-3xl flex flex-col shadow-xl'>
            <div className='p-2'>
              <p className='text-white text-5xl font-sans font-bold'>Conçu par et <br/> pour les étudiants</p>
              <p className='font-inter text-slate-300 text-md py-4'>La gestion de vos candidatures n'a jamais <br/> été aussi simple</p>
            </div>
            <div className='mt-40 flex flex-row'>
              <div className='mt-18 flex flex-col items-start'>
                <p className='font-inter text-slate-300 text-md py-4'>La recherche de stage ou d'alternance, <br/>
                c'est difficile et on le sait.<br/> 
                SourceJob est là pour vous aider à <br/>mieux gérer vos candidatures.</p>
                <Link to='/about'>
                  <div className='mt-2 p-2 rounded-full bg-white flex flex-row items-center justify-start transition ease-in-out duration-500 hover: hover:scale-110'>
                    <div className='bg-slate-200 rounded-full'>
                      <img src={arrowOut} className='p-1 mx-3 w-8 h-8' />
                    </div>
                    <p className='text-black text-md mx-3 font-sans font-bold'>Plus de détails</p>
                  </div>
                </Link>
              </div>
              <div className='flex flex-col mt-20 ml-40'>
                  <p className='font-inter text-slate-300 text-md py-3'>Commencez dès maintenant</p>
                  <div className='flex flex-row gap-x-5 item-center'>
                    <Link to='/auth/signup' className=' mt-2  rounded-full border border-white
                     hover:bg-white transition ease-in-out duration-500 '>
                      <p className='text-white text-md text-sans font-semibold py-2 px-4 hover:text-black transition ease-in-out duration-500'>S'inscrire</p>
                    </Link>
                    <Link to='/auth/login' className=' mt-2 rounded-full border border-white bg-white'>
                      <p className='text-black text-md text-sans font-semibold py-2 px-4'>Se connecter</p> 
                    </Link>
                  </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <div className='flex flex-row gap-x-5'>
              <div className='flex flex-col p-2 bg-green-400 rounded-3xl'>
                <div className='flex'> 
                  <p className='p-1 mr-20 font-sans font-semibold text-black text-lg'>Enregistrez vos <br/> candidatures</p>
                </div>
                <div className='mt-2 p-2 flex '>
                  <p className='font-inter text-slate-900'>pour avoir une<br/>vue globale et plus claire.</p>
                </div>
                <div className='mt-10 flex'>
                  <div className='rounded-full  flex items-center'>
                    <div className='p-2'>
                      <img src={eye} className='w-10 h-10' />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className='flex flex-col p-2 bg-blue-400 rounded-3xl'>
                  <div className='flex'> 
                    <p className='p-1 mr-10 font-sans font-semibold text-black text-lg'>Gardez leurs status <br/> à jour</p>
                  </div>
                  <div className='mt-6 mx-2 flex'>
                    <p className='font-inter text-slate-900'>et restez dans le moment<br/>présent, c'est important.</p>
                  </div>
                  <div className='mt-10 flex'>
                    <div className='rounded-full  flex items-center'>
                      <div className='p-2'>
                        <img src={time} className='w-10 h-10' />
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div className='flex flex-row mt-5 gap-x-5'>
              <div className='flex flex-col p-2 bg-green-800 rounded-3xl'>
                <div className='flex'>
                  <p className='p-1 mr-20 font-sans font-semibold text-white text-lg'>Planifiez vos<br/>entretiens</p>
                </div>
                <div className='mt-6 mx-5 flex'>
                    <p className='font-inter text-white'>et n'oubliez pas de rester<br/> vous même.</p>
                  </div>
                  <div className='mt-10 flex'>
                    <div className='rounded-full flex items-center'>
                      <div className='p-2 flex'>
                        <img src={calendar} className='w-10 h-10' />
                      </div>
                    </div>
                  </div>
              </div>
              <div className='flex flex-col p-2 bg-slate-700 rounded-3xl'>
                <div className='flex'>
                  <p className='p-1 mr-20 font-sans font-semibold text-white text-lg'>Filtrez vos <br/> candidatures</p>
                </div>
                <div className='mt-6 mx-6 flex'>
                    <p className='font-inter text-white'>par thème, date, durée,<br/>préférences...</p>
                </div>
                <div className='mt-10 flex'>
                  <div className='rounded-full flex items-center'>
                    <div className='p-1 ml-1 flex bg-white rounded-full'>
                      <div className='mx-2 bg-slate-200 rounded-full'>
                        <img src={search} className='w-10 h-10 p-1 mx-2' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center mt-8 p-4 bg-yellow-300 rounded-full'>
              <div className='flex flex-row gap-x-10 items-center'>
                <p className='font-inter font font-semibold text-xl'>Une question ? Contactez nous</p>
                <div className='rounded-full bg-yellow-500 transition ease-in-out duration-500 hover: hover:scale-110'>
                  <img src={message} className='w-10 h-10 mx-3'/>
                </div>
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