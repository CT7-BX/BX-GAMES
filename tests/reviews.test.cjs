const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const review=require('../bx-reviews-engine.js');
const root=path.resolve(__dirname,'..');
const file=n=>fs.readFileSync(path.join(root,n),'utf8');
const games=[
{id:'g0',title:'Bloodborne'}, {id:'g1',title:'Elden Ring'}, {id:'g2',title:'Stray'}
];
test('valida resenhas sem aceitar outros jogos e tipos incorretos',()=>{
 const obj=review.normalizedReviews({
  g0:{text:'  Excelente jogo!  ',spoiler:true,updatedAt:'2026-11-16T00:00:00Z'},
  g1:{text:'   '},g2:{text:123},hack:{text:'não salvar'}
 },games.map(g=>g.id));
 assert.deepEqual(Object.keys(obj),['g0']);
 assert.equal(obj.g0.text,'Excelente jogo!');
 assert.equal(obj.g0.spoiler,true);
});
test('limpa caracteres de controle e limita textos a 800 caracteres',()=>{
 assert.equal(review.cleanText('  oi\u0000!  '),'oi!');
 assert.equal(review.cleanText('a'.repeat(900)).length,800);
 assert.equal(review.cleanText({texto:'oi'}),'');
});
test('resumo calcula média apenas das minhas avaliações válidas',()=>{
 const stats=review.getStats({g0:5,g1:3,g2:0,other:4}, {g0:{text:'Bom',spoiler:false}},games.map(g=>g.id));
 assert.equal(stats.count,2);
 assert.equal(stats.average,4);
 assert.equal(stats.distribution[5],1);
 assert.equal(stats.distribution[3],1);
 assert.equal(stats.reviewCount,1);
});
test('ranking pessoal ordena e filtra resenhas sem inventar nota comunitária',()=>{
 const ratings={g0:5,g1:2};
 const comments={g1:{text:'Texto',spoiler:false}};
 assert.deepEqual(review.ranking(games,ratings,comments,{order:'high'}).map(g=>g.id),['g0','g1']);
 assert.deepEqual(review.ranking(games,ratings,comments,{order:'low'}).map(g=>g.id),['g1','g0']);
 assert.deepEqual(review.ranking(games,ratings,comments,{onlyWritten:true}).map(g=>g.id),['g1']);
});
test('interface carrega motor de avaliações antes de bx2 e mantém recursos anteriores',()=>{
 const html=file('index.html'),js=file('bx2.js'),site=file('site.js');
 for(const id of ['bx2Ratings','bx2RatingsList','bx2RatingsCount','bx2RatingsAverage','bx2ReviewsCount','bx2RatingDistribution','bx2RatingOrder','bx2OnlyWithReview'])
  assert.ok(html.includes('id="'+id+'"'),'Componente ausente: '+id);
 assert.ok(html.indexOf('bx-reviews-engine.js')<html.indexOf('bx2.js?v=2.2'));
 assert.match(js,/reviewKey='bx-games-v2-reviews-1'/);
 assert.match(js,/data-bx2-review-save/);
 assert.match(js,/data-bx2-review-delete/);
 assert.match(js,/reviews\};/);
 assert.match(site,/function personalRating/);
 assert.match(site,/state.sort==='rated'/);
 assert.match(html,/id="chatForm"/);
 assert.match(html,/id="gamesGrid"/);
});
