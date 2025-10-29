// Año en el footer
document.addEventListener('DOMContentLoaded', () => {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});

// Carrusel muy simple (c1,c2,c3)
(function slider(){
  const slides = Array.from(document.querySelectorAll('.slide'));
  const dots = Array.from(document.querySelectorAll('.dot'));
  if (!slides.length) return;

  let i = 0;
  const set = (n) => {
    slides.forEach((s, idx)=> s.classList.toggle('current', idx===n));
    dots.forEach((d, idx)=> d.classList.toggle('active', idx===n));
    i = n;
  };
  dots.forEach((d, idx)=> d.addEventListener('click', ()=> set(idx)));
  set(0);
  setInterval(()=> set((i+1)%slides.length), 4500);
})();

// Form → WhatsApp con mensaje armado
const form = document.getElementById('leadForm');
if (form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    const msg = data.get('message') || '';
    const text = Oi! Sou ${name}. Email: ${email}. ${msg};
    const url = https://wa.me/34616843816?text=${encodeURIComponent(text)};
    window.open(url, '_blank', 'noopener');
  });
}
