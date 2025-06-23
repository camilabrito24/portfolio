import {listaDeTodosOsProjetos} from "./lista-projetos";

const containerProjetos = document.querySelector('.container-projetos');
const btnPaginaAnterior = document.getElementById('pagina_anterior');
const btnProximaPagina = document.getElementById('proxima-pagina');
const projetosPorPagina = 4;
let paginaAtual = 0;
let itemProjeto = 0;

function exibirProjetos(listaDeProjetos) {
    containerProjetos.innerHTML = '';

    listaDeProjetos.forEach(projeto => {
        const projetoSection = document.createElement('section');
        projetoSection.classList.add('container-projetos-card'); // Adiciona uma classe para estilização
        projetoSection.innerHTML = `
             <img src="${listaDeTodosOsProjetos[itemProjeto].imagem}" class="container-projetos-card-img">
             <div class="container-projetos-btn">
                 <a href="${listaDeTodosOsProjetos[itemProjeto].linkSite}" target="_blank" class="container-projetos-btn-site">Visite o site <span>⬈</span></a>

                 <button class="container-projetos-card-btn-github">
                     <a href="${listaDeTodosOsProjetos[itemProjeto].linkGithub}" target="_blank" class="container-projetos-btn-site-git">
                         <img src="src/github.png">
                         Github
                     </a>
                 </button>
             </div>
        `;
        containerProjetos.appendChild(projetoSection);
        itemProjeto++;
    });
}

function renderizarPagina() {
    // Calcula os índices de início e fim para a fatia da lista
    const startIndex = paginaAtual * projetosPorPagina;
    const endIndex = startIndex + projetosPorPagina;

    // Pega apenas os livros da página atual usando slice()
    const projetosDaPagina = listaDeTodosOsProjetos.slice(startIndex, endIndex);

    // Chama a função para exibir esses livros
    exibirProjetos(projetosDaPagina);

    if(paginaAtual === 0){
        btnPaginaAnterior.style.display = 'none';
    }else{
        btnPaginaAnterior.style.display = 'block';
    }

    if((paginaAtual + 1) * projetosPorPagina >= listaDeTodosOsProjetos.length){
        btnProximaPagina.style.display = 'none';
    }else{
        btnProximaPagina.style.display = 'block';
    }
}

function proximaPagina() {
    // Verifica se ainda há mais páginas para avançar
    if ((paginaAtual + 1) * projetosPorPagina < listaDeTodosOsProjetos.length) {
        paginaAtual++; // Incrementa o número da página
        renderizarPagina(); // Renderiza a nova página
    }
}

function paginaAnterior() {
    if (paginaAtual > 0) { // Garante que não vamos para uma página negativa
        paginaAtual--; // Decrementa o número da página
        renderizarPagina(); // Renderiza a nova página
    }
}

// Adiciona listeners para os eventos DOMContentLoaded e dos botões
document.addEventListener('DOMContentLoaded', () => {
    if (btnProximaPagina) {
        btnProximaPagina.addEventListener('click', proximaPagina);
    }

    if (btnPaginaAnterior) { // Adiciona listener para o novo botão
        btnPaginaAnterior.addEventListener('click', paginaAnterior);
    }

    // Renderiza a primeira página quando a página é carregada
    renderizarPagina();
});

console.dir(listaDeTodosOsProjetos[itemProjeto]);

/*for (let i=0; i < 4; i++){
    const containerProjetosCard = document.createElement('section');
    containerProjetosCard.classList.add('container-projetos-card');
    containerProjetos.appendChild(containerProjetosCard);

    const containerProjetosCardImg = document.createElement('img');
    containerProjetosCardImg.src = listaProjetos[i].imagem;
    containerProjetosCardImg.classList.add('container-projetos-card-img');
    containerProjetosCard.appendChild(containerProjetosCardImg);

    if(i < 4){
        btnPaginaAnterior.style.display = 'none';
    }
}*/

var projetoImg = document.querySelectorAll(".container-projetos-card-img");
animaProjeto(projetoImg);
function animaProjeto(elemento){
    elemento.forEach(elemento => {
        elemento.addEventListener('mouseover', function (){
            var caminhoImagem = [];
            caminhoImagem.push(elemento.src);
            caminhoImagem = caminhoImagem[0];
            const novoCaminhoImg = caminhoImagem.replace("http://localhost/Projetos/portfolio/","./").replace(".png",".gif");
            elemento.setAttribute('src', novoCaminhoImg);
            elemento.style.width = '500px';
        });

        elemento.addEventListener('mouseout', function (){
            var caminhoImagem = [];
            caminhoImagem.push(elemento.src);
            caminhoImagem = caminhoImagem[0];
            const novoCaminhoImg = caminhoImagem.replace("http://localhost/Projetos/portfolio/","./").replace(".gif",".png");
            elemento.setAttribute('src', novoCaminhoImg);
            elemento.style.width = '350px';
        });
    })
}