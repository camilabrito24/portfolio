<?php
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Portfolio | Sobre Mim</title>
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
                <li class="cabecalho-nav-menu-item"><a href="./sobre_mim.php" style="color: #6E26B7">Sobre Mim</a></li>
                <li class="cabecalho-nav-menu-item"><a href="./contato.php" class="menu-item">Contato</a></li>
            </ul>
            <button class="cabecalho-nav-btnDarkMode" id="btn-DarkMode">
                <img src="./src/btnDarkMode.png">
            </button>
        </nav>
    </header>
    <main class="container_controle">
        <section class="container_btn_controle">
            <button class="btn_controle btn-ativo" id="experiencia-profissional">
                EXPERIÊNCIA PROFISSIONAL
            </button>
            <button class="btn_controle" id="formacao-academica">
                FORMAÇÃO ACADÊMICA
            </button>
            <button class="btn_controle" id="habilidades">
                HABILIDADES
            </button>
        </section>
        <section class="container-experiencia-profissional">
            <section class="container-dados">
                <h1 class="container-dados-titulo">Assistente de Operações
                    2017 - 2021</h1>
                <p class="container-dados-paragrafo-destaque">GRUPO NEW SPACE</p>
                <ul class="container-dados-paragrafo">
                    <li>Controle de qualidade.</li>
                    <li>Ouvidoria.</li>
                    <li>Regularização de Dados.</li>
                    <li>Venda e formalização de documentos e contratos. </li>
                    <li>Suporte ao cliente através do Whatsapp e telefone.  </li>
                </ul>
            </section>
            <section class="img_div"><img src="src/setas.png"></section>
            <section class="container-dados">
                <h1 class="container-dados-titulo">Estágio em Teste de Software
                    2022 - 2023</h1>
                <p class="container-dados-paragrafo-destaque">ZANTHUS</p>
                <ul class="container-dados-paragrafo">
                    <li>Teste de software unitário e integração.</li>
                    <li>Teste automatizado em sistema PDV através do Testlink.</li>
                </ul>
            </section>
            <section class="img_div"><img src="src/setas.png"></section>
            <section class="container-dados">
                <h1 class="container-dados-titulo">Analista de Desenvolvimento de Software
                    2023 - 2023</h1>
                <p class="container-dados-paragrafo-destaque">ZANTHUS</p>
                <ul class="container-dados-paragrafo">
                    <li>Teste manual de software (unitário e integração).</li>
                    <li>Teste automatizado em sistema Manager e PDV através do Testlink.</li>
                </ul>
            </section>
            <section class="img_div"><img src="src/setas.png"></section>
            <section class="container-dados">
                <h1 class="container-dados-titulo">Programador de Sistema da Informação
                    2023 - Atualmente</h1>
                <p class="container-dados-paragrafo-destaque">ZANTHUS</p>
                <ul class="container-dados-paragrafo">
                    <li>Correção de bugs no sistema através de PHP e Javascript.</li>
                    <li>Realização de melhorias no sistema através de PHP e Javascript.</li>
                    <li>Criação de novos processos no sistema através de PHP e Javascript.</li>
                </ul>
            </section>
        </section>
        <section class="container-formacao-academica">
            <section class="container-dados-experiencia-profissional">
                <h1 class="container-dados-titulo">Técnico em Desenvolvimento de Sistemas 2018 -2019</h1>
                <p class="container-dados-paragrafo-destaque">ETEC UIRAPURU</p>
            </section>
            <section class="img_div"><img src="src/setas.png"></section>
            <section class="container-dados-experiencia-profissional">
                <h1 class="container-dados-titulo">Tecnólogo em Design Gráfico - 2020 - 2021</h1>
                <p class="container-dados-paragrafo-destaque">UNIVERSIDADE PAULISTA</p>
            </section>
            <section class="img_div"><img src="src/setas.png"></section>
            <section class="container-dados-experiencia-profissional">
                <h1 class="container-dados-titulo">Tecnólogo em Análise e Desenvolvimento de Sistemas 2022 - 2024</h1>
                <p class="container-dados-paragrafo-destaque">UNICID OSASCO</p>
            </section>
        </section>
        <section class="container-habilidades">
            habilidades
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
    <script src="./js/sobre_mim.js"></script>
</body>
</html>