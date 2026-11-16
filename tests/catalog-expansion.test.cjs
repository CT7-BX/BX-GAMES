const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const pack = require('../catalog-v2_1.js');
const source = fs.readFileSync(path.join(root,'site.js'),'utf8');
const html = fs.readFileSync(path.join(root,'index.html'),'utf8');
const cut = source.indexOf('const $ = (id)');
if(cut<0)throw new Error('Não foi possível separar os dados do catálogo');
const context = {window:{BX2Expansion:pack}};
const {games,coverURL} = vm.runInNewContext(source.slice(0,cut) + '\n({games,coverURL})',context,{timeout:1500});
test('preserva os IDs legados e publica 126 jogos únicos',()=>{
  assert.equal(pack.rows.length,25);
  assert.equal(games.length,126);
  assert.equal(games[0].title,'Elden Ring');
  assert.equal(games[100].title,'Enter the Gungeon');
  assert.equal(games[101].title,'Cyberpunk 2077');
  assert.equal(new Set(games.map(g=>g.title)).size,126);
});
test('duração e categorias dos 25 títulos novos são válidas',()=>{
  for(const g of games.slice(101)){
    assert.ok(Object.prototype.hasOwnProperty.call(pack.hours,g.title),'Sem tempo: '+g.title);
    assert.ok(g.mainHours>0,'Duração inválida: '+g.title);
    assert.equal(g.duration,g.mainHours<=12?'short':g.mainHours<=35?'medium':'long');
    assert.ok(g.tags.includes('novidade'));
    assert.ok(['solo','both','coop'].includes(g.mode));
    assert.ok(['easy','medium','hard'].includes(g.difficulty));
  }
});
test('capas novas têm fonte definida e código de fallback',()=>{
  for(const g of games.slice(101)){
    assert.ok(coverURL(g.title)||pack.wiki[g.title],'Sem capa alternativa: '+g.title);
  }
  assert.match(source,/function wikipediaCoverURL/);
  assert.match(source,/window.BX2Expansion/);
});
test('menu Novidades carrega módulo antes do catálogo antigo',()=>{
  assert.match(html,/data-view="new"/);
  assert.match(html,/id="newCount"/);
  assert.ok(html.indexOf('catalog-v2_1.js')<html.indexOf('site.js?v=2.1'));
  assert.ok(html.indexOf('site.js?v=2.1')<html.indexOf('bx2-engine.js'));
  assert.match(source,/state.view==='new'/);
});
