# Docker NodeJs Express

### Dockerfile

```sh
FROM node:latest

# specifies the application directory
WORKDIR /home/node/app

# copying package.json file to the /home/node/app directory
COPY package.json .
COPY package-lock.json .

# copying rest of the application to /home/node/app directory
COPY . .

# installing npm
RUN npm install

EXPOSE 4000

CMD [ "npm", "run", "start:dev" ]
```

### docker-compose.yml

```sh
version: '3'

services:
  app-nodejs:
    build: .
    environment:
      PORT: 4000
    container_name: nodejs-express
    ports:
      - "8080:4000"
    volumes:
      - ./:/home/node/app
      - /usr/src/app/node_modules
```
