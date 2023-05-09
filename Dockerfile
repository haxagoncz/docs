FROM node:20-alpine as build

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
