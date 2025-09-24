
import React from 'react';
import { Link } from 'react-router';
import ImageSection from '../components/ImageSection.jsx';
import './undersider.scss';
import '../Styles/style.scss';
import { FaChevronRight } from "react-icons/fa6";

export default function Ydelser() {

    return (
        <>
            <ImageSection
                image="/img/ydelser.jpg"
                h2="Ydelser"
                textArray={[
                    "Kontorassistancen tilbyder en bred vifte af tjenester, som overordnet er listet herunder.",
                    "Klik for at læse nærmere om de forskellige emner.",
                    "Når du vælger at få udført en ydelse hos os, sørger vi for at leve op til alle lovkrav og alt er selvfølgelig afstemt og klar til at sende til revisoren ved årsafslutningen."
                ]}
                    linkTo="/" 
                    buttonText="Tilbage til forside"
                    className="image__left page ydelser"
            >
                <ul>
                <li><Link to="/lonkorsel">Lønkørsel <FaChevronRight /></Link></li>
                <li><Link to="/momsregnskab">Momsregnskab <FaChevronRight /></Link></li>
                <li><Link to="/onlinebogforing">Online bogføring <FaChevronRight /></Link></li>
                </ul>
            </ImageSection>
                
        
        </>
            
    );
}