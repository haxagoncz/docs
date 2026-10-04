FROM node:20-alpine AS build

RUN npm i -g pnpm@10

WORKDIR /build

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /build/.vitepress/dist /var/www/docs

EXPOSE 80
