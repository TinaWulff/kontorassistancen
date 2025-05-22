import YdelserImg from '../assets/ydelser.jpg';
import ServiceImg from '../assets/service.jpg';
import KontaktImg from '../assets/kontaktos.jpg';

import './categorySection.scss';


export default function CategorySection() {
    return (
<section className='section__categories'>
    <div className='column1'>
        <a href="#">
        <img src={YdelserImg} alt="illustrative image" />
        <h2>Ydelser</h2>
        </a>
    </div>

    <div className='column2'>
        <a href="#">
        <img src={ServiceImg} alt="illustrative image" />
        <h2>Service</h2>
        </a>
    </div>

    <div className='column3'>
    <a href="#">
    <img src={KontaktImg} alt="illustrative image" />
    <h2>Kontakt os</h2>
    </a>
    </div>
</section>

    )
}