// Año en footer
document.getElementById('y').textContent = new Date().getFullYear();

// Diccionario simple PT/EN
const dict = {
  pt: {
    "nav.aulas": "Aulas",
    "nav.downwind": "Downwind",
    "nav.contato": "Contato",

    "hero.title": "Jeri. Vento. Liberdade.",
    "hero.subtitle": "Aulas particulares e experiências reais em Jericoacoara.",

    "btn.whatsapp": "Falar no WhatsApp",
    "btn.vermais": "Ver mais",
    "btn.reservar": "Reservar",
    "btn.maisinfo": "Mais informações",
    "btn.reservarwa": "Reservar no WhatsApp",
    "btn.whatsapp2": "WhatsApp",

    "cards.title": "Aulas particulares",
    "cards.aula1.title": "Aula 1:1",
    "cards.aula1.text": "Foco total em você. Método seguro e progressivo. Equipamento completo incluído.",
    "cards.dw.title": "Downwind & Progressão",
    "cards.dw.text": "Evolução real em vento e mar aberto. Apoio dedicado.",
    "cards.life.title": "Jeri lifestyle",
    "cards.life.text": "Pôr do sol, lagoas e vibe local. Lado autêntico, sem turistão.",

    "det.title": "Detalhes das aulas",
    "det.dur": "Duração: <b>3 horas por sessão</b>",
    "det.equip": "<b>Inclui equipamento completo</b>",
    "det.spot": "Spot: lagoa + mar aberto (conforme condições)",
    "det.safe": "Segurança, progressão e suporte completo",
    "det.langs": "Idiomas: PT · ES · EN",

    "ct.title": "Contato",
    "ct.desc": "Resposta rápida · PT · ES · EN",
  },

  en: {
    "nav.aulas": "Lessons",
    "nav.downwind": "Downwind",
    "nav.contato": "Contact",

    "hero.title": "Jeri. Wind. Freedom.",
    "hero.subtitle": "Private lessons and real experiences in Jericoacoara.",

    "btn.whatsapp": "Chat on WhatsApp",
    "btn.vermais": "Learn more",
    "btn.reservar": "Book now",
    "btn.maisinfo": "More info",
    "btn.reservarwa": "Book on WhatsApp",
    "btn.whatsapp2": "WhatsApp",

    "cards.title": "Private lessons",
    "cards.aula1.title": "1:1 Lesson",
    "cards.aula1.text": "Full focus on you. Safe, progressive method. Full equipment included.",
    "cards.dw.title": "Downwind & Progression",
    "cards.dw.text": "Real evolution in wind and open sea. Dedicated support.",
    "cards.life.title": "Jeri lifestyle",
    "cards.life.text": "Sunset, lagoons and local vibe. Authentic side, no tourist traps.",

    "det.title": "Lesson details",
    "det.dur": "Duration: <b>3 hours per session</b>",
    "det.equip": "<b>Full equipment included</b>",
    "det.spot": "Spot: lagoon + open sea (weather dependent)",
    "det.safe": "Safety, progression and full support",
    "det.langs": "Languages: PT · ES · EN",

    "ct.title": "Contact",
    "ct.desc": "Fast reply · PT · ES · EN",
  }
};

// Aplica traducción
function applyLang(lang){
  const strings = dict[lang] || dict.pt;
  document.documentElement.lang = lang;

  // Reemplazar todos los elementos con data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(strings[key]){
      // Permitir <b> en algunos textos
      if(strings[key].includes('<b>')){
        el.innerHTML = strings[key];
      } else {
        el.textContent = strings[key];
      }
    }
  });

  // Cambiar label del botón
  const btn = document.getElementById('langSwitch');
  btn.textContent = (lang === 'en') ? 'PT 🇧🇷' : 'EN 🇬🇧';

  // Guardar preferencia
  localStorage.setItem('lang', lang);
}

// Toggle del botón
document.getElementById('langSwitch').addEventListener('click', ()=>{
  const current = localStorage.getItem('lang') || 'pt';
  applyLang(current === 'pt' ? 'en' : 'pt');
});

// Cargar idioma guardado (o PT por defecto)
applyLang(localStorage.getItem('lang') || 'pt');
