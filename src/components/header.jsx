
import React, { useState } from 'react';
import './Header.scss';
import Logo from '../assets/rooster-logo.png';
import LinkButton from './LinkButton';
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";


export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <img src={Logo} alt="Rooster logo" />

            <nav>
                <ul className={`menu ${menuOpen ? 'open' : ''}`}>
                    <li><a href="#">Menupunkt #1</a></li>
                    <li><a href="#">Menupunkt #2</a></li>
                    <li><a href="#">Menupunkt #3</a></li>
                    <li><a href="#">Menupunkt #4</a></li>
                    <li><a href="#">Menupunkt #5</a></li>

                </ul>
            
            </nav>
                <LinkButton className="btn__dark btn__header">
                    Book et møde
                </LinkButton>
            
            <div
            className={`menu-icon ${menuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}

            </div>
        </>
    )
}
