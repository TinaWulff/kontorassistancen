import LinkButton from "./LinkButton";
import TextSection from "./TextSection";

//Class-names: image__left, image__right

export default function ImageSection({ className = "", image }) {


    return (

        <section className={`${className}`}>
            <img src={image} alt="illustrative image" />
            <TextSection
                h2="Modern Refinement"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel maxime eos nobis nulla odit sint minus, placeat rerum. Enim, tempora laudantium! Voluptatem cum vero, perspiciatis praesentium ullam consectetur necessitatibus quis.
                Dolore nihil consectetur voluptas rerum perferendis? Pobcaec quisquam, asperiores dolores, libero quis deserunt suscipit eaque sapiente rerum sequi harum!
                Inventore rem quisquam pariatur eos nemo fugit quas impedit dolores et soluta ab, quos voluptatum veritatis? Nobis ipsa aut a, cumque exercitationem, mollitia itaque nostrum esse dicta iusto, nam corrupti."
            >
            </TextSection>
        </section>
    )
}
