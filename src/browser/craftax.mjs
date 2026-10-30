export class Craftax {
 constructor(worlds){this.worlds=worlds;this.index=-1;this.reset();}
 reset(){this.index=(this.index+1)%this.worlds.length;this.world=this.worlds[this.index];this.position=[...this.world.start];this.direction=this.world.direction;this.dialogue=[];this.turns=0;this.pickTarget();}
 pickTarget(){
  const reachable=new Set([this.position.join(',')]),queue=[[...this.position]];
  for(const [y,x] of queue)for(const name of ['LEFT','RIGHT','UP','DOWN']){const p=this.world.transitions[`${y},${x},${name}`]?.[0];if(p&&!reachable.has(p.join(','))){reachable.add(p.join(','));queue.push(p);}}
  const choices=queue.filter(p=>p.join(',')!==this.position.join(','));
  this.target=[...choices[Math.floor(Math.random()*choices.length)]];
 }
 step(action){
  const [y,x]=this.position,entry=this.world.transitions[`${y},${x},${action}`];
  if(!entry)throw Error('Unsupported navigation action');
  const delta={LEFT:[0,-1],RIGHT:[0,1],UP:[-1,0],DOWN:[1,0]}[action];
  const [y0,x0,y1,x1]=this.world.bounds;
  const clamped=!delta||y+delta[0]<y0||y+delta[0]>=y1||x+delta[1]<x0||x+delta[1]>=x1;
  this.position=[...entry[0]];if(!clamped)this.direction=entry[1];this.turns++;
 }
 get won(){return this.position.join(',')===this.target.join(',');}
 prompt(){
  const observation=this.world.observations[`${this.position.join(',')},${this.direction}`];
  if(!observation)throw Error('Position outside prepared navigation arena');
  const history=this.dialogue.slice(-2).map(([q,a])=>`Agent asked: ${q}\nOperator answered: ${a}`).join('\n')||'none';
  return `<|user|>\nGoal: ${this.world.goal}\n\n${observation}\n\nMessage history:\n${history}\n<|assistant|>\n`;
 }
 operatorContext(question){
  const queue=[[...this.position]],visited=new Set([this.position.join(',')]),parent=new Map();
  for(const p of queue){if(p.join(',')===this.target.join(','))break;for(const name of ['LEFT','RIGHT','UP','DOWN']){const next=this.world.transitions[`${p.join(',')},${name}`]?.[0];if(next&&!visited.has(next.join(','))){visited.add(next.join(','));parent.set(next.join(','),[p,name]);queue.push(next);}}}
  const route=[];let p=this.target;while(parent.has(p.join(','))){const [prev,action]=parent.get(p.join(','));route.unshift({from:prev,to:p,action});p=prev;}
  return {question,position:this.position,target:this.target,map:this.world.map,route,observation:this.prompt(),conversation:this.dialogue};
 }
}
