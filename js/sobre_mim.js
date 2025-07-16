const btnExperienciaProfissional = document.getElementById('experiencia-profissional');
const btnFormacaoAcademica = document.getElementById('formacao-academica');
const btnHabilidades = document.getElementById('habilidades');
const containerExperienciaProfissional = document.querySelector('.container-experiencia-profissional');

btnExperienciaProfissional.addEventListener('click', ()=>{
    if(!btnExperienciaProfissional.classList.contains('btn-ativo')){
        btnExperienciaProfissional.classList.add('btn-ativo');
    }

    if(btnFormacaoAcademica.classList.contains('btn-ativo')){
        btnFormacaoAcademica.classList.remove('btn-ativo');
    }

    if(btnHabilidades.classList.contains('btn-ativo')){
        btnHabilidades.classList.remove('btn-ativo');
    }

    containerExperienciaProfissional.style.display = 'block';

})

btnFormacaoAcademica.addEventListener('click', ()=>{
    if(!btnFormacaoAcademica.classList.contains('btn-ativo')){
        btnFormacaoAcademica.classList.add('btn-ativo');
    }

    if(btnExperienciaProfissional.classList.contains('btn-ativo')){
        btnExperienciaProfissional.classList.remove('btn-ativo');
    }

    if(btnHabilidades.classList.contains('btn-ativo')){
        btnHabilidades.classList.remove('btn-ativo');
    }

    containerExperienciaProfissional.style.display = 'none';
})

btnHabilidades.addEventListener('click', ()=>{
    if(!btnHabilidades.classList.contains('btn-ativo')){
        btnHabilidades.classList.add('btn-ativo');
    }

    if(btnExperienciaProfissional.classList.contains('btn-ativo')){
        btnExperienciaProfissional.classList.remove('btn-ativo');
    }

    if(btnFormacaoAcademica.classList.contains('btn-ativo')){
        btnFormacaoAcademica.classList.remove('btn-ativo');
    }

    containerExperienciaProfissional.style.display = 'none';

})