let depoimentoAtual = 0;

function mostrarDepoimento(n) {
    const imagens = document.querySelectorAll('.depoimento-img');
    const indicadores = document.querySelectorAll('.depoiments__indicadores .indicador');
    
    // Se passar do último, volta pro primeiro
    if (n >= imagens.length) {
        depoimentoAtual = 0;
    }
    
    // Se voltar do primeiro, vai pro último
    if (n < 0) {
        depoimentoAtual = imagens.length - 1;
    }
    
    // Remove active de todas as imagens
    imagens.forEach(img => {
        img.classList.remove('active');
    });
    
    // Remove active de todos os indicadores
    indicadores.forEach(ind => {
        ind.classList.remove('active');
    });
    
    // Mostra a imagem atual
    imagens[depoimentoAtual].classList.add('active');
    
    // Ativa o indicador correspondente
    indicadores[depoimentoAtual].classList.add('active');
}

function mudarDepoimento(direcao) {
    depoimentoAtual += direcao;
    mostrarDepoimento(depoimentoAtual);
}

function irParaDepoimento(n) {
    depoimentoAtual = n;
    mostrarDepoimento(depoimentoAtual);
}

// Mostra o primeiro depoimento ao carregar
mostrarDepoimento(0);

// OPCIONAL: Autoplay (troca a cada 5 segundos)
// Descomente as linhas abaixo se quiser:

setInterval(() => {
    mudarDepoimento(1);
}, 5000);