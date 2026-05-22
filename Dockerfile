ARG NODE_IMAGE=public.ecr.aws/docker/library/node:20-bookworm-slim

FROM ${NODE_IMAGE} AS devbox
WORKDIR /app

ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN corepack enable && corepack prepare pnpm@10.12.1 --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --store-dir /pnpm/store

ENV NODE_ENV=production

EXPOSE 3000

CMD ["sh", "-c", "pnpm build && pnpm start"]
