document.getElementById('btn-contato').addEventListener('click', function() {
    const form = document.getElementById('form-contato');
    const statusMessage = document.getElementById('statusMessage');

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (!nome || !email || !mensagem) {
        statusMessage.textContent = 'Por favor, preencha todos os campos.';
        statusMessage.style.color = 'red';
        return;
    }

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('email', email);
    formData.append('mensagem', mensagem);

    statusMessage.textContent = 'Enviando...';
    statusMessage.style.color = 'blue';

    fetch('Projetos/portfolio/envia-email.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                statusMessage.textContent = 'Mensagem enviada com sucesso! Em breve entraremos em contato.';
                statusMessage.style.color = 'green';
                form.reset();
            } else {
                statusMessage.textContent = 'Erro ao enviar a mensagem: ' + data.error;
                statusMessage.style.color = 'red';
            }
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            statusMessage.textContent = 'Ocorreu um erro de comunicação. Tente novamente.';
            statusMessage.style.color = 'red';
        });
});