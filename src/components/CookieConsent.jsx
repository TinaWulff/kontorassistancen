import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { loadGoogleAnalytics, removeGoogleAnalytics } from '../utils/analytics';
import './cookieConsent.scss';

const CONSENT_KEY = 'cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === 'accepted') {
      loadGoogleAnalytics();
    } else if (consent !== 'rejected') {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    loadGoogleAnalytics();
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, 'rejected');
    removeGoogleAnalytics();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-label="Cookie samtykke">
      <p>
        Vi bruger cookies til statistik (Google Analytics), så vi kan forbedre hjemmesiden.
        Læs mere i vores <Link to="/privatlivspolitik">privatlivspolitik</Link>.
      </p>
      <div className="cookie-consent__actions">
        <button
          type="button"
          onClick={handleReject}
          className="cookie-consent__btn cookie-consent__btn--reject"
        >
          Afvis
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className="cookie-consent__btn cookie-consent__btn--accept"
        >
          Accepter
        </button>
      </div>
    </div>
  );
}
