var projetoImg = document.querySelectorAll(".container-projetos-card-img");

this.animaProjeto(projetoImg);
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

const proxPagina = document.getElementById('proxima-pagina');
const pagAnterior = document.getElementById('pagina_anterior');

proxPagina.addEventListener("click",()=>{
    window.location.href = "Projetos_page2.php";
})

pagAnterior.addEventListener("click", ()=>{
    window.location.href = "Projetos.php";
})