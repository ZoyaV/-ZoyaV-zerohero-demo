import {openStore} from './shop-world.mjs';
const $ = id => document.getElementById(id);
const desk = $('webshop-desk').parentElement;
const startButton = $('shop-start');
const screens = [...document.querySelectorAll('.webshop-demo .monitor-screen')].map(screen => ({
  page: screen.querySelector('.screen-content'),
  action: screen.querySelector('.screen-action'),
  cursor: screen.querySelector('.shop-cursor'),
}));
for (const {page} of screens) {
  page.addEventListener('error', event => {
    if (event.target instanceof HTMLImageElement) event.target.remove();
  }, true);
}
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const base = new URL('./', import.meta.url);
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let displayedPage = '';
let worker;
let generation = 0;
let decisionQueue = Promise.resolve();

function describe(action) {
  const match = /^(search|click)\[(.*)\]$/is.exec(action);
  if (!match) return action;
  return match[1].toLowerCase() === 'search' ? `Search · ${match[2]}` : `Click · ${match[2]}`;
}

function productImage(url) {
  if (typeof url !== 'string' || !url.startsWith('https://m.media-amazon.com/images/')) return;
  const image = document.createElement('img');
  image.src = url;
  image.alt = '';
  image.referrerPolicy = 'no-referrer';
  return image;
}

function renderPage({observation, product_images: images, product, outcome}) {
  const samePage = observation === displayedPage;
  displayedPage = observation;
  const lines = observation.split(/\s*\[SEP\]\s*|\r?\n/).map(line => line.trim()).filter(Boolean);
  if (outcome === 'checkout' && product) {
    lines.splice(0, lines.length, 'Thank you for shopping with us!', product.title,
      ...Object.entries(product.options).map(([label, value]) => `${label}: ${value}`),
      'Price: ' + product.price);
  }
  const list = document.createElement('ul');
  const hasResults = lines.some(line => /^Page \d+.*Total results/i.test(line));
  for (let index = 0; index < lines.length; index++) {
    const line = lines[index];
    if (line === 'Instruction:') {
      index++;
      continue;
    }
    if (line.startsWith('Instruction:')) continue;
    const item = document.createElement('li');
    item.dataset.shopTarget = line;
    if (hasResults && /^B[0-9A-Z]{9}$/i.test(line) && index + 2 < lines.length) {
      item.dataset.product = '';
      const image = productImage(images[line]);
      if (image) item.append(image);
      const title = document.createElement('strong');
      title.textContent = lines[index + 1];
      const metadata = document.createElement('small');
      metadata.textContent = `${lines[index + 2]} · ${line}`;
      item.append(title, metadata);
      index += 2;
    } else {
      if (product && line === product.title) {
        item.dataset.product = '';
        const image = productImage(images[product.asin]);
        if (image) item.append(image);
      }
      const selected = product && Object.values(product.options).includes(line.toLowerCase());
      item.append(selected ? '✓ ' + line : line);
    }
    list.append(item);
  }
  for (const {page} of screens) {
    const scroll = samePage ? page.scrollTop : 0;
    page.replaceChildren(list.cloneNode(true));
    page.scrollTop = scroll;
  }
}

function showAction(action) {
  if (action) desk.dispatchEvent(new CustomEvent('webshop-action', {detail: action}));
  const click = /^click\[(.*)\]$/i.exec(action || '');
  for (const {page, action: actionLine, cursor} of screens) {
    const candidate = click && [...page.querySelectorAll('[data-shop-target]')]
      .find(item => item.dataset.shopTarget.toLowerCase() === click[1].toLowerCase());
    const target = candidate || actionLine;
    if (candidate) page.scrollTop = Math.max(0, candidate.offsetTop - page.offsetTop - 12);
    const x = target.offsetLeft + Math.min(target.offsetWidth / 2, 35);
    const y = target.offsetTop + target.offsetHeight / 2 - (candidate ? page.scrollTop : 0);
    cursor.hidden = !action;
    cursor.style.transform = `translate(${x}px, ${y}px)`;
  }
}

function status(text) {
  for (const {action} of screens) {
    if (action.textContent !== text) action.textContent = text;
  }
}

function decide(state, history, run) {
  // A manual restart can arrive during inference. Allow that decision to finish
  // before reusing the same model, and discard its action in the old run.
  const result = decisionQueue.then(() => {
    if (run !== generation) return;
    worker ??= new Worker(new URL('model-worker.js', base), {type: 'module'});
    return new Promise((resolve, reject) => {
      const fail = () => {
        worker.terminate();
        worker = undefined;
        reject(new Error('The shopper could not run. Start a new request to retry.'));
      };
      worker.onerror = fail;
      const id = run + '-' + state.turn;
      worker.onmessage = ({data}) => {
        if (data.id !== id) return;
        if (data.error) return fail();
        if (data.progress) {
          if (run === generation && state.turn === 0) status(data.progress);
          return;
        }
        resolve(data.action);
      };
      worker.postMessage({id, model: 'webshop', base: base.href, observation: state.observation, history});
    });
  });
  decisionQueue = result.catch(() => {});
  return result;
}

async function shop() {
  const run = ++generation;
  startButton.disabled = true;
  desk.dataset.running = 'false';
  displayedPage = '';
  for (const {cursor, page} of screens) {
    cursor.hidden = true;
    page.textContent = 'Opening the store…';
  }
  $('shop-instruction').textContent = 'Getting a shopping request…';
  status('Opening the store…');

  try {
    const store = await openStore();
    let state = store.initial;
    if (run !== generation) return;
    const history = [];
    $('shop-instruction').textContent = state.instruction.replace(/^Instruction:\s*/i, '');
    startButton.setAttribute('aria-label', 'New shopping request');
    startButton.title = 'New shopping request';
    startButton.setAttribute('data-started', '');
    startButton.disabled = false;
    desk.dataset.running = 'true';
    renderPage(state);
    while (!state.done) {
      const action = await decide(state, history, run);
      if (run !== generation) return;
      status(describe(action));
      showAction(action);
      history.push({observation: state.observation, action});
      const [next] = await Promise.all([store.step(action), wait(reducedMotion.matches ? 0 : 650)]);
      if (run !== generation) return;
      state = next;
      renderPage(state);
      if (!state.done) await wait(800);
      if (run !== generation) return;
    }
    desk.dataset.running = 'false';
    status(state.outcome === 'checkout'
      ? 'Checked out'
      : 'The shopper reached its turn limit.');
    await wait(3000);
    if (run !== generation) return;
    if (document.hidden) {
      await new Promise(resolve => {
        function resume() {
          if (!document.hidden) {
            document.removeEventListener('visibilitychange', resume);
            resolve();
          }
        }
        document.addEventListener('visibilitychange', resume);
      });
    }
    if (run === generation) void shop();
  } catch (error) {
    if (run !== generation) return;
    desk.dataset.running = 'false';
    status(error instanceof TypeError || error.name === 'TimeoutError'
      ? 'Could not connect to the store. Start a new request to retry.'
      : error.message);
    if (startButton.disabled) {
      $('shop-instruction').textContent = 'Waiting for a shopping request.';
    }
    startButton.disabled = false;
  }
}

const startOnView = new IntersectionObserver(entries => {
  if (entries.some(entry => entry.isIntersecting)) {
    startOnView.disconnect();
    if (generation === 0) void shop();
  }
});
startOnView.observe(desk);
startOnView.observe(document.querySelector('.screen-broadcast'));
startButton.addEventListener('click', () => {
  startOnView.disconnect();
  void shop();
});
