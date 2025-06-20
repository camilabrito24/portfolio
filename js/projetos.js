import {listaProjetos} from "./lista-projetos";

const containerProjetos = document.querySelector('.container-projetos');
const btnPaginaAnterior = document.getElementById('pagina_anterior');

console.dir(listaProjetos[0]);

for (let i=0; i < 4; i++){
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
}

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