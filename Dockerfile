FROM node:latest

workdir /app

COPY package.json /app
RUN npm install

COPY . /app
