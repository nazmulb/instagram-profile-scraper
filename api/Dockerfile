FROM node:10.15.0

ENV REFRESHED_AT 2020-04-23

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]