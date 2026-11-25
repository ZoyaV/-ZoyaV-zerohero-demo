// WebShop-Small observation protocol from eteron/ZeroHero-WebShop-10M-PPO-RA.
export function webshopInputs(tokenizer, protocol, observation, history = []) {
  const encode = prompt => tokenizer(prompt, {add_special_tokens: false, truncation: false});
  const recent = history.slice(-protocol.history);
  const render = page => {
    const parts = [protocol.instructions, '\nRecent history:'];
    for (const turn of recent) parts.push('Observation: ' + turn.observation, 'Action: ' + turn.action);
    return [...parts, '\nCurrent observation:', page, '\nResponse:\n'].join('\n');
  };
  const reserve = protocol.max_new_tokens;
  const budget = protocol.context_tokens - reserve;
  let tokens = encode(render(observation));
  while (tokens.input_ids.size > budget && recent.length) {
    recent.shift();
    tokens = encode(render(observation));
  }
  if (tokens.input_ids.size < protocol.context_tokens) {
    return {tokens, maxNew: Math.min(reserve, protocol.context_tokens - tokens.input_ids.size)};
  }

  // The release keeps the instruction plus the head and tail of oversized product pages.
  const originalTokenCount = tokens.input_ids.size;
  const match = /Instruction:\s*\[SEP\].*?\[SEP\]/s.exec(observation);
  const instruction = match ? observation.slice(0, match.index + match[0].length) : '';
  const body = Array.from(observation.slice(instruction.length));
  const marker = '\n[Page text omitted to fit context]\n';
  tokens = encode(render(instruction + marker));
  const minimum = tokens.input_ids.size;
  if (minimum > budget) throw new Error('Shopping instruction exceeds the trained context');
  let keep = Math.min(body.length - 1, Math.max(0,
    Math.floor(body.length * (budget - minimum) / Math.max(1, originalTokenCount - minimum) * .95)));
  for (let attempt = 0; attempt < 16; attempt++) {
    const head = Math.ceil(3 * keep / 4), tail = keep - head;
    const page = instruction + body.slice(0, head).join('') + marker + (tail ? body.slice(-tail).join('') : '');
    const candidate = encode(render(page));
    if (candidate.input_ids.size <= budget) return {tokens: candidate, maxNew: reserve};
    keep = Math.max(0, Math.min(keep - 1, Math.floor(keep * budget / candidate.input_ids.size * .9)));
  }
  return {tokens, maxNew: reserve};
}

export function webshopDecision(text) {
  const action = text.split('ACTION:').at(-1).trim();
  const valid = /^(?:search|click)\[[^\]\n]*\]$/.test(action);
  return {action: valid ? action : 'invalid[]', valid};
}
