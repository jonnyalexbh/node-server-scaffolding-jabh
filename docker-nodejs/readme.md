# Docker NodeJs

### Create the Dockerfile

```yml
FROM node:latest
WORKDIR /usr/src/app
COPY . .
ENV PORT=4000
RUN npm install
EXPOSE $PORT
ENTRYPOINT ["node", "app.js"]
```
### Run and test your image in a container

```sh
$ docker build -t docker-nodejs-jabh .
$ docker run -p 8080:4000 -d --name test-docker docker-nodejs-jabh
$ docker exec -it test-docker bash
```
