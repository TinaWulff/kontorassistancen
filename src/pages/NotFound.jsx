import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
    return (
        <>
            <Helmet>
              <title>Side ikke fundet — Kontorassistancen</title>
              <meta name="robots" content="noindex, follow" />
            </Helmet>
            <h1>Not Found 404</h1>
            <p>
                The page you are looking for does not exist.
                Please check the URL or return to the home page.
                <Link to="/">Go to Home</Link>  
            </p>
        </>
    );
}