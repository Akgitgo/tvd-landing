import { Header, setupHeaderListeners } from './components/Header';
import { Footer } from './components/Footer';
import { KnowMore } from './components/KnowMore';
import { PopupForm, setupPopupListeners, showPopup, clearPopupSubmission } from './components/PopupForm';
import { Hero } from './components/Hero';
import { CookieBanner } from './components/CookieBanner';

function injectComponent(id: string, html: string) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  // Create containers if not present (except cookie-banner)
  const ids = ['header', 'hero', 'know-more', 'footer-separator', 'footer', 'popup'];
  ids.forEach(id => {
    if (!document.getElementById(id)) {
      const div = document.createElement('div');
      div.id = id;
      document.body.appendChild(div);
    }
  });

  // Ensure only one cookie-banner div
  let cookieBannerDiv = document.getElementById('cookie-banner');
  if (!cookieBannerDiv) {
    cookieBannerDiv = document.createElement('div');
    cookieBannerDiv.id = 'cookie-banner';
    document.body.appendChild(cookieBannerDiv);
  }

  // Ensure correct order: header, hero, know-more, footer-separator, footer, popup, cookie-banner
  const body = document.body;
  [...ids, 'cookie-banner'].forEach(id => {
    const el = document.getElementById(id);
    if (el) body.appendChild(el);
  });

  injectComponent('header', Header());
  setupHeaderListeners();
  injectComponent('hero', Hero());
  injectComponent('know-more', KnowMore());
  // Inject separator before footer
  const sep = document.getElementById('footer-separator');
  if (sep) sep.innerHTML = '<hr class="footer-separator" />';
  injectComponent('footer', Footer());
  injectComponent('popup', PopupForm());
  injectComponent('cookie-banner', CookieBanner());

  // Debug: check if cookie-banner is present after injection
  if (!document.getElementById('cookie-banner')) {
    console.error('Cookie banner element is missing after injection!');
  }

  setupPopupListeners();

  // Make clearPopupSubmission available globally for testing
  (window as any).clearPopupSubmission = clearPopupSubmission;

  // Show popup when Know More button is clicked (desktop)
  const knowMoreBtn = document.getElementById('know-more-btn');
  if (knowMoreBtn) {
    knowMoreBtn.addEventListener('click', () => {
      showPopup();
    });
  }

  // Listen for showPopup event (mobile)
  window.addEventListener('showPopup', () => {
    showPopup();
  });

  // Cookie banner logic
  const COOKIE_KEY = 'cookiesAccepted';
  const banner = document.getElementById('cookie-banner');
  const acceptBtn = document.getElementById('cookie-accept-btn');
  const closeBtn = document.getElementById('cookie-close-btn');

  if (localStorage.getItem(COOKIE_KEY) !== 'true' && banner) {
    setTimeout(() => {
      console.log('Showing cookie banner');
      banner.style.display = 'block';
    }, 5000);
  }
  if (acceptBtn) {
    acceptBtn.addEventListener('click', async () => {
      localStorage.setItem(COOKIE_KEY, 'true');
      if (banner) banner.style.display = 'none';
      // Send consent to Google Apps Script
      const formData = new FormData();
      formData.append('consent', 'true');
      formData.append('consentTime', new Date().toISOString());
      await fetch('https://script.google.com/macros/s/AKfycbyEOKE-d78a95JiaKxRud_vLVhm-9JeaX_d1Y-pvIt8itYWccj1cOGEOT5t9KBWL8aV/exec', {
        method: 'POST',
        body: formData
      });
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (banner) banner.style.display = 'none';
    });
  }
}); 