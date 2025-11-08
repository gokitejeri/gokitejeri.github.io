Script.js  

// Toggle idioma PT / EN
document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    document.body.classList.toggle('lang-en', lang === 'en');

    document.querySelectorAll('.lang-btn').forEach((b) =>
      b.classList.toggle('active', b === btn)
    );
  });
});

// Toggle Mais informações (detalhes 3 dias)
const detailsSection = document.querySelector('#detalhes-3dias');

document.querySelectorAll('.btn-more').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!detailsSection) return;

    const isOpen = detailsSection.classList.contains('open');
    detailsSection.classList.toggle('open', !isOpen);

    if (!isOpen) {
      detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll suave para links internos (nav, etc.)
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
