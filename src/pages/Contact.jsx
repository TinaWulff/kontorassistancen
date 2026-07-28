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

          <meta property="og:type" content="website" />
          <meta property="og:locale" content="da_DK" />
          <meta property="og:site_name" content="Kontorassistancen" />
          <meta property="og:title" content="Kontakt — Kontorassistancen" />
          <meta property="og:description" content="Kontakt Kontorassistancen for tilbud på bogføring, momsregnskab og lønsupport. Vi svarer hurtigt og personligt." />
          <meta property="og:url" content={canonical} />
          <meta property="og:image" content="https://kontorassistancen.dk/img/header-red.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Kontakt — Kontorassistancen" />
          <meta name="twitter:description" content="Kontakt Kontorassistancen for tilbud på bogføring, momsregnskab og lønsupport. Vi svarer hurtigt og personligt." />
          <meta name="twitter:image" content="https://kontorassistancen.dk/img/header-red.png" />
        </Helmet>
        <FormSection />
        </>
    )
}