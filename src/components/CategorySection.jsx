
import './categorySection.scss';
import { Link } from 'react-router';


export default function CategorySection() {
    return (
        <section className='section__categories'>
            <div className='column1'>
                <Link to="/momsregnskab">
                    <img src="/img/moms.jpg" alt="illustrative image" />
                    <h2>Momsregnskab</h2>
                </Link>
            </div>

            <div className='column2'>
                <Link to="/lonkorsel">
                    <img src="/img/lonkorsel.jpg" alt="illustrative image" />
                    <h2>Lønkørsel</h2>
                </Link>
            </div>

            <div className='column3'>
                <Link to="/onlinebogforing">
                    <img src="/img/onlinebogforing.png" alt="illustrative image" />
                    <h2>Online Bogføring</h2>
                </Link>
            </div>
        </section>

    )
}