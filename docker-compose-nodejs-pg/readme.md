# Docker NodeJs MySQL

### Create the Dockerfile

```yml
FROM node:12.18.1
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000
ENTRYPOINT ["node", "app.js"]
```
### Run and test your image in a container

```sh
$ docker build -t nodejs-mysql-jabh .
$ docker run -p 8080:4000 -d --name test-node-mysql nodejs-mysql-jabh
$ docker exec -it test-docker bash
```
