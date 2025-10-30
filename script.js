// Cambio de idioma PT/EN
const btns = document.querySelectorAll('.language-switch [data-lang]');
const blocks = document.querySelectorAll('.lang');

btns.forEach(b=>{
  b.addEventListener('click', ()=>{
    // toggle activo visual
    btns.forEach(x=>x.classList.remove('active'));
    b.classList.add('active');

    const lang = b.getAttribute('data-lang');
    blocks.forEach(el=>{
      el.classList.toggle('active', el.classList.contains('lang-'+lang));
    });
  });
});

// scroll suave para anclas
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
