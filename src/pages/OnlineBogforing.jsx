

import React from 'react';
import ImageSection from '../components/ImageSection.jsx';
import './undersider.scss';
import '../Styles/style.scss';


export default function OnlineBogforing() {

    return (
        <>
            <ImageSection
                image="/img/onlinebogforing.jpg"
                h2="Online Bogføring"
                textArray={[
                   "Online bogføring er en digitaliseret version af den traditionelle bogføring, hvor alle økonomiske transaktioner registreres og opbevares i skyen. Online bogføring muliggør et løbende overblik over din økonomiske situation, og du har adgang til dit opdaterede firmaregnskab på alle tidspunkter på dagen, blot du er tilkoblet en internetforbindelse.",
                   "En vigtig fordel ved online bogføring er, at det eliminerer behovet for manuel indtastning og reducerer risikoen for fejl. Med online bogføring kan vi oprette regler og skabeloner, der automatisk kategoriserer og bogfører dine transaktioner. Vi kan også integrere dit regnskabssystem med din bankkonto, så transaktioner automatisk importeres og bogføres.",
                   "Online bogføring er mere sikker end traditionel bogføring, da regnskaber og bilag arkiveres i skyen. Det betyder, at du slipper for at gemme og holde styr på papirfakturaer, papirkvitteringer og så videre. Ud over at slippe for papirfakturaer og papirkvitteringer giver det også dit firma en stor sikkerhed at abonnere på et online bogføringsprogram, som vi selvfølgelig kan være behjælpelige med at vælge.",
                   "Jeg vil hjælpe dig med at undgå fejl og sikre, at din bogføring er korrekt og opdateret."
                ]}
                linkTo="/ydelser"
                buttonText="Gå til oversigt af ydelser"
                className="image__left page"
            />
        </>      
    );
}