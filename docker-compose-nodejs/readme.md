# Docker NodeJs Express

### Dockerfile

```sh
FROM node:latest
WORKDIR /usr/src/app
COPY . .
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
      - ./:/usr/src/app
      - /usr/src/app/node_modules
```

### Build app

```sh
$ docker-compose up
$ docker-compose up --build

$ docker exec -it test-docker bash
```
