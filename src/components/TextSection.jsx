import LinkButton from "./LinkButton";
import './textSection.scss';

//Class-names: Txt__centered, Txt__start, section__text

export default function TextSection( { h2, text, className = "", children }) {


    return (
            <div className={`section__text ${className}`}>
            <h2>{h2}</h2>
            <p>{text}</p>
            <p>{children}</p>

            <LinkButton className="btn__dark">Kontakt os</LinkButton>
            </div>
    )
}
