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
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel maxime eos dit sint minus, placeat rerum. Enim, tempora laudantium! Voluptatem cum vero, perspiciatis praesentium ullam consectetur necessitatibus quis.
                Dolore nihil consectetur voluptas rerum perferendis? Pobcaect eaque sapiente rerum sequi harum!"
            >
            Transforming Society Together
            </TextSection>
        </section>
    )
}
