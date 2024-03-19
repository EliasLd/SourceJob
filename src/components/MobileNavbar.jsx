import React, { useState } from 'react'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import hamburger from '../assets/hamburger.svg';

export default function MobileNavbar() {

    const [opened, setOpened] = useState(false);

    const toggleMenu = () => {
        setOpened(!opened);
        console.log('Menu affiché');
    }

    return (
        <nav className='sticky top-0 z-10 bg-white border border-slate-200'>
            <div className='max-w-4xl mx-auto px-4 relative'>
                <div className='flex items-center justify-between h-16'>
                    <img src={hamburger} onClick={toggleMenu} className='w-10 h-10' alt='Hamburger Icon' />
                    <Link to='/api/jobs'>
                        <img src={logo} className='w-10 h-10' alt='Logo' />
                    </Link>
                    {opened && (
                        <div className="absolute top-full left-1/2 transform w-full -translate-x-1/2 bg-white border border-slate-200 p-2">
                            <ul className='flex flex-row justify-center gap-x-8'>
                                <li><Link to="/link1">Jobs </Link></li>
                                <li><Link to="/link2">Ajouter </Link></li>
                                <li><Link to="/link3">Profil </Link></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
