const game = document.querySelector('#survive');
const field = game.querySelector('.survive-field img');
const focus = game.querySelector('.survive-focus img');
const thought = game.querySelector('.survive-thought p');
const action = game.querySelector('.survive-action');
const tally = game.querySelector('.survive-count');
const achievements = game.querySelector('.survive-medals');
const inventory = game.querySelector('.survive-items');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
let visible = false;
let pending = false;
let timer;
let wordsTimer;
let shown = '';

function icon(name) {
  const img = document.createElement('img');
  img.src = 'article/crafter-icons/' + name + '.png';
  img.alt = '';
  return img;
}
function human(name) { return name.replaceAll('_', ' '); }

function render(frame) {
  const key = frame.episode + '/' + frame.turn;
  if (key === shown) return;
  shown = key;
  field.src = frame.image;
  focus.src = frame.focus;
  field.hidden = focus.hidden = false;
  const medals = Object.entries(frame.achievements);
  tally.textContent = medals.filter(([, count]) => count > 0).length + ' / ' + medals.length;
  achievements.replaceChildren(...medals.map(([name, count]) => {
    const medal = document.createElement('li');
    const sprite = name.replace(/^(collect|eat|make|place|defeat)_/, '').replace('wake_up', 'player-sleep');
    const label = human(name) + (count ? ' · earned' : ' · locked');
    medal.title = label;
    medal.setAttribute('aria-label', label);
    medal.classList.toggle('earned', Boolean(count));
    medal.append(icon(sprite));
    return medal;
  }));
  inventory.replaceChildren(...Object.entries(frame.inventory).map(([name, count]) => {
    const item = document.createElement('li');
    item.title = human(name) + ' · ' + count;
    item.setAttribute('aria-label', item.title);
    item.classList.toggle('empty', !count);
    item.append(icon(name), String(count));
    return item;
  }));
  action.textContent = 'Turn ' + frame.turn + ' · ' + frame.action;
  clearInterval(wordsTimer);
  const words = frame.reasoning.split(/\s+/).filter(Boolean);
  thought.textContent = reduceMotion.matches ? frame.reasoning : '';
  thought.scrollTop = 0;
  if (!reduceMotion.matches && words.length) {
    let index = 0;
    wordsTimer = setInterval(() => {
      thought.append((index ? ' ' : '') + words[index++]);
      thought.scrollTop = thought.scrollHeight;
      if (index === words.length) clearInterval(wordsTimer);
    }, Math.min(43, 1600 / words.length));
  }
}
let worker;
function poll() {
  if (pending || !visible || document.hidden) return;
  if (!worker) {
    action.textContent = 'Loading the world on this device…';
    worker = new Worker(new URL('survive-worker.js', import.meta.url), {type:'module'});
    worker.onmessage = ({data}) => {
      if (data.status) { action.textContent = data.status; return; }
      pending = false;
      if (data.error) { action.textContent = 'Could not run the visual policy. Reload to retry.'; console.error(data.error); return; }
      render(data.frame);
      timer = setTimeout(poll, 2000);
    };
    worker.onerror = () => { pending = false; action.textContent = 'Could not load the visual policy. Reload to retry.'; };
  }
  pending = true;
  worker.postMessage('step');
}
function refresh() { clearTimeout(timer); void poll(); }
new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; refresh(); }).observe(game);
document.addEventListener('visibilitychange', refresh);
