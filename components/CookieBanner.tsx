import * as React from 'react';
import { useEffect, useState } from 'react';

const COOKIE_KEY = 'cookiesAccepted';
const COOKIE_ATTEMPTS_KEY = 'cookiesBannerAttempts';
const MAX_ATTEMPTS = 2;
const INTERVAL_MS = 15000;

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    const accepted = localStorage.getItem(COOKIE_KEY) === 'true';
    const prevAttempts = parseInt(localStorage.getItem(COOKIE_ATTEMPTS_KEY) || '0', 10);
    setAttempts(prevAttempts);
    if (!accepted && prevAttempts < MAX_ATTEMPTS) {
      setVisible(true);
      // Hide after INTERVAL_MS and maybe show again
      const timer = setTimeout(() => {
        setVisible(false);
        if (prevAttempts + 1 < MAX_ATTEMPTS) {
          setTimeout(() => {
            setVisible(true);
            localStorage.setItem(COOKIE_ATTEMPTS_KEY, String(prevAttempts + 1));
            setAttempts(prevAttempts + 1);
          }, INTERVAL_MS);
        }
      }, INTERVAL_MS);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = async () => {
    try {
      localStorage.setItem(COOKIE_KEY, 'true');
      setVisible(false);
      await fetch('/api/cookies-consent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ consent: true, time: new Date().toISOString() })
      });
    } catch (err) {
      // Optionally handle error
      setVisible(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-banner__content">
        <span className="cookie-banner__text">
          This website uses cookies to optimize your experience. By continuing, you consent to our use of cookies. See our <a href="/privacy" className="cookie-banner__link">Privacy Policy</a>.
        </span>
        <button className="cookie-banner__accept" onClick={handleAccept}>
          Accept Cookies
        </button>
      </div>
    </div>
  );
} 