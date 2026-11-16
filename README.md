# BX-GAMES 🎮

Site independente de descoberta e recomendações de jogos para **PlayStation 4**, com identidade preto/vermelho, interface em português e navegação responsiva.

## Recursos da versão 1.2

- Catálogo inicial de **101 jogos de PS4**, com pesquisa, filtros e ordenação.
- Capas reais via fontes públicas de terceiros, com imagem alternativa caso não carreguem.
- Recomendações por preferências, palavras-chave e favoritos, processadas localmente (não é IA generativa).
- Biblioteca de favoritos, “quero jogar” e “já zerei” guardada no navegador via localStorage.
- Jogo surpresa e detalhes dos títulos.
- **Duração individual dos 101 jogos**: exibe `≈ Nh` em cada card (ou **Duração livre** quando não existe um fim com tempo definido).
- Filtros de até 12h, 13–35h, mais de 35h e duração livre, além da ordenação **Campanhas mais curtas/longas**.

## Durações — metodologia e limites

- As horas mostradas representam **estimativas médias arredondadas para a campanha principal**, não o tempo para fazer 100% nem para concluir DLC. É uma curadoria editorial, não uma importação automática ou reprodução exata da base de dados de terceiros.
- O catálogo tem **101 jogos** e **97 estimativas numéricas**; **Minecraft, Stardew Valley, F1 24 e DiRT Rally 2.0** estão identificados como `Duração livre` porque não possuem uma campanha com duração fixa aplicável ao uso geral. Jogos abertos com objetivo principal, como Gran Turismo 7 (livros do Café) e No Man's Sky (trama central), mostram a duração desse objetivo — o restante pode durar indefinidamente.
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
- `site.js` — catálogo, capas e recomendações (bundle).
- `favicon.svg` e `manifest.webmanifest` — identidade visual.
- `.github/workflows/pages.yml` — publicação automática no GitHub Pages.

Abra `index.html` localmente ou via servidor HTTP. Não exige API ou chave.

## Limites e créditos

O catálogo é curado, não contém todos os títulos de PS4. As estimativas de duração e dificuldade são editoriais, podendo variar em relação às médias atuais dos jogadores. A IA generativa e a sincronização na nuvem ainda **não** estão disponíveis. As capas podem divergir das embalagens do PS4 e os links externos podem ficar indisponíveis. Marcas, jogos e artes pertencem a seus respectivos detentores; o projeto não é afiliado à Sony ou PlayStation.
