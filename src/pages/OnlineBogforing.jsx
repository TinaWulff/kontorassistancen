

import React from 'react';
import ImageSection from '../components/ImageSection.jsx';
import './undersider.scss';
import '../Styles/style.scss';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';


export default function OnlineBogforing() {
    const location = useLocation();
    const canonical = `https://kontorassistancen.dk${location.pathname}`;

    return (
        <>
            <Helmet>
              <title>Online Bogføring — Kontorassistancen</title>
              <meta name="description" content="Online bogføring med Kontorassistancen giver dig løbende overblik over din økonomi, sikkert og fejlfrit i skyen." />
              <link rel="canonical" href={canonical} />

              <meta property="og:type" content="website" />
              <meta property="og:locale" content="da_DK" />
              <meta property="og:site_name" content="Kontorassistancen" />
              <meta property="og:title" content="Online Bogføring — Kontorassistancen" />
              <meta property="og:description" content="Online bogføring med Kontorassistancen giver dig løbende overblik over din økonomi, sikkert og fejlfrit i skyen." />
              <meta property="og:url" content={canonical} />
              <meta property="og:image" content="https://kontorassistancen.dk/img/onlinebogforing.png" />

              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Online Bogføring — Kontorassistancen" />
              <meta name="twitter:description" content="Online bogføring med Kontorassistancen giver dig løbende overblik over din økonomi, sikkert og fejlfrit i skyen." />
              <meta name="twitter:image" content="https://kontorassistancen.dk/img/onlinebogforing.png" />
            </Helmet>
            <ImageSection
                image="/img/onlinebogforing.png"
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