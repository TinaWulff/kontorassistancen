
import './Header.scss';
import Logo from '../assets/rooster-logo.png';
import LinkButton from './LinkButton';


import { HiOutlineMenu } from "react-icons/hi";


export default function Header() {


    return (
        <>
            <img src={Logo} alt="Rooster logo" />

            <nav>


                <ul>
                    <li><a href="#">Menupunkt #1</a></li>
                    <li><a href="#">Menupunkt #2</a></li>
                    <li><a href="#">Menupunkt #3</a></li>
                    <li><a href="#">Menupunkt #4</a></li>
                    <li><a href="#">Menupunkt #5</a></li>

                </ul>
                <LinkButton className="btn__dark btn__header">
                    Book et møde
                </LinkButton>
                <div className="menu-icon" ><HiOutlineMenu /></div>

            </nav>


        </>
    )
}