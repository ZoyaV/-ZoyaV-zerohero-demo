FROM node:22-slim
WORKDIR /app
COPY operator-proxy.mjs serve-operator.mjs ./
ENV HOST=0.0.0.0 \
    PORT=7860 \
    OPERATOR_BASE_URL=https://router.huggingface.co/v1/ \
    OPERATOR_MODEL=Qwen/Qwen3.8-Flash-Next-FP8 \
    OPERATOR_ORIGINS=https://zoyav.github.io
USER node
CMD ["node", "serve-operator.mjs"]
