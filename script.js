const menuButton = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menuButton.addEventListener('click', () => nav.classList.toggle('open'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((section) => observer.observe(section));
