FROM node:20-alpine AS build
WORKDIR /app

ARG VITE_API_URL

ENV VITE_API_URL=$VITE_API_URL

COPY package*.json ./
RUN npm ci --ignore-scripts
COPY . .


RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf


CMD sed -i 's/${PORT}/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'