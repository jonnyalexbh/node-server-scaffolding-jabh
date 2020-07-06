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
### Run docker-compose

```sh
$ docker-compose up
```
