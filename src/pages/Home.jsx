import React from 'react';

import '../Styles/style.scss';
import '../components/imageSection.scss';
import '../components/textSection.scss';

import Hero from '../components/Hero$.jsx';
import TextSection from '../components/TextSection.jsx';
import ImageSection from '../components/ImageSection.jsx';

import CategorySection from '../components/CategorySection';
import FormSection from '../components/FormSection';



//Images:
import YdelserImg from '../assets/img/regnskab_image.png';
import ProfilBillede from '../assets/img/profilbillede.png';
import { Link } from 'react-router';
import LinkButton from '../components/LinkButton.jsx';





function Home() {

  return (
  
    <>
        <Hero></Hero>

        <section className="section__color">
        <TextSection 
        className='Txt__centered'
        h2="Bedste service og rådgivning"
        text={["Vi forstår, at bogføring og regnskab kan være en udfordring for mange virksomheder, og vi er her for at hjælpe dig med at navigere gennem de komplekse regler og bestemmelser.",
            "Hos Kontorassistancen er vi stolte af at tilbyde vores kunder en yderst professionel service, med mulighed for stor fleksibilitet og personlig service til jeres bogføring."
        ]}>
        </TextSection>
        <LinkButton
         className="btn__color"
         linkto ="/kontakt"
        >Få tilbud</LinkButton>
        </section>

        <ImageSection
        image={YdelserImg}
        h2 = "Ydelser"
        textArray= {[
        "Vi tilbyder en bred vifte af tjenester, herunder online bogføring, momsregnskab og lønkørsel.",
        "Vores mål er at give dig den bedste service og rådgivning, så du kan fokusere på at drive din virksomhed.",
        "Vi hjælper både større og mindre virksomheder og er fleksible - alt efter jeres behov, kan vi udføre opgaverne hos jer, eller vi kan ordne tingene fra vores eget kontor.",
        "Når du vælger at få bogført hos os er regnskabet selvfølgelig afstemt og klar til at sende til revisoren til årsafslutningen."
        ]}
        linkTo = "/ydelser"
        buttonText={"Læs om de forskellige ydelser"}
        className='image__left'
        >
        </ImageSection>

        <CategorySection></CategorySection>


        <ImageSection
          image={ProfilBillede}
          h2 ="Om Kontorassistancen"
          textArray= {[
            "Kontorassistancen er ejet af Vivi Becker og har eksisteret siden 1992, inden da arbejede Vivi som løn- og debitor bogholder i en større industrivirksomhed.",
            "Igennem årene har hun opbygget en bred vifte af kunder. Vivi har yderligere erfaring og kompetencer fra arbejde i anerkendte revisionsfirmaer i 8 år, alt imens hun har kørt Kontorassistancen.",
            "Nu arbejder Vivi fokuseret på fuld tid i kontorassistancen, så hun kan bruge alle ressourcer på at yde sin personlige og individuelle service til sin kunder i Kontorassistancen.",
            "Vivi er specialist i online bogføring, momsregnskab og lønkørsel og samarbejder med flere autoriserede revisorer."
          ]}
          linkTo ="/kontakt"
            buttonText={"Læs om de forskellige ydelser"}
          className="image__right"
          >
        </ImageSection>


        <FormSection />
    </>

  );
}

export default Home;
