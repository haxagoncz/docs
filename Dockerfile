FROM node:20-alpine AS build

RUN npm i -g pnpm

WORKDIR /build
COPY package.json /build
RUN pnpm i

ADD . /build/
RUN pnpm run build

FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /build/.vitepress/dist /var/www/docs

EXPOSE 80
