// The trace supplies action/question ordering; conversation-only snapshots still work.
export function chatMessages(snapshot) {
  if (!snapshot.trace?.some(turn=>turn.action)) return snapshot.dialogue || [];
  const messages=[];
  let repeat;
  snapshot.trace.forEach((turn,index)=>{
    if (!turn.action) { repeat=null; return; }
    if (turn.action.startsWith('ask ') && !turn.result) {
      repeat=null;
      messages.push({role:'agent',text:turn.action.slice(4)});
      if (turn.answer) messages.push({role:'operator',text:turn.answer});
      return;
    }
    const failure=turn.result || (turn.success===false || /^Nothing happens[.!]?/i.test(turn.after || '') ? 'no_effect' : null);
    if (failure && repeat?.action===turn.action && repeat.failure===failure) {
      repeat.message.count=(repeat.message.count || 1)+1;
      return;
    }
    const result={inadmissible:'Not allowed',budget_exhausted:'Question limit reached',unparseable:'Unrecognized action',no_effect:'No effect'}[failure];
    const message={role:'action',text:`Turn ${index} · ${turn.action}${result?` · ${result}`:''}`};
    messages.push(message);
    repeat=failure?{action:turn.action,failure,message}:null;
  });
  return messages;
}
export function sceneAction(snapshot) {
  const action=snapshot.trace?.at(-1)?.action || snapshot.action || '';
  return !action.startsWith('ask ') && action.length<=36 ? action.toUpperCase() : '';
}
