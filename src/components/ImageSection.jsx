//import LinkButton from "./LinkButton";
import TextSection from "./TextSection";
import './ImageSection.scss';

//Class-names: split__section, image__left, image__right

export default function ImageSection({ className = "", image }) {


    return (

        <section className={`split__section ${className}`}>
            <img src={image} alt="illustrative image" />
            <TextSection
                h2="Modern Refinement"
                text="Sammen med vores kunder og den samlede viden fra vores 18.500 arkitekter, ingeniører og øvrige specialister skaber vi løsninger, der adresserer urbanisering, griber digitaliseringens muligheder og gør vores byer og samfund mere bæredygtige."
            >
            Transforming Society Together
            </TextSection>
        </section>
    )
}
