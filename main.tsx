import { Header, setupHeaderListeners } from './components/Header';
import { Footer } from './components/Footer';
import { KnowMore } from './components/KnowMore';
import { PopupForm, setupPopupListeners, showPopup } from './components/PopupForm';
import { Hero } from './components/Hero';

function injectComponent(id: string, html: string) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', () => {
  // Create containers if not present
  const ids = ['header', 'hero', 'know-more', 'footer-separator', 'footer', 'popup'];
  ids.forEach(id => {
    if (!document.getElementById(id)) {
      const div = document.createElement('div');
      div.id = id;
      document.body.appendChild(div);
    }
  });

  // Ensure correct order: header, hero, know-more, footer-separator, footer, popup
  const body = document.body;
  ids.forEach(id => {
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

  setupPopupListeners();

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
}); 