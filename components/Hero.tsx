export function Hero(): string {
  let isMobile = false;
  if (typeof window !== 'undefined') {
    isMobile = window.innerWidth <= 700;
  }
  const bannerSrc = isMobile
    ? '/Value drive POC Website Banner-03.jpg'
    : '/Value drive POC Website Banner-01.jpg';
  return `
    <section class="hero-banner">
      <img
        src="${bannerSrc}"
        alt="Value Drive Hero Banner"
        class="hero-banner__img"
      />
    </section>
  `;
}

// Responsive: update hero image on resize
if (typeof window !== 'undefined') {
  window.addEventListener('resize', () => {
    const hero = document.getElementById('hero');
    if (hero) {
      hero.innerHTML = Hero();
    }
  });
} 