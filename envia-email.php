<?php

$_nome = $_POST['nome'];
$_remetente = $_POST['email'];
$_mensagem = $_POST['mensagem'];
$_data_envio = date('d/m/Y H:i:s');

$_corpo_email = "
    <html>
        <p><strong>Nome: </strong>$_nome</p>
        <p><strong>E-mail: </strong>$_remetente</p>
        <p><strong>Mensagem: </strong>$_mensagem</p>
        <p>Este e-mail foi enviado em <strong>$_data_envio</strong></p>    
    </html>
";

$_destinatario = "camilam.brito@outlook.com.br";
$_assunto = "Formúlario de Contato do Portfólio";

$_headers = "MIME-Version: 1.0\n";
$_headers .= "Content-type: text/html; charset=UTF-8\n";
$_headers .= "From: $_nome <$_remetente>\n";