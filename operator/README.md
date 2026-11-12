---
title: ZeroHero operator
emoji: 🧭
colorFrom: green
colorTo: purple
sdk: docker
app_port: 7860
pinned: false
---

Operator proxy for the [ZeroHero browser demo](https://zoyav.github.io/-ZoyaV-zerohero-demo/).
It accepts only `POST /reply` from `https://zoyav.github.io`, adds a fixed system prompt
and calls `Qwen/Qwen3.8-Flash-Next-FP8` through Hugging Face Inference Providers.

Set the Hugging Face token as the Space secret `OPERATOR_API_KEY`
(Settings → Variables and secrets). The token needs only the
"Make calls to Inference Providers" permission. Never commit it.
