'use strict'

const icons = document.querySelectorAll('.icono');
const navbar = document.querySelector('#hidden-menu');

const menu_click = () => {
    navbar.classList.toggle('hidden')
}

for (const icon of icons) {
    icon.addEventListener('click', menu_click);
}

//
