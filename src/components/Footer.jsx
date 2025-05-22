import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquarePinterest } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

import './footer.scss';

//import { NavLink } from "react-router";


export default function Footer() {

    return (
        <footer>
            <div>
                <h2>Find os her</h2>

                <p>Rooster Fried Chicken</p>
                <p>Firmavej 109</p>
                <p>2300 Firmaby</p>

                <p>Tlf.: +45 12 34 56 78</p>
                <p>Mail: info@roosterfried.dk</p>

                <ul>
                    <h4>Åbningstider</h4>
                    <li>Mandag – fredag: 10.00 – 17.30</li>
                    <li>Lørdag: 10.00 – 15.00</li>
                </ul>

                <ul className="some-icons">
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"> <FaFacebookSquare /> </a></li>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"> <FaInstagram /> </a></li>
                    <li><a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" aria-label="Pinterest"> <FaSquarePinterest /> </a></li>
                    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"> <IoLogoLinkedin /> </a></li>
                </ul>
            </div>


            <nav>
                <ul>
                    <h2>Information</h2>
                    <li><a href="#">Om Rooster</a></li>
                    <li><a href="#">Kataloger & film</a></li>
                    <li><a href="#">Kunde guide</a></li>
                    <li><a href="#">Opskrifter</a></li>
                    <li><a href="#">Presse</a></li>
                    <li><a href="#">Karriere</a></li>
                </ul>

                <ul>
                    <h2>About</h2>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Refund Policy</a></li>
                    <li><a href="#">Help Center</a></li>
                </ul>

                <ul>
                    <h2>Shop</h2>
                    <li><a href="#">Juices</a></li>
                    <li><a href="#">Supplements</a></li>
                    <li><a href="#">Pantry</a></li>
                    <li><a href="#">Locations</a></li>
                    <li><a href="#">Order Ahead</a></li>
                    <li><a href="#">Terms of Service</a></li>
                    <li><a href="#">Refund Policy</a></li>
                </ul>
            </nav>

        </footer>
    )
}