# BX-GAMES 🎮

Site independente de descoberta e recomendações de jogos para **PlayStation 4**, com identidade preto/vermelho, interface em português e navegação responsiva.

## Recursos da versão 1.1

- Catálogo inicial de **101 jogos de PS4**, com pesquisa, filtros e ordenação.
- Capas reais via fontes públicas de terceiros, com imagem alternativa caso não carreguem.
- Recomendações por preferências, palavras-chave e favoritos, processadas localmente (não é IA generativa).
- Biblioteca de favoritos, “quero jogar” e “já zerei” guardada no navegador via localStorage.
- Jogo surpresa e detalhes dos títulos.

## Publicação no GitHub Pages

O site usa HTML, CSS e JavaScript sem dependências de build. O fluxo `.github/workflows/pages.yml` publica alterações feitas no branch `main` após ativar a opção **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Endereço público, após implantação bem-sucedida: https://ct7-bx.github.io/BX-GAMES/

## Estrutura

- `index.html` — interface do site.
- `styles.css` — tema preto/vermelho e estilos responsivos.
- `site.js` — catálogo, capas e recomendações (bundle).
- `favicon.svg` e `manifest.webmanifest` — identidade visual.
- `.github/workflows/pages.yml` — publicação automática no GitHub Pages.

Abra `index.html` localmente ou via servidor HTTP. Não exige API ou chave.

## Limites e créditos

O catálogo é curado, não contém todos os títulos de PS4. As estimativas de tempo de jogo e dificuldade são editoriais. A IA generativa e a sincronização na nuvem ainda **não** estão disponíveis. As capas podem divergir das embalagens do PS4 e os links externos podem ficar indisponíveis. Marcas, jogos e artes pertencem a seus respectivos detentores; o projeto não é afiliado à Sony ou PlayStation.
