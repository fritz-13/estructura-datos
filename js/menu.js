const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('nav');
const submenus = document.querySelectorAll('.submenu');

btnMenu.addEventListener('click', () => {
    nav.classList.toggle('mostrar');
});

// activar submenus en móvil
submenus.forEach(menu => {
    menu.addEventListener('click', () => {
        menu.classList.toggle('activo');
    });
});
