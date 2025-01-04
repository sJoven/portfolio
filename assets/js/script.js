const ctaDest = document.getElementById('ctaDest');
const resumePdf = document.getElementById('resume-pdf');
const hiddenMenu = document.getElementById('hidden-menu');
const menuBtn = document.getElementById('menu-btn');
const menuCloseBtn = document.getElementById('menu-close-btn');
const heroDest = document.getElementById('heroDest');
const aboutDest = document.getElementById('aboutDest');
const contactDest = document.getElementById('contactDest');

function openNewTab(url) {
    window.open(url, '_blank');
}

function openResume(){
    resumePdf.style.display = 'block';
}

function closeResume() {
    resumePdf.style.display = 'none';
}

function openHiddenMenu(){
    hiddenMenu.style.right = '0px';

    menuBtn.style.display = 'none';
    menuCloseBtn.style.display = 'block';
}

function closeHiddenMenu() {
    hiddenMenu.style.right = '-100%';

    menuBtn.style.display = 'block';
    menuCloseBtn.style.display = 'none';
}

function intoHome () {
    closeHiddenMenu();
    heroDest.scrollIntoView({
        behavior: 'smooth'
    });
}

function intoAbout () {
    closeHiddenMenu();
    aboutDest.scrollIntoView({
        behavior: 'smooth'
    });
}

function intoCta () {
    closeHiddenMenu();
    ctaDest.scrollIntoView({
        behavior: 'smooth'
    });
}

function intoContact () {
    closeHiddenMenu();
    contactDest.scrollIntoView({
        behavior: 'smooth'
    });
}