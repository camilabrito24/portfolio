<?php
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Portfolio | Home</title>
    <link rel="stylesheet" type="text/css" href="styles/styles.css">
</head>
<body id="corpo-pagina">
    <header class="cabecalho">
        <nav class="cabecalho-nav">
            <p class="cabecalho-nav-paragrafo">
                CAMILA BRITO
            </p>
            <ul class="cabecalho-nav-menu">
                <li class="cabecalho-nav-menu-item"><a href="./index.php" style="color: #6E26B7">Home</a></li>
                <li class="cabecalho-nav-menu-item"><a href="./Projetos.php" id="menu-item">Projetos</a></li>
                <li class="cabecalho-nav-menu-item"><a href="./sobre_mim.php" id="menu-item">Sobre Mim</a></li>
                <li class="cabecalho-nav-menu-item"><a href="./contato.php" id="menu-item">Contato</a></li>
            </ul>
            <button class="cabecalho-nav-btnDarkMode" id="btn-DarkMode">
                <img src="./src/btnDarkMode.png">
            </button>
        </nav>
    </header>
    <main class="container">
        <section class="container-texto">
            <h1 class="container-texto-titulo">Olá, eu sou a Camila</h1>
            <p class="container-texto-paragrafo-destaque">Designer e Desenvolvedora Frontend / Backend.</p>
            <p class="container-texto-paragrafo">Espero que através deste portfólio possa vir a me conhecer e conhecer o meu trabalho.
                Caso queira entrar em contato comigo para maiores informações basta clicar no botão logo abaixo:</p>
            <a href="." class="container-texto-btn">
                CONTATE-ME
            </a>
        </section>
        <section class="container-imagem">
            <img src="src/BANNER.png">
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