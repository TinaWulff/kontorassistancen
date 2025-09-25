
import React, { useState } from 'react';
import './header.scss';
//import LinkButton from './LinkButton.jsx';
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from 'react-router';
import { NavLink } from 'react-router-dom';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header>
            <NavLink to="/"><img src="/logo.svg" alt="logo" /></NavLink>

            <nav>
                <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                    <li><NavLink to="/lonkorsel" onClick={() => setMenuOpen(false)}>Lønkørsel</NavLink></li>
                    <li><NavLink to="/momsregnskab" onClick={() => setMenuOpen(false)}>Momsregnskab</NavLink></li>
                    <li><NavLink to="/onlinebogforing" onClick={() => setMenuOpen(false)}>Online Bogføring</NavLink></li>
                    <li><NavLink to="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</NavLink></li>
                </ul>
                {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
            </nav>

            <div
                className={`menu-icon ${menuOpen ? 'open' : ''}`}
                onClick={toggleMenu}
            >
                {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}

            </div>
        </header>
    )
}


