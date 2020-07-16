FROM node:latest AS builder

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM nginx:latest AS app

COPY --from=builder /app/build/ /usr/share/nginx/html
