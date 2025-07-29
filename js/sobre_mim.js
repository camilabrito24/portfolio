const btnExperienciaProfissional = document.getElementById('experiencia-profissional');
const btnFormacaoAcademica = document.getElementById('formacao-academica');
const btnHabilidades = document.getElementById('habilidades');
const containerExperienciaProfissional = document.querySelector('.container-experiencia-profissional');
const containerFormacaoAcademica = document.querySelector('.container-formacao-academica');
const containerHabilidades = document.querySelector('.container-habilidades');

containerFormacaoAcademica.style.display = 'none';
containerHabilidades.style.display = 'none';
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

    containerExperienciaProfissional.style.display = 'flex';
    containerFormacaoAcademica.style.display = 'none';
    containerHabilidades.style.display = 'none';

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
    containerFormacaoAcademica.style.display = 'block';
    containerHabilidades.style.display = 'none';
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
    containerFormacaoAcademica.style.display = 'none';
    containerHabilidades.style.display = 'block';

})