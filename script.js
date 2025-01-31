const botaoAlterarTema = document.querySelector('.alterar__tema')
const somTrocarTema = new Audio('sons/pause.mp3')
const menuHamburguer = document.querySelector('.botao__menu-hamburguer')

botaoAlterarTema.addEventListener('click', function(){
    const html = document.querySelector('html')
    const auxiliar = html.getAttribute('data-contexto')
    console.log(auxiliar)

    if(auxiliar == 'black'){
        html.setAttribute('data-contexto', 'white')
    }else {
        html.setAttribute('data-contexto', 'black')
    }

    somTrocarTema.play()    
})

menuHamburguer.addEventListener('click', function(){
    const menu = document.querySelector('.lista__cabecalho')
    menu.classList.toggle('active')
})

// Cria o observer para verificar quando os elementos entram na tela
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona a classe 'visible' quando o item entra na tela
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Para de observar o elemento após ele aparecer
        }
    });
}, { threshold: 0.5 }); // O elemento é considerado visível quando 50% dele aparece na tela

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

const projetos = [
    { 
        titulo: "Fokus", imagem:"img/projetos/projetofokus.png", descricao: "App de foco e produtividade.", linkCodigo: "https://github.com/militaovitor01/Fokus", linkDeploy: "https://fokus-eta-seven.vercel.app/" 
    },

    { 
        titulo: "ShoesDay", imagem:"img/projetos/ShoesDay.png", descricao: "E-commerce para venda de calçados.", linkCodigo: "https://github.com/militaovitor01/ShoesDay", linkDeploy: "https://shoes-day.vercel.app/" 
    },

    { 
        titulo: "AluraBooks", imagem:"img/projetos/AluraBooks.png", descricao: "Loja virtual de livros.", linkCodigo: "https://github.com/militaovitor01/AluraBooks", linkDeploy: "https://alura-books-three-beryl.vercel.app/"
    },

    { 
        titulo: "CodeConnect", imagem:"img/projetos/code connect.png", descricao: "Plataforma de networking para devs.", linkCodigo: "https://github.com/militaovitor01/Code-Connect", linkDeploy: "https://code-connect-green-one.vercel.app/" 
    },

    {
        titulo: "AluraPlus", imagem:"img/projetos/AluraPlus.png", descricao: "Serviço de assinatura de cursos.", linkCodigo: "https://github.com/militaovitor01/AluraPlus", linkDeploy: "https://alura-plus-indol-chi.vercel.app/" 
    },

    { 
        titulo: "Lista de Compras", imagem:"img/projetos/ListaDeCompras.png", descricao: "Aplicativo para organizar compras.", linkCodigo: "https://github.com/militaovitor01/Lista-de-Compras", linkDeploy: "https://lista-de-compras-blush-theta.vercel.app/" 
    }
];

const modal = document.getElementById("modal");
const modalTitulo = document.getElementById("modal-titulo");
const modalImagem = document.getElementById("modal-imagem");
const modalDescricao = document.getElementById("modal-descricao");
const modalLinkCodigo = document.getElementById("modal-linkCodigo");
const modalLinkDeploy = document.getElementById("modal-linkDeploy"); 
const closeModal = document.querySelector(".close");

// Função para abrir o modal com dados do projeto
document.querySelectorAll(".projetos__lista__item").forEach((item, index) => {
    item.addEventListener("click", () => {
        modalTitulo.textContent = projetos[index].titulo;
        modalDescricao.textContent = projetos[index].descricao;
        modalImagem.src = projetos[index].imagem;
        modalLinkCodigo.href = projetos[index].linkCodigo;
        modalLinkDeploy.href = projetos[index].linkDeploy;
        modal.style.display = "flex";

        modal.classList.add("show");
    });
});

// Fechar modal ao clicar no botão "X"
closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});

// Fechar modal ao clicar fora dele
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});