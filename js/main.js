// ----- MENU RESPONSIVO -----
const menuBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// ----- SPA SIMPLES -----
const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // impede recarregar
    const target = link.getAttribute('href').replace('.html', '');

    sections.forEach(section => section.style.display = 'none');

    const activeSection = document.getElementById(target);
    if (activeSection) activeSection.style.display = 'block';
  });
});

// Exibe apenas a seção inicial
sections.forEach(section => section.style.display = 'none');
if (document.getElementById('index')) {
  document.getElementById('index').style.display = 'block';
}
