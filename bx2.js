/* BX-GAMES 2.0 — Etapa 1. Complemento isolado; preserva o catálogo v1.2. */
(function () {
  'use strict';
  if (!window.BX2Engine || !Array.isArray(games) || !document.getElementById('bx2Tools')) return;
  const engine = window.BX2Engine, get = id => document.getElementById(id);
  const storageKey = 'bx-games-v2-profile-1', validIds = games.map(g => g.id);
  const esc = value => escapeHTML(String(value));
  let profile = {status:{},ratings:{}};
  try { profile = engine.normalizeProfile(JSON.parse(localStorage.getItem(storageKey) || '{}'),validIds); }
  catch (_) { profile = engine.normalizeProfile({},validIds); }
  function save() {
    try {localStorage.setItem(storageKey, JSON.stringify(profile));}
    catch (_) {toast('O navegador bloqueou o salvamento local.');}
    renderPersonal();
  }
  function time(g) {return g.mainHours == null ? 'Duração livre' : '≈ '+String(g.mainHours).replace('.',',')+'h';}
  function gameOption(g) {return '<option value="'+esc(g.id)+'">'+esc(g.title)+'</option>';}
  const gameOptions = games.slice().sort((a,b)=>a.title.localeCompare(b.title,'pt-BR')).map(gameOption).join('');
  for (const id of ['bx2CompareA','bx2CompareB']) get(id).insertAdjacentHTML('beforeend',gameOptions);
  get('bx2CompareA').value = 'g0';
  get('bx2CompareB').value = 'g50';
  const titles = {playing:'Jogando',paused:'Pausado',abandoned:'Abandonado'};
  function renderCompare() {
    const a = games.find(g=>g.id===get('bx2CompareA').value);
    const b = games.find(g=>g.id===get('bx2CompareB').value);
    const data = engine.compare(a,b), host=get('bx2CompareResult');
    if (!data) {
      host.innerHTML='<p class="bx2-muted">Escolha dois jogos diferentes para comparar.</p>';return;
    }
    host.innerHTML='<table class="bx2-table"><thead><tr><th>Critério</th><th>'+esc(a.title)+'</th><th>'+esc(b.title)+'</th></tr></thead><tbody>'+
      data.entries.map(row=>'<tr><th scope="row">'+esc(row.label)+'</th><td>'+esc(row.first)+'</td><td>'+esc(row.second)+'</td></tr>').join('')+'</tbody></table>'+
      '<p class="bx2-muted">Duração da história principal: estimativa editorial, não representa 100%.</p>';
  }
  function renderQuiz() {
    const p = {genre:get('bx2Genre').value,duration:get('bx2Time').value,difficulty:get('bx2Difficulty').value,mode:get('bx2Mode').value};
    const results = engine.quiz(games,p,library);
    const host = get('bx2QuizResult');
    if (!results.length) {host.innerHTML='<p class="bx2-muted">Nenhum jogo corresponde a essa combinação. Altere um filtro para ampliar as opções.</p>';return;}
    host.innerHTML = '<div class="bx2-result-list">'+results.map((g,i)=>
      '<button type="button" data-action="details" data-id="'+esc(g.id)+'" class="bx2-result"><span class="bx2-number">'+(i+1)+'</span><span><strong>'+esc(g.title)+'</strong><small>'+esc(g.genres.join(' · '))+' · '+esc(time(g))+'</small></span><span aria-hidden="true">↗</span></button>').join('')+'</div>';
  }
  function renderPersonal() {
    const entries = games.filter(g=>profile.status[g.id]);
    const counts = {playing:0,paused:0,abandoned:0};
    entries.forEach(g=>counts[profile.status[g.id]]++);
    get('bx2LibraryCounts').textContent = 'Jogando '+counts.playing+' · Pausados '+counts.paused+' · Abandonados '+counts.abandoned;
    get('bx2LibraryList').innerHTML = entries.length
      ? '<div class="bx2-result-list">'+entries.map(g=>'<button type="button" class="bx2-result" data-action="details" data-id="'+esc(g.id)+'"><span class="bx2-number">▣</span><span><strong>'+esc(g.title)+'</strong><small>'+esc(titles[profile.status[g.id]])+' · '+esc(time(g))+'</small></span><span aria-hidden="true">↗</span></button>').join('')+'</div>'
      : '<p class="bx2-muted">Nenhum jogo em andamento. Abra os detalhes de um jogo para definir seu status.</p>';
  }
  const oldShowDialog = showDialog;
  showDialog = function bx2ShowDialog(id, refresh) {
    oldShowDialog(id,refresh);
    const g = games.find(item=>item.id===id), info=document.querySelector('#dialogBody .dialog-info');
    if (!g || !info) return;
    const status = profile.status[id] || '', rating = profile.ratings[id] || 0;
    const trailer = 'https://www.youtube.com/results?search_query='+encodeURIComponent(g.title+' trailer oficial PS4 PlayStation');
    const screenshots = 'https://www.google.com/search?tbm=isch&q='+encodeURIComponent(g.title+' PS4 screenshots oficiais');
    const section = document.createElement('section');section.className='bx2-detail-plus';
    section.innerHTML =
      '<h3>Informações e minha biblioteca</h3>'+
      '<div class="bx2-detail-times"><div><small>Campanha principal</small><strong>'+esc(time(g))+'</strong></div><div><small>História + extras</small><strong>A verificar</strong></div><div><small>Conquistar 100%</small><strong>A verificar</strong></div></div>'+
      '<p class="bx2-muted">Tempos extras ainda não publicados para evitar estimativas sem fonte. Valores da campanha são aproximados.</p>'+
      '<div class="bx2-detail-links"><a target="_blank" rel="noopener noreferrer" href="'+trailer+'">Pesquisar trailer oficial ↗</a><a target="_blank" rel="noopener noreferrer" href="'+screenshots+'">Pesquisar imagens ↗</a><button type="button" data-bx2-pick="'+esc(g.id)+'">Colocar no comparador</button></div>'+
      '<div class="bx2-detail-personal"><span>Status pessoal</span><div class="bx2-status-actions">'+['playing','paused','abandoned'].map(key=>'<button type="button" data-bx2-status="'+key+'" data-id="'+esc(id)+'" aria-pressed="'+(status===key)+'" class="'+(status===key?'is-selected':'')+'">'+titles[key]+'</button>').join('')+'<button type="button" data-bx2-status="clear" data-id="'+esc(id)+'">Limpar</button></div>'+
      '<span>Minha nota (privada, neste navegador)</span><div class="bx2-rating" aria-label="Minha avaliação">'+[1,2,3,4,5].map(n=>'<button type="button" data-bx2-rate="'+n+'" data-id="'+esc(id)+'" aria-label="Avaliar com '+n+' estrela'+(n>1?'s':'')+'" aria-pressed="'+(rating===n)+'">'+(n<=rating?'★':'☆')+'</button>').join('')+'<button type="button" class="bx2-rating-clear" data-bx2-rate="0" data-id="'+esc(id)+'">Sem nota</button></div></div>';
    info.appendChild(section);
  };
  document.body.addEventListener('click', ev=>{
    const jump=ev.target.closest('[data-bx2-jump]');
    if (jump) {const target=get('bx2'+jump.dataset.bx2Jump);if(target)target.scrollIntoView({behavior:'smooth',block:'start'});return;}
    const comparePick=ev.target.closest('[data-bx2-pick]');
    if (comparePick) {
      get('bx2CompareA').value=comparePick.dataset.bx2Pick;
      get('bx2CompareB').value=games.find(g=>g.id!==comparePick.dataset.bx2Pick)?.id||'';
      renderCompare();
      closeDialog();
      get('bx2Compare').scrollIntoView({behavior:'smooth',block:'start'});
      return;
    }
    const statusBtn=ev.target.closest('[data-bx2-status]');
    if (statusBtn) {
      const {id, bx2Status:value}=statusBtn.dataset;
      if (!validIds.includes(id)) return;
      if (value==='clear' || profile.status[id]===value) delete profile.status[id];
      else if (Object.prototype.hasOwnProperty.call(titles,value)) profile.status[id]=value;
      save();showDialog(id,true);return;
    }
    const rateBtn=ev.target.closest('[data-bx2-rate]');
    if (rateBtn) {
      const {id,bx2Rate:value}=rateBtn.dataset, n=Number(value);
      if (!validIds.includes(id)||!Number.isInteger(n)||n<0||n>5)return;
      if (n===0) delete profile.ratings[id];else profile.ratings[id]=n;
      save();showDialog(id,true);
    }
  });
  get('bx2QuizForm').addEventListener('submit',e=>{e.preventDefault();renderQuiz();});
  for (const id of ['bx2CompareA','bx2CompareB'])get(id).addEventListener('change',renderCompare);
  get('bx2Export').addEventListener('click',()=>{
    const data={app:'BX-GAMES',format_version:2,exported_at:new Date().toISOString(),lists:library,profile};
    const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
    const objectURL=URL.createObjectURL(blob);
    const link=document.createElement('a');link.href=objectURL;link.download='bx-games-minha-biblioteca.json';
    document.body.appendChild(link);link.click();link.remove();
    setTimeout(()=>URL.revokeObjectURL(objectURL),2000);
    toast('Backup da biblioteca preparado.');
  });
  renderCompare();renderPersonal();
})();
