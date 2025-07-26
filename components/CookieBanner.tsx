import * as React from 'react';
import { useEffect, useState } from 'react';

const COOKIE_KEY = 'cookiesAccepted';
const COOKIE_ATTEMPTS_KEY = 'cookiesBannerAttempts';
const MAX_ATTEMPTS = 2;
const INTERVAL_MS = 15000;

export function CookieBanner(): string {
  return `
    <div id="cookie-banner" class="cookie-banner" style="display: none;">
      <div class="cookie-banner__content">
        <span class="cookie-banner__text">
          This website uses cookies to optimize your experience. By continuing, you consent to our use of cookies. See our <a href="/privacy" class="cookie-banner__link">Privacy Policy</a>.
        </span>
        <button class="cookie-banner__accept" id="cookie-accept-btn">Accept Cookies</button>
        <button class="cookie-banner__close" id="cookie-close-btn" aria-label="Close">&times;</button>
      </div>
    </div>
  `;
} 