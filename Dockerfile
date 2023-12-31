FROM node:20-alpine3.17

WORKDIR /app

COPY package*.json ./


RUN npm install

COPY . .

RUN npm run build

COPY ./src/data/*.json ./dist/src/data/

EXPOSE 4000

CMD [ "node", "./dist/src/server.js"]
