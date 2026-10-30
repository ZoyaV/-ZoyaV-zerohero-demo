// Match zero_hero.worlds.zerohero.parser.xml, including action: precedence.
export function parseOriginal(text){
 const hit=text.match(/\baction\s*:\s*(.+)$/im);if(!hit)return null;
 const raw=hit[1].trim().split(/[\n|<]/,1)[0].trim(),parts=raw.split(/\s+/);
 if(parts.length>=2&&parts.every(p=>p.length===1)&&/^[a-z_]+$/i.test(parts.join('')))return parts.join('').toUpperCase();
 const value=raw.replace(/\s+/g,' ').trim();if(!value)return null;
 return /^[a-z_]+$/i.test(value)?value.toUpperCase():value;
}
export function parseCraftax(text){
 const original=parseOriginal(text);if(original!==null)return original;
 const questions=[...text.matchAll(/<question>\s*([^<]*?)\s*<\/question>/gis)].map(m=>m[1].replace(/\s+/g,' ').trim()).filter(Boolean);
 for(const match of [...text.matchAll(/<action>\s*([^<]*?)\s*<\/action>/gis)].reverse()){
  const action=parseOriginal('action: '+match[1].replace(/\s+/g,' ').trim());
  if(action)return action==='ASK_OPERATOR'&&questions.length?'ask '+questions.at(-1):action;
 }
 if(questions.length){const q=questions.at(-1);return /^ask\b/i.test(q)?q:'ask '+q;}
 return null;
}
