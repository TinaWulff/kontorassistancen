import React from 'react';
import ImageSection from '../components/ImageSection.jsx';
import './lonkorsel.scss';

import LønImg from '../assets/img/lonkorsel.jpg';

export default function Lonkorsel() {

    return (
        <>
            <ImageSection
                image={LønImg}
                h2="Lønkørsel"
                textArray={[
                    "Lønkørsel er en proces, hvor en virksomhed udbetaler løn til sine ansatte. Dette kan være en kompleks proces, der involverer mange forskellige faktorer, herunder skat, pension, feriepenge og andre ydelser.",

                    "I Danmark er der krav om, at alle virksomheder skal udarbejde en beskrivelse af deres bogføringsprocedure og i fremtiden skal der bogføres digitalt. Lønkørsel er en del af denne procedure og skal bogføres korrekt for at overholde lovgivningen og undgå bøder og sanktioner fra myndighederne.",
                    "Lønkørsel kan være en tidskrævende proces, men det er vigtigt at sikre, at alle ansatte får den korrekte løn til tiden. Derfor er det vigtigt at have styr på alle de faktorer, der påvirker lønnen, og at have en klar proces for at udføre lønkørslen.",
                    "En vigtig faktor i lønkørslen er skat. Det er vigtigt at beregne den korrekte skat for hver ansat og sørge for, at skatten bliver trukket korrekt fra lønnen. Derudover er det også vigtigt at tage hensyn til pension, feriepenge og andre ydelser, der kan påvirke lønnen.",
                    "Kontorassistancen tilbyder professionel lønkørsel, der sikrer, at dine medarbejdere får deres løn til tiden og korrekt.",
                    "Vi håndterer alle aspekter af lønadministration, herunder beregning af skat, pension og andre fradrag.",
                    "Vi sikrer, at du overholder alle gældende love og regler for lønbehandling."
                ]}
            linkTo="/lonkorsel"
            buttonText={"Gå tilbage"}
            className='image__left page'
            />
            </>
    );
}
