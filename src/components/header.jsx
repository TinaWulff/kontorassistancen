
import './Header.scss';
import Logo from '../assets/rooster-logo.png';
import LinkButton from './LinkButton';

export default function Header() {


    return (
        <>
        <img src={Logo} alt="Rooster logo" />

        <nav>
            <ul>
                <li><a href="#">Menupunkt 1</a></li>
                <li><a href="#">Menupunkt 2</a></li>
                <li><a href="#">Menupunkt 3</a></li>
                <li><a href="#">Menupunkt 4</a></li>
                <li><a href="#">Menupunkt 5</a></li>
            </ul>
        </nav>

        <LinkButton className="btn__dark">
        Book et møde
        </LinkButton>
        </>
    )
}