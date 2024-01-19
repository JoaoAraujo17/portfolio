const darkModeToggle = document.getElementById('darkmode-toggle');
const loader = document.querySelector(".loader");
const menu_btn = document.querySelector('.hamburguer');
const mobile_menu = document.querySelector('.nav-itens-mobile');

//Função Light/Dark
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode', this.checked);
}

//Função Load página
function hideLoader() {
    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
}

//Função mobile responsive
function toggleMobileMenu() {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
}

darkModeToggle.addEventListener('change', toggleDarkMode);

window.addEventListener("load", hideLoader);

menu_btn.addEventListener('click', toggleMobileMenu);