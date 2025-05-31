
//import { IoLogoLinkedin } from "react-icons/io5";

import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { MdPlace } from "react-icons/md";

import './footer.scss';

//import { NavLink } from "react-router";


export default function Footer() {

    return (
        <>
        <ul>
        <li>
        <a href="mailto:info@kontorassistancen.dk">
            <IoIosMail className="icon"/>info@kontorassistancen.dk</a>
        </li>
        <li><MdPlace className="icon"/>Vads Dal 19, 6973 Ørnhøj</li>
        <li><FaPhone className="icon"/>+45 60 15 77 12</li>
        </ul>
        </>
    )
}