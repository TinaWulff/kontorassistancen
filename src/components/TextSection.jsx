import LinkButton from "./LinkButton";
import './TextSection.scss';

//Class-names: Txt__centered, Txt__start, section__text

export default function TextSection( { h2, text, className = "" }) {


    return (
            <div className={`section__text ${className}`}>
            <h2>{h2}</h2>
            <p>{text}</p>

            <LinkButton className="btn__dark">Kontakt os</LinkButton>
            </div>
    )
}
