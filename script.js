document.addEventListener("DOMContentLoaded", () => {
  // Leer idioma (?lang=en | pt)
  const params = new URLSearchParams(window.location.search);
  const lang = (params.get("lang") || "pt").toLowerCase();

  // Marcar pastilla activa visualmente (opcional)
  const en = document.getElementById("lang-en");
  const pt = document.getElementById("lang-pt");
  if (lang === "en") {
    en.classList.add("active");
  } else {
    pt.classList.add("active");
  }

  // Traducciones
  const i18n = {
    pt: {
      "nav.aulas": "Aulas",
      "nav.downwind": "Downwind",
      "nav.contato": "Contato",

      "hero.title": "Jeri. Vento. Liberdade.",
      "hero.sub": "Aulas particulares e experiências reais em Jericoacoara.",
      "cta.whatsapp": "Falar no WhatsApp",
      "cta.more": "Ver mais",
      "cta.reserve": "Reservar no WhatsApp",

      "cards.title": "Aulas particulares",
      "cards.c1.title": "Aula 1:1",
      "cards.c1.text": "Foco total em você. Método seguro e progressivo. Equipamento completo incluído.",
      "cards.c2.title": "Downwind & Progressão",
      "cards.c2.text": "Evolução real em vento e mar aberto. Apoio dedicado.",
      "cards.c3.text": "Pôr do sol, lagoas e vibe local. Lado autêntico, sem turistão.",
      "cards.reserve": "Reservar",
      "cards.more": "Mais informações",

      "note.title": "By recommendation only",
      "note.text": "Trabalhamos com cupos limitados. Se não há disponibilidade, te recomendamos alternativas fiáveis.",

      "details.title": "Detalhes das aulas",
      "details.li1": "Duração: 3 horas por sessão",
      "details.li2": "Inclui: equipamento completo",
      "details.li3": "Spot: lagoa + mar aberto (conforme condições)",
      "details.li4": "Segurança: progressão e suporte completo",
      "details.li5": "Idiomas: PT · ES · EN",

      "contact.title": "Contato",
      "contact.sub": "Resposta rápida · PT · ES · EN"
    },

    en: {
      "nav.aulas": "Lessons",
      "nav.downwind": "Downwind",
      "nav.contato": "Contact",

      "hero.title": "Jeri. Wind. Freedom.",
      "hero.sub": "Private lessons and real experiences in Jericoacoara.",
      "cta.whatsapp": "Chat on WhatsApp",
      "cta.more": "Learn more",
      "cta.reserve": "Book on WhatsApp",

      "cards.title": "Private Lessons",
      "cards.c1.title": "1:1 Class",
      "cards.c1.text": "Full focus on you. Safe and progressive method. Full equipment included.",
      "cards.c2.title": "Downwind & Progression",
      "cards.c2.text": "Real evolution in wind and open sea. Dedicated support.",
      "cards.c3.text": "Sunsets, lagoons and local vibe. Authentic, not touristic.",
      "cards.reserve": "Reserve",
      "cards.more": "More info",

      "note.title": "By recommendation only",
      "note.text": "We work with limited slots. If unavailable, we'll suggest trusted alternatives.",

      "details.title": "Class details",
      "details.li1": "Duration: 3 hours per session",
      "details.li2": "Includes: full equipment",
      "details.li3": "Spot: lagoon + open sea (depending on conditions)",
      "details.li4": "Safety: progression & full support",
      "details.li5": "Languages: PT · ES · EN",

      "contact.title": "Contact",
      "contact.sub": "Fast reply · PT · ES · EN"
    }
  };

  // Aplicar traducción si es EN (si es PT ya están los textos)
  const dict = i18n[lang] || i18n.pt;
  document.querySelectorAll("[data-i18n]").forEach(node => {
    const key = node.getAttribute("data-i18n");
    if (dict[key]) node.textContent = dict[key];
  });
});
