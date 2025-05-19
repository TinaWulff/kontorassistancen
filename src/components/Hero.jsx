
import HeroImg from '../assets/topbillede.jpg';
import LinkButton from './LinkButton';

import './Hero.scss';

export default function Hero() {


    return (
        <section className='hero'>
        <img src={HeroImg} alt="Hero image" />

       <div className='hero__text'>
        <h1>Making it right entirely in Copenhagen since 1997</h1>
        <p>Every product embodies our spirit of family legacy, traditional craftmanship,
            and genuine commitment to sustainability.</p>
        
        <LinkButton className="btn__light btn__hero">
        Book et møde
        </LinkButton>
        </div>

        </section>
    )
}