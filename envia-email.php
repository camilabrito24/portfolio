<?php
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

try {
    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->safeLoad();
} catch (\Exception $e) {
    die("Erro ao carregar variáveis de ambiente: " . $e->getMessage());
}

$mail = new PHPMailer(true);
$mail->SMTPDebug = 4; // Use 4 para ver TODA a comunicação
$mail->Debugoutput = 'html';

try {
    $_nome = $_POST['nome'];
    $_remetente = $_POST['email'];
    $_mensagem = $_POST['mensagem'];
    $_data_envio = date('d/m/Y H:i:s');


    // CONFIGURAÇÕES DO SERVIDOR SMTP (DO SENDGRID)
    // ===============================================
    $mail->isSMTP();
    $mail->Host       = $_ENV['SMTP_HOST'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $_ENV['SMTP_USERNAME'];
    $mail->Password   = $_ENV['SMTP_PASSWORD'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = (int)$_ENV['SMTP_PORT'];
    $mail->CharSet    = 'UTF-8';

    // REMETENTE E DESTINATÁRIO
    // ===============================================
    $mail->setFrom($_ENV['EMAIL_FROM'], $_ENV['EMAIL_FROM_NAME']);

    // Adicione o destinatário
    $mail->addAddress('camilam.brito@outlook.com.br', 'Camila Brito');

    // Conteúdo
    // ===============================================
    $mail->isHTML(true);                                  // Define o formato do e-mail para HTML
    $mail->Subject = 'Formúlario de Contato do Portfólio';
    $mail->Body    = "
    <html>
        <p><strong>Nome: </strong>$_nome</p>
        <p><strong>E-mail: </strong>$_remetente</p>
        <p><strong>Mensagem: </strong>$_mensagem</p>
        <p>Este e-mail foi enviado em <strong>$_data_envio</strong></p>    
    </html>
";
    $mail->AltBody = "Nome: $_nome, E-mail: $_remetente, Mensagem: $_mensagem, Este e-mail foi enviado em $_data_envio.";

    $mail->send();
    echo 'Mensagem enviada com sucesso! (Via SendGrid)';

} catch (Exception $e) {
    // Exibe o erro de forma segura
    echo "A mensagem não pôde ser enviada. Erro do Mailer: {$mail->ErrorInfo}";
}

?>
