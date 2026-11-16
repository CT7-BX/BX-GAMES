# BX-GAMES 2.0 — desenvolvimento em etapas

Atualizado em 16/11/2026. O BX-GAMES continua sendo um site estático no GitHub Pages.

## Etapa 1 — base funcional (implementada)

- Quiz com 4 critérios (gênero, campanha, dificuldade, modo); usa os 101 registros locais e evita recomendar títulos marcados como zerados.
- Comparador de 2 jogos: gênero, lançamento, duração, dificuldade e modo.
- Biblioteca avançada: status **Jogando, Pausado e Abandonado**, notas privadas por título e exportação de backup JSON.
- Detalhes enriquecidos: duração principal, acesso para pesquisar trailer e imagens. Os dados ainda não verificados aparecem como **A verificar**.
- Interface responsiva com novos componentes isolados em `bx2.css`, `bx2-engine.js` e `bx2.js`, sem substituir `site.js`.

**Testes de etapa 1:** `node --check` nos três arquivos JS e `node --test tests/bx2.test.cjs` no fluxo de deploy. Validam o motor de recomendação, dados do comparador, recuperação segura das preferências e invariantes do catálogo. Isso **não** é um teste ponta a ponta em navegadores reais.

## Etapa 2 — conteúdo de cada jogo e duração verificada (planejada)

1. Página própria por jogo com descrição autoral curta, screenshots, desenvolvedor, editor, plataformas e link de trailer **validado**.
2. Tempo da **história principal / história + extras / 100%**, com fonte, data da consulta e marcador de indisponibilidade quando a fonte não trouxer a métrica.
3. Validação das capas para diferenciar arte promocional de capa física específica do PS4.
4. Exportar/importar biblioteca com validação do JSON e opção de mesclar sem perder dados.

**Critério de conclusão:** campos preenchidos apenas com fonte e edição corretas; mídia com atribuição/licença respeitadas; modal responsivo testado em celular e desktop.

## Etapa 3 — recomendações avançadas (planejada)

5. Assistente BX com interpretação de tempo exato (ex.: 8h), gênero, jogos parecidos, exclusões, avaliações locais e explicação do porquê de cada indicação.
6. IA generativa **opcional**, via backend que guarde a chave de API fora do navegador; nunca publicar segredos no GitHub Pages.
7. Histórico/feedback dos resultados, com controle local para apagar preferências.

**Critério de conclusão:** sugestões explicáveis, sem recomendações inventadas e com opção de funcionar completamente offline.

## Etapa 4 — comunidade e catálogo sincronizado (planejada)

8. Avaliações e comentários **públicos**, com login seguro, regras de moderação, denúncias e proteção contra spam; não usar `localStorage` como se fosse banco público.
9. Catálogo com sincronização por provedor licenciado (por exemplo RAWG/IGDB quando houver credenciais/termos compatíveis), cache, paginação e revisão de duplicatas/disponibilidade no PS4.
10. Auditoria de acessibilidade, desempenho e comportamento no navegador do PS4 antes de ampliar o público.

**Critério de conclusão:** backend ativo, política de privacidade compatível, monitoramento de falhas e limites de requisições.

## Acompanhamento das oito melhorias aprovadas

| Melhoria | Estado |
| --- | --- |
| 1. Página completa do jogo | Parcial (detalhes e pesquisas externas) |
| 2. Assistente BX mais inteligente | Parcial (quiz determinístico) |
| 3. Biblioteca pessoal avançada | Parcial (status, nota privada, exportação) |
| 4. Duração em 3 métricas | Parcial (história principal; outras não verificadas) |
| 5. Comparar dois jogos | **Implementado** |
| 6. Quiz de recomendações | **Implementado** |
| 7. Avaliações da comunidade | Pendente; apenas nota privada local |
| 8. Catálogo automático | Pendente; curadoria atual de 101 jogos |

## Implantação e reversão

A publicação em `main` deve passar pelos testes do workflow `.github/workflows/pages.yml`.
Se a interface nova apresentar falha em navegador real, os módulos v2 podem ser desativados removendo do `index.html` as referências a `bx2.css`, `bx2-engine.js`, `bx2.js`, a seção `#bx2Tools` e seus botões de navegação; o catálogo clássico permanece preservado.

## Privacidade e autoria

Favoritos antigos permanecem em `bx-games-library-v1`; status e avaliações privadas ficam em `bx-games-v2-profile-1`. Exportar backup requer interação do usuário. Nenhum comentário ou avaliação é compartilhado publicamente nesta etapa. Não há IA generativa nem serviços remotos ocultos.
