# BX-GAMES 🎮

Site independente de descoberta e recomendações de jogos para **PlayStation 4**, com identidade preto/vermelho, interface em português e navegação responsiva.

## BX-GAMES 2.1 — ampliação do catálogo (16/11/2026)

- Adicionados **25 novos jogos compatíveis com PS4**, incluindo Hogwarts Legacy, Persona 3 Reload, Final Fantasy VII Remake, Sifu, Stray, Tunic, Sea of Stars, Dave the Diver, Chants of Sennaar e Assassin’s Creed Mirage.
- O catálogo passou de **101 para 126 jogos**, com uma nova área **Novidades** no menu e destaque dos novos títulos na página inicial.
- Todas as novas entradas têm duração individual estimada para a **campanha principal**, categorias e gênero; as capas são buscadas em fornecedores externos da Steam/Wikipédia. Algumas artes podem não coincidir com a capa física de PS4.
- Os IDs dos 101 jogos antigos permanecem inalterados para preservar favoritos e dados pessoais salvos no navegador.
- Compatibilidade PS4 confirmada por amostragem em páginas oficiais: [Persona 3 Reload](https://www.playstation.com/pt-br/games/persona-3-reload/), [Hogwarts Legacy](https://www.playstation.com/pt-br/games/hogwarts-legacy/), [Sea of Stars](https://www.playstation.com/pt-br/games/sea-of-stars/), [Tunic](https://www.playstation.com/pt-br/games/tunic/) e [Dave the Diver](https://www.playstation.com/pt-br/games/dave-the-diver/).

## BX-GAMES 2.0 — Etapa 1 (funcionalidades preservadas)

- **Quiz personalizado:** recomenda jogos cruzando gênero, duração, dificuldade, modo e histórico de zerados.
- **Comparador:** dois jogos lado a lado (campanha, ano, gênero, dificuldade e modo).
- **Biblioteca estendida:** Jogando / Pausado / Abandonado, notas individuais privadas e exportação de backup em JSON.
- **Detalhes expandidos:** atalhos para pesquisar trailers e imagens, e espaços reservados para durações de extras e 100% ainda não verificadas.
- **Proteção contra regressões:** o GitHub Pages só publica após testes de sintaxe, lógica e fluxos de UI simulados.
- **Plano das oito melhorias:** [ROADMAP-2.0](docs/ROADMAP-2.0.md).

As avaliações são **privadas**, não há comentários públicos nem catálogo automático nesta etapa. A recomendação continua sendo um algoritmo local e explicável, não IA generativa. Essas integrações exigirão backend e testes próprios.

## Recursos preservados da versão 1.2

- Catálogo atual de **126 jogos de PS4**, com pesquisa, filtros e ordenação.
- Capas reais via fontes públicas de terceiros, com imagem alternativa caso não carreguem.
- Recomendações por preferências, palavras-chave e favoritos, processadas localmente (não é IA generativa).
- Biblioteca de favoritos, “quero jogar” e “já zerei” guardada no navegador via localStorage.
- Jogo surpresa e detalhes dos títulos.
- **Duração individual dos 126 jogos**: exibe `≈ Nh` em cada card (ou **Duração livre** quando não existe um fim com tempo definido).
- Filtros de até 12h, 13–35h, mais de 35h e duração livre, além da ordenação **Campanhas mais curtas/longas**.

## Durações — metodologia e limites

- As horas mostradas representam **estimativas médias arredondadas para a campanha principal**, não o tempo para fazer 100% nem para concluir DLC. É uma curadoria editorial, não uma importação automática ou reprodução exata da base de dados de terceiros.
- O catálogo tem **126 jogos** e **122 estimativas numéricas**; **Minecraft, Stardew Valley, F1 24 e DiRT Rally 2.0** estão identificados como `Duração livre` porque não possuem uma campanha com duração fixa aplicável ao uso geral. Jogos abertos com objetivo principal, como Gran Turismo 7 (livros do Café) e No Man's Sky (trama central), mostram a duração desse objetivo — o restante pode durar indefinidamente.
- Compilações, roguelikes, dificuldades diferentes e remasterizações podem variar bastante conforme a edição e o objetivo escolhido. Os valores podem mudar quando novas estatísticas forem publicadas.

**Referências consultadas para calibrar as estimativas:**

- [HowLongToBeat](https://howlongtobeat.com/) — metodologia de `Main Story`, `Main + Extras`, `Completionist`.
- [IsThereAnyDeal — Hollow Knight](https://isthereanydeal.com/game/hollow-knight/stats/) — história principal ~27h.
- [IsThereAnyDeal — Nioh 2](https://isthereanydeal.com/game/nioh-2/history/) — história principal ~45h.
- [IsThereAnyDeal — Jedi: Survivor](https://isthereanydeal.com/game/star-wars-jedi-survivor/stats/) — história principal ~21h.
- [GGDB — Bloodborne](https://ggdb.pro/time-to-beat/bloodborne) — história principal ~28h.
- [GGDB — Gran Turismo 7](https://ggdb.pro/time-to-beat/gran-turismo-7) — progressão principal ~26h.
- [RDR2 — levantamento de dados de jogadores](https://gta-top.com/pt-br/guides/rdr2-how-long-to-beat) — história principal ~51h.

Este projeto não afirma que as 101 estimativas foram individualmente verificadas por API. Acurácia é aproximada e editável em `PLAYTIME_HOURS` dentro de `site.js`.

## Publicação no GitHub Pages

O site usa HTML, CSS e JavaScript sem dependências de build. O fluxo `.github/workflows/pages.yml` publica alterações feitas no branch `main` após ativar a opção **Settings → Pages → Build and deployment → Source: GitHub Actions**.

Endereço público, após implantação bem-sucedida: https://ct7-bx.github.io/BX-GAMES/

## Estrutura

- `index.html` — interface do site.
- `styles.css` — tema preto/vermelho e estilos responsivos.
- `site.js` — catálogo principal, capas e recomendações (bundle).
- `catalog-v2_1.js` — expansão de 25 novos jogos sem alterar os IDs dos 101 anteriores.
- `favicon.svg` e `manifest.webmanifest` — identidade visual.
- `.github/workflows/pages.yml` — validações e publicação automática no GitHub Pages.
- `bx2-engine.js` — lógica testável do quiz, comparação e validação de perfil.
- `bx2.js`, `bx2.css` — interface da etapa 1 da v2.0.
- `tests/` — testes unitários e simulações de interação.

Abra `index.html` localmente ou via servidor HTTP. Não exige API ou chave.

## Limites e créditos

O catálogo é curado, não contém todos os títulos de PS4. As estimativas de duração e dificuldade são editoriais, podendo variar em relação às médias atuais dos jogadores. A IA generativa e a sincronização na nuvem ainda **não** estão disponíveis. As capas podem divergir das embalagens do PS4 e os links externos podem ficar indisponíveis. Marcas, jogos e artes pertencem a seus respectivos detentores; o projeto não é afiliado à Sony ou PlayStation.
