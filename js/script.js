const btnDarkMode =  document.querySelector("#btn-DarkMode");
const pagina =  document.querySelector("#corpo-pagina");
const menuItem = document.querySelectorAll("#menu-item");
const listaMenuItem = array.from(menuItem);
var modoEscuro = false;
btnDarkMode.addEventListener('click', ()=>{
    var elemento = {};
    elemento.btndarkmode = btnDarkMode;
    elemento.body = pagina;
    elemento.listaMenu = listaMenuItem;

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

    elemento.listaMenu.forEach(elemento => {
        elemento.style.color = '#aaa9a9';
    })
}

function alteraModoClaro(elemento){
    elemento.btndarkmode.style.backgroundColor = '#FCFDFF';
    elemento.btndarkmode.style.borderColor = '#343131';
    elemento.body.style.backgroundColor = '#FCFDFF';

    elemento.listaMenu.forEach(elemento => {
        elemento.style.color = '#aaa9a9';
    })
}