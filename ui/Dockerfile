FROM node:10.15.0

ENV REFRESHED_AT 2020-04-23

WORKDIR /ui

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]