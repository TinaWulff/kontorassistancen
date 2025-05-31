
import HeroImg from '../assets/img/header-red.png';
import LinkButton from './LinkButton';

import './hero.scss';

export default function Hero() {


    return (
        <section className='hero'>
        <img src={HeroImg} alt="Hero image" />

       <div className='hero__text'>
        <h1>Overblik og balance i  regnskabet?</h1>
        <p>Få mere tid til det du er god til i din virksomhed - vi har styr på løn og regnskab.</p>
        
        <LinkButton className="btn__dark btn__hero">
        Få et tilbud
        </LinkButton>
        </div>

        </section>
    )
}