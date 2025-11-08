// Idioma
function setLanguage(lang) {
  // Botões
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Textos
  document.querySelectorAll('.lang').forEach(el => {
    if (el.classList.contains('lang-' + lang)) {
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  });

  // Atualizar atributo lang do HTML
  document.documentElement.lang = lang === 'en' ? 'en' : 'pt';
}

document.addEventListener('DOMContentLoaded', () => {
  // Idioma default PT
  setLanguage('pt');

  // Clique nos botões de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Botões "Mais informações"
  document.querySelectorAll('.btn-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetSelector = btn.getAttribute('data-target') || '#detalhes-3dias';
      const section = document.querySelector(targetSelector);
      if (!section) return;

      section.classList.remove('collapsed');
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Logo vai para o topo (já é #top no href, mas garantimos smooth)
  const logoLink = document.querySelector('.logo');
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
