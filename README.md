# Pokedex Web - 1ª Geração

Uma aplicação web interativa que exibe os 151 Pokémon da primeira geração, com detalhes completos de cada um, consumindo dados da PokeAPI.

## ✨ Funcionalidades

- **Listagem de Pokémon**: Visualize todos os Pokémon da primeira geração em cards coloridos por tipo
- **Paginação**: Carregue mais Pokémon conforme navega (10 por vez)
- **Detalhes completos**: Clique em qualquer Pokémon para ver:
  - Imagem oficial
  - Tipos
  - Altura e peso
  - Habilidades
  - Estatísticas (HP, Ataque, Defesa, etc.)
- **Design responsivo**: Adapta-se a qualquer tamanho de tela
- **Gradientes por tipo**: Cada tipo de Pokémon tem um gradiente de cores único

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (com gradientes, flexbox e grid)
- JavaScript puro (ES6+)
- [PokeAPI](https://pokeapi.co/) (API REST pública)
- Normalize.css (para reset cross-browser)
- Google Fonts (Roboto)

## 🎨 Design Features

- Gradientes dinâmicos baseados no tipo do Pokémon
- Layout responsivo que se adapta de smartphones a desktops
- Cards coloridos com informações essenciais
- Página de detalhes com organização clara das informações
- Transições suaves entre páginas

## 📂 Estrutura do Projeto

```
pokedex-web/
├── index.html          # Página principal com a listagem
├── details.html        # Página de detalhes do Pokémon
├── css/
│   ├── global.css      # Estilos globais
│   ├── pokedex.css     # Estilos da página principal
│   └── details.css     # Estilos da página de detalhes
└── js/
    ├── pokemon-model.js # Modelo de dados do Pokémon
    ├── poke-api.js      # Integração com a PokeAPI
    ├── script.js        # Lógica da página principal
    └── details.js       # Lógica da página de detalhes
```

## 🚀 Como Executar

1. Clone o repositório
2. Abra o arquivo `index.html` em qualquer navegador moderno
3. Explore os Pokémon e clique em qualquer um para ver seus detalhes
