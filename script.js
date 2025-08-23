const hamMenu = document.querySelector('.ham-menu');
const hiddenMenu = document.querySelector('.hidden-menu');
const sloganSection = document.querySelector('.slogan-section');
const footerInner = document.querySelector('.footer-inner');
const enterWebsite = document.querySelector('#enter-website');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    hiddenMenu.classList.toggle('active');
    colorToggle();//for the hiddenMenu bg color
    sloganSection.classList.toggle('active');
    footerInner.classList.toggle('active');
    enterWebsite.classList.toggle('active');
})


let activeClicked = false;
function colorToggle () {
    hiddenMenu.firstElementChild.style.transition = "background-color 0.5s ease";
    if(activeClicked == false) {
        setTimeout(() => hiddenMenu.firstElementChild.style.backgroundColor = "rgba(0,0,0,0.65)", 0);
        activeClicked = true;
    } else {
        setTimeout(() => hiddenMenu.firstElementChild.style.backgroundColor = "rgba(0,0,0,0)", 0);
        activeClicked = false;
    }
}