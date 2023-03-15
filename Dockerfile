# syntax=docker/dockerfile:1

FROM node:14.17.1

WORKDIR /app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn install

COPY . .

CMD ["yarn", "dev"]
