ARG NODE_IMAGE=public.ecr.aws/docker/library/node:20-bookworm-slim

FROM ${NODE_IMAGE} AS devbox
WORKDIR /app

ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME=0.0.0.0
ENV PORT=3000

RUN corepack enable && corepack prepare pnpm@10.12.1 --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

EXPOSE 3000

CMD ["pnpm", "exec", "next", "dev", "-H", "0.0.0.0", "-p", "3000"]
