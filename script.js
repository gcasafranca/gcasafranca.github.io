document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

toggle?.addEventListener('click', () => {
    const open = nav.dataset.open === '1';

    nav.dataset.open = open ? '0' : '1';
    nav.style.display = open ? '' : 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.right = '5%';
    nav.style.top = '70px';
    nav.style.padding = '18px';
    nav.style.background = '#fff';
    nav.style.borderRadius = '14px';
    nav.style.boxShadow = '0 18px 45px rgba(20,35,45,.14)';
    nav.style.alignItems = 'stretch';
});

// Cerrar automáticamente el menú al seleccionar una sección
nav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.dataset.open = '0';
        nav.style.display = 'none';
    });
});