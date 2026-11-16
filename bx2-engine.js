/* BX-GAMES 2.0 — motor puro do quiz e do comparador (sem dependências). */
(function (root) {
  'use strict';
  const allowedStatus = new Set(['playing','paused','abandoned']);
  const allowedGenres = new Set(['RPG','Ação','Aventura','Terror','Corrida','Indie']);
  function safeText(value) { return String(value == null ? '' : value); }
  function normalizeProfile(raw, validIds) {
    const ids = new Set(validIds || []);
    const src = raw && typeof raw === 'object' ? raw : {};
    const status = {}, ratings = {};
    if (src.status && typeof src.status === 'object') {
      for (const [id, value] of Object.entries(src.status)) {
        if (ids.has(id) && allowedStatus.has(value)) status[id] = value;
      }
    }
    if (src.ratings && typeof src.ratings === 'object') {
      for (const [id, value] of Object.entries(src.ratings)) {
        if (ids.has(id) && Number.isInteger(value) && value >= 1 && value <= 5) ratings[id] = value;
      }
    }
    return {status, ratings};
  }
  function quiz(games, prefs, userLibrary) {
    const p = prefs || {}, lib = userLibrary || {};
    const played = new Set(lib.played || []);
    const favorite = new Set(lib.favorites || []);
    const preferences = {genre: safeText(p.genre || 'all'),duration: safeText(p.duration || 'all'),difficulty: safeText(p.difficulty || 'all'),mode:safeText(p.mode || 'all')};
    const scored = (games || []).filter(g => {
      if (played.has(g.id)) return false;
      if (preferences.genre !== 'all' && !g.genres.includes(preferences.genre)) return false;
      if (preferences.duration !== 'all' && g.duration !== preferences.duration) return false;
      if (preferences.difficulty !== 'all' && g.difficulty !== preferences.difficulty) return false;
      if (preferences.mode === 'coop' && !['coop','both'].includes(g.mode)) return false;
      if (preferences.mode === 'solo' && g.mode !== 'solo') return false;
      return true;
    }).map(g => {
      let score = favorite.has(g.id) ? 3 : 0;
      score += (g.tags || []).filter(tag => ['historia','exploracao','combate','curto'].includes(tag)).length;
      if (g.mainHours != null && g.mainHours <= 12 && preferences.duration === 'short') score += 2;
      return {game:g,score};
    });
    scored.sort((a,b)=>b.score-a.score || a.game.title.localeCompare(b.game.title,'pt-BR'));
    return scored.slice(0,5).map(row=>row.game);
  }
  function compare(a, b) {
    if (!a || !b || a.id === b.id) return null;
    return {
      entries: [
        {label:'Ano', first:safeText(a.year), second:safeText(b.year)},
        {label:'Gênero', first:a.genres.join(' · '), second:b.genres.join(' · ')},
        {label:'Campanha principal',first:a.mainHours == null ? 'Duração livre' : '≈ '+a.mainHours+'h', second:b.mainHours == null ? 'Duração livre' : '≈ '+b.mainHours+'h'},
        {label:'Dificuldade',first:({easy:'Acessível',medium:'Moderada',hard:'Desafiadora'})[a.difficulty]||'Não informado',second:({easy:'Acessível',medium:'Moderada',hard:'Desafiadora'})[b.difficulty]||'Não informado'},
        {label:'Modo',first:({solo:'Um jogador',both:'Solo + multi',coop:'Cooperativo'})[a.mode]||'Não informado',second:({solo:'Um jogador',both:'Solo + multi',coop:'Cooperativo'})[b.mode]||'Não informado'}
      ]
    };
  }
  const BX2Engine = Object.freeze({quiz,compare,normalizeProfile,allowedGenres:Array.from(allowedGenres)});
  if (typeof module !== 'undefined' && module.exports) module.exports = BX2Engine;
  if (root) root.BX2Engine = BX2Engine;
})(typeof window !== 'undefined' ? window : globalThis);
