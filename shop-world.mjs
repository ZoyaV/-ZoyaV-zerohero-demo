// A local WebShop-Small storefront. Only the observation is sent to the policy.
let catalog;
let nextGoal = 0;
const words = text => text.toLowerCase().match(/[a-z0-9]+/g) || [];

async function loadCatalog() {
  const response = await fetch(new URL('data/shop-catalog.json',import.meta.url));
  if (!response.ok) throw Error('Could not load the shopping catalog.');
  const {items,goals} = await response.json();
  const frequency = new Map();
  const documents = items.map(item => {
    const terms = new Map();
    const tokens = words([item.Title,item.Description,...item.BulletPoints,...Object.values(item.options).flat()].join(' '));
    for (const t of tokens) terms.set(t,(terms.get(t)||0)+1);
    for (const t of terms.keys()) frequency.set(t,(frequency.get(t)||0)+1);
    return {item,terms,length:tokens.length};
  });
  const average = documents.reduce((s,d)=>s+d.length,0)/documents.length;
  function search(query) {
    const tokens=[...new Set(words(query))];
    return documents.map(({item,terms,length})=>{
      let score=0;
      for(const t of tokens) {
        const count=terms.get(t);
        if(!count) continue;
        const df=frequency.get(t);
        score+=Math.log(1+(items.length-df+.5)/(df+.5))*count*2.2/(count+1.2*(.25+.75*length/average));
      }
      return {item,score};
    }).filter(row=>row.score>0).sort((a,b)=>b.score-a.score).map(row=>row.item);
  }
  return {goals,search};
}

export async function openStore() {
  catalog ??= loadCatalog().catch(error=>{catalog=null;throw error});
  const {goals,search}=await catalog;
  const goal=goals[nextGoal++ % goals.length];
  let results=[], page=0, mode='search', item, options={}, turn=0, done=false;
  const state={instruction:goal.instruction_text,product_images:{}};
  const visible=()=>results.slice(page*10,(page+1)*10);
  function observation() {
    const lines=['WebShop','Instruction:',goal.instruction_text];
    if(mode==='search') lines.push('Search');
    if(mode==='results') {
      lines.push('Back to Search','Page '+(page+1)+' (Total results: '+results.length+')');
      if(page) lines.push('< Prev');
      if((page+1)*10<results.length) lines.push('Next >');
      for(const p of visible()) {lines.push(p.asin,p.Title,p.Price);state.product_images[p.asin]=p.image;}
    }
    if(item) {
      lines.push('Back to Search','< Prev');
      if(mode==='product') {
        for(const [name,values] of Object.entries(item.options)) lines.push(name,...values);
        lines.push(item.Title,'Price: '+item.Price,'Description','Features','Reviews','Attributes','Buy Now');
      } else if(mode==='description') lines.push(item.Description);
      else if(mode==='features') lines.push(...item.BulletPoints);
      else if(mode==='attributes') lines.push(...item.Attributes);
      else lines.push('Reviews');
    }
    return {...state,turn,done,observation:lines.join(' [SEP] '),
      product:item && {asin:item.asin,title:item.Title,price:item.Price,options:{...options}}};
  }
  function step(action) {
    if(done) throw Error('Shopping episode is complete.');
    const match=/^(search|click)\[([^\]]+)\]$/i.exec(action);
    const value=match?.[2].trim().toLowerCase();
    if(match?.[1]==='search' && mode==='search') {
      results=search(value); page=0; mode='results';
    } else if(match?.[1]==='click') {
      if(value==='back to search') {mode='search';item=null;options={};}
      else if(mode==='results') {
        if(value==='next >' && (page+1)*10<results.length) page++;
        else if(value==='< prev' && page) page--;
        else {
          item=visible().find(p=>p.asin.toLowerCase()===value);
          if(item) {mode='product';options={};}
        }
      } else if(item && value==='< prev') {
        if(mode==='product') {mode='results';item=null;}
        else mode='product';
      } else if(mode==='product') {
        if(value==='buy now') {done=true;state.outcome='checkout';}
        else if(['description','features','reviews','attributes'].includes(value)) mode=value;
        else for(const [name,values] of Object.entries(item.options)) {
          const option=values.find(v=>v.toLowerCase()===value);
          if(option) {options[name]=option;break;}
        }
      }
    }
    if(++turn>=50 && !done) {done=true;state.outcome='limit';}
    return observation();
  }
  return {initial:observation(),step};
}
