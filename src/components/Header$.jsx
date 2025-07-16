
import React, { useState } from 'react';
import './header.scss';
import Logo from '../assets/logo.svg';
import LinkButton from './LinkButton.jsx';
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Link } from 'react-router';
import { NavLink } from 'react-router';


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header>
            <NavLink to="/"><img src={Logo} alt="logo" /></NavLink>

            <nav>
                <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                    <li><NavLink to="/lonkorsel">Lønkørsel</NavLink></li>
                    <li><NavLink to="/momsregnskab">Momsregnskab</NavLink></li>
                    <li><NavLink to="/onlinebogforing">Online Bogføring</NavLink></li>
                    <li><NavLink to="/kontakt">Kontakt</NavLink></li>
                </ul>
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
