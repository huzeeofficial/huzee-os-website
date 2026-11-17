const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: .12 });
  document.querySelectorAll('.split,.three article,.preview,.roadmap>div:last-child>div,.cta').forEach(el => {
    el.classList.add('reveal'); observer.observe(el);
  });
}
