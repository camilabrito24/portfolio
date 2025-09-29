<?php

$_destinatario = "camilam.brito@outlook.com.br";
$_assunto = "Mensagem de contato Portfolio";

header('content-type: application/json');

if($_SERVER["REQUEST_METHOD"] == "POST") {

    $_nome = filter_input(INPUT_POST, "nome", FILTER_SANITIZE_STRING);
    $_remetente = filter_input(INPUT_POST, "email", FILTER_SANITIZE_STRING);
    $_mensagem  = filter_input(INPUT_POST, "mensagem", FILTER_SANITIZE_STRING);

    if(empty($_nome) || empty($_remetente) || empty($_mensagem)) {
        echo json_encode(['sucess' => false, 'error' => 'Não foi preenchido todos os campos!.']);
        exit;
    }

    $_corpo_email = "
        <html>
        <head>
            <title>{$_assunto}</title>
        </head>
        <body>
            <h2>Detalhes da Mensagem:</h2>
            <p><strong>Nome: </strong>{$_nome}</p>
            <p><strong>Remetente: </strong>{$_remetente}</p>
            <p><strong>Mensagem: </strong>{$_mensagem}</p>
        </body>
        </html>
        ";

    $_headers = "MIME-Version: 1.0\r\n";
    $_headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $_headers .= "From: {$_remetente} <{$_assunto}>\r\n";
    $_headers .= "Reply-To: {$_remetente}\r\n";

    if (mail($_destinatario, $_assunto, $_corpo_email, $_headers)) {
        echo json_encode(['sucess' => true]);
    }else{
        echo json_encode(['sucess' => false, 'error' => 'Falha interna no servidor ao enviar o e-mail.']);
    }
}else{
    echo json_encode(['success' => false, 'error' => 'Método de requisição inválido.']);
}