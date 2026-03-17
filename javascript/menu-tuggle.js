const btnToggle = document.querySelector('.menu-responcive');
const menuLinks = document.querySelectorAll('.menu');
const menuNav = document.querySelector('.menu-nav');

function syncMenuAccessibility() {
    const open = menuNav.classList.contains('open');

    btnToggle.setAttribute('aria-expanded', String(open));
    btnToggle.setAttribute('aria-label', open ? 'Fechar Menu' : 'Abrir Menu');
}

function openMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();

    menuNav.classList.toggle('open');
    syncMenuAccessibility();
}

function closeMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    if (!menuNav.classList.contains('open')) return;

    menuNav.classList.remove('open');
    syncMenuAccessibility();
}

btnToggle.addEventListener('click', openMenu);
btnToggle.addEventListener('touchstart', openMenu);
menuLinks.forEach((link) => link.addEventListener('click', closeMenu));
menuLinks.forEach((link) => link.addEventListener('touchstart', closeMenu));
