FROM public.ecr.aws/docker/library/node:20-slim AS build
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

COPY . /app
WORKDIR /app

RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run build:all

FROM public.ecr.aws/docker/library/node:20-slim AS runner
COPY --from=build /app/.next/standalone /app

EXPOSE 3000
ENTRYPOINT ["node", "/app/server.js"]