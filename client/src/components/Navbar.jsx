import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Logout from '../auth/logout';

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-10 bg-white border-b border-slate-200 '>
        <div className='max-w-4xl mx-auto px-4'>
            <div className='flex items-center justify-between h-16'>
                <Link to='/api/jobs'>
                  <img src={logo} alt='' className='w-10 h-10'/>
                </Link>
                <div className='flex gap-x-4 xxs:gap-x-10 items-center'> 
                    <Link to='/api/jobs/addJob' className='font-inter font-semibold text-sm xxs:text-base  p-3 hover:border-b-2 transition ease-in-out duration-500 hover:border-b-black'>Ajouter un job</Link>
                    <Link to='/api/jobs' className='font-inter font-semibold text-sm xxs:text-base p-3 hover:border-b-2 transition ease-in-out duration-500 hover:border-b-black'>Voir les jobs</Link>   
                    <Logout />
                </div>
            </div>
        </div>
    </nav>
  );
}
