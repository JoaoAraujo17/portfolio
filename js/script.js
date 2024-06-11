const darkModeToggle = document.getElementById('darkmode-toggle');
const loader = document.querySelector(".loader");
const menu_btn = document.querySelector('.hamburguer');
const mobile_menu = document.querySelector('.nav-itens-mobile');
const text = document.querySelector(".multiple-text");

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

//Função animação texto inicial
function textLoad() {
    setTimeout(() => {
      text.textContent = "Front-End Developer";
    }, 0);
    setTimeout(() => {
      text.textContent = "Full-Stack Developer";
    }, 4000);
    setTimeout(() => {
      text.textContent = "UX/UI Designer";
    }, 8000);
}

darkModeToggle.addEventListener('change', toggleDarkMode);

window.addEventListener("load", () => {
    hideLoader();
    textLoad(); // Inicia o ciclo de texto no carregamento da página
    setInterval(textLoad, 12000);
  });

menu_btn.addEventListener('click', toggleMobileMenu);


//Botão gotop

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}