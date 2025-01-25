const botaoAlterarTema = document.querySelector('.alterar__tema')
const trocarTema = new Audio('sons/pause.mp3')

botaoAlterarTema.addEventListener('click', function(){
    const html = document.querySelector('html')
    const auxiliar = html.getAttribute('data-contexto')
    console.log(auxiliar)

    if(auxiliar == 'black'){
        html.setAttribute('data-contexto', 'white')
    }else {
        html.setAttribute('data-contexto', 'black')
    }

    trocarTema.play()    
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

// Seleciona todos os elementos com a classe 'fade-in' e começa a observá-los
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});
