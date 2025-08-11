const btnDarkMode =  document.querySelector("#btn-DarkMode");
const pagina =  document.querySelector("#corpo-pagina");
const menuItem = document.querySelectorAll(".menu-item");
const texto = document.querySelector(".container-texto-paragrafo");
const destaque = document.querySelector(".container-texto-paragrafo-destaque");
const btnControle = document.querySelectorAll(".btn_controle");
const containerDadosDestaque = document.querySelectorAll(".container-dados-paragrafo-destaque");
const containerDadosTexto = document.querySelectorAll(".container-dados-paragrafo");
const inputContato = document.querySelectorAll(".input-contato");
var modoEscuro = false;

btnDarkMode.addEventListener('click', ()=>{
    var elemento = {};
    elemento.btndarkmode = btnDarkMode;
    elemento.body = pagina;
    elemento.listaMenu = menuItem;
    elemento.texto = texto;
    elemento.destaque = destaque;
    elemento.btnControle = btnControle;
    elemento.containerDadosDestaque = containerDadosDestaque;
    elemento.containerDadosTexto = containerDadosTexto;
    elemento.inputContato = inputContato;

    if(modoEscuro == false){
        alteraModoEscuro(elemento);
        modoEscuro = true;
    }else{
        alteraModoClaro(elemento);
        modoEscuro = false;
    }
})

function alteraModoEscuro(elemento){
    elemento.btndarkmode.style.backgroundColor = '#1E1C1CFF';
    elemento.btndarkmode.style.borderColor = '#FCFDFF';
    elemento.body.style.backgroundColor = '#1E1C1CFF';

    if(elemento.texto){
        elemento.texto.style.color = '#aaa9a9';
    }

    if(elemento.destaque){
        elemento.destaque.style.color = '#aaa9a9';
    }

    elemento.listaMenu.forEach(elemento => {
        elemento.style.color = '#aaa9a9';

        elemento.addEventListener('mouseover', function (){
            elemento.style.color = '#6E26B7';
        });

        elemento.addEventListener('mouseout', function (){
            elemento.style.color = '#aaa9a9';
        });
    })

    if(elemento.btnControle){

        elemento.btnControle.forEach(elemento =>{

            if (elemento.classList.contains("btn-ativo")){
                elemento.style.backgroundColor = '#6E26B7';
                elemento.style.color = '#FCFDFF';

            }else{
                elemento.style.backgroundColor = '#1E1C1CFF';
                elemento.style.color = '#6E26B7';

                elemento.addEventListener('mouseover', function (){
                    elemento.style.backgroundColor = '#6E26B7';
                    elemento.style.color = '#FCFDFF';
                });

                elemento.addEventListener('mouseout', function (){
                    elemento.style.backgroundColor = '#1E1C1CFF';
                    elemento.style.color = '#6E26B7';
                });
            }
        })
    }

    if (elemento.containerDadosDestaque){
        elemento.containerDadosDestaque.forEach(elemento =>{
            elemento.style.color = '#aaa9a9';
        })
    }

    if (elemento.containerDadosTexto){
        elemento.containerDadosTexto.forEach(elemento =>{
            elemento.style.color = '#aaa9a9';
        })
    }

    if(elemento.inputContato){
        console.log(elemento.inputContato)
        elemento.inputContato.forEach(elemento =>{
            elemento.style.backgroundColor = '#1E1C1CFF';
            elemento.style.color = '#FCFDFF';
        })
    }
}

function alteraModoClaro(elemento){
    elemento.btndarkmode.style.backgroundColor = '#FCFDFF';
    elemento.btndarkmode.style.borderColor = '#343131';
    elemento.body.style.backgroundColor = '#FCFDFF';

    if(elemento.texto){
        elemento.texto.style.color = '#343131';
    }

    if(elemento.destaque){
        elemento.destaque.style.color = '#343131';
    }

    elemento.listaMenu.forEach(elemento => {
        elemento.style.color = '#343131';

        elemento.addEventListener('mouseover', function (){
            elemento.style.color = '#6E26B7';
        });

        elemento.addEventListener('mouseout', function (){
            elemento.style.color = '#343131';
        });
    })

    if(elemento.btnControle){
        elemento.btnControle.forEach(elemento =>{

            if (elemento.btnControle.classList.contains("btn-ativo")){
                elemento.style.backgroundColor = '#6E26B7';
                elemento.style.color = '#aaa9a9';

            }else{
                elemento.style.backgroundColor = '#FCFDFF';
                elemento.style.color = '#6E26B7';

            }

            elemento.addEventListener('mouseover', function (){
                elemento.style.backgroundColor = '#6E26B7';
            });

            elemento.addEventListener('mouseout', function (){
                elemento.style.backgroundColor = '#FCFDFF';
            });
        })
    }

    if (elemento.containerDadosDestaque){
        elemento.containerDadosDestaque.forEach(elemento =>{
            elemento.style.color = '#343131';
        })
    }

    if (elemento.containerDadosTexto){
        elemento.containerDadosTexto.forEach(elemento =>{
            elemento.style.color = '#343131';
        })
    }

    if(elemento.inputContato){
        elemento.inputContato.forEach(elemento =>{
            elemento.style.backgroundColor = '#FCFDFF';
            elemento.style.color = '#343131';
        })
    }
}
