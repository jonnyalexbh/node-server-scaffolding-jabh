# Docker NodeJs PostgreSQL

### Create the Dockerfile

```yml
FROM node:12.18.1
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 3000
CMD ./scripts/start.sh
```
### Run docker-compose

```sh
$ docker-compose up
$ docker-compose up --build
$ docker-compose down
```
