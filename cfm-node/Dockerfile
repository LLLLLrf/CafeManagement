FROM node:16

WORKDIR /cfm-node
COPY package.json .
RUN npm install
COPY . .
CMD npm start