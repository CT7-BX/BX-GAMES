const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const BX2 = require('../bx2-engine.js');
const root = path.resolve(__dirname,'..');
const file = name => fs.readFileSync(path.join(root,name),'utf8');
const g = (id, title,genre,mainHours,duration,mode,difficulty,tags=[]) =>
  ({id,title,year:2022,genres:[genre],mainHours,duration,mode,difficulty,tags});
const catalog = [
  g('g1','Curto','Aventura',6,'short','solo','easy',['historia','curto']),
  g('g2','Longo','RPG',65,'long','solo','hard',['exploracao']),
  g('g3','Dupla','Aventura',12,'short','coop','medium',['cooperativo']),
  g('g4','Livre','RPG',null,'open','both','medium',['exploracao'])
];
test('quiz respeita gênero, duração, dificuldade e modo',()=>{
  const found = BX2.quiz(catalog,{genre:'Aventura',duration:'short',difficulty:'easy',mode:'solo'},{played:[]});
  assert.deepEqual(found.map(x=>x.id),['g1']);
});
test('quiz não recomenda jogos zerados',()=>{
  const found = BX2.quiz(catalog,{genre:'all',duration:'short',difficulty:'all',mode:'all'},{played:['g1']});
  assert.deepEqual(found.map(x=>x.id),['g3']);
});
test('quiz distingue cooperativo e duração livre',()=>{
  const co = BX2.quiz(catalog,{genre:'all',duration:'all',difficulty:'all',mode:'coop'},{});
  assert.deepEqual(co.map(x=>x.id).sort(),['g3','g4']);
  const open = BX2.quiz(catalog,{genre:'all',duration:'open',difficulty:'all',mode:'all'},{});
  assert.deepEqual(open.map(x=>x.id),['g4']);
});
test('comparador exibe dados de duas obras diferentes e recusa seleção duplicada',()=>{
  const result = BX2.compare(catalog[0],catalog[3]);
  assert.equal(result.entries.length,5);
  assert.equal(result.entries[2].first,'≈ 6h');
  assert.equal(result.entries[2].second,'Duração livre');
  assert.equal(BX2.compare(catalog[0],catalog[0]),null);
});
test('perfil ignora IDs inválidos, notas fora de 1–5 e status desconhecidos',()=>{
  const profile = BX2.normalizeProfile(
    {status:{g1:'playing',g2:'cancelled',g999:'playing'},ratings:{g1:5,g2:7,g3:3.5,g999:4}},
    ['g1','g2','g3']
  );
  assert.deepEqual(profile,{status:{g1:'playing'},ratings:{g1:5}});
});
test('catálogo v1.2 segue com 101 títulos, durações individuais e ações preservadas',()=>{
  const js = file('site.js');
  assert.equal((js.match(/^\['[^\n]+'[,]\d{4},/gm)||[]).length,101);
  assert.match(js,/function renderCatalog\(/);
  assert.match(js,/function renderRecommendations\(/);
  assert.match(js,/function toggleList\(/);
  assert.match(js,/PLAYTIME_HOURS/);
  assert.match(js,/function playtimeLabel\(/);
});
test('v2 expõe quiz, comparação, histórico e mantém ordem dos scripts',()=>{
  const html = file('index.html');
  for(const id of ['bx2Tools','bx2QuizForm','bx2QuizResult','bx2CompareA','bx2CompareB','bx2CompareResult','bx2LibraryList','gameDialog','gamesGrid','chatForm'])
    assert.ok(html.includes('id="'+id+'"'),'Elemento ausente: '+id);
  assert.ok(html.indexOf('site.js') < html.indexOf('bx2-engine.js'));
  assert.ok(html.indexOf('bx2-engine.js') < html.indexOf('bx2.js'));
  assert.match(file('bx2.js'),/oldShowDialog\(id,refresh\)/);
  assert.match(file('bx2.css'),/@media\(max-width:620px\)/);
});
