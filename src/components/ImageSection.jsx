import LinkButton from "./LinkButton";
import TextSection from "./TextSection.jsx";
import './imageSection.scss';

//Class-names: split__section, image__left, image__right

export default function ImageSection({ className = "", image, h2, textArray = [], linkTo, buttonText, children }) {


    return (

        <section className={`split__section ${className}`}>
            <img src={image} alt="illustrative image" />
            <TextSection
                h2={h2}
                text={
                    textArray.map((paragraph, index) => <p key={index}>{paragraph}</p>)
                }
            >
                {children}
            </TextSection>

            <LinkButton
            className="btn__dark"
            linkto={linkTo}>
                {buttonText}</LinkButton>
        </section>
    )
}
