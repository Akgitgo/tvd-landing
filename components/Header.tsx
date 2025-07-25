export function Header(): string {
  return `
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
  `;
}

// Hamburger menu logic for mobile
export function setupHeaderListeners(): void {
  // Desktop hamburger
  const hamburger = document.getElementById('header-hamburger');
  const nav = document.getElementById('header-nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      nav.classList.toggle('header__nav--open');
      hamburger.classList.toggle('header__hamburger--open');
    });
  }
  // Mobile hamburger
  const hamburgerMobile = document.getElementById('header-hamburger-mobile');
  if (hamburgerMobile && nav) {
    hamburgerMobile.addEventListener('click', () => {
      nav.classList.toggle('header__nav--open');
      hamburgerMobile.classList.toggle('header__hamburger--open');
    });
  }
  // Mobile Know More button triggers popup
  const knowMoreBtnMobile = document.getElementById('know-more-btn-mobile');
  if (knowMoreBtnMobile) {
    knowMoreBtnMobile.addEventListener('click', () => {
      const event = new CustomEvent('showPopup');
      window.dispatchEvent(event);
    });
  }
} 