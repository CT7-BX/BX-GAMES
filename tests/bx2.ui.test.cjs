const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const engine=require('../bx2-engine.js');
const reviews=require('../bx-reviews-engine.js');
const source=fs.readFileSync(path.resolve(__dirname,'../bx2.js'),'utf8');
function createUI(){
  const elements=new Map();
  const make=()=>({value:'all',innerHTML:'',textContent:'', listeners:{}, addEventListener(type,fn){this.listeners[type]=fn;},insertAdjacentHTML(_where,html){this.innerHTML+=html;},appendChild(child){this.innerHTML+=(child.innerHTML||'');},scrollIntoView(){}});
  const get=id=>{if(!elements.has(id))elements.set(id,make());return elements.get(id);};
  const body=make(),info=make(),saved={};
  const games=Array.from({length:101},(_,i)=>({id:'g'+i,title:'Jogo '+i,genres:[i%2?'Aventura':'RPG'],mainHours:i===0?6:i===50?50:20,duration:i===0?'short':i===50?'long':'medium',difficulty:i===0?'easy':'medium',mode:'solo',year:2022,tags:[]}));
  const original=[];
  const context={window:{BX2Engine:engine,BXReviews:reviews},games,library:{favorites:[],later:[],played:[]},
    showDialog(id,refresh){original.push([id,refresh]);},
    closeDialog(){},toast(){},escapeHTML:s=>String(s).replaceAll('<','&lt;'),localStorage:{getItem(k){return saved[k]||null;},setItem(k,v){saved[k]=v;}},
    document:{body,getElementById:get,querySelector(q){return q==='#dialogBody .dialog-info'?info:null;},createElement(){return make();}},
    setTimeout(){},Blob:function(){},URL:{createObjectURL(){return 'blob:test';},revokeObjectURL(){}},Date};
  vm.runInNewContext(source,context,{filename:'bx2.js',timeout:1000});
  return {get,body,info,saved,games,original,context};
}
test('interface carrega módulos sem comprometer o catálogo básico',()=>{
  const ui=createUI();
  assert.match(ui.get('bx2CompareResult').innerHTML,/Jogo 0/);
  assert.match(ui.get('bx2CompareResult').innerHTML,/Jogo 50/);
  assert.match(ui.get('bx2LibraryList').innerHTML,/Nenhum jogo em andamento/);
});
test('quiz apresenta sugestões e permite alterar os filtros',()=>{
  const ui=createUI();
  ui.get('bx2Genre').value='RPG';
  ui.get('bx2Time').value='short';
  ui.get('bx2Difficulty').value='easy';
  ui.get('bx2Mode').value='solo';
  ui.get('bx2QuizForm').listeners.submit({preventDefault(){}});
  assert.match(ui.get('bx2QuizResult').innerHTML,/Jogo 0/);
  assert.doesNotMatch(ui.get('bx2QuizResult').innerHTML,/Jogo 50/);
});
test('detalhes antigos continuam sendo invocados antes da extensão v2',()=>{
  const ui=createUI();
  ui.context.showDialog('g0',false);
  assert.deepEqual(ui.original,[['g0',false]]);
  assert.match(ui.info.innerHTML,/Status pessoal/);
  assert.match(ui.info.innerHTML,/Minha nota/);
  assert.match(ui.info.innerHTML,/Pesquisar trailer oficial/);
});
test('status no diálogo é salvo localmente, preservando listas antigas',()=>{
  const ui=createUI();
  const trigger={dataset:{id:'g0',bx2Status:'playing'}};
  ui.body.listeners.click({target:{closest(q){return q==='[data-bx2-status]'?trigger:null;}}});
  assert.equal(JSON.parse(ui.saved['bx-games-v2-profile-1']).status.g0,'playing');
  assert.deepEqual(ui.context.library,{favorites:[],later:[],played:[]});
});

test('avaliação por estrelas atualiza estatísticas e mantém biblioteca antiga',()=>{
  const ui=createUI();
  const trigger={dataset:{id:'g0',bx2Rate:'5'}};
  ui.body.listeners.click({target:{closest(q){return q==='[data-bx2-rate]'?trigger:null;}}});
  assert.equal(JSON.parse(ui.saved['bx-games-v2-profile-1']).ratings.g0,5);
  assert.equal(ui.get('bx2RatingsAverage').textContent,'5,0 / 5');
  assert.match(ui.get('bx2RatingsList').innerHTML,/Jogo 0/);
  assert.deepEqual(ui.context.library,{favorites:[],later:[],played:[]});
});
test('resenha pode ser salva e excluída sem enviar nada à rede',()=>{
  const ui=createUI();
  ui.get('bx2ReviewText').value='Campanha excelente e combate muito bom.';
  ui.get('bx2Spoiler').checked=true;
  const save={dataset:{bx2ReviewSave:'g0'}};
  ui.body.listeners.click({target:{closest(q){return q==='[data-bx2-review-save]'?save:null;}}});
  const text=JSON.parse(ui.saved['bx-games-v2-reviews-1']);
  assert.equal(text.g0.text,'Campanha excelente e combate muito bom.');
  assert.equal(text.g0.spoiler,true);
  assert.equal(ui.get('bx2ReviewsCount').textContent,'1');
  const remove={dataset:{bx2ReviewDelete:'g0'}};
  ui.body.listeners.click({target:{closest(q){return q==='[data-bx2-review-delete]'?remove:null;}}});
  assert.deepEqual(JSON.parse(ui.saved['bx-games-v2-reviews-1']),{});
  assert.equal(ui.get('bx2ReviewsCount').textContent,'0');
});
