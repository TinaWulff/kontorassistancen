//import LinkButton from "./LinkButton";
import './textSection.scss';

//Class-names: Txt__centered, Txt__start, section__text

export default function TextSection( { h2, text, className = "", children }) {


    return (
            <div className={`section__text ${className}`}>
            <h2>{h2}</h2>
            <div className='text_container'>{
                text.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                }</div>
            <p>{children}</p>
            </div>
    )
}
