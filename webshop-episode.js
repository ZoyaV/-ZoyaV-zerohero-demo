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

function element(tag, className, text) {
  const node = document.createElement(tag);
  node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function target(node, value) {
  node.dataset.shopTarget = value;
  return node;
}

const dollars = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

function productCard(product, result = false) {
  const card = element(result ? 'li' : 'div', 'shop-product');
  if (result) target(card, product.asin);
  const thumb = element('span', 'shop-thumb');
  thumb.setAttribute('aria-hidden', 'true');
  thumb.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><path d="m3 7 9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10M7.5 5l9 4"/></svg>';
  if (product.image?.startsWith('https://m.media-amazon.com/images/')) {
    const image = document.createElement('img');
    image.src = product.image;
    image.alt = '';
    image.referrerPolicy = 'no-referrer';
    thumb.append(image);
  }
  const summary = element('div', 'shop-summary');
  const price = product.Price.replace(/\$([\d.]+)/g, (_, amount) => dollars.format(Number(amount)));
  summary.append(element('strong', 'shop-name', product.Title), element('span', 'shop-price', price));
  card.append(thumb, summary);
  return card;
}

function navigation(links) {
  const nav = element('div', 'shop-nav');
  for (const [action, label] of links) nav.append(target(element('span', 'shop-link', label), action));
  return nav;
}

const backToSearch = ['Back to Search', 'New search'];
const sections = ['Description', 'Features', 'Reviews', 'Attributes'];

function renderPage(state) {
  const {mode, query, item, selected, outcome} = state;
  const view = element('div', 'shop-view');
  view.dataset.mode = outcome === 'checkout' ? outcome : mode;
  if (view.dataset.mode === 'checkout') {
    view.append(element('h4', 'shop-heading', 'Order placed'), productCard(item));
    const facts = element('dl', 'shop-facts');
    for (const [name, value] of Object.entries(selected)) {
      facts.append(element('dt', 'shop-label', name), element('dd', 'shop-value', value));
    }
    view.append(facts);
  } else if (mode === 'search' || mode === 'results') {
    view.append(element('h4', 'shop-heading', mode === 'search' ? 'Search the store' : 'Search results'));
    const searchBox = element('div', 'shop-search', query || 'Search products');
    if (mode === 'search') target(searchBox, 'Search');
    view.append(searchBox);
    if (mode === 'results') {
      const pageCount = Math.ceil(state.total / 10);
      const meta = 'Total results · ' + state.total + (pageCount ? '   /   Page ' + (state.page + 1) + ' of ' + pageCount : '');
      view.append(element('p', 'shop-label', meta));
      const products = element('ul', 'shop-products');
      for (const product of state.results) products.append(productCard(product, true));
      view.append(products);
      const links = [backToSearch];
      if (state.page) links.push(['< Prev', 'Previous page']);
      if (state.page + 1 < pageCount) links.push(['Next >', 'Next page']);
      view.append(navigation(links));
    }
  } else {
    view.append(productCard(item));
    if (mode === 'product') {
      for (const [name, values] of Object.entries(item.options)) {
        const group = element('div', 'shop-options');
        group.append(element('h4', 'shop-label', name));
        const choices = element('div', 'shop-values');
        for (const value of values) {
          const active = selected[name] === value;
          const chip = target(element('span', 'shop-chip', (active ? '✓ ' : '') + value), value);
          chip.toggleAttribute('data-selected', active);
          choices.append(chip);
        }
        group.append(choices);
        view.append(group);
      }
      view.append(target(element('span', 'shop-buy', 'Buy now'), 'Buy Now'));
      view.append(navigation(sections.map(label => [label, label])));
    } else {
      const heading = sections.find(label => label.toLowerCase() === mode);
      view.append(element('h4', 'shop-heading', heading));
      const details = {description:[item.Description], features:item.BulletPoints,
        attributes:item.Attributes, reviews:[]}[mode].filter(Boolean);
      for (const line of details) view.append(element('p', 'shop-detail', line));
      if (!details.length) view.append(element('p', 'shop-detail', 'No ' + mode + ' available.'));
    }
    view.append(navigation([['< Prev', mode === 'product' ? 'Back to results' : 'Back to product'], backToSearch]));
  }

  for (const {page, cursor} of screens) {
    const scroll = state.observation === displayedPage ? page.scrollTop : 0;
    page.replaceChildren(view.cloneNode(true));
    page.scrollTop = scroll;
    cursor.hidden = true;
  }
  displayedPage = state.observation;
}

function showAction(action, state) {
  if (action) desk.dispatchEvent(new CustomEvent('webshop-action', {detail: action}));
  const match = /^(click|search)\[(.*)\]$/is.exec(action || '');
  const searching = match?.[1].toLowerCase() === 'search';
  const value = match?.[2].trim() || '';
  const key = searching ? 'search' : value.toLowerCase();
  const option = Object.entries(state.item?.options || {}).find(([, values]) =>
    values.some(option => option.toLowerCase() === key));
  const result = state.results.find(item => item.asin.toLowerCase() === key);
  let label = 'Choosing a store action';
  if (searching) label = 'Searching the catalogue';
  else if (option) label = 'Choosing ' + option[0] + ' · ' + value;
  else if (result) label = 'Opening product';
  else if (key === 'buy now') label = 'Placing order';
  else if (sections.some(section => section.toLowerCase() === key)) label = 'Reading ' + key;
  else if (key === 'back to search') label = 'Returning to search';
  else if (key === '< prev') label = 'Going back';
  else if (key === 'next >') label = 'Opening next page';
  let found = false;
  for (const {page, cursor} of screens) {
    const candidate = value && (searching || key !== 'search') && [...page.querySelectorAll('[data-shop-target]')]
      .find(node => node.dataset.shopTarget.toLowerCase() === key);
    cursor.hidden = !candidate;
    if (!candidate) continue;
    found = true;
    if (searching) candidate.textContent = value;
    candidate.setAttribute('data-current', '');

    // Layout offsets stay in screen pixels even inside the transformed desk monitor.
    let left = 0, top = 0;
    for (let node = candidate; node && node !== page; node = node.offsetParent) {
      left += node.offsetLeft;
      top += node.offsetTop;
    }
    if (top < page.scrollTop || candidate.offsetHeight >= page.clientHeight) page.scrollTop = top - 6;
    else if (top + candidate.offsetHeight > page.scrollTop + page.clientHeight) {
      page.scrollTop = Math.max(top - page.clientHeight + candidate.offsetHeight + 6, 0);
    }
    const x = page.offsetLeft + left + Math.min(candidate.offsetWidth / 2, 16);
    const y = page.offsetTop + top - page.scrollTop + Math.min(candidate.offsetHeight / 2, 14);
    cursor.style.transform = `translate(${x}px, ${y}px)`;
  }
  status(found ? label : searching ? 'Search unavailable on this page' : 'Action unavailable on this page');
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
      showAction(action, state);
      history.push({observation: state.observation, action});
      const [next] = await Promise.all([store.step(action), wait(reducedMotion.matches ? 0 : 650)]);
      if (run !== generation) return;
      state = next;
      renderPage(state);
      if (!state.done) {
        status({search:'Preparing a search', results:'Reviewing search results',
          product:'Reviewing product'}[state.mode] || 'Reading ' + state.mode);
        await wait(800);
      }
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
