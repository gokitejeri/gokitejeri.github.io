// Año en el footer
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------------- HERO IMAGE AUTOFIX ----------------
   Buscará la primera imagen existente en assets/img/
   entre varias opciones (para evitar problemas de mayúsculas).
----------------------------------------------------- */
(function setHeroImage(){
  const candidates = [
    'assets/img/k.jpg', 'assets/img/K.JPG',
    'assets/img/hero.jpg', 'assets/img/Hero.jpg',
    'assets/img/capa.jpg'
  ];
  const hero = document.querySelector('.hero');
  const test = (url) => new Promise(res => {
    const i = new Image();
    i.onload = () => res(url);
    i.onerror = () => res(null);
    i.src = url + (url.includes('?') ? '&' : '?') + 'v=' + Date.now();
  });
  (async () => {
    for (const url of candidates){
      const ok = await test(url);
      if (ok){ hero.style.backgroundImage = `url("${ok}")`; return; }
    }
    // si ninguna existe, mantenemos el fallback oscuro
  })();
})();

/* ---------------- I18N (PT por defecto / EN al pulsar) ---------------- */
const dict = {
  pt: {
    'nav.classes': 'Aulas',
    'nav.downwind': 'Downwind',
    'nav.contact' : 'Contato',
    'hero.title'  : 'Jeri. Vento. Liberdade.',
    'hero.lead'   : 'Aulas particulares e experiências reais em Jericoacoara.',
    'cta.whatsapp': 'Falar no WhatsApp',
    'cta.more'    : 'Ver mais',
    'cards.title' : 'Aulas particulares',
    'cards.c1.title': 'Aula 1:1',
    'cards.c1.text' : 'Foco total em você. Método seguro e progressivo. Equipamento completo incluído.',
    'cards.c2.title': 'Downwind & Progressão',
    'cards.c2.text' : 'Evolução real em vento e mar aberto. Apoio dedicado.',
    'cards.c3.text' : 'Pôr do sol, lagoas e vibe local. Lado autêntico, sem turistão.',
    'cards.book'    : 'Reservar',
    'cards.more'    : 'Mais informações',
    'details.title' : 'Detalhes das aulas',
    'details.li1'   : 'Duração: 3 horas por sessão',
    'details.li2'   : 'Inclui: equipamento completo',
    'details.li3'   : 'Spot: lagoa + mar aberto (conforme condições)',
    'details.li4'   : 'Segurança: progressão e suporte completo',
    'details.li5'   : 'Idiomas: PT · ES · EN',
    'cta.reserve'   : 'Reservar no WhatsApp',
    'contact.title' : 'Contato',
    'contact.text'  : 'Resposta rápida · PT · ES · EN'
  },
  en: {
    'nav.classes': 'Lessons',
    'nav.downwind': 'Downwind',
    'nav.contact' : 'Contact',
    'hero.title'  : 'Jeri. Wind. Freedom.',
    'hero.lead'   : 'Private lessons and real experiences in Jericoacoara.',
    'cta.whatsapp': 'Chat on WhatsApp',
    'cta.more'    : 'Learn more',
    'cards.title' : 'Private lessons',
    'cards.c1.title': '1:1 Lesson',
    'cards.c1.text' : 'Full focus on you. Safe and progressive method. Full equipment included.',
    'cards.c2.title': 'Downwind & Progression',
    'cards.c2.text' : 'Real evolution in wind and open sea. Dedicated support.',
    'cards.c3.text' : 'Sunset, lagoons and local vibe. Authentic, off the tourist trail.',
    'cards.book'    : 'Book',
    'cards.more'    : 'More info',
    'details.title' : 'Lesson details',
    'details.li1'   : 'Duration: 3 hours per session',
    'details.li2'   : 'Includes: full equipment',
    'details.li3'   : 'Spot: lagoon + open sea (weather permitting)',
    'details.li4'   : 'Safety: progressive method & full support',
    'details.li5'   : 'Languages: PT · ES · EN',
    'cta.reserve'   : 'Book on WhatsApp',
    'contact.title' : 'Contact',
    'contact.text'  : 'Fast reply · PT · ES · EN'
  }
};

const $t = (lang) => {
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if (dict[lang] && dict[lang][key]) el.innerHTML = dict[lang][key];
  });
  document.documentElement.lang = lang;
};

const langBtn = document.getElementById('langToggle');
langBtn.addEventListener('click', ()=>{
  const isPT = document.documentElement.lang !== 'en';
  const next = isPT ? 'en' : 'pt';
  $t(next);
  // Cambiar indicador del botón
  document.getElementById('langCode').textContent = next.toUpperCase();
  langBtn.querySelector('.flag').textContent = next === 'en' ? '🇬🇧' : '🇧🇷';
});

// aplicar PT por defecto al cargar
$t('pt');
