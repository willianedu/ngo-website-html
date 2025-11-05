# Site Institucional: ONG União Social

Este repositório contém o código-fonte do site institucional fictício da **"ONG União Social"**, um projeto desenvolvido para a disciplina de **Desenvolvimento Front-End Para Web**.

O objetivo principal deste projeto é aplicar os conceitos fundamentais e avançados de **HTML5** para construir a estrutura completa de um site moderno, semântico e acessível, com foco especial em formulários complexos e recursos multimídia.

**Status do Projeto:** Estrutura HTML e CSS base concluídas. Próximos passos envolvem a implementação da lógica JavaScript para os gráficos.

---

## Sobre a ONG (A Identidade do Projeto)

A **ONG União Social** é uma organização fictícia cuja missão é conectar voluntários às demandas municipais, prestando assistência a pessoas em situação de pobreza e desenvolvendo projetos que melhorem a qualidade de vida dos cidadãos. O slogan da organização é: *"Nossa cidade, nossa responsabilidade."*

## Escopo do Projeto

Este projeto consiste na criação de um site estático de 8 páginas, implementando uma variedade de recursos do HTML5.

* **Páginas Criadas:**
    * `index.html` (Página Inicial)
    * `sobre.html` (Quem Somos, Missão, Valores, Vídeo)
    * `projetos.html` (Detalhes dos projetos, Galeria, Depoimentos e Inscrição)
    * `voluntariado.html` (Formulário de cadastro de voluntários)
    * `doacoes.html` (Informações para doação)
    * `transparencia.html` (Relatórios e espaço para Gráficos)
    * `contato.html` (Formulário de contato e informações)
    * `blog.html` (Página de blog/notícias, atualmente com placeholder)

## Principais Tecnologias e Conceitos Aplicados

O foco principal é a **estrutura HTML5 e estilização com CSS**.

* **HTML5 Semântico:** Uso correto de tags como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>` para estruturar o conteúdo.
* **Formulários Avançados:** Criação de 4 formulários complexos com validação nativa do HTML5 (uso de `pattern`, `required`, `type="date"`, etc.) para voluntariado, contato, inscrição em projetos e newsletter.
* **Multimídia:** Integração de elementos `<video>`, `<audio>` e uma galeria de fotos.
* **Imagens Responsivas:** Uso da tag `<picture>` para otimização de imagens na galeria.
* **Desempenho:** Implementação de `loading="lazy"` (Lazy Loading) para imagens da galeria.
* **Gráficos:** Uso da tag `<canvas>` como placeholder para a exibição de gráficos de pizza, linha e barras na página de transparência.
* **CSS Moderno:** Utilização de Variáveis CSS, Flexbox e Grid Layout para criar um design responsivo e de fácil manutenção.

## Estrutura de Pastas

O projeto segue uma estrutura de pastas padrão para desenvolvimento web, separando páginas, recursos (assets) e documentação.

```
/
├── index.html
├── sobre.html
├── projetos.html
├── ... (outras páginas HTML)
└── assets/
    ├── css/
    │   └── index.css
    ├── js/
    │   └── index.tsx
    └── docs/
        ├── wireframes.html (e arquivos de wireframes individuais)
        └── relatorio-validacao-w3c.html
```

## Documentação Técnica

A documentação do projeto, incluindo os wireframes e o relatório de validação W3C, está localizada na pasta `/assets/docs/`. Estes são arquivos de modelo que devem ser preenchidos com os artefatos reais do projeto.

*   **`/assets/docs/wireframes.html`**: Contém os esboços de baixa fidelidade das principais páginas.
*   **`/assets/docs/relatorio-validacao-w3c.html`**: Serve como um guia e local para inserir as capturas de tela da validação de código no validador oficial do W3C.
