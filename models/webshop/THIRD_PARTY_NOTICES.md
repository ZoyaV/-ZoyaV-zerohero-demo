# Third-party components

The model weights and ZeroHero inference examples are released under Apache-2.0.
Dependencies are installed separately and retain their original licenses:
License notices for the public benchmark fixtures and instruction text are
preserved in `third_party/`.

- Transformers: https://github.com/huggingface/transformers (Apache-2.0).
- Crafter: https://github.com/danijar/crafter (MIT).
- BALROG: https://github.com/balrog-ai/BALROG (MIT); supplies the text observation/instruction format.
- WebShop: https://github.com/princeton-nlp/WebShop (MIT); public shopping observations.
- verl-agent: https://github.com/langfengQ/verl-agent (Apache-2.0); WebShop-Small setup reference.
- ALFWorld: https://github.com/alfworld/alfworld (MIT); public household observations.

No pretrained third-party model weights or complete environment datasets are
included. The screenshot fixture is rendered with stock Crafter. Text fixtures
are public environment observations, without hidden goals, credentials, or
private filesystem paths.
