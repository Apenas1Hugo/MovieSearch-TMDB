# MovieSearch TMDB

## Descrição do projeto

MovieSearch TMDB é uma aplicação web desenvolvida com React e Vite para pesquisar filmes e consultar títulos mais populares utilizando a API do TMDB. A interface foi criada para oferecer uma experiência simples, rápida e visualmente organizada para o usuário.

## O que o programa faz

O programa permite:

- Buscar filmes pelo nome;
- Exibir resultados de filmes relacionados à pesquisa;
- Mostrar uma seção com filmes populares;
- Apresentar a interface em português brasileiro;
- Consumir dados em tempo real por meio da API do TMDB.

## Tecnologias utilizadas

![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?style=flat&logo=vite)
![React DOM](https://img.shields.io/badge/React%20DOM-19.1.0-61DAFB?style=flat&logo=react)
![React Icons](https://img.shields.io/badge/React%20Icons-5.5.0-FF5A5F?style=flat)
![ESLint](https://img.shields.io/badge/ESLint-9.30.1-4B32C3?style=flat&logo=eslint)
![TMDB API](https://img.shields.io/badge/TMDB-API-01B4E4?style=flat)

### Versões principais

- React: 19.1.0
- React DOM: 19.1.0
- Vite: 7.0.4
- React Icons: 5.5.0
- ESLint: 9.30.1
- gh-pages: 6.3.0

## Estrutura das pastas do projeto

```text
src
│
├── App.jsx
│   └── Componente principal que monta a interface da aplicação
│
├── App.css
│   └── Estilos principais da aplicação
│
├── main.jsx
│   └── Arquivo de entrada do React/Vite
│
├── assets/
│   └── Arquivos estáticos e imagens utilizadas no projeto
│
├── Componentes/
│   ├── MovieSearchBar.jsx
│   │   └── Componente da barra de pesquisa
│   ├── MovieSearchBar.css
│   │   └── Estilos da barra de pesquisa
│   ├── Populares.jsx
│   │   └── Exibe a lista de filmes populares
│   ├── Populares.css
│   │   └── Estilos da seção de filmes populares
│   ├── Rodape.jsx
│   │   └── Componente do rodapé da aplicação
│   ├── Rodape.css
│   │   └── Estilos do rodapé
│   ├── Titulo.jsx
│   │   └── Componente do cabeçalho da aplicação
│   └── Titulo.css
│       └── Estilos do cabeçalho
│
└── services/
    └── tmdbFetch.js
        └── Serviço responsável por realizar requisições à API do TMDB
```
