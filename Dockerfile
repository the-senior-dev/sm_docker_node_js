# base image that ideally contains node.js on top of linux
FROM node:alpine

WORKDIR /usr/app/api

# copy package.json to the container
COPY ./package.json ./

RUN npm install

COPY ./ ./

EXPOSE 3000

CMD [ "npm", "run", "start" ]