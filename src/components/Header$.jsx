
import React, { useState } from 'react';
import './header.scss';
import Logo from '../assets/rooster-logo.png';
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
        <>
            <NavLink to="/"><h2>Kontorassistancen</h2></NavLink>

            <nav>
                <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                    <li><NavLink to="/lonkorsel">Lønkørsel</NavLink></li>
                    <li><NavLink to="/{:id}">Momsregnskab</NavLink></li>
                    <li><NavLink to="/{:id}">Online Bogføring</NavLink></li>
                    <li><NavLink to="/{:id}">Kontakt</NavLink></li>
                </ul>
            </nav>
            
            <div
            className={`menu-icon ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}

            </div>
        </>
    )
}
