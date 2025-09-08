<?php
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Portfolio | Contato</title>
    <link rel="stylesheet" type="text/css" href="styles/reset.css">
    <link rel="stylesheet" type="text/css" href="styles/styles.css">
</head>
<body id="corpo-pagina">
<header class="cabecalho">
    <nav class="cabecalho-nav">
        <p class="cabecalho-nav-paragrafo">
            CAMILA BRITO
        </p>
        <ul class="cabecalho-nav-menu">
            <li class="cabecalho-nav-menu-item"><a href="./index.php" class="menu-item">Home</a></li>
            <li class="cabecalho-nav-menu-item"><a href="./Projetos.php" class="menu-item">Projetos</a></li>
            <li class="cabecalho-nav-menu-item"><a href="./sobre_mim.php" class="menu-item">Sobre Mim</a></li>
            <li class="cabecalho-nav-menu-item"><a href="./contato.php" style="color: #6E26B7">Contato</a></li>
        </ul>
        <button class="cabecalho-nav-btnDarkMode" id="btn-DarkMode">
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
            <input type="text" class="input-contato">

            <label>Email</label>
            <input type="email" class="input-contato">

            <label>Mensagem</label>
            <textarea class="input-contato"></textarea>

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
<script src="./js/script.js"></script>
</body>
</html>
