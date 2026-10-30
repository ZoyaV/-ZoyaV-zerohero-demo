import {createKitchen} from './alfred-scene.js';
import {chatMessages,sceneAction} from './alfred-actions.mjs?v=20261030-repeats';
import {fitCamera} from './camera-crop.mjs';
import {setupChatResize} from './chat-resize.mjs';
const $ = (id) => document.getElementById(id);
let previous;
let previousDialogue;
let spectatorExpanded = false;
let cameraSnapshot;
let kitchen;
function kitchenView(snapshot){
  if(!kitchen){
    kitchen=createKitchen($('kitchen'),$('spectator-toggle'),$('spectator-hint'));
    $('spectator-preview').hidden=true;$('spectator-unavailable').hidden=true;
    $('spectator-hint').hidden=false;
  }
  $('spectator-toggle').disabled=false;
  $('spectator-unavailable').hidden=true;$('spectator-hint').hidden=false;
  $('kitchen').hidden=false;$('empty').hidden=true;
  $('frame').hidden=$('spectator-frame').hidden=true;
  kitchen.update(snapshot);
}
function showCamera(snapshot = cameraSnapshot) {
  cameraSnapshot = snapshot;
  const available = Boolean(snapshot?.spectator_image);
  if (!available) spectatorExpanded = false;
  $('spectator-toggle').disabled = !available;
  $('spectator-toggle').setAttribute('aria-pressed', String(spectatorExpanded));
  $('spectator-toggle').setAttribute('aria-label', spectatorExpanded ? 'Return to agent camera' : 'Expand spectator camera');
  $('spectator-unavailable').hidden = available;
  $('spectator-preview').hidden = !available;
  $('spectator-frame').hidden = !spectatorExpanded;
  $('spectator-hint').textContent = spectatorExpanded ? 'Double-click: agent view' : 'Double-click: room view';
  $('spectator-hint').hidden = !available;
  if (available) {
    $('spectator-preview').src = spectatorExpanded ? snapshot.image : snapshot.spectator_image;
    $('spectator-preview').alt = spectatorExpanded ? 'Agent camera view' : 'Room overview';
    $('spectator-frame').src = snapshot.spectator_image;
    fitCameras();
  }
}
function fitCameras() {
  const agentFocus=cameraSnapshot?.image_focus || [.5,.7];
  fitCamera($('frame'),agentFocus);
  fitCamera($('spectator-frame'),[.5,.5]);
  fitCamera($('spectator-preview'),spectatorExpanded?agentFocus:[.5,.5]);
}
for (const id of ['frame','spectator-frame','spectator-preview']) $(id).addEventListener('load',fitCameras);
new ResizeObserver(fitCameras).observe(document.querySelector('.stage'));
function toggleSpectator() {
  if (!cameraSnapshot?.spectator_image) return;
  spectatorExpanded = !spectatorExpanded;
  showCamera();
}
$('spectator-toggle').ondblclick = toggleSpectator;
$('spectator-toggle').onclick = event => { if (event.detail === 0) toggleSpectator(); };
$('spectator-frame').ondblclick = toggleSpectator;
function draw(snapshot) {
  const key = JSON.stringify(snapshot);
  if (key === previous) return;
  if(snapshot.renderer==='three-textworld')kitchenView(snapshot);
  else showCamera(snapshot);
  const actionText=sceneAction(snapshot);
  $('action-overlay').textContent=actionText;
  $('action-overlay').hidden=true;
  if(snapshot.renderer!=='three-textworld'){$('frame').src=snapshot.image;$('frame').hidden=false;}
  $('empty').hidden = true;
  if (snapshot.renderer!=='three-textworld' && snapshot.trace?.length) drawSchematic({trace: snapshot.trace}, snapshot.trace.length-1);
  $('location').textContent=snapshot.agent?.location||'Room overview';
  $('request').textContent = snapshot.request || 'The agent’s task will appear here when the episode starts.';
  $('objects').replaceChildren();
  for (const obj of snapshot.objects) {
    const row = document.createElement('tr');
    for (const text of [obj.id, JSON.stringify(obj.properties)]) {
      const cell = document.createElement('td'); cell.textContent = text; row.append(cell);
    }
    $('objects').append(row);
  }
  const messages = chatMessages(snapshot);
  const dialogueKey = JSON.stringify(messages);
  if (dialogueKey !== previousDialogue) {
    const body = document.querySelector('.chat-body');
    const followLatest = body.scrollHeight - body.scrollTop - body.clientHeight < 32;
    const scrollTop = body.scrollTop;
    $('chat').replaceChildren();
    $('nochat').hidden = messages.length > 0;
    for (const message of messages) {
      const li = document.createElement('li'); li.className = message.role;
      li.textContent = message.role === 'action' ? message.text : `${message.role === 'agent' ? 'Agent' : 'Operator'}: ${message.text}`;
      if (message.count>1) {
        const count=document.createElement('span'); count.className='action-count';
        count.textContent=`×${message.count}`;
        count.setAttribute('aria-label',`${message.count} unsuccessful attempts`);
        li.append(count);
      }
      $('chat').append(li);
    }
    body.scrollTop = followLatest ? body.scrollHeight : scrollTop;
    previousDialogue = dialogueKey;
  }
  previous=key;
}
let state, resetting=false, resetEpoch=0;
function resetView() {
  previous=previousDialogue=undefined;
  $('chat').replaceChildren();$('nochat').hidden=false;$('answer').value='';
  $('scenePlaces').replaceChildren();$('objects').replaceChildren();
  $('action-overlay').hidden=true;$('frame').hidden=true;$('empty').hidden=false;
  $('request').textContent='The agent’s task will appear here when the episode starts.';
  showCamera({});
}
async function command(action, body = {}) {
  $('error').textContent = '';
  try {
    const response = await fetch(`/api/alfred/${action}`, {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(body)});
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Could not update the game');
    if(action==='reset'||action==='run') resetView();
    update(data);
  } catch(error) { $('error').textContent = error.message; }
}
function update(data) {
 if(data.demo||document.documentElement?.dataset?.demo==='true') queueMicrotask(()=>{for(const id of ['play', 'coin', 'reset-game']) {const button=$(id);button.disabled=true;button.title='Shared live demo — AI controls the game. Manual controls are temporarily unavailable.';button.setAttribute('aria-describedby','demo-hint');} $('demo-hint').hidden=false;});

  if(data.run_id && state?.run_id && data.run_id!==state.run_id) resetView();
  state = data;
  kitchen?.setPaused(data.state==='paused');
  $('play').textContent = data.state === 'running' ? 'Ⅱ' : '▶';
  const playLabel = data.state === 'running' ? 'Pause game' : data.state === 'paused' ? 'Resume game' : 'Start game';
  $('play').setAttribute('aria-label', playLabel); $('play').title = playLabel;
  $('coin').textContent = data.operator === 'human' ? 'Human' : 'AI';
  $('coin').setAttribute('aria-label', data.operator === 'human' ? 'Operator: human. Switch to AI' : 'Operator: AI. Switch to human');
  $('coin').setAttribute('aria-pressed', String(data.operator === 'ai'));
  const pending = data.snapshot?.pending;
  $('reply').hidden = false;
  const canReply = data.state === 'running' && data.operator === 'human' && pending?.awaiting_human && !data.answer_submitted;
  $('answer').disabled = !canReply;
  $('send').disabled = !canReply;
  $('answer').placeholder = data.operator === 'ai' ? (canReply?'Reply to the agent…':pending?.awaiting_human?'AI is replying…':'Wait for a question…') : data.state === 'paused' ? 'Game paused' : canReply ? 'Reply to the agent…' : 'Wait for a question…';
  $('question').textContent = pending?.question || '';
  $('waiting').textContent = pending?.awaiting_human ? (data.answer_submitted ? 'Reply accepted.' : data.operator === 'ai' ? (pending.recommendation_state === 'error' ? 'AI did not respond. Switch to Human.' : 'Waiting for AI…') : 'Waiting for your reply.') : '';
  if (data.state === 'idle') $('status').textContent = 'Ready to start';
  if (data.state === 'running') $('status').textContent = data.loading || (data.snapshot ? `Playing · turn ${data.snapshot.step}` : 'Loading the environment and model…');
  if (data.state === 'paused') $('status').textContent = 'Game paused';
  if (data.state === 'done') $('status').textContent = data.snapshot?.success ? 'Episode finished: objective completed.' : 'Episode finished: turn limit reached.';
  if (data.snapshot) draw(data.snapshot);
  $('error').textContent = data.error || '';
}
$('reset-game').onclick = async () => {
  if(resetting) return;
  resetting=true;resetEpoch++;$('reset-game').disabled=$('play').disabled=true;
  try { await command('reset'); }
  finally { resetting=false;$('reset-game').disabled=$('play').disabled=false; }
};
$('play').onclick = () => command(state?.state === 'running' ? 'pause' : state?.state === 'paused' ? 'resume' : 'run');
$('coin').onclick = () => command('operator', {operator:state.operator === 'human' ? 'ai' : 'human', operator_revision:state.operator_revision});
$('reply').onsubmit = async event => {
  event.preventDefault();
  const question_id = state?.snapshot?.pending?.question_id;
  await command('answer', {question_id, text:$('answer').value, operator_revision:state.operator_revision});
  if (state.answer_submitted) $('answer').value = '';
};
$('sceneZoom').oninput = () => resizeSceneGraph();
window.addEventListener('resize', resizeSceneGraph);
async function poll() {
  try {
    if(resetting) return;
    const epoch=resetEpoch;
    const response = await fetch('/api/alfred/status', {cache:'no-store',signal:AbortSignal.timeout(10000)});
    if (!response.ok) throw new Error('Cannot connect to the game server');
    const data=await response.json();
    if(epoch===resetEpoch) update(data);
  } catch (error) { $('error').textContent = error.message; }
  finally { setTimeout(poll, 700); }
}
setupChatResize(document.querySelector('.content'),$('chat-divider'),$('chat-resize'),'zerohero-alfred-chat-width',resizeSceneGraph);
fetch('/alfred-initial.json').then(r=>{if(!r.ok)throw Error('Preview unavailable');return r.json();}).then(s=>{if(!previous)kitchenView(s);}).catch(error=>{$('error').textContent=error.message;});
poll();
