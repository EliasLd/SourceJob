import React from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-10 bg-white border border-slate-200 backdrop-blur-lg'>
        <div className='max-w-4xl mx-auto px-4'>
            <div className='flex items-center justify-between h-16'>
                <img src={logo} className='w-10 h-10'/>
                <div className='flex gap-x-10 items-center'>
                    <Link to='/api/jobs/addJob' className='font-inter font-semibold rounded-2xl p-3 hover:bg-slate-100'>Ajouter un job</Link>
                    <Link to='/api/jobs' className='font-inter font-semibold rounded-2xl p-3 hover:bg-slate-100'>Voir les jobs</Link> 
                    <Link to='/api/profile' className='font-inter font-semibold rounded-2xl p-3 hover:bg-slate-100'>Profil</Link>  
                </div>
            </div>
        </div>
    </nav>
  )
}
