# ZeroHero browser demo

Static website for GitHub Pages. The two small Qwen3 agents run locally using ONNX Runtime Web (WASM, one worker thread, FP32). Three.js renders both worlds. Only the full language-model operator is external. No gameplay Python server is required.

## Run locally

Serve this directory with any static HTTP server. Open index.html. A file:// URL will not work for model loading. Click Play on either game. Models load on demand.

The operator button switches between the real language model and human replies. Operator connection changes the public HTTPS endpoint; never enter an upstream API key there.

## Edit

HTML and article assets are at the repository root. Editable JavaScript is in src/. Run npm install, then npm run build. Converted model files and prepared environment data are included. Export tooling and full Python evaluation remain in the original research repository.

## Verification

verify.html compares six real browser-generated token sequences with frozen PyTorch references. ALFWorld executes 2,808 original compiled task operators and its original text grammar; 257 control states were compared with TextWorld. Craftax supports navigation on three prepared arenas, four moves, NOOP, questions, and a hidden-cell goal; 1,885 single-step transitions were exported from the original environment. This is not a full Craftax survival simulator or a replacement research benchmark.

## Operator hosting

site-config.json contains only a public endpoint. operator/ contains a bounded proxy for an OpenAI-compatible language-model service: fixed model/system prompts, origin allowlist, request-size/rate/concurrency limits, and server-side credentials. The current demonstration endpoint uses a temporary Cloudflare Quick Tunnel to the existing operator connection. It requires the operator host and tunnel to stay running; it is not a permanent production endpoint. Replace operatorURL with a durable deployment when available.

Node: OPERATOR_BASE_URL, OPERATOR_MODEL, OPERATOR_API_KEY, OPERATOR_ORIGINS and PORT configure node operator/serve-operator.mjs. Defaults connect to the existing loopback operator port.

Cloudflare Worker: deploy operator/operator-worker.mjs and set OPERATOR_BASE_URL, OPERATOR_MODEL, ALLOWED_ORIGIN as variables and OPERATOR_API_KEY as a secret. Never commit .env or .dev.vars. Worker in-memory rate limits are per isolate; use platform-wide rate limiting for production.

Public client-side environment state includes the hidden goal for the viewer/operator; the acting model receives only the protocol's public prompt. Model success is not guaranteed.
