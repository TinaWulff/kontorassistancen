

import React from 'react';
import ImageSection from '../components/ImageSection.jsx';
import './lonkorsel.scss';
import '../Styles/style.scss';

import OnlineImg from '../assets/img/onlinebogforing.png';

export default function OnlineBogforing() {

    return (
        <>
            <ImageSection
                image={OnlineImg}
                h2="Online Bogføring"
                textArray={[
                    "Momsregnskab er en opgørelse over virksomhedens købsmoms og salgsmoms i en given periode. I Danmark er momsregnskab en del af bogføringen, og det er et krav, at alle momsregistrerede virksomheder skal føre et regnskab over køb og salg af varer og ydelser. Momsregnskabet skal indsendes til Skattestyrelsen inden for de fastsatte frister.",
                    "Når en virksomhed køber en vare eller ydelse, betaler den i første omgang den moms, sælgeren har lagt på. Men når momsen skal afregnes til Skattestyrelsen, trækkes den moms, virksomheden har betalt, fra den moms, virksomheden har indsamlet. Virksomhedens regnskabsprogram udregner automatisk dette når kontoplanen er korrekt opsat, hvilket vi også kan være behjælpelige med.",
                    "Momsregnskab er vigtigt for at overholde lovgivningen og undgå bøder og sanktioner fra myndighederne. Hvis du ikke har styr på dit momsregnskab, kan det også føre til fejl i regnskabet og dermed give et forkert billede af virksomhedens økonomi. Derudover kan det også føre til tab af kunder og investorer, hvis de ikke har tillid til virksomhedens økonomi.",
                    "Kontorassistancen hjælper dig med at undgå fejl og sikre, at din bogføring er korrekt og opdateret."
                ]}
                    linkTo="/onlinebogforing" 
                    buttonText={"Gå tilbage"}
                    className='image__let page'
            ></ImageSection>
        </>
            
    );
}