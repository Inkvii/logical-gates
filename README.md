This is a [Next.js](https://nextjs.org/) project bootstrapped with [
`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Installation

```shell
pnpm install
```

Create `.env.local` and fill missing values in `.env`. If you want to use docker image, create also `env.docker` which will most likely copy
`env.local` with slight changes if necessary (for proper docker orchestration).

Run postgres image and run all scripts in `./deploy-manual/*.sql` to setup the database.


