FROM node:6.11.3

RUN mkdir -p /usr/src/raspserver
RUN mkdir -p /usr/src/raspserver/client
RUN mkdir -p /usr/src/raspserver/server
WORKDIR /usr/src/raspserver

COPY package.json /usr/src/raspserver
COPY client/package.json /usr/src/raspserver/client
COPY server/package.json /usr/src/raspserver/server
RUN npm run setup

COPY . /usr/src/raspserver

EXPOSE 3000

CMD [ "npm", "start" ]