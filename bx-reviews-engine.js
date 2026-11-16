/* BX-GAMES 2.2 — avaliações pessoais locais (não são notas da comunidade). */
(function(root){
  'use strict';
  const MAX_REVIEW_LENGTH=800;
  function cleanText(value){
    if(typeof value!=='string')return '';
    return value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g,'').trim().slice(0,MAX_REVIEW_LENGTH);
  }
  function normalizedReviews(raw,ids){
    const allowed=new Set(ids||[]);
    const out={};
    if(!raw||typeof raw!=='object'||Array.isArray(raw))return out;
    for(const [id,item] of Object.entries(raw)){
      if(!allowed.has(id)||!item||typeof item!=='object'||Array.isArray(item))continue;
      const text=cleanText(item.text);
      if(!text)continue;
      const spoiler=item.spoiler===true;
      const date=typeof item.updatedAt==='string'&&!Number.isNaN(Date.parse(item.updatedAt))?new Date(item.updatedAt).toISOString():'';
      out[id]={text,spoiler,updatedAt:date};
    }
    return out;
  }
  function getStats(ratings,reviews,ids){
    const allowed=new Set(ids||[]);
    let count=0,total=0;
    const distribution={1:0,2:0,3:0,4:0,5:0};
    for(const [id,value] of Object.entries(ratings||{})){
      if(allowed.has(id)&&Number.isInteger(value)&&value>=1&&value<=5){count++;total+=value;distribution[value]++;}
    }
    const reviewCount=Object.keys(normalizedReviews(reviews,ids)).length;
    return {count,average:count?Math.round(total/count*10)/10:null,reviewCount,distribution};
  }
  function ranking(games,ratings,reviews,options){
    const allowed=(games||[]).filter(g=>g&&typeof g.id==='string');
    const opts=options||{};
    const validReviews=normalizedReviews(reviews,allowed.map(g=>g.id));
    const filter=opts.onlyWritten===true;
    const order=['high','low','az'].includes(opts.order)?opts.order:'high';
    return allowed.filter(g=>Number.isInteger((ratings||{})[g.id])&&ratings[g.id]>=1&&ratings[g.id]<=5 || Boolean(validReviews[g.id]))
      .filter(g=>!filter||Boolean(validReviews[g.id]))
      .sort((a,b)=>{
        const x=(ratings||{})[a.id]||0,y=(ratings||{})[b.id]||0;
        if(order==='high'&&x!==y)return y-x;
        if(order==='low'&&x!==y)return x-y;
        return a.title.localeCompare(b.title,'pt-BR');
      });
  }
  const BXReviews=Object.freeze({MAX_REVIEW_LENGTH,cleanText,normalizedReviews,getStats,ranking});
  if(root)root.BXReviews=BXReviews;
  if(typeof module!=='undefined'&&module.exports)module.exports=BXReviews;
})(typeof window!=='undefined'?window:globalThis);
