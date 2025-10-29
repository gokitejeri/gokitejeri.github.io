// Simple interactions
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('leadForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const msg = `Oi GoKiteJeri! Sou ${data.get('name')} (${data.get('email')}). %0A%0A${encodeURIComponent(data.get('message') || '')}`;
    window.open(`https://wa.me/34616843816?text=${msg}`,'_blank');
  });
}
