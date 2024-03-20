import React, { useState } from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import hamburger from '../assets/hamburger.svg';
import cross from '../assets/cross.svg';

export default function MobileNavbar() {

    const [opened, setOpened] = useState(false);

    const toggleMenu = () => {
        setOpened(!opened);
    }

    return (
        <nav className='sticky top-0 z-10 bg-white border border-slate-200'>
            <div className='max-w-4xl mx-auto px-4 relative'>
                <div className='flex items-center justify-between h-16'>
                    <img src={opened ? cross : hamburger} onClick={toggleMenu} className='w-10 h-10 transition ease-in-out duration-300 hover:rotate-90 ' alt='Hamburger Icon' />
                    <Link to='/api/jobs'>
                        <img src={logo} className='w-10 h-10' alt='Logo' />
                    </Link>
                    {opened && (
                        <div className="absolute top-full left-1/2 transform w-full -translate-x-1/2 bg-slate-300 border border-slate-200 p-2">
                            <ul className='flex flex-row justify-center gap-x-2'>
                                <div className='rounded-full p-1 bg-slate-100'>
                                    <li><Link to="/api/jobs" className='mx-6 font-inter'>Jobs </Link></li>
                                </div>
                                <div className='rounded-full p-1 bg-slate-100'>
                                    <li><Link to="/api/jobs/addJob" className='mx-6 font-inter'>Ajouter </Link></li>
                                </div>
                                <div className='rounded-full p-1 bg-slate-100'>
                                    <li><Link to="/api/profile" className='mx-4 font-inter'>Profil </Link></li>
                                </div>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
