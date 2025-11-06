# Site Institucional: ONG União Social

Este repositório contém o código-fonte do site institucional fictício da **"ONG União Social"**. O projeto foi construído utilizando tecnologias web modernas para criar uma experiência de usuário responsiva, acessível e interativa.

O objetivo é demonstrar a aplicação de conceitos de desenvolvimento front-end, desde a estruturação semântica com **HTML5** e estilização avançada com **CSS3**, até a implementação de interatividade com **TypeScript** e o uso de um ambiente de desenvolvimento moderno com **Vite**.

**Status do Projeto:** A estrutura do site, estilização e funcionalidades interativas principais (menu de navegação responsivo, modo escuro) estão concluídas. O próximo passo é a implementação da lógica para renderizar os gráficos na página de transparência.

---

## Sobre a ONG (A Identidade do Projeto)

A **ONG União Social** é uma organização fictícia cuja missão é conectar voluntários às demandas municipais, prestando assistência a pessoas em situação de pobreza e desenvolvendo projetos que melhorem a qualidade de vida dos cidadãos. O slogan da organização é: *"Nossa cidade, nossa responsabilidade."*

## Escopo do Projeto

Este projeto consiste na criação de um site estático de 8 páginas, implementando uma variedade de recursos modernos.

* **Páginas Criadas:**
    * `index.html` (Página Inicial)
    * `sobre.html` (Quem Somos, Missão, Valores, Vídeo)
    * `projetos.html` (Detalhes dos projetos, Galeria, Depoimentos e Inscrição)
    * `voluntariado.html` (Formulário de cadastro de voluntários)
    * `doacoes.html` (Informações para doação)
    * `transparencia.html` (Relatórios e espaço para Gráficos)
    * `contato.html` (Formulário de contato e informações)
    * `blog.html` (Página de blog/notícias)

## Principais Tecnologias e Conceitos Aplicados

*   **HTML5 Semântico:** Uso correto de tags como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>` para estruturar o conteúdo de forma clara e acessível.
*   **CSS3 Moderno:**
    *   **Variáveis CSS (Custom Properties):** Para um tema flexível e de fácil manutenção, incluindo um modo escuro.
    *   **Flexbox e Grid Layout:** Para a criação de layouts complexos e responsivos.
    *   **Design Responsivo:** O site se adapta a diferentes tamanhos de tela, de dispositivos móveis a desktops.
*   **TypeScript:** Utilizado para adicionar interatividade ao site, como o menu de navegação móvel e o seletor de tema (claro/escuro), garantindo um código mais robusto e manutenível.
*   **Vite:** Um ambiente de desenvolvimento rápido e moderno que oferece Hot Module Replacement (HMR) e otimiza o build para produção.
*   **Recursos Avançados de HTML:**
    *   **Formulários Complexos:** 4 formulários com validação nativa do HTML5 (`pattern`, `required`, etc.).
    *   **Multimídia:** Integração de elementos `<video>` e `<audio>`.
    *   **Imagens Responsivas:** Uso da tag `<picture>` para otimizar a entrega de imagens.
    *   **Desempenho:** Implementação de `loading="lazy"` para o carregamento otimizado de imagens.
    *   **Gráficos:** Uso da tag `<canvas>` como placeholder para visualização de dados.

## Estrutura de Pastas

O projeto segue uma estrutura organizada para facilitar a manutenção e o desenvolvimento.

```
/
├── index.html
├── sobre.html
├── ... (outras páginas)
├── package.json
├── vite.config.ts
├── tsconfig.json
└── assets/
    ├── css/
    │   └── index.css
    ├── js/
    │   └── index.tsx
    └── docs/
        ├── ... (documentação e wireframes)
```

## Como Executar o Projeto

Para executar o projeto localmente, você precisará ter o [Node.js](https://nodejs.org/) instalado.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/ong-uniao-social.git
    cd ong-uniao-social
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O site estará disponível em `http://localhost:3000` (ou outra porta, se a 3000 estiver em uso).

4.  **Para gerar a versão de produção:**
    ```bash
    npm run build
    ```
    Os arquivos otimizados serão gerados na pasta `dist/`.

## Documentação Técnica

A documentação do projeto, incluindo os wireframes e o relatório de validação W3C, está localizada na pasta `/assets/docs/`.

*   **`/assets/docs/wireframes.html`**: Contém os esboços de baixa fidelidade das principais páginas.
*   **`/assets/docs/relatorio-validacao-w3c.html`**: Serve como um guia e local para inserir as capturas de tela da validação de código no validador oficial do W3C.
