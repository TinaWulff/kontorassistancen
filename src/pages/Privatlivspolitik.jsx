import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import './undersider.scss';
import '../Styles/style.scss';

export default function Privatlivspolitik() {
  const location = useLocation();
  const canonical = `https://kontorassistancen.dk${location.pathname}`;

  return (
    <>
      <Helmet>
        <title>Privatlivspolitik — Kontorassistancen</title>
        <meta
          name="description"
          content="Læs om hvordan Kontorassistancen indsamler, bruger og opbevarer dine personoplysninger, herunder cookies og kontaktformular."
        />
        <link rel="canonical" href={canonical} />
      </Helmet>

      <section className="page privatlivspolitik" style={{ padding: '3rem 1.5rem', maxWidth: '860px', margin: '0 auto' }}>
        <h1>Privatlivspolitik</h1>
        <p>Sidst opdateret: 29. juli 2026</p>

        <h2>Dataansvarlig</h2>
        <p>
          Kontorassistancen v/ Vivi Becker<br />
          Vads Dal 19, 6973 Ørnhøj<br />
          Email: <a href="mailto:vivi@kontorassistancen.dk">vivi@kontorassistancen.dk</a><br />
          Telefon: +45 60 15 77 12
        </p>

        <h2>Kontaktformular</h2>
        <p>
          Når du udfylder kontaktformularen på hjemmesiden, indsamler vi de oplysninger du selv
          angiver: navn, e-mailadresse, telefonnummer (valgfrit) og din besked. Disse oplysninger
          bruges udelukkende til at besvare din henvendelse og yde dig rådgivning om vores ydelser.
        </p>
        <p>
          Formularen sendes via tredjepartstjenesten <strong>Formspree</strong>, som modtager og
          videresender din besked til vores e-mail. Formspree behandler oplysningerne på vores
          vegne som databehandler. Du kan læse mere om Formsprees egen håndtering af data i deres{' '}
          <a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">
            privatlivspolitik
          </a>.
        </p>
        <p>
          Vi opbevarer oplysninger fra kontaktformularen, så længe det er nødvendigt for at
          besvare og følge op på din henvendelse, hvorefter de slettes.
        </p>

        <h2>Cookies og Google Analytics</h2>
        <p>
          Vi bruger <strong>Google Analytics (GA4)</strong> til at indsamle anonymiseret statistik
          om besøg på hjemmesiden — herunder hvor mange der besøger siden, hvilke sider der ses,
          og hvordan besøgende finder frem til os. Formålet er udelukkende at forbedre
          hjemmesidens indhold og brugeroplevelse.
        </p>
        <p>
          Google Analytics anvender følgende cookies:
        </p>
        <ul>
          <li><strong>_ga</strong> — bruges til at skelne mellem besøgende, opbevares i op til 2 år.</li>
          <li><strong>_ga_[container-id]</strong> — bruges til at bevare sessionstilstand, opbevares i op til 2 år.</li>
        </ul>
        <p>
          Disse cookies sættes <strong>først, når du har givet samtykke</strong> via
          cookie-banneret på hjemmesiden. Du kan til enhver tid trække dit samtykke tilbage ved at
          slette dine cookies i browserens indstillinger og genindlæse siden, hvorefter du kan
          vælge "Afvis" i banneret.
        </p>

        <h2>Dine rettigheder</h2>
        <p>Efter databeskyttelsesforordningen (GDPR) har du ret til at:</p>
        <ul>
          <li>få indsigt i, hvilke oplysninger vi behandler om dig</li>
          <li>få urigtige oplysninger rettet</li>
          <li>få oplysninger slettet, hvor det er muligt</li>
          <li>gøre indsigelse mod behandlingen</li>
          <li>klage til Datatilsynet, hvis du mener dine rettigheder ikke overholdes</li>
        </ul>
        <p>
          Klage kan indgives til{' '}
          <a href="https://www.datatilsynet.dk" target="_blank" rel="noopener noreferrer">
            Datatilsynet
          </a>.
        </p>

        <h2>Kontakt</h2>
        <p>
          Har du spørgsmål til denne privatlivspolitik eller vores behandling af dine
          personoplysninger, er du velkommen til at kontakte os på{' '}
          <a href="mailto:vivi@kontorassistancen.dk">vivi@kontorassistancen.dk</a>.
        </p>
      </section>
    </>
  );
}
