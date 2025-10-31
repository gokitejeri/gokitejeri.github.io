// ===== CONFIG =====
const WA_NUMBER = "346168483816"; // tu número para wa.me
const WA_TEXT   = "Olá! Quero informações sobre kitesurf em Jeri.";
const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;

// Poner el enlace de WhatsApp en todos los botones
["waTop","wa1","wa2","wa3","waBottom","waContact"].forEach(id=>{
  const a = document.getElementById(id);
  if (a) a.href = waLink;
});

// ===== I18N (PT por defecto) =====
const dict = {
  pt: {
    nav_classes:"Aulas", nav_contact:"Contato",
    hero_title:"Jeri. Vento. Liberdade.",
    hero_sub:"Aulas particulares e experiências reais em Jericoacoara.",
    btn_whatsapp:"Falar no WhatsApp", btn_more:"Ver mais", btn_reserve:"Reservar", btn_info:"Mais informações",
    sec_classes:"Aulas particulares",
    card1_title:"Aula 1:1",
    card1_text:"Foco total em você. Método seguro e progressivo. Equipamento completo incluído.",
    card2_text:"Evolução real em vento e mar aberto. Apoio dedicado.",
    card3_text:"Pôr do sol, lagoas e vibe local. Lado autêntico, sem turistão.",
    note_title:"By recommendation only",
    note_text:"Trabalhamos com cupos limitados. Se não há disponibilidade, te recomendamos alternativas fiáveis.",
    sec_details:"Detalhes das aulas",
    li_dur:"Duração: 3 horas por sessão",
    li_incl:"Inclui: equipamento completo",
    li_spot:"Spot: lagoa + mar aberto (conforme condições)",
    li_sec:"Segurança: progressão e suporte completo",
    li_lang:"Idiomas: PT · ES · EN",
    sec_contact:"Contato",
    contact_desc:"Resposta rápida · PT · ES · EN"
  },
  en: {
    nav_classes:"Classes", nav_contact:"Contact",
    hero_title:"Jeri. Wind. Freedom.",
    hero_sub:"Private lessons and real experiences in Jericoacoara.",
    btn_whatsapp:"Chat on WhatsApp", btn_more:"See more", btn_reserve:"Book", btn_info:"More info",
    sec_classes:"Private classes",
    card1_title:"1:1 Lesson",
    card1_text:"Full focus on you. Clear, safe and progressive method. Full gear included.",
    card2_text:"Real progression in wind and open sea. Dedicated support.",
    card3_text:"Sunsets, lagoons and local vibe. Authentic side, no tourist traps.",
    note_title:"By recommendation only",
    note_text:"We work with limited spots. If unavailable, we’ll recommend reliable alternatives.",
    sec_details:"Class details",
    li_dur:"Duration: 3 hours per session",
    li_incl:"Includes: full equipment",
    li_spot:"Spot: lagoon + open sea (weather dependent)",
    li_sec:"Safety: progressive method & full support",
    li_lang:"Languages: PT · ES · EN",
    sec_contact:"Contact",
    contact_desc:"Quick reply · PT · ES · EN"
  },
  es: { // opcional, por si haces clic en ES
    nav_classes:"Clases", nav_contact:"Contacto",
    hero_title:"Jeri. Viento. Libertad.",
    hero_sub:"Clases privadas y experiencias reales en Jericoacoara.",
    btn_whatsapp:"Hablar por WhatsApp", btn_more:"Ver más", btn_reserve:"Reservar", btn_info:"Más información",
    sec_classes:"Clases privadas",
    card1_title:"Clase 1:1",
    card1_text:"Foco total en ti. Metodología clara, segura y progresiva. Equipo completo incluido.",
    card2_text:"Evolución real con viento y mar abierto. Apoyo dedicado.",
    card3_text:"Puesta de sol, lagunas y vibra local. Lado auténtico, sin turisteo.",
    note_title:"Solo por recomendación",
    note_text:"Trabajamos con cupos limitados. Si no hay disponibilidad, te recomendamos alternativas fiables.",
    sec_details:"Detalles de las clases",
    li_dur:"Duración: 3 horas por sesión",
    li_incl:"Incluye: equipo completo",
    li_spot:"Spot: laguna + mar abierto (según condiciones)",
    li_sec:"Seguridad: progresión y soporte completo",
    li_lang:"Idiomas: PT · ES · EN",
    sec_contact:"Contacto",
    contact_desc:"Respuesta rápida · PT · ES · EN"
  }
};

// Detectar idioma por query ?lang=
const params = new URLSearchParams(location.search);
const lang = (params.get("lang") || "pt").toLowerCase();
const tr = dict[lang] || dict.pt;

// Aplicar traducciones
document.documentElement.lang = lang;
document.querySelectorAll("[data-i18n]").forEach(el=>{
  const key = el.getAttribute("data-i18n");
  if (tr[key]) el.textContent = tr[key];
});

// Año en footer
document.getElementById("yy").textContent = new Date().getFullYear();
