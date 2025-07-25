export function Hero(): string {
  let isMobile = false;
  if (typeof window !== 'undefined') {
    isMobile = window.innerWidth <= 700;
  }
  const bannerSrc = isMobile
    ? '/assets/Value drive POC Website Banner-03.jpg'
    : '/assets/Value drive POC Website Banner-02.jpg';
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