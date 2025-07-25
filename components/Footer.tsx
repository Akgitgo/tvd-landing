export function Footer(): string {
  return `
    <footer class="footer">
      <div class="footer__bg"></div>
      <div class="footer__content">
        <div class="footer__col footer__contact">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="tel:8121021135" class="footer__icon-btn">
                <span class="footer__icon">📞</span>Sales: 8121021135
              </a>
            </li>
            <li>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=poc.socialmedia@mghyderabad.com" target="_blank" rel="noopener" class="footer__icon-btn">
                <span class="footer__icon">✉️</span>Sales: poc.socialmedia@mghyderabad.com
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__col footer__social">
          <h3>Social Networks</h3>
          <ul>
            <li><a href="https://www.facebook.com/share/1GHsicQ33c/" target="_blank" rel="noopener" class="footer__icon-btn"><span class="footer__icon footer__icon--social">${facebookSVG}</span> Facebook</a></li>
            <li><a href="https://www.instagram.com/thevaluedrive?igsh=ZnJnajg3NW92cmFj" target="_blank" rel="noopener" class="footer__icon-btn"><span class="footer__icon footer__icon--social">${instagramSVG}</span> Instagram</a></li>
            <li><a href="https://youtube.com/@thevaluedrive?si=nLe9MDouFrYEk4Oo" target="_blank" rel="noopener" class="footer__icon-btn"><span class="footer__icon footer__icon--social">${youtubeSVG}</span> YouTube</a></li>
          </ul>
        </div>
        <div class="footer__col footer__links">
          <h3>Links List</h3>
          <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#know-more">About Us</a></li>
            <li><a href="#footer">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  `;
}

// SVGs for social icons
const facebookSVG = `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>`;
const instagramSVG = `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.635.4 3.661 1.374c-.974.974-1.246 2.241-1.308 3.608C2.175 8.414 2.163 8.794 2.163 12c0 3.206.012 3.586.07 4.866.062 1.366.334 2.633 1.308 3.608.974.974 2.241 1.246 3.608 1.308 1.266.058 1.646.069 4.85.069s3.584-.012 4.85-.07c1.366-.062 2.633-.334 3.608-1.308.974-.974 1.246-2.241 1.308-3.608.058-1.266.069-1.646.069-4.85s-.012-3.584-.07-4.85c-.062-1.366-.334-2.633-1.308-3.608-.974-.974-2.241-1.246-3.608-1.308C15.647.012 15.267 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>`;
const youtubeSVG = `<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.114 0 12 0 12s0 3.886.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.886 24 12 24 12s0-3.886-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`; 