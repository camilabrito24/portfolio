<?php
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Portfolio | Contato</title>
    <link rel="stylesheet" type="text/css" href="styles/styles.css">
</head>
<body>
<header class="cabecalho">
    <nav class="cabecalho-nav">
        <p class="cabecalho-nav-paragrafo">
            CAMILA BRITO
        </p>
        <ul class="cabecalho-nav-menu">
            <li class="cabecalho-nav-menu-item"><a href="./index.php">Home</a></li>
            <li class="cabecalho-nav-menu-item"><a href="./Projetos.php">Projetos</a></li>
            <li class="cabecalho-nav-menu-item"><a href="./sobre_mim.php">Sobre Mim</a></li>
            <li class="cabecalho-nav-menu-item"><a href="./contato.php" style="color: #6E26B7">Contato</a></li>
        </ul>
        <button class="cabecalho-nav-btnDarkMode">
            <img src="./src/btnDarkMode.png">
        </button>
    </nav>
</header>
<main class="container-contato">
    <section class="container-texto">
        <h1 class="container-texto-titulo">Contate-me</h1>
        <p class="container-texto-paragrafo-destaque">Se ficou interessado no meu trabalho ou quer saber mais informações, entre em contato comigo através do formulário abaixo:</p>
    </section>
    <section class="container-formulario">
        <form>
            <label>Nome Completo</label>
            <input type="text">

            <label>Email</label>
            <input type="email">

            <label>Mensagem</label>
            <textarea></textarea>

            <input type="button" value="Enviar Formulário" id="btn-contato">
        </form>
    </section>
</main>
<footer class="rodape">
    <p class="rodape-paragrafo-destaque">
        © Copyright 2024
    </p>
    <p class="rodape-paragrafo">
        Feito por Camila Brito
    </p>
</footer>
</body>
</html>
