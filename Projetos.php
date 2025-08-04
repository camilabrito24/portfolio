<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Portfolio | Projetos</title>
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
            <li class="cabecalho-nav-menu-item"><a href="./Projetos.php" style="color: #6E26B7">Projetos</a></li>
            <li class="cabecalho-nav-menu-item"><a href="./sobre_mim.php" class="menu-item">Sobre Mim</a></li>
            <li class="cabecalho-nav-menu-item"><a href="./contato.php" class="menu-item">Contato</a></li>
        </ul>
        <button class="cabecalho-nav-btnDarkMode" id="btn-DarkMode">
            <img src="./src/btnDarkMode.png">
        </button>
    </nav>
</header>
<main class="container-projetos-principal">
    <section class="container-texto">
        <h1 class="container-texto-titulo">MEUS PROJETOS</h1>
        <p class="container-texto-paragrafo-destaque">Veja abaixo os meus projetos através do site ou repositório criados até o momento.</p>
    </section>
    <section class="container-projetos">
    </section>
    <section class="container_btn_proxima_pagina">
        <button class="btn_proxima_pagina" id="pagina_anterior">PÁGINA ANTERIOR</button>
        <button class="btn_proxima_pagina" id="proxima-pagina">PRÓXIMA PÁGINA</button>
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
    <script type="module" src="./js/projetos.js"></script>
</body>
</html>
