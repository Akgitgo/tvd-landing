(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(o){if(o.ep)return;o.ep=!0;const t=r(o);fetch(o.href,t)}})();function m(){return`
    <header class="header">
      <div class="header__left-logo header__logo-desktop">
        <img src="/Value Drive1.png" alt="Value Drive Logo" class="header__logo-img" height="40" />
      </div>
      <nav class="header__nav" id="header-nav">
        <ul class="header__nav-list">
          <li><a href="#top">Home</a></li>
          <li><a href="#know-more">About Us</a></li>
          <li><a href="#footer">Contact Us</a></li>
        </ul>
      </nav>
      <button class="header__cta-btn header__cta-btn-desktop" id="know-more-btn">Know More</button>
      <div class="header__right-logo header__logo-desktop">
        <img src="/Reassure1.png" alt="Reassure Logo" class="header__logo-img" height="40" />
      </div>
      <!-- Mobile Only Layout -->
      <div class="header__mobile-row">
        <img src="/Value Drive1.png" alt="Value Drive Logo" class="header__logo-img header__logo-mobile" height="26" />
        <button class="header__cta-btn header__cta-btn-mobile" id="know-more-btn-mobile">Know More</button>
        <button class="header__hamburger header__hamburger-mobile" id="header-hamburger-mobile" aria-label="Open menu">
          <span></span><span></span><span></span>
        </button>
        <img src="/Reassure1.png" alt="Reassure Logo" class="header__logo-img header__logo-mobile" height="26" />
      </div>
    </header>
  `}function h(){const e=document.getElementById("header-hamburger"),n=document.getElementById("header-nav");e&&n&&e.addEventListener("click",()=>{n.classList.toggle("header__nav--open"),e.classList.toggle("header__hamburger--open")});const r=document.getElementById("header-hamburger-mobile");r&&n&&r.addEventListener("click",()=>{n.classList.toggle("header__nav--open"),r.classList.toggle("header__hamburger--open")});const a=document.getElementById("know-more-btn-mobile");a&&a.addEventListener("click",()=>{const o=new CustomEvent("showPopup");window.dispatchEvent(o)})}function f(){return`
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
            <li><a href="https://www.facebook.com/share/1GHsicQ33c/" target="_blank" rel="noopener" class="footer__icon-btn"><span class="footer__icon footer__icon--social">${g}</span> Facebook</a></li>
            <li><a href="https://www.instagram.com/thevaluedrive?igsh=ZnJnajg3NW92cmFj" target="_blank" rel="noopener" class="footer__icon-btn"><span class="footer__icon footer__icon--social">${_}</span> Instagram</a></li>
            <li><a href="https://youtube.com/@thevaluedrive?si=nLe9MDouFrYEk4Oo" target="_blank" rel="noopener" class="footer__icon-btn"><span class="footer__icon footer__icon--social">${b}</span> YouTube</a></li>
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
  `}const g='<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>',_='<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.635.4 3.661 1.374c-.974.974-1.246 2.241-1.308 3.608C2.175 8.414 2.163 8.794 2.163 12c0 3.206.012 3.586.07 4.866.062 1.366.334 2.633 1.308 3.608.974.974 2.241 1.246 3.608 1.308 1.266.058 1.646.069 4.85.069s3.584-.012 4.85-.07c1.366-.062 2.633-.334 3.608-1.308.974-.974 1.246-2.241 1.308-3.608.058-1.266.069-1.646.069-4.85s-.012-3.584-.07-4.85c-.062-1.366-.334-2.633-1.308-3.608-.974-.974-2.241-1.246-3.608-1.308C15.647.012 15.267 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>',b='<svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.458 3.5 12 3.5 12 3.5s-7.458 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.114 0 12 0 12s0 3.886.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.542 20.5 12 20.5 12 20.5s7.458 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.886 24 12 24 12s0-3.886-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>';function v(){return`
    <section id="know-more" class="know-more-section">
      <div class="know-more__content">
        <div class="know-more__desc">
          <h2 class="know-more__title">OUR BRAND LINEAGE</h2>
          <div class="know-more__underline"></div>
          <p class="know-more__text">
            RAAM Group, based in the bustling city of Hyderabad, has established a formidable presence across a diverse array of industries, including auto-retail, real estate, construction, and consumer retail.
          </p>
          <p class="know-more__text">
            We are proud channel partners of some of the iconic brands in the world, such as Mercedes-Benz, MG Motor, Hyundai, Tata, Honda, Ather, Altigreen, and many more. We have solidified our reputation as a trusted and dependable partner. Our extensive network of over 60 outlets is spread throughout West and South India, with our headquarters located in Hyderabad. With a team of 2000+ dedicated and highly skilled employees, we strive to consistently deliver unparalleled service and unparalleled results.
          </p>
        </div>
        <div class="know-more__img-holder">
          <img src="/brandlinkage.png" alt="RAAM Group Brand Lineage" class="know-more__img" />
        </div>
      </div>
    </section>
  `}let c;function y(){return`
    <div id="popup-form" class="popup-form" style="display: none;">
      <div class="popup-content">
        <button id="close-popup" class="close-btn" type="button">&times;</button>
        <h2 class="popup-title">Book Your Test Drive</h2>
        <form id="popup-form-form">
          <input type="text" id="popup-name" name="name" placeholder="Your Name" required />
          <input type="tel" id="popup-phone" name="phone" placeholder="Phone Number" required pattern="[0-9]{10}" maxlength="10" />
          <input type="text" id="popup-city" name="city" placeholder="Your City/Location" required />
          <button type="submit" id="popup-submit">Submit</button>
        </form>
        <div id="popup-success" class="popup-success" style="display:none;">We will get back to you soon ✅</div>
      </div>
    </div>
  `}function d(){const e=document.getElementById("popup-form");e&&(e.style.display="flex")}function u(){const e=document.getElementById("popup-form");e&&(e.style.display="none")}function w(){localStorage.setItem("popupFormSubmitted","true")}function k(){return localStorage.getItem("popupFormSubmitted")==="true"}function L(){k()||(c&&clearTimeout(c),c=window.setTimeout(()=>{d()},7e3)),document.addEventListener("click",e=>{const n=e.target;n&&n.id==="close-popup"&&u()}),document.addEventListener("submit",async e=>{const n=e.target;if(n&&n.id==="popup-form-form"){e.preventDefault();const r=document.getElementById("popup-name").value.trim(),a=document.getElementById("popup-phone").value.trim(),o=document.getElementById("popup-city").value.trim(),t=document.getElementById("popup-submit"),s=document.getElementById("popup-success");if(!r||!a||!o)return;t.disabled=!0,t.textContent="Fetching details 🔃";try{const i=new URLSearchParams;i.append("name",r),i.append("phone",a),i.append("city",o),await fetch("https://script.google.com/macros/s/AKfycbyEOKE-d78a95JiaKxRud_vLVhm-9JeaX_d1Y-pvIt8itYWccj1cOGEOT5t9KBWL8aV/exec",{method:"POST",body:i}),w(),s&&(s.style.display="block"),n.style.display="none",setTimeout(()=>{u()},2e3)}catch{t.disabled=!1,t.textContent="Submit",alert("There was an error. Please try again.")}}})}function p(){let e=!1;return typeof window<"u"&&(e=window.innerWidth<=700),`
    <section class="hero-banner">
      <img
        src="${e?"/Value drive POC Website Banner-03.jpg":"/Value drive POC Website Banner-02.jpg"}"
        alt="Value Drive Hero Banner"
        class="hero-banner__img"
      />
    </section>
  `}typeof window<"u"&&window.addEventListener("resize",()=>{const e=document.getElementById("hero");e&&(e.innerHTML=p())});function l(e,n){const r=document.getElementById(e);r&&(r.innerHTML=n)}document.addEventListener("DOMContentLoaded",()=>{const e=["header","hero","know-more","footer-separator","footer","popup"];e.forEach(o=>{if(!document.getElementById(o)){const t=document.createElement("div");t.id=o,document.body.appendChild(t)}});const n=document.body;e.forEach(o=>{const t=document.getElementById(o);t&&n.appendChild(t)}),l("header",m()),h(),l("hero",p()),l("know-more",v());const r=document.getElementById("footer-separator");r&&(r.innerHTML='<hr class="footer-separator" />'),l("footer",f()),l("popup",y()),L();const a=document.getElementById("know-more-btn");a&&a.addEventListener("click",()=>{d()}),window.addEventListener("showPopup",()=>{d()})});
