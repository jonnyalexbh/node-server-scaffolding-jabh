# Docker NodeJs Express

### Dockerfile

```sh
FROM node:latest
WORKDIR /usr/src/app
COPY . .
ENV PORT=4000
RUN npm install
EXPOSE $PORT
ENTRYPOINT ["node", "app.js"]
```
### Build app

```sh
$ docker build -t example-docker-nodejs-express .
$ docker run -p 8080:3000 -d --name test-docker example-docker-nodejs-express
$ docker exec -it test-docker bash
```
