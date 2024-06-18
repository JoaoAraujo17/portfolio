/*const toggle_btn = document.querySelector(".toggle_btn");
const mobile_menu = document.querySelector(".nav-itens-mobile");

// Função para alternar a visibilidade do menu móvel e alterar o ícone
toggle_btn.addEventListener("click", function () {
  toggle_btn.classList.toggle("open"); // Alternar classe para animar o ícone

  if (toggle_btn.classList.contains("open")) {
    // Se o menu está aberto, mostrar ícone de X
    toggle_btn.innerHTML = '<i class="fas fa-times"></i>';
  } else {  
    // Se o menu está fechado, mostrar ícone de barras
    toggle_btn.innerHTML = '<i class="fas fa-bars"></i>';
  }

  mobile_menu.classList.toggle("show"); // Alternar visibilidade do menu móvel
});*/

// JavaScript para alternar idiomas
const langPT = document.querySelectorAll('[data-lang="pt"]');
    const langEN = document.querySelectorAll('[data-lang="en"]');
    const langTogglePT = document.getElementById('lang-pt');
    const langToggleEN = document.getElementById('lang-en');

    // Função para definir o idioma com base na escolha armazenada
    function setLanguage(lang) {
        if (lang === 'pt') {
            langPT.forEach(element => element.style.display = 'block');
            langEN.forEach(element => element.style.display = 'none');
            localStorage.setItem('language', 'pt'); // Salvar escolha no localStorage
        } else if (lang === 'en') {
            langPT.forEach(element => element.style.display = 'none');
            langEN.forEach(element => element.style.display = 'block');
            localStorage.setItem('language', 'en'); // Salvar escolha no localStorage
        }
    }

    // Exemplo de evento de clique para alternar para português
    langTogglePT.addEventListener('click', function(event) {
        event.preventDefault();
        setLanguage('pt');
    });

    // Exemplo de evento de clique para alternar para inglês
    langToggleEN.addEventListener('click', function(event) {
        event.preventDefault();
        setLanguage('en');
    });

    // Verificar se há idioma salvo no localStorage e aplicar
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        setLanguage(savedLanguage); // Aplicar o idioma salvo
    } else {
        // Se não houver idioma salvo, definir como padrão (por exemplo, português)
        setLanguage('pt');
    }


// Função para esconder o loader após o carregamento da página
const loader = document.querySelector(".loader");
function hideLoader() {
  loader.classList.add("loader--hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
}

// Esconde o loader após o carregamento da página
window.addEventListener("load", () => {
  hideLoader();
});

// Função gotop para mostrar/esconder o botão de rolar para o topo
window.addEventListener("scroll", () => {
  scrollFunction();
});

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

// FAQ
const textBoxes = document.querySelectorAll(".text-box");

textBoxes.forEach((textBox) => {
  textBox.addEventListener("click", () => {
    const container = textBox.parentElement;
    container.classList.toggle("active");
  });
});
