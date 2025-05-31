import MomsImg from '../assets/img/moms.jpg';
import LønImg from '../assets/img/lonkorsel.jpg';
import BogføringImg from '../assets/img/onlinebogforing.png';

import './categorySection.scss';
import { Link } from 'react-router';


export default function CategorySection() {
    return (
        <section className='section__categories'>
            <div className='column1'>
                <Link to="/momsregnskab">
                    <img src={MomsImg} alt="illustrative image" />
                    <h2>Momsregnskab</h2>
                </Link>
            </div>

            <div className='column2'>
                <Link to="/lonkorsel">
                    <img src={LønImg} alt="illustrative image" />
                    <h2>Lønkørsel</h2>
                </Link>
            </div>

            <div className='column3'>
                <Link to="/onlinebogforing">
                    <img src={BogføringImg} alt="illustrative image" />
                    <h2>Online Bogføring</h2>
                </Link>
            </div>
        </section>

    )
}