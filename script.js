/(function () {
  const params = new URLSearchParams(location.search);
  const lang = (params.get('lang') || 'pt').toLowerCase();

  if (lang !== 'en') return; // PT por defecto, no hacemos nada

  // Utilidad segura para fijar texto si el selector existe
  const setText = (sel, text) => {
    const el = document.querySelector(sel);
    if (el) el.textContent = text;
  };

  // HERO
  setText('h1', 'Jeri. Wind. Freedom.');
  setText('.hero p', 'Private lessons and real experiences in Jericoacoara.');
  setText('.cta .btn.primary, .cta .btn-primary, .cta a[href*="wa.me"]', 'Chat on WhatsApp');
  setText('.cta .btn.ghost, .cta .btn-ghost', 'Learn more');

  // NAV (si los tienes)
  setText('nav a[href="#aulas"]', 'Classes');
  setText('nav a[href="#downwind"]', 'Downwind');
  setText('nav a[href="#contato"]', 'Contact');

  // TARJETAS / CARDS (títulos y descripciones)
  // Card 1: Aula 1:1
  setText('.cards .card:nth-of-type(1) h3', '1:1 Class');
  setText('.cards .card:nth-of-type(1) p',
    'Full focus on you. Safe, progressive method. Full equipment included.'
  );
  setText('.cards .card:nth-of-type(1) .btn.primary', 'Book');
  setText('.cards .card:nth-of-type(1) .btn.ghost', 'More info');

  // Card 2: Downwind & Progressão
  setText('.cards .card:nth-of-type(2) h3', 'Downwind & Progression');
  setText('.cards .card:nth-of-type(2) p',
    'Real evolution in wind and open sea. Dedicated support.'
  );
  setText('.cards .card:nth-of-type(2) .btn.primary', 'Book');
  setText('.cards .card:nth-of-type(2) .btn.ghost', 'More info');

  // Card 3: Jeri lifestyle
  setText('.cards .card:nth-of-type(3) h3', 'Jeri lifestyle');
  setText('.cards .card:nth-of-type(3) p',
    'Sunsets, lagoons and local vibe. Authentic side, not touristic.'
  );
  setText('.cards .card:nth-of-type(3) .btn.primary', 'Book');
  setText('.cards .card:nth-of-type(3) .btn.ghost', 'More info');

  // Sección “Aulas particulares”
  setText('h2[id*="aulas"], section h2:has(+ .cards)', 'Private lessons');

  // Banner “By recommendation only” (si existe)
  setText('.notice strong, .ribbon strong', 'By recommendation only');
  setText('.notice p, .ribbon p',
    'We work with limited availability. If we have no slots, we recommend reliable alternatives.'
  );

  // Detalles (bullets)
  setText('h3:has(+ ul)', 'Lesson details');
  const lis = document.querySelectorAll('h3:has(+ ul) + ul li');
  if (lis.length >= 5) {
    lis[0].textContent = 'Duration: 3 hours per session';
    lis[1].textContent = 'Includes: full equipment';
    lis[2].textContent = 'Spot: lagoon + open sea (depending on conditions)';
    lis[3].textContent = 'Safety: progression + full support';
    lis[4].textContent = 'Languages: PT · ES · EN';
  }
  setText('a.btn.primary[href*="wa.me"]', 'Book on WhatsApp');

  // Contacto
  setText('h3:has(+ p) + p', 'Fast reply · PT · ES · EN');
  setText('section a.btn.primary[href*="wa.me"]', 'WhatsApp');

  // Footer (opcional)
  // No cambiamos fecha ni ubicación
})();

