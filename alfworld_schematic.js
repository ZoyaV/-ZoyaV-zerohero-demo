/* Conservative reconstruction from recorded public observations only. */
function reconstructScene(trace, index, after) {
  const s = {places: {}, objects: {}, location: '', inventoryKnown: false, evidence: 0};
  const ids = text => [...text.matchAll(/\b([a-z][a-z0-9]* \d+)\b/gi)].map(m => m[1].toLowerCase());
  const place = name => s.places[name] ||= {visited: false, inspected: false, door: ''};
  const move = (name, location) => { s.objects[name] ||= {tags: []}; s.objects[name].location = location; };
  function observe(raw) {
    const text = (raw || '').split('Your task is to:')[0];
    if (!text) return;
    s.evidence++;
    const room = text.match(/Looking quickly around you, you see ([^.]+)/i);
    if (room) ids(room[1]).forEach(place);
    if (/You are in the middle of a room/i.test(text)) s.location = 'Room center';
    let m;
    if ((m = text.match(/You arrive at ([a-z]+ \d+)/i))) { s.location = m[1]; place(m[1]).visited = true; }
    function contents(name, listing) {
      place(name).inspected = true;
      const visible = ids(listing);
      for (const [object, value] of Object.entries(s.objects))
        if (value.location === name && !visible.includes(object)) value.location = '';
      visible.forEach(object => move(object, name));
    }
    for (m of text.matchAll(/(?:On|In) the ([a-z]+ \d+), you see ([^.]+)/gi)) contents(m[1], m[2]);
    for (m of text.matchAll(/The ([a-z]+ \d+) is open\. In it, you see ([^.]+)/gi)) contents(m[1], m[2]);
    for (m of text.matchAll(/(?:The |You (?:open|close) the )([a-z]+ \d+)(?: is (open|closed))?/gi)) {
      if (m[2]) place(m[1]).door = m[2];
      else if (/You open/i.test(m[0])) place(m[1]).door = 'open';
      else if (/You close/i.test(m[0])) place(m[1]).door = 'closed';
    }
    if ((m = text.match(/You pick up the ([a-z]+ \d+) from the ([a-z]+ \d+)/i))) {
      move(m[1], 'inventory'); s.inventoryKnown = true;
    }
    if ((m = text.match(/You (?:put|move) the ([a-z]+ \d+) (?:in\/on|on|in|to) the ([a-z]+ \d+)/i))) {
      place(m[2]); move(m[1], m[2]); s.inventoryKnown = true;
    }
    for (m of text.matchAll(/You (heat|cool|clean) the ([a-z]+ \d+)/gi)) {
      s.objects[m[2]] ||= {tags: [], location: ''};
      const tag = {heat:'heated',cool:'cooled',clean:'cleaned'}[m[1].toLowerCase()];
      s.objects[m[2]].tags = s.objects[m[2]].tags.filter(t => !(['heated','cooled'].includes(tag) && ['heated','cooled'].includes(t)));
      if (!s.objects[m[2]].tags.includes(tag)) s.objects[m[2]].tags.push(tag);
    }
  }
  for (let i = 0; i <= index && i < trace.length; i++) {
    const t = trace[i];
    observe(t.observation);
    const inv = (t.prompt || '').match(/^Inventory:\s*(.*)$/m);
    if (inv) {
      s.inventoryKnown = true;
      const held = ids(inv[1]);
      for (const [name,o] of Object.entries(s.objects)) if (o.location === 'inventory' && !held.includes(name)) o.location = '';
      held.forEach(name => move(name, 'inventory'));
    }
    if (i < index || after) observe(t.after);
  }
  return s;
}
function resizeSceneGraph() {
  const root=document.getElementById('scenePlaces');
  const svg=root.querySelector('svg');
  if(!svg || !root.clientWidth || !root.clientHeight) return;
  const box=svg.viewBox.baseVal;
  const scale=Math.min((root.clientWidth-4)/box.width,(root.clientHeight-4)/box.height)*document.getElementById('sceneZoom').value/100;
  svg.style.width=box.width*scale+'px'; svg.style.height=box.height*scale+'px';
  for(const label of svg.querySelectorAll('text')) {
    const base=Number(label.dataset.baseSize);
    label.setAttribute('font-size',Math.max(base,(base===18?10:9)/scale));
  }
  for(const circle of svg.querySelectorAll('circle')) {
    const base=Number(circle.dataset.baseRadius);
    circle.setAttribute('r',Math.max(base,(base>=24?7:base>=19?6:4)/scale));
  }
}
// Fixed receptacle anchors keep the scene stable while stepping through a trace.
function drawSchematic(episode, index) {
  const after = document.getElementById('scenePhase').value === 'after';
  const s = reconstructScene(episode.trace, index, after);
  const previous = reconstructScene(episode.trace, after ? index : index - 1, !after);
  const all = reconstructScene(episode.trace, episode.trace.length - 1, true);
  const names = Object.keys(all.places).sort((a,b)=>a.localeCompare(b,undefined,{numeric:true}));
  const t = episode.trace[index] || {};
  document.getElementById('sceneAction').textContent = t.action || 'No action recorded';
  document.getElementById('sceneLocation').textContent = s.location || 'Location not recorded';
  const held = Object.entries(s.objects).filter(([n,o])=>o.location==='inventory');
  document.getElementById('sceneInventory').textContent = held.map(([n])=>n).join(', ') || (s.inventoryKnown?'Empty':'Not recorded');
  const root = document.getElementById('scenePlaces'); root.replaceChildren(); resizeSceneGraph();
  if (!Object.keys(s.places).length) {
    root.textContent = 'No scene observations recorded.';
    document.getElementById('sceneEvidence').textContent = 'Actions and oracle claims alone do not establish scene state.';
    return;
  }
  const ns = 'http://www.w3.org/2000/svg';
  const el = (tag,attrs={},text='') => {
    const n=document.createElementNS(ns,tag);
    for(const [k,v] of Object.entries(attrs)) n.setAttribute(k,v);
    n.textContent=text; return n;
  };
  const rings=Math.max(1,Math.ceil(names.length/12));
  const width=600+(rings-1)*240, height=width, center=width/2;
  const svg=el('svg',{viewBox:`0 0 ${width} ${height}`,role:'group','aria-label':'Observed objects schematic, not physical room positions'});
  const edges=el('g'), nodes=el('g'); svg.append(edges,nodes); root.append(svg);
  const anchors={};
  names.forEach((name,i)=>{
    const ring=Math.floor(i/12), count=Math.min(12,names.length-ring*12);
    const angle=-Math.PI/2+(i%12)*Math.PI*2/count, radius=210+ring*120;
    anchors[name]={x:center+Math.cos(angle)*radius,y:center+Math.sin(angle)*radius};
  });
  const link=(a,b,color='#91a788',dash='')=>edges.append(el('line',{x1:a.x,y1:a.y,x2:b.x,y2:b.y,stroke:color,'stroke-width':2,'stroke-dasharray':dash}));
  function vertex(name,p,kind,fresh,subtitle='') {
    const g=el('g',{'data-node':name,'data-kind':kind,tabindex:'0',role:'img','aria-label':[name,subtitle,fresh?'New or changed this step':''].filter(Boolean).join(' · ')});
    const color=kind==='agent'?'#b8dfce':kind==='place'?'#485e51':'#d6c9e7';
    const radius=kind==='place'?24:kind==='agent'?19:12;
    if(fresh) g.append(el('circle',{cx:p.x,cy:p.y,r:radius+8,fill:'#ffe2ae',stroke:'#f2ca87','stroke-width':2}));
    g.append(el('circle',{cx:p.x,cy:p.y,r:radius,fill:color,stroke:kind==='agent'?'#b8dfce':'#91a788','stroke-width':2}));
    g.append(el('text',{x:p.x,y:p.y+radius+19,'text-anchor':'middle','font-size':18,'font-weight':kind==='object'?400:650,fill:'#f3efdf',stroke:'#192b29','stroke-width':4,'paint-order':'stroke',class:'node-short'},name.replace(/([a-z]{7})[a-z]+/gi,'$1…')));
    g.append(el('text',{x:p.x,y:p.y+radius+19,'text-anchor':'middle','font-size':18,fill:'#f3efdf',stroke:'#192b29','stroke-width':4,'paint-order':'stroke',class:'node-detail'},name));
    if(subtitle) g.append(el('text',{x:p.x,y:p.y+radius+35,'text-anchor':'middle','font-size':14,fill:'#b9c6b7',stroke:'#192b29','stroke-width':3,'paint-order':'stroke',class:'node-detail'},subtitle));
    g.append(el('title',{},[name,subtitle,fresh?'New or changed this step':''].filter(Boolean).join(' · ')));
    for(const label of g.querySelectorAll('text')) label.dataset.baseSize=label.getAttribute('font-size');
    for(const circle of g.querySelectorAll('circle')) circle.dataset.baseRadius=circle.getAttribute('r');
    nodes.append(g);
  }
  const agent={x:center,y:center};
  for(const [name,p] of Object.entries(s.places)) {
    const at=anchors[name];
    const fresh=!previous.places[name]||JSON.stringify(previous.places[name])!==JSON.stringify(p);
    vertex(name,at,'place',fresh,p.door || '');
    const objects=Object.entries(s.objects).filter(([n,o])=>o.location===name && !s.places[n]).sort(([a],[b])=>a.localeCompare(b,undefined,{numeric:true}));
    objects.forEach(([n,o],i)=>{
      const ring=Math.floor(i/10), count=Math.min(10,objects.length-ring*10);
      const angle=-Math.PI/3+(i%10)/Math.max(1,count-1)*Math.PI*7/6;
      const pos={x:at.x+Math.cos(angle)*(65+ring*30),y:at.y+Math.sin(angle)*(65+ring*30)};
      const changed=JSON.stringify(previous.objects[n])!==JSON.stringify(o);
      link(at,pos,changed?'#f2ca87':'#91a788'); vertex(n,pos,'object',changed,o.tags.join(', '));
    });
  }
  if(anchors[s.location]) link(agent,anchors[s.location],'#b8dfce','5 4');
  vertex('Agent',agent,'agent',s.location!==previous.location);
  held.forEach(([n,o],i)=>{
    const pos={x:agent.x-45+i*90,y:agent.y-70};
    link(agent,pos,'#b8dfce'); vertex(n,pos,'object',JSON.stringify(previous.objects[n])!==JSON.stringify(o),'carried'+(o.tags.length?' · '+o.tags.join(', '):''));
  });
  // Preserve known objects whose current location cannot be reconstructed.
  Object.entries(s.objects).filter(([n,o])=>!o.location).forEach(([n,o],i)=>vertex(n,{x:center-90+(i%4)*60,y:center+70+Math.floor(i/4)*50},'object',false,'Location unknown'));
  resizeSceneGraph();
  document.getElementById('sceneEvidence').textContent = after&&!t.after ? 'After-action observation missing. Showing the last recorded state.' : 'Gold = newly observed or changed this step. Lines connect objects to their last observed location; carried objects connect to the agent. Layout is schematic, not room geometry.';
}
