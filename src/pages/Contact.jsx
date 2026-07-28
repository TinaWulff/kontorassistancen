import FormSection from "../components/FormSection";
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function Contact() {
    const location = useLocation();
    const canonical = `https://kontorassistancen.dk${location.pathname}`;

    return (
        <>
        <Helmet>
          <title>Kontakt — Kontorassistancen</title>
          <meta name="description" content="Kontakt Kontorassistancen for tilbud på bogføring, momsregnskab og lønsupport. Vi svarer hurtigt og personligt." />
          <link rel="canonical" href={canonical} />
        </Helmet>
        <FormSection />
        </>
    )
}