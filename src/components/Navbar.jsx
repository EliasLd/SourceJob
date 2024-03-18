import React from 'react'
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-10 bg-white border border-slate-200 backdrop-blur-lg'>
        <div className='max-w-6xl mx-auto px-4'>
            <div className='flex items-center justify-between h-16'>
                <img src={logo} className='w-10 h-10'/>
                <div className='flex gap-x-10 items-center'>
                    <a className='font-inter font-semibold '>Ajouter un job</a>
                    <a className='font-inter font-semibold '>Profil</a>  
                    <a className='font-inter font-semibold '>Voir les jobs</a> 
                </div>
            </div>
        </div>
    </nav>
  )
}
