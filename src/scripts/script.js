// Pega o elemento <body>
const body = document.body;

// Seleciona a ul do menu desktop
const menu = document.querySelector('.menu'); // ul.menu

// Seleciona o botão que abre o menu mobile
const abrirMenu = document.querySelector('.abrir-menu-mobile');

// Seleciona o botão que fecha o menu mobile
const fecharMenu = document.querySelector('.fechar-menu-mobile');

// Função para abrir o menu mobile
const abrir = () => {
    // Bloqueia a rolagem vertical e horizontal do body
    body.style.overflow = 'hidden';
    
    // Adiciona a classe que ativa o display flex do menu mobile
    menu.classList.add("menu-mobile"); // ativa display: flex pelo CSS
    
    // Esconde o botão de abrir
    abrirMenu.style.display = "none";
    
    // Mostra o botão de fechar
    fecharMenu.style.display = "block";
}

// Função para fechar o menu mobile
const fechar = () => {
    // Permite rolagem vertical do body
    body.style.overflowy = 'scroll';
    
    // Mantém rolagem horizontal bloqueada
    body.style.overflowx = 'hidden';
    
    // Remove a classe que mostra o menu mobile
    menu.classList.remove("menu-mobile"); // volta a esconder
    
    // Esconde o botão de fechar
    fecharMenu.style.display = "none";
    
    // Mostra o botão de abrir
    abrirMenu.style.display = "block";
}

// Adiciona evento de clique no botão de abrir
abrirMenu.addEventListener("click", abrir);

// Adiciona evento de clique no botão de fechar
fecharMenu.addEventListener("click", fechar);

/* Função para ajustar o menu automaticamente ao redimensionar */
const ajustarMenu = () => {
    if (window.innerWidth > 1024) {
        // Desktop → esconde menu mobile e botões
        menu.classList.remove("menu-mobile");
        abrirMenu.style.display = "none";
        fecharMenu.style.display = "none";
    } else {
        // Mobile → menu fechado por padrão
        menu.classList.remove("menu-mobile");
        abrirMenu.style.display = "block";
        fecharMenu.style.display = "none";
    }
}

// Roda a função de ajuste ao redimensionar a tela
window.addEventListener("resize", ajustarMenu);

// Roda a função de ajuste ao carregar a página
window.addEventListener("load", ajustarMenu);
