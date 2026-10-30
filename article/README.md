# Research section on the game homepage

Adapted from `codex/project-page` (see `provenance.md`). The opening starts at the dialogue/action question; the TinyStories and MAPF introduction is omitted. The research text, equations, results, and caveats are retained. Recorded videos remain on the original page; the homepage includes the interactive games and six explanatory animations.

Edit `content.html`, `style.css`, or the JSX animation sources here, then run from the repository root:

```sh
node web/game_eval/article/build.mjs
```

The build bundles the animations and updates the marked article sections in `web/game_eval/home.html`. It reuses the existing dependencies in `web/project-page/node_modules`.

`loader.js` starts downloads near the research section. The server's allowlisted `/article-assets` endpoint serves gzip data in ranges of at most 8192 bytes, matching the constrained public tunnel. Player playback pauses offscreen; reduced-motion users start paused and can play explicitly.
