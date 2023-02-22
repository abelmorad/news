// readmore bg color change at active & inactive
const readMore = document.getElementById('readMore');
readMore.addEventListener('mousedown', activeBtn);
readMore.addEventListener('mouseup', inactiveBtn);

function activeBtn () {
    readMore.style.backgroundColor = 'hsl(240, 100%, 5%)';
}
function inactiveBtn () {
    readMore.style.backgroundColor = 'hsl(5, 85%, 63%)';
}

// hamburger button open & close the nav menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const hamburgerBtnX = document.getElementById('hamburgerBtnX');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const hamburgerMenuActive = document.querySelector('.nav-links-active');

hamburgerBtn.addEventListener('click', menuBtnActive);
hamburgerBtnX.addEventListener('click', menuBtnInactive);

function menuBtnActive () {
    hamburgerMenu.classList.toggle('nav-links-active');
}
function menuBtnInactive () {
    hamburgerMenu.classList.remove('nav-links-active');
}
