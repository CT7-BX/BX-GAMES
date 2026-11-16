// Catálogo inicial, curado para jogos lançados no PS4.
// As faixas legadas nas linhas abaixo são recalculadas a partir das horas individuais.
const GAME_ROWS = [
// Nome | ano | categorias | duração | dificuldade | modos | características | selo
['Elden Ring',2022,'RPG,Ação','long','hard','solo','soulslike,mundo-aberto,fantasia,exploracao','🔥'],
['Bloodborne',2015,'RPG,Ação','long','hard','solo','soulslike,terror,fantasia,exclusivo','🌙'],
['Sekiro: Shadows Die Twice',2019,'Ação,Aventura','medium','hard','solo','soulslike,samurai,combate,desafio','⚔️'],
['Dark Souls III',2016,'RPG,Ação','long','hard','solo','soulslike,fantasia,desafio','🔥'],
['Dark Souls Remastered',2018,'RPG,Ação','long','hard','solo','soulslike,fantasia,exploracao','🏰'],
['Dark Souls II: Scholar of the First Sin',2015,'RPG,Ação','long','hard','solo','soulslike,fantasia,exploracao','👑'],
['Lies of P',2023,'RPG,Ação','medium','hard','solo','soulslike,fantasia,combate','🎭'],
['Nioh',2017,'RPG,Ação','long','hard','solo','soulslike,samurai,desafio','🥷'],
['Nioh 2',2020,'RPG,Ação','long','hard','solo','soulslike,samurai,desafio','👹'],
['Mortal Shell',2020,'RPG,Ação','short','hard','solo','soulslike,fantasia,curto','🐚'],
['The Surge 2',2019,'RPG,Ação','medium','hard','solo','soulslike,ficcao-cientifica,desafio','🤖'],
['Code Vein',2019,'RPG,Ação','long','hard','solo','soulslike,anime,combate','🩸'],
['Salt and Sanctuary',2016,'RPG,Indie','medium','hard','solo','soulslike,plataforma,2d','🧂'],
['Blasphemous',2019,'Indie,Ação','medium','hard','solo','soulslike,metroidvania,2d','🕯️'],
['Hollow Knight',2017,'Indie,Aventura','long','hard','solo','metroidvania,2d,exploracao','🦋'],
['Wo Long: Fallen Dynasty',2023,'RPG,Ação','medium','hard','solo','soulslike,fantasia,combate','🐉'],
['Star Wars Jedi: Fallen Order',2019,'Ação,Aventura','medium','medium','solo','ficcao-cientifica,historia,exploracao','✨'],
['Star Wars Jedi: Survivor',2024,'Ação,Aventura','long','medium','solo','ficcao-cientifica,historia,exploracao','🚀'],
['Remnant: From the Ashes',2019,'Ação,RPG','medium','hard','both','soulslike,cooperativo,tiro','💥'],
['God of War',2018,'Ação,Aventura','medium','medium','solo','historia,fantasia,cinematografico','🪓'],
['God of War Ragnarök',2022,'Ação,Aventura','long','medium','solo','historia,fantasia,cinematografico','❄️'],
['Ghost of Tsushima',2020,'Ação,Aventura','long','medium','solo','samurai,mundo-aberto,historia','🍁'],
['The Last of Us Remastered',2014,'Ação,Aventura','medium','medium','solo','historia,cinematografico,sobrevivencia','🌿'],
['The Last of Us Part II',2020,'Ação,Aventura','medium','medium','solo','historia,cinematografico,sobrevivencia','🌧️'],
['Uncharted 4: A Thief’s End',2016,'Ação,Aventura','short','easy','solo','historia,cinematografico,exploracao','🧭'],
['Uncharted: The Lost Legacy',2017,'Ação,Aventura','short','easy','solo','historia,cinematografico,curto','💎'],
['Marvel’s Spider-Man',2018,'Ação,Aventura','medium','easy','solo','mundo-aberto,super-heroi,historia','🕷️'],
['Marvel’s Spider-Man: Miles Morales',2020,'Ação,Aventura','short','easy','solo','mundo-aberto,super-heroi,curto','⚡'],
['Horizon Zero Dawn',2017,'Ação,RPG','long','medium','solo','mundo-aberto,ficcao-cientifica,exploracao','🏹'],
['Horizon Forbidden West',2022,'Ação,RPG','long','medium','solo','mundo-aberto,ficcao-cientifica,exploracao','🦾'],
['Days Gone',2019,'Ação,Aventura','long','medium','solo','mundo-aberto,sobrevivencia,historia','🏍️'],
['Death Stranding',2019,'Aventura,Ação','long','medium','solo','historia,exploracao,ficcao-cientifica','📦'],
['inFAMOUS Second Son',2014,'Ação,Aventura','medium','easy','solo','mundo-aberto,super-heroi,curto','⚡'],
['Shadow of the Colossus',2018,'Ação,Aventura','short','medium','solo','fantasia,exploracao,curto','🗿'],
['The Order: 1886',2015,'Ação,Aventura','short','easy','solo','historia,cinematografico,curto','🎩'],
['Gravity Rush 2',2017,'Ação,Aventura','long','medium','solo','fantasia,mundo-aberto,anime','🌪️'],
['Detroit: Become Human',2018,'Aventura','medium','easy','solo','historia,escolhas,ficcao-cientifica','🦋'],
['Until Dawn',2015,'Terror,Aventura','short','easy','solo','historia,escolhas,curto','🏔️'],
['Heavy Rain',2016,'Aventura','short','easy','solo','historia,escolhas,curto','☔'],
['Beyond: Two Souls',2015,'Aventura','short','easy','solo','historia,escolhas,curto','🌌'],
['Kena: Bridge of Spirits',2021,'Aventura,Ação','short','medium','solo','fantasia,exploracao,curto','🌺'],
['Journey',2015,'Indie,Aventura','short','easy','solo','exploracao,relaxante,curto','🏜️'],
['ABZÛ',2016,'Indie,Aventura','short','easy','solo','exploracao,relaxante,curto','🐠'],
['RiME',2017,'Indie,Aventura','short','easy','solo','exploracao,puzzle,curto','🏝️'],
['Firewatch',2016,'Indie,Aventura','short','easy','solo','historia,exploracao,curto','🌲'],
['What Remains of Edith Finch',2017,'Indie,Aventura','short','easy','solo','historia,exploracao,curto','🏠'],
['Inside',2016,'Indie,Puzzle','short','medium','solo','2d,puzzle,curto','🔴'],
['Limbo',2015,'Indie,Puzzle','short','medium','solo','2d,puzzle,curto','🌑'],
['Little Nightmares',2017,'Terror,Indie','short','medium','solo','puzzle,curto,atmosferico','🧥'],
['Little Nightmares II',2021,'Terror,Indie','short','medium','solo','puzzle,curto,atmosferico','📺'],
['Red Dead Redemption 2',2018,'Ação,Aventura','long','medium','solo','mundo-aberto,historia,exploracao','🤠'],
['Grand Theft Auto V',2014,'Ação,Aventura','long','medium','both','mundo-aberto,historia,exploracao','🌴'],
['The Witcher 3: Wild Hunt',2015,'RPG,Aventura','long','medium','solo','mundo-aberto,fantasia,historia','🐺'],
['The Elder Scrolls V: Skyrim Special Edition',2016,'RPG,Aventura','long','medium','solo','mundo-aberto,fantasia,exploracao','🐉'],
['Fallout 4',2015,'RPG,Ação','long','medium','solo','mundo-aberto,ficcao-cientifica,sobrevivencia','☢️'],
['Assassin’s Creed Origins',2017,'Ação,RPG','long','medium','solo','mundo-aberto,historia,exploracao','🏺'],
['Assassin’s Creed Odyssey',2018,'Ação,RPG','long','medium','solo','mundo-aberto,historia,exploracao','🏛️'],
['Assassin’s Creed Valhalla',2020,'Ação,RPG','long','medium','solo','mundo-aberto,historia,exploracao','🛡️'],
['Kingdom Come: Deliverance',2018,'RPG,Aventura','long','hard','solo','mundo-aberto,historia,exploracao','🏰'],
['Middle-earth: Shadow of War',2017,'Ação,RPG','long','medium','solo','mundo-aberto,fantasia,combate','💍'],
['Mad Max',2015,'Ação,Aventura','medium','medium','solo','mundo-aberto,sobrevivencia,combate','🚙'],
['Resident Evil 2',2019,'Terror,Ação','short','medium','solo','sobrevivencia,curto,atmosferico','🧟'],
['Resident Evil 4',2023,'Terror,Ação','medium','medium','solo','sobrevivencia,atmosferico,historia','🕯️'],
['Resident Evil 7: Biohazard',2017,'Terror,Ação','short','medium','solo','sobrevivencia,curto,atmosferico','🏚️'],
['Resident Evil Village',2021,'Terror,Ação','short','medium','solo','sobrevivencia,curto,atmosferico','🏰'],
['Alien: Isolation',2014,'Terror,Aventura','medium','hard','solo','sobrevivencia,ficcao-cientifica,atmosferico','👽'],
['SOMA',2015,'Terror,Aventura','short','medium','solo','historia,ficcao-cientifica,atmosferico','🌊'],
['The Evil Within 2',2017,'Terror,Ação','medium','medium','solo','sobrevivencia,atmosferico,historia','👁️'],
['DOOM',2016,'Tiro,Ação','medium','medium','solo','tiro,ficcao-cientifica,combate','💥'],
['DOOM Eternal',2020,'Tiro,Ação','medium','hard','solo','tiro,ficcao-cientifica,combate','🔥'],
['Titanfall 2',2016,'Tiro,Ação','short','medium','both','tiro,ficcao-cientifica,curto','🤖'],
['Metro Exodus',2019,'Tiro,Aventura','medium','medium','solo','tiro,sobrevivencia,historia','🚂'],
['Wolfenstein: The New Order',2014,'Tiro,Ação','medium','medium','solo','tiro,historia,combate','⚙️'],
['Minecraft',2014,'Sandbox,Aventura','long','easy','both','criativo,cooperativo,construcao','⛏️'],
['Terraria',2014,'Sandbox,Indie','long','medium','both','criativo,cooperativo,2d','🌳'],
['Stardew Valley',2016,'Simulação,Indie','long','easy','both','relaxante,cooperativo,construcao','🌾'],
['Subnautica',2018,'Sobrevivência,Aventura','long','medium','solo','sobrevivencia,exploracao,ficcao-cientifica','🐬'],
['Subnautica: Below Zero',2021,'Sobrevivência,Aventura','medium','medium','solo','sobrevivencia,exploracao,ficcao-cientifica','🧊'],
['No Man’s Sky',2016,'Sandbox,Aventura','long','medium','both','exploracao,ficcao-cientifica,construcao','🪐'],
['Astroneer',2019,'Sandbox,Aventura','long','easy','both','exploracao,ficcao-cientifica,construcao','🚀'],
['The Forest',2018,'Sobrevivência,Terror','long','medium','both','sobrevivencia,construcao,cooperativo','🌲'],
['Slime Rancher',2017,'Simulação,Indie','medium','easy','solo','relaxante,criativo,exploracao','🟣'],
['Outer Wilds',2019,'Aventura,Indie','medium','medium','solo','exploracao,ficcao-cientifica,puzzle','🪐'],
['F1 24',2024,'Corrida,Esporte','long','medium','both','corrida,simulacao,competitivo','🏎️'],
['Gran Turismo 7',2022,'Corrida,Simulação','long','medium','both','corrida,simulacao,competitivo','🏁'],
['DiRT Rally 2.0',2019,'Corrida,Simulação','long','hard','both','corrida,simulacao,desafio','🚗'],
['Wreckfest',2019,'Corrida,Ação','medium','medium','both','corrida,competitivo,arcade','🚘'],
['Need for Speed Heat',2019,'Corrida,Ação','medium','easy','both','corrida,mundo-aberto,arcade','🚦'],
['Burnout Paradise Remastered',2018,'Corrida,Ação','medium','easy','both','corrida,mundo-aberto,arcade','💨'],
['It Takes Two',2021,'Aventura,Plataforma','medium','easy','coop','cooperativo,puzzle,historia','🧩'],
['A Way Out',2018,'Aventura,Ação','short','easy','coop','cooperativo,historia,curto','🚪'],
['Overcooked! 2',2018,'Indie,Simulação','medium','medium','coop','cooperativo,arcade,divertido','🍳'],
['Rayman Legends',2014,'Plataforma,Indie','medium','medium','both','2d,cooperativo,arcade','🌈'],
['Sackboy: A Big Adventure',2020,'Plataforma,Aventura','medium','easy','both','cooperativo,divertido,arcade','🧶'],
['Cuphead',2017,'Plataforma,Indie','medium','hard','both','2d,desafio,cooperativo','☕'],
['Crash Bandicoot N. Sane Trilogy',2017,'Plataforma,Aventura','medium','medium','solo','arcade,divertido,desafio','🦊'],
['Spyro Reignited Trilogy',2018,'Plataforma,Aventura','medium','easy','solo','arcade,exploracao,divertido','🐉'],
['Celeste',2018,'Plataforma,Indie','short','hard','solo','2d,desafio,curto','🏔️'],
['Hades',2021,'RPG,Indie','medium','hard','solo','roguelike,combate,fantasia','🏺'],
['Dead Cells',2018,'Ação,Indie','medium','hard','solo','roguelike,metroidvania,2d','🧬'],
['Enter the Gungeon',2016,'Ação,Indie','medium','hard','both','roguelike,2d,arcade','🔫'],
];
// Estimativas editoriais da HISTÓRIA PRINCIPAL, em horas. Não representam 100% nem DLC.
// Valores arredondados com base em fontes comunitárias (HowLongToBeat, IsThereAnyDeal)
// e guias de duração. null = sem campanha/objetivo final com tempo fixo.
// Revisado em 16/11/2026. Fontes e limitações no README.
const PLAYTIME_HOURS = Object.freeze({
  "Elden Ring": 60,
  "Bloodborne": 28,
  "Sekiro: Shadows Die Twice": 30,
  "Dark Souls III": 31,
  "Dark Souls Remastered": 30,
  "Dark Souls II: Scholar of the First Sin": 43,
  "Lies of P": 30,
  "Nioh": 35,
  "Nioh 2": 45,
  "Mortal Shell": 10,
  "The Surge 2": 21,
  "Code Vein": 26,
  "Salt and Sanctuary": 16,
  "Blasphemous": 14,
  "Hollow Knight": 27,
  "Wo Long: Fallen Dynasty": 24,
  "Star Wars Jedi: Fallen Order": 17,
  "Star Wars Jedi: Survivor": 21,
  "Remnant: From the Ashes": 15,
  "God of War": 21,
  "God of War Ragnarök": 27,
  "Ghost of Tsushima": 25,
  "The Last of Us Remastered": 15,
  "The Last of Us Part II": 24,
  "Uncharted 4: A Thief’s End": 15,
  "Uncharted: The Lost Legacy": 7,
  "Marvel’s Spider-Man": 17,
  "Marvel’s Spider-Man: Miles Morales": 8,
  "Horizon Zero Dawn": 23,
  "Horizon Forbidden West": 29,
  "Days Gone": 37,
  "Death Stranding": 40,
  "inFAMOUS Second Son": 10,
  "Shadow of the Colossus": 7,
  "The Order: 1886": 7,
  "Gravity Rush 2": 21,
  "Detroit: Become Human": 12,
  "Until Dawn": 8,
  "Heavy Rain": 10,
  "Beyond: Two Souls": 10,
  "Kena: Bridge of Spirits": 10,
  "Journey": 2,
  "ABZÛ": 2,
  "RiME": 5,
  "Firewatch": 4,
  "What Remains of Edith Finch": 2,
  "Inside": 3.5,
  "Limbo": 3.5,
  "Little Nightmares": 4,
  "Little Nightmares II": 5.5,
  "Red Dead Redemption 2": 51,
  "Grand Theft Auto V": 32,
  "The Witcher 3: Wild Hunt": 52,
  "The Elder Scrolls V: Skyrim Special Edition": 34,
  "Fallout 4": 27,
  "Assassin’s Creed Origins": 30,
  "Assassin’s Creed Odyssey": 45,
  "Assassin’s Creed Valhalla": 61,
  "Kingdom Come: Deliverance": 40,
  "Middle-earth: Shadow of War": 22,
  "Mad Max": 20,
  "Resident Evil 2": 9,
  "Resident Evil 4": 16,
  "Resident Evil 7: Biohazard": 9,
  "Resident Evil Village": 10,
  "Alien: Isolation": 18,
  "SOMA": 9,
  "The Evil Within 2": 14,
  "DOOM": 12,
  "DOOM Eternal": 14,
  "Titanfall 2": 6,
  "Metro Exodus": 15,
  "Wolfenstein: The New Order": 11,
  "Minecraft": null,
  "Terraria": 52,
  "Stardew Valley": null,
  "Subnautica": 29,
  "Subnautica: Below Zero": 20,
  "No Man’s Sky": 30,
  "Astroneer": 22,
  "The Forest": 15,
  "Slime Rancher": 14,
  "Outer Wilds": 17,
  "F1 24": null,
  "Gran Turismo 7": 26,
  "DiRT Rally 2.0": null,
  "Wreckfest": 17,
  "Need for Speed Heat": 12,
  "Burnout Paradise Remastered": 14,
  "It Takes Two": 12,
  "A Way Out": 6,
  "Overcooked! 2": 7,
  "Rayman Legends": 17,
  "Sackboy: A Big Adventure": 10,
  "Cuphead": 10,
  "Crash Bandicoot N. Sane Trilogy": 16,
  "Spyro Reignited Trilogy": 14,
  "Celeste": 8,
  "Hades": 22,
  "Dead Cells": 15,
  "Enter the Gungeon": 20,
});
const PALETTES = [ ['#3b171e','#bc303b'],['#171b3e','#6865bf'],['#1d3c40','#2c9e9f'],['#3b251d','#d48c3e'],['#231b35','#8b56bf'],['#29382c','#7ba057'],['#3a1c2f','#d65c89'] ];
const games = GAME_ROWS.map((row,index)=>{
 const [title,year,genres,_oldDuration,difficulty,mode,tags,emoji] = row;
 const [start,end] = PALETTES[index%PALETTES.length];
 const mainHours = Object.prototype.hasOwnProperty.call(PLAYTIME_HOURS,title) ? PLAYTIME_HOURS[title] : null;
 const duration = mainHours == null ? 'open' : mainHours <= 12 ? 'short' : mainHours <= 35 ? 'medium' : 'long';
 return {id:'g'+index,title,year,genres:genres.split(','),duration,mainHours,difficulty,mode,tags:tags.split(','),emoji,start,end};
});
// O valor exibido e o filtro partem da MESMA duração individual.
function playtimeLabel(g){return g.mainHours == null ? 'Duração livre' : '≈ ' + String(g.mainHours).replace('.',',') + 'h';}
const DURATION_LABEL = {short:'Até 12h',medium:'13–35h',long:'Mais de 35h',open:'Duração livre'};
const DIFFICULTY_LABEL = {easy:'Acessível',medium:'Moderada',hard:'Desafiadora'};
const MODE_LABEL = {solo:'Um jogador',both:'Solo + multi',coop:'Cooperativo'};

// BX-GAMES v1.1 — capas promocionais e artes de biblioteca dos jogos.
// URLs de imagens são carregadas diretamente dos fornecedores; nenhuma arte é redistribuída neste repositório.
// A arte da Steam representa o jogo, mas não necessariamente a capa física da edição PS4.
const STEAM_APP_IDS = Object.freeze({
  'Elden Ring':1245620,
  'Sekiro: Shadows Die Twice':814380,
  'Dark Souls III':374320,
  'Dark Souls Remastered':570940,
  'Dark Souls II: Scholar of the First Sin':335300,
  'Lies of P':1627720,
  'Nioh':485510,
  'Nioh 2':1325200,
  'Mortal Shell':1110910,
  'The Surge 2':644830,
  'Code Vein':678960,
  'Salt and Sanctuary':283640,
  'Blasphemous':774361,
  'Hollow Knight':367520,
  'Wo Long: Fallen Dynasty':1448440,
  'Star Wars Jedi: Fallen Order':1172380,
  'Star Wars Jedi: Survivor':1774580,
  'Remnant: From the Ashes':617290,
  'God of War':1593500,
  'God of War Ragnarök':2322010,
  'Horizon Zero Dawn':1151640,
  'Horizon Forbidden West':2420110,
  'Days Gone':1259420,
  'Death Stranding':1190460,
  'Detroit: Become Human':1222140,
  'Until Dawn':2172010,
  'Heavy Rain':960910,
  'Beyond: Two Souls':960990,
  'Kena: Bridge of Spirits':1954200,
  'Journey':638230,
  'ABZÛ':384190,
  'RiME':493200,
  'Firewatch':383870,
  'What Remains of Edith Finch':501300,
  'Inside':304430,
  'Limbo':48000,
  'Little Nightmares':424840,
  'Little Nightmares II':860510,
  'Red Dead Redemption 2':1174180,
  'Grand Theft Auto V':271590,
  'The Witcher 3: Wild Hunt':292030,
  'The Elder Scrolls V: Skyrim Special Edition':489830,
  'Fallout 4':377160,
  'Assassin’s Creed Origins':582160,
  'Assassin’s Creed Odyssey':812140,
  'Assassin’s Creed Valhalla':2208920,
  'Kingdom Come: Deliverance':379430,
  'Middle-earth: Shadow of War':356190,
  'Mad Max':234140,
  'Resident Evil 2':883710,
  'Resident Evil 4':2050650,
  'Resident Evil 7: Biohazard':418370,
  'Resident Evil Village':1196590,
  'Alien: Isolation':214490,
  'SOMA':282140,
  'The Evil Within 2':601430,
  'DOOM':379720,
  'DOOM Eternal':782330,
  'Titanfall 2':1237970,
  'Metro Exodus':412020,
  'Wolfenstein: The New Order':201810,
  'Terraria':105600,
  'Stardew Valley':413150,
  'Subnautica':264710,
  'Subnautica: Below Zero':848450,
  'No Man’s Sky':275850,
  'Astroneer':361420,
  'The Forest':242760,
  'Slime Rancher':433340,
  'Outer Wilds':753640,
  'F1 24':2488620,
  'DiRT Rally 2.0':690790,
  'Wreckfest':228380,
  'Need for Speed Heat':1222680,
  'Burnout Paradise Remastered':1238080,
  'It Takes Two':1426210,
  'A Way Out':1222700,
  'Overcooked! 2':728880,
  'Rayman Legends':242550,
  'Sackboy: A Big Adventure':1599660,
  'Cuphead':268910,
  'Crash Bandicoot N. Sane Trilogy':731490,
  'Spyro Reignited Trilogy':996580,
  'Celeste':504230,
  'Hades':1145360,
  'Dead Cells':588650,
  'Enter the Gungeon':311690
});

// Originais físicos PS4 quando existe um endereço direto público conhecido.
// Links podem expirar; o site possui fallback pela Wikipédia para estes títulos.
const PS4_BOX_ART = Object.freeze({
  'Bloodborne':'https://i.pinimg.com/originals/a2/8b/eb/a28bebcfc2a04d792bc4fc607f41206c.jpg',
  'Ghost of Tsushima':'https://www.powerupgaming.ca/cdn/shop/products/ghost.jpg?v=1702966738&width=800',
  'The Last of Us Remastered':'https://product.hstatic.net/1000154920/product/the_20last_20of_20us_20remastered_master.png',
  'Gran Turismo 7':'https://cdn.ozone.bg/media/catalog/product/g/r/gran_turismo_7_ps4_1647256934_0.jpg'
});

// Títulos mapeados para páginas inequívocas de videogames, para não exibir imagens de filmes/livros homônimos.
const WIKIPEDIA_PAGES = Object.freeze({
  'Bloodborne':'Bloodborne',
  'Ghost of Tsushima':'Ghost of Tsushima',
  'The Last of Us Remastered':'The Last of Us',
  'The Last of Us Part II':'The Last of Us Part II',
  'Uncharted 4: A Thief’s End':'Uncharted 4: A Thief’s End',
  'Uncharted: The Lost Legacy':'Uncharted: The Lost Legacy',
  'Marvel’s Spider-Man':'Spider-Man (2018 video game)',
  'Marvel’s Spider-Man: Miles Morales':'Spider-Man: Miles Morales',
  'inFAMOUS Second Son':'Infamous Second Son',
  'Shadow of the Colossus':'Shadow of the Colossus (2018 video game)',
  'The Order: 1886':'The Order: 1886',
  'Gravity Rush 2':'Gravity Rush 2',
  'Minecraft':'Minecraft',
  'Gran Turismo 7':'Gran Turismo 7'
});

function coverURL(title){
  if(PS4_BOX_ART[title]) return PS4_BOX_ART[title];
  const id=STEAM_APP_IDS[title];
  return id ? `https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/${id}/library_600x900.jpg` : null;
}

const wikiPromises = new Map();
// Consulta pública e sem chave. Wikipedia exige origin=* para CORS no Action API.
function wikipediaCoverURL(title) {
  const page=WIKIPEDIA_PAGES[title];
  if(!page) return Promise.resolve(null);
  if(wikiPromises.has(title)) return wikiPromises.get(title);
  const params = new URLSearchParams({action:'query',prop:'pageimages',titles:page,pithumbsize:'650',piprop:'thumbnail',pilicense:'any',redirects:'1',format:'json',origin:'*'});
  const promise=fetch('https://en.wikipedia.org/w/api.php?'+params.toString(),{credentials:'omit'})
    .then(r=>{if(!r.ok)throw new Error('Wikipedia indisponível');return r.json();})
    .then(data=>{
      const entry=Object.values(data?.query?.pages||{}).find(p=>!p.missing&&p.thumbnail?.source);
      if(!entry)return null;
      const thumb=entry.thumbnail;
      // Capas normalmente são verticais; rejeita logos e faixas panorâmicas.
      if(thumb.height && thumb.width/ thumb.height > 1.32)return null;
      const url=new URL(thumb.source);
      return (url.protocol==='https:' && url.hostname==='upload.wikimedia.org')?url.href:null;
    }).catch(()=>null);
  wikiPromises.set(title,promise);
  return promise;
}

const $ = (id) => document.getElementById(id);
const DEFAULT = { favorites:[],later:[],played:[] };
const cloneDefault = () => ({favorites:[],later:[],played:[]});
const storageKey = 'bx-games-library-v1';
let library=cloneDefault();
try { const parsed=JSON.parse(localStorage.getItem(storageKey)||'{}');for (const key of Object.keys(DEFAULT)) if(Array.isArray(parsed[key])) library[key]=parsed[key].filter(id=>games.some(g=>g.id===id));} catch {/* Browser may block storage */}
const state={view:'discover',query:'',genre:'all',duration:'all',difficulty:'all',mode:'all',tag:'all',sort:'featured',visible:16};
const normalize = (s) => String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
const escapeHTML = (s) => String(s).replace(/[&<>"']/g,(char)=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const allGenres = [...new Set(games.flatMap(g=>g.genres))].sort((a,b)=>a.localeCompare(b,'pt-BR'));
$('genreFilter').insertAdjacentHTML('beforeend',allGenres.map(g=>`<option value="${escapeHTML(g)}">${escapeHTML(g)}</option>`).join(''));
$('heroCount').textContent=String(games.length);
let toastTimeout;
function toast(message){const box=$('toast');box.textContent=message;box.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>box.classList.remove('show'),2400);}
function saveLibrary(){try{localStorage.setItem(storageKey,JSON.stringify(library));}catch{toast('Seu navegador bloqueou o salvamento local.');}updateProfile();}
function updateProfile(){for(const key of Object.keys(DEFAULT)){const el=$({favorites:'favoritesCount',later:'laterCount',played:'playedCount'}[key]);el.textContent=String(library[key].length);} $('profileFav').textContent=String(library.favorites.length);$('profileLater').textContent=String(library.later.length);$('profilePlayed').textContent=String(library.played.length);}
function toggleList(key,id){const game=games.find(g=>g.id===id);if(!game)return;const index=library[key].indexOf(id);if(index>=0){library[key].splice(index,1);toast(`Removido de ${listName(key)}.`);}else{library[key].push(id);toast(`Adicionado a ${listName(key)}.`);}saveLibrary();renderCatalog();renderFeatured();if($('gameDialog').open) showDialog(id,true);}
function listName(key){return {favorites:'favoritos',later:'quero jogar',played:'já zerei'}[key]||key;}
function baseFiltered(){let items=games.filter(g=>{
 if(state.view==='favorites'&&!library.favorites.includes(g.id))return false;
 if(state.view==='later'&&!library.later.includes(g.id))return false;
 if(state.view==='played'&&!library.played.includes(g.id))return false;
 if(state.view==='quick'&&g.duration!=='short')return false;
 if(state.genre!=='all'&&!g.genres.includes(state.genre))return false;
 if(state.duration!=='all'&&g.duration!==state.duration)return false;
 if(state.difficulty!=='all'&&g.difficulty!==state.difficulty)return false;
 if(state.mode==='solo'&&g.mode!=='solo')return false;
 if(state.mode==='multi'&&!['both','coop'].includes(g.mode))return false;
 if(state.mode==='coop'&&!['coop','both'].includes(g.mode))return false;
 if(state.tag!=='all'&&!g.tags.includes(state.tag))return false;
 if(state.query&&!normalize([g.title,...g.genres,...g.tags].join(' ')).includes(normalize(state.query)))return false;
 return true;
 });
 if(state.sort==='shortest')items.sort((a,b)=>(a.mainHours==null?Infinity:a.mainHours)-(b.mainHours==null?Infinity:b.mainHours)||a.title.localeCompare(b.title,'pt-BR'));
 else if(state.sort==='longest')items.sort((a,b)=>(b.mainHours==null?-Infinity:b.mainHours)-(a.mainHours==null?-Infinity:a.mainHours)||a.title.localeCompare(b.title,'pt-BR'));
 else if(state.sort==='az')items.sort((a,b)=>a.title.localeCompare(b.title,'pt-BR'));
 else if(state.sort==='new')items.sort((a,b)=>b.year-a.year||a.title.localeCompare(b.title));
 else if(state.sort==='old')items.sort((a,b)=>a.year-b.year||a.title.localeCompare(b.title));
 return items;}
// Renderiza artes verdadeiras da edição disponível; mantém fallback visual se o provedor falhar.
function coverImg(g) {
 const url=coverURL(g.title);
 const src=url?` src="${escapeHTML(url)}"`:'';
 return `<img class="real-cover" data-game-cover="${g.id}"${src} alt="Capa do jogo ${escapeHTML(g.title)}" loading="lazy" decoding="async" referrerpolicy="no-referrer">`;
}
function hydrateCovers(scope=document){
 scope.querySelectorAll('img[data-game-cover]').forEach(img=>{
  if(img.dataset.coverBound)return;
  img.dataset.coverBound='1';
  const game=games.find(g=>g.id===img.dataset.gameCover);
  if(!game)return;
  const onSuccess=()=>img.parentElement?.classList.add('cover-loaded');
  const onError=async()=>{
   if(img.dataset.coverWikiAttempted)return;
   img.dataset.coverWikiAttempted='1';
   const backup=await wikipediaCoverURL(game.title);
   if(backup && img.isConnected && backup!==img.src){img.src=backup;return;}
   img.removeAttribute('src');
   img.parentElement?.classList.remove('cover-loaded');
  };
  img.addEventListener('load',onSuccess);
  img.addEventListener('error',onError);
  if(img.getAttribute('src')){
   if(img.complete){if(img.naturalWidth>0)onSuccess();else onError();}
  } else {onError();}
 });
}
function cardHTML(g){const fav=library.favorites.includes(g.id),later=library.later.includes(g.id),played=library.played.includes(g.id);
return `<article class="game-card"><div class="cover" style="--start:${g.start};--end:${g.end}">${coverImg(g)}<span class="cover-symbol" aria-hidden="true">${g.emoji}</span><span class="cover-top">PS4 · ${g.year}</span><button class="cover-heart ${fav?'selected':''}" data-action="favorites" data-id="${g.id}" aria-label="${fav?'Remover dos':'Adicionar aos'} favoritos" title="Favoritar">${fav?'♥':'♡'}</button><button class="game-title-button cover-title" style="position:relative;color:white;min-height:0;text-align:center" data-action="details" data-id="${g.id}">${escapeHTML(g.title)}</button></div><div class="game-content"><button class="game-title-button" data-action="details" data-id="${g.id}">${escapeHTML(g.title)}</button><div class="game-tags">${escapeHTML(g.genres.join(' · '))}</div><div class="game-footer"><span><b>◷</b> ${playtimeLabel(g)}</span><div class="mini-actions"><button class="${later?'active':''}" data-action="later" data-id="${g.id}" title="${later?'Remover de quero jogar':'Quero jogar'}" aria-label="Quero jogar ${escapeHTML(g.title)}">▤</button><button class="${played?'active':''}" data-action="played" data-id="${g.id}" title="${played?'Desmarcar zerado':'Marcar zerado'}" aria-label="Marcar ${escapeHTML(g.title)} como zerado">✓</button></div></div></div></article>`;}
function renderCatalog(){const filtered=baseFiltered();$('resultsCount').textContent=`${filtered.length} ${filtered.length===1?'jogo':'jogos'}`;const visible=filtered.slice(0,state.visible);$('gamesGrid').innerHTML=visible.length?visible.map(cardHTML).join(''):`<div class="empty-state"><strong>Sem jogos por aqui</strong><p>${['favorites','later','played'].includes(state.view)?'Marque jogos na biblioteca para vê-los aqui.':'Tente combinar outros filtros ou limpar a busca.'}</p></div>`;$('loadMore').hidden=filtered.length<=state.visible;hydrateCovers($('gamesGrid'));}
function renderFeatured(){const picks=[games[0],games[24],games[50]];$('featuredGrid').innerHTML=picks.map((g,index)=>`<button type="button" class="featured-card" style="--start:${g.start};--end:${g.end}" data-action="details" data-id="${g.id}" data-emoji="${g.emoji}">${coverImg(g)}<span class="featured-badge">${['⚔ PARA OS CORAJOSOS','⚡ CAMPANHA CURTA','◇ MUNDO ABERTO'][index]}</span><h3>${escapeHTML(g.title)}</h3><small>${escapeHTML(g.genres.join(' · '))} · ${playtimeLabel(g)}</small></button>`).join('');hydrateCovers($('featuredGrid'));}
const viewTitles={discover:['Descobrir','Catálogo PS4','Encontre o jogo certo para o seu momento.'],recommend:['Para você','Jogos para você','Sugestões baseadas em seus favoritos e histórico.'],quick:['Zerar rápido','Jogos para zerar rápido','Campanhas curtas para aproveitar sem enrolação.'],favorites:['Favoritos','Meus favoritos','Seus jogos preferidos em um só lugar.'],later:['Quero jogar','Quero jogar','Sua lista para a próxima jogatina.'],played:['Já zerei','Jogos zerados','Acompanhe suas conquistas pessoais.']};
function setView(view){state.view=view;state.visible=16;document.querySelectorAll('.nav-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===view));const [crumb,title,subtitle]=viewTitles[view];$('breadcrumb').textContent=crumb;$('catalogTitle').innerHTML=`${title} <span class="red-line">—</span>`;$('catalogCaption').textContent=subtitle;const featuredVisible=view==='discover';$('pickSection').hidden=!featuredVisible;$('featuredGrid').hidden=!featuredVisible;if(view==='recommend'){renderRecommendations('Quero recomendações de acordo com meus favoritos e jogos zerados',true);}renderCatalog();$('catalogAnchor').scrollIntoView({behavior:'smooth',block:'start'});}
function clearFilters(){state.query='';state.genre='all';state.duration='all';state.difficulty='all';state.mode='all';state.tag='all';state.sort='featured';state.visible=16;$('search').value='';for(const id of ['genreFilter','durationFilter','difficultyFilter','modeFilter'])$(id).value='all';$('sort').value='featured';document.querySelectorAll('.chip').forEach(b=>b.classList.toggle('active',b.dataset.tag==='all'));renderCatalog();}
function showDialog(id,refresh=false){const g=games.find(game=>game.id===id);if(!g)return;
 $('dialogBody').innerHTML=`<div class="dialog-art" style="--start:${g.start};--end:${g.end}">${coverImg(g)}<span class="dialog-symbol">${g.emoji}</span></div><div class="dialog-info"><span class="kicker">PS4 · LANÇAMENTO ${g.year}</span><h2>${escapeHTML(g.title)}</h2><div class="dialog-meta"><span>${escapeHTML(g.genres.join(' · '))}</span><span>◷ ${playtimeLabel(g)}</span><span>◆ ${DIFFICULTY_LABEL[g.difficulty]}</span><span>◈ ${MODE_LABEL[g.mode]}</span></div><p>Para quem gosta de ${escapeHTML(g.tags.slice(0,3).map(t=>t.replace(/-/g,' ')).join(', '))}. A duração é uma estimativa editorial da campanha/experiência e pode variar bastante conforme seu estilo de jogo.</p><div class="dialog-buttons"><button data-action="favorites" data-id="${g.id}" class="${library.favorites.includes(g.id)?'active':''}">♡ ${library.favorites.includes(g.id)?'Favorito ✓':'Favoritar'}</button><button data-action="later" data-id="${g.id}" class="${library.later.includes(g.id)?'active':''}">▤ ${library.later.includes(g.id)?'Na lista ✓':'Quero jogar'}</button><button data-action="played" data-id="${g.id}" class="${library.played.includes(g.id)?'active':''}">✓ ${library.played.includes(g.id)?'Já zerei ✓':'Marcar zerado'}</button><button data-action="similar" data-id="${g.id}">✧ Ver parecidos</button></div></div>`;
 hydrateCovers($('dialogBody'));
 if(!refresh&&!$('gameDialog').open){const d=$('gameDialog');if(typeof d.showModal==='function')d.showModal();else d.setAttribute('open','');}}
// Explicável e determinístico: analisa termos em português, perfil e similaridade.
const concepts=[
 {terms:['soulslike','souls','dark souls','elden ring','bloodborne','lies of p'],tags:['soulslike'],genres:['RPG'],why:'combate desafiador e estilo soulslike'},
 {terms:['mundo aberto','open world','explorar','exploracao','livre'],tags:['mundo-aberto','exploracao'],why:'exploração e liberdade'},
 {terms:['curto','rapido','zerar rapido','pouco tempo','10 horas','12 horas'],duration:'short',tags:['curto'],why:'campanha mais curta'},
 {terms:['longo','muitas horas','duradouro','demorado'],duration:'long',why:'experiência longa'},
 {terms:['dificil','desafiador','hardcore','desafio'],difficulty:'hard',tags:['desafio'],why:'dificuldade elevada'},
 {terms:['facil','tranquilo','relaxante','calmo','de boa'],difficulty:'easy',tags:['relaxante'],why:'ritmo mais tranquilo'},
 {terms:['historia','narrativa','enredo','cinematografico'],tags:['historia','cinematografico'],why:'história marcante'},
 {terms:['terror','medo','assustador','horror'],genres:['Terror'],why:'clima de terror'},
 {terms:['corrida','carro','f1','formula 1'],genres:['Corrida'],why:'corridas'},
 {terms:['rpg','fantasia','magia'],genres:['RPG'],tags:['fantasia'],why:'RPG e fantasia'},
 {terms:['sobrevivencia','craft','construir','construcao'],genres:['Sobrevivência','Sandbox'],tags:['construcao'],why:'sobrevivência e criação'},
 {terms:['coop','cooperativo','amigo','amigos','dupla','2 jogadores','dois jogadores'],mode:'coop',tags:['cooperativo'],why:'jogar acompanhado'},
 {terms:['offline','sozinho','single player','singleplayer','um jogador'],mode:'solo',why:'experiência de um jogador'},
 {terms:['plataforma','2d'],genres:['Plataforma'],tags:['2d'],why:'plataformas'},
 {terms:['tiro','fps'],genres:['Tiro'],why:'jogos de tiro'},
];
function matchedConcept(c,q){return c.terms.some(t=>q.includes(normalize(t)));}
function recommendations(text='',useProfile=true,similarId=null){const q=normalize(text);const active=concepts.filter(c=>matchedConcept(c,q));const savedFavorites=games.filter(g=>library.favorites.includes(g.id));let similar=similarId?games.find(g=>g.id===similarId):null;
 if(!similar){const match=games.filter(g=>normalize(g.title).length>6).sort((a,b)=>normalize(b.title).length-normalize(a.title).length).find(g=>q.includes(normalize(g.title)));if(match)similar=match;}
 const excluding=new Set([...library.played]);if(similar)excluding.add(similar.id);
 let results=games.map((g,index)=>{let score=2-index/100;const reasons=[];for(const c of active){let match=false;if(c.tags?.some(t=>g.tags.includes(t))){score+=7;match=true;}if(c.genres?.some(t=>g.genres.includes(t))){score+=5;match=true;}if(c.duration===g.duration){score+=9;match=true;}if(c.difficulty===g.difficulty){score+=5;match=true;}if(c.mode==='solo'&&g.mode==='solo'){score+=6;match=true;}if(c.mode==='coop'&&['coop','both'].includes(g.mode)){score+=7;match=true;}if(match&&c.why)reasons.push(c.why);}
 if(similar){const sharedTags=g.tags.filter(t=>similar.tags.includes(t));const sharedGenres=g.genres.filter(t=>similar.genres.includes(t));score+=sharedTags.length*6+sharedGenres.length*3;if(sharedTags.length)reasons.push(`parecido com ${similar.title}`);}
 if(useProfile&&savedFavorites.length){let affinity=0;for(const f of savedFavorites){if(f.id===g.id)continue;affinity+=g.tags.filter(t=>f.tags.includes(t)).length*1.3+g.genres.filter(t=>f.genres.includes(t)).length;}score+=Math.min(12,affinity);if(affinity>2)reasons.push('combina com seus favoritos');}
 if(library.favorites.includes(g.id))score-=6;
 if(library.later.includes(g.id))score+=2;
 if(excluding.has(g.id))score-=200;
 return {g,score,reasons:[...new Set(reasons)]};}).sort((a,b)=>b.score-a.score||a.g.title.localeCompare(b.g.title));
 if(!active.length&&!similar&&!savedFavorites.length&&useProfile===false){results=results.sort((a,b)=>a.g.title.localeCompare(b.g.title));}
 return {items:results.filter(x=>x.score>-100).slice(0,4),active,similar};}
function chatMessage(text,type='assistant',buttons=''){const div=document.createElement('div');div.className=`chat-message ${type}`;div.innerHTML=escapeHTML(text)+(buttons?`<div class="chat-picks">${buttons}</div>`:'');$('chatLog').append(div);$('chatLog').scrollTop=$('chatLog').scrollHeight;}
function renderRecommendations(input,quiet=false,similarId=null){const clean=input.trim();if(!clean&&!similarId)return;if(!quiet)chatMessage(clean,'user');const {items,active,similar}=recommendations(clean,true,similarId);if(!items.length){chatMessage('Não encontrei sugestões novas. Tente ajustar suas preferências ou marque menos jogos como zerados.');return;}
 const context=similar?`parecidos com ${similar.title}`:active.length?`${active.slice(0,2).map(c=>c.why).join(' + ')}`:library.favorites.length?'no seu perfil':'no catálogo disponível';
 const buttons=items.map(({g,reasons})=>`<button data-action="details" data-id="${g.id}" title="${escapeHTML(reasons.join(', '))}"><span>${escapeHTML(g.emoji)} ${escapeHTML(g.title)}</span> ↗</button>`).join('');
 chatMessage(`Separei estas opções com base ${context}. Toque em um jogo para ver detalhes:`, 'assistant',buttons);
 if(quiet){setTimeout(()=>{const el=document.querySelector('.rightbar');if(el)el.scrollIntoView({behavior:'smooth',block:'start'});},100);}}
function surprise(){const available=games.filter(g=>!library.played.includes(g.id));const pool=baseFiltered().filter(g=>!library.played.includes(g.id));const list=pool.length?pool:available.length?available:games;const g=list[Math.floor(Math.random()*list.length)];showDialog(g.id);}
function handleAction(button){const {action,id}=button.dataset;if(!action||!id)return;if(['favorites','later','played'].includes(action))toggleList(action,id);else if(action==='details')showDialog(id);else if(action==='similar'){const g=games.find(g=>g.id===id);closeDialog();renderRecommendations(`Quero jogos parecidos com ${g?g.title:''}`,false,id);document.querySelector('.rightbar').scrollIntoView({behavior:'smooth'});}}
document.body.addEventListener('click',ev=>{const action=ev.target.closest('[data-action]');if(action){handleAction(action);return;}const nav=ev.target.closest('.nav-btn');if(nav)setView(nav.dataset.view);const chip=ev.target.closest('.chip');if(chip){state.tag=chip.dataset.tag;state.visible=16;document.querySelectorAll('.chip').forEach(b=>b.classList.toggle('active',b===chip));renderCatalog();}const suggested=ev.target.closest('[data-prompt]');if(suggested)renderRecommendations(suggested.dataset.prompt);});
$('search').addEventListener('input',e=>{state.query=e.target.value;state.visible=16;renderCatalog();});
for(const [id,key] of [['genreFilter','genre'],['durationFilter','duration'],['difficultyFilter','difficulty'],['modeFilter','mode'],['sort','sort']])$(id).addEventListener('change',e=>{state[key]=e.target.value;state.visible=16;renderCatalog();});
$('loadMore').addEventListener('click',()=>{state.visible+=16;renderCatalog();});
$('resetFilters').addEventListener('click',clearFilters);
$('recommendHero').addEventListener('click',()=>setView('recommend'));
$('randomHero').addEventListener('click',surprise);
$('surpriseTop').addEventListener('click',surprise);
$('scrollCatalog').addEventListener('click',()=>$('catalogAnchor').scrollIntoView({behavior:'smooth'}));
$('profileRecommend').addEventListener('click',()=>renderRecommendations('Indique jogos com base no meu perfil'));
$('chatForm').addEventListener('submit',e=>{e.preventDefault();const input=$('chatInput');renderRecommendations(input.value);input.value='';});
function closeDialog(){const d=$('gameDialog');if(typeof d.close==='function')d.close();else d.removeAttribute('open');}
$('closeDialog').addEventListener('click',closeDialog);
$('gameDialog').addEventListener('click',e=>{if(e.target===$('gameDialog'))closeDialog();});
updateProfile();renderFeatured();renderCatalog();